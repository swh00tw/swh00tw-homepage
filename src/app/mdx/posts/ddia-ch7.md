---
title: DDIA ch7
description: Transactions
publishedAt: 2024-12-15
tags: 
published: false
coverImgSrc: 
lang:
---
## Preface

### Why Transaction

Lots of things can go wrong
- The DB software might fail at any time (in the middle of operations)
- The app might crash at any time (in the middle of operations)
- Network might disconnect at any time
- Race conditions between clients

### What is transaction

Introduced "transaction"
- Group operations and execute as ONE operation
- ALL pass (then commit) or ALL fail (rollback, abort)
	- Can safely retry

### When transaction

There's tradeoff. No need to use it every time.
There is performance cost if using too frequently.
After this chapter (introducing safety guarantees of transactions), we will have a better sense about when to use it.

### Content

- How things can go wrong
- How to mitigate
	- Different isolation levels
---
## Concept of Transaction

### ACID

Describe fault-tolerance properties of databases
- Atomicity: The transaction should be aborted if something goes wrong, should not commit.
- Consistency: application-specific notion, always in "good state"
- Isolation: 
  Things might go wrong if multiple concurrent transaction.
  The database ensures that when the transactions have committed, the result is the same as if they had run serially (one after another), even though in reality they may have run concurrently
  Also called serializability, which means that each transaction can pretend that it is the only transaction running on the entire database.
  However, to implement full serializability, there's performance cost. Therefore, there are different levels of safety guarantee about isolation.
- Durability: Durability is the promise that once a transaction has committed successfully, any data it has written will not be forgotten, even if there is a hardware fault or the database crashes.

## Single-object and Multi-object operations

Object means rows, documents, records

Email example: Isolation should prevent this issue by ensuring that user 2 sees either both the inserted email and the updated counter, or neither, but not an inconsistent halfway point.

### Multi-object

- SQL's "BEGIN TRANSACTION" and "COMMIT" statement

### Single-object

Atomicity and isolation also apply when a single object is being changed.
- If the network connection is interrupted after the first 10 KB have been sent, does the database store that unparseable 10 KB fragment of JSON?
- If the power fails while the database is in the middle of overwriting the previous value on disk, do you end up with the old and new values spliced together?
- If another client reads that document while the write is in progress, will it see a partially updated value?

It's confusing so storage engines almost provide single-object level isolation and atomicity by default. (Use lock on each object and crash recovery)

When we say transaction, always mean grouping operations on MULTIPLE objects into one execution.

### Should we Retry every time

There are some cases, retry is not needed.

---
## Isolation Levels

What kind of concurrency issues exist, and how to prevent them.
Which isolation level handle which issue.

### Read Committed

The most basic isolation level. Two guarantee
1. When reading from the database, you will only see data that has been committed (no dirty reads).
2. When writing to the database, you will only overwrite data that has been committed (no dirty writes).

Dirty read: read uncommitted data.
Dirty write: overwrite uncommitted data.

Read committed is a popular level. It's the default setting in many DBs.

How to implement
- prevent dirty write. Use row-level lock: hold the locks for many objects until committed
- prevent dirty read. Use row-level lock. However, not work well (performance issue)
	- Remember both the old committed value and the new value set by the transaction that currently hold the lock.

### Repeatable read

Read committed can't prevent non-repeatable read (neither dirty read nor dirty write).
(Alice 2 bank accounts example)

Sometimes, it's okay. Just refresh. But for some use cases, it's not acceptable.
- Backups
- Analytic queries

Solution: Snapshot isolation

- Even if the data is subsequently changed by another transaction, each transaction sees only the old data from that particular point in time.
- Satisfy "readers never block writers, and writers never block readers".
- Use technique MVCC (Multi-version concurrency control)
	- Use "created_by" and "deleted_by" and always increasing transaction id (txid) to represent sort of version.
	- Need garbage collection to remove outdated record.
	- special case: MVCC for two version (not-yet-committed and committed versions) is basically implementation of read committed isolation level. 
	- Visibility rules: which version a transaction can se, which versions cannot be seen
- Different names: serializable and repeatable read

### Lost update problem

- Example: two concurrent counter increments
- Can happen in concurrently read-modify-write cycle

Solution
- Atomic write operation to replace read-modify-write
	- Some DB provide this kind of operation
	- Such operation can't be divide (atomic)
	- MongoDB, Redis
	- However, limitation, can't cover all write scenario
	- Implemented by object lock, also called cursor stability
- Explicit locking
	- Lock the object by SQL command, then can perform a read-modify-write cycle
	- Other transaction will need to wait until commit
	- For example, consider a multiplayer game in which several players can move the same figure concurrently. In this case, an atomic operation may not be sufficient, because the application also needs to ensure that a player’s move abides by the rules of the game, which involves some logic that you cannot sensibly implement as a database query.
- Automatically detecting lost update
	- Check if lost update will happen, if yes, abort this tx and retry
	- With snapshot isolation, can check if there's lost update gonna happen  
		- How?
	- Advantage: no application code need
- Compare and Set
	- Some DBs don't provide transaction feature but provide atomic compare-and-set operation
	- Allow update to happen ONLY IF the value has not changed since last read it. If not, abort and retry.
	- Have problem too.
	- Only work when not reading from snapshot
- Conflict resolution and replication
	- In replicated DB, same data can be modified differently. Need resolution to prevent lost update.
	- Lock and compare-and-set won't work since assumption of having a single up-to-date data.
	- Use application code to resolve and merge different versions.
	- Most DB use Last write win. Result in lost update.

### Write skew and Phantoms

Doctor take leave example

- Neither dirty write or lost update(bcz no write is lost, they are writing different object)
- Only because race condition (two txs concurrently run)
- Generalization of lost update (different object)
	- special case of write skew is lost update (when writing same object) or dirty write
- Solutions
	- Atomic single-object operations don't help since multiple objects involved
	- Automatically detection of lost update won't help too. Not detectable in PostgreSQL, MySQL, ...
	- Some DBs can configure constraints. However, most DBs don't have support for such constraints.
	- The best option is use serializable level.
		- If not possible, the 2nd-best option is to explicitly lock the row"s" that transaction depends on.
		- First transaction lock the whole or part of "doctor" table
	- More example
		- Concurrently move two players in game that violate game rules
			- Need constraint or serialization iso-level
		- Booking meeting room
		- Claiming a username
		- Prevent double-spending
- Same pattern
	- Read and check some required conditions
	- Depend on the result, application code decide how to continue (do next step or return error)
	- Update if all good. The effect of this write should change the precondition of the second step (dependency)
		- Therefore, if race condition, another tx might be missed to catch
	- Phantom: a write in one transaction changes the result of a search query in another transaction.
	- Snapshot isolation avoids phantoms in read-only queries, but in read-write transactions like the examples we discussed, phantoms can lead to particularly tricky cases of write skew.
- Materializing conflict
	- Need application code
	- Not elegant and ugly, use as last resort
	- Use serializable isolation level
---

## Serializability

It's strongest. Works like txs are executed once at a time, serially.

why not just use it? Need to look at the options to implement this, and their performance.
Three techniques:
- Literally executing txs in serial order
- Two phase locking
- Optimistic concurrency control techniques such as serializable snapshot isolation (Newest?)

Only discuss single-node for now. Will discuss how to generalize in later chapters.

### Literally executing in serial order

Remove concurrency entirely.

Why DB designers consider this
- RAM become cheaper than 30 yrs ago
- txs are usually short and small number of reads and writes

Redis use this. Sometimes perform better than DBs that support concurrency becuase avoiding overhead of locking.
However, throughput is limited by a single CPU core since no concurrency.

Limitation: "Interactive"
Some transaction are not short. Involve in human interaction and network latency.
Ex: search and book a flight.
Must need concurrency process multiple transactions

Solution from single-threaded serial transaction
- Disallow interactive "multiple-statement" transaction
- Stored transaction ahead of time as "stored procedure" and store all required data in memory (Which means your transaction cannot span among multiple network requests)
- Pros and cons for stored procedures
	- SQL syntax look ugly
	- Code running in DB is difficult to debug and test
Another limitation "Limit by one CPU"
If write-intensive, might be really slow.

Summary:
- Txs MUST be small and fast
- Limit by a single CPU core

### 2 Phase locking

Similar to lock to prevent dirty write.

- Several transactions can read same object if NO one is writing it.
- If anyone want to write (update/delete), must require some access
	- If A read, B want to write. B must wait A commit or abort
	- If A write and B want to read that object. B must wait A commit or abort
- Break: "readers never block writers, and writers never block readers" by snapshot isolation
	- Why? Prevent write skew or lost update
	- Tradeoff between performance and safety

Used by MySQL

Implementation:

The blocking of readers and writers is implemented by a having a lock on each object in the database. The lock can either be in shared mode or in exclusive mode.
- If a transaction wants to read an object, it must first acquire the lock in shared mode. Several transactions are allowed to hold the lock in shared mode simultaneously, but if another transaction already has an exclusive lock on the object, these transactions must wait.
- If a transaction wants to write to an object, it must first acquire the lock in exclusive mode. No other transaction may hold the lock at the same time (either in shared or in exclusive mode), so if there is any existing lock on the object, the transaction must wait.
- If a transaction first reads and then writes an object, it may upgrade its shared lock to an exclusive lock. The upgrade works the same as getting an exclusive lock directly.
- After a transaction has acquired the lock, it must continue to hold the lock until the end of the transaction (commit or abort). This is where the name “twophase” comes from: the first phase (while the transaction is executing) is when the locks are acquired, and the second phase (at the end of the transaction) is when all the locks are released.

Since many locks be used, can deadlock
- DB will abort transaction to solve this
- Application code might need to retry

Performance is a problem. Performance significantly drop when switching from weal isolation level.
Due to overhead of 
- maintaining locks
- reduced concurrency (lots of waiting or transaction might be long)
- Solve deadlock

#### Predicate lock
Special lock for some cases (to be more robust)

For booking meeting room example. Instead of lock for particular object, belongs to all objects that match some search condition.
- If A transaction wanna acquire this kind of locks in shared-mode, and B currently holding exclusive lock on any object match that match those conditions. A must wait B release the lock.
- If transaction A wants to insert, update, or delete any object, it must first check whether either the old or the new value matches any existing predicate lock. If there is a matching predicate lock held by transaction B, then A must wait until B has committed or aborted before it can continue.

#### Index-range locks
Unfortunately, predicate locks do not perform well: if there are many locks by active transactions, checking for matching locks becomes time-consuming. For that reason, most databases with 2PL actually implement index-range locking (also known as nextkey locking), which is a simplified approximation of predicate locking.

Another special lock for some objects (better than predicate lock since lower overhead)

(Can use few words to describe both of those two special locks)

## Serializable Snapshot Isolation (SSI)

Can we achieve good performance and serializable isolation at the same time?
Yes, SSI 
- achieve full serializability and has only a small performance penalty compared to snapshot isolation
- Fairly new (2008).
- Used in single-node DB or distributed DB

### Pessimistic vs Optimistic concurrency control

2 Phase locking is pessimistic since it stop and WAIT if anything might go wrong (2 transaction need to access same object)
WAIT until it's safe (lock is released)

Serial execution is pessimistic too.

Serializable snapshot isolation is optimistic. 
Optimistic in this context means instead of blocking if something might go wrong (2 concurrent transaction access same piece of data)
transaction continue anyway and hope everything will be alright.
- When tx want to commit, check if isolation is violated, if yes, abort and retry

### SSI

Based on snapshot isolation, within same transaction, read the same snapshot. On top of snapshot isolation, add an algorithm to detect conflicts among writes and determining which transactions to abort.

In order to avoid dependency on outdated premise (doctor example) and provide serializable isolation, the DB must detect situations in which a transaction may have acted on an outdated premise and abort the transaction in that case.

How does the DB know if the query result (premise) might have change?
- Detect reads of a stale MVCC object version
- Detecting writes that affect prior reads

####  Detect reads of a stale MVCC object version

When use snapshot isolation, won't read uncommitted write by other transaction, however when the transaction want to commit, the another tx has already commit. Therefore, the previous "ignore" leads to error.

the database needs to track when a transaction ignores another transaction’s writes due to MVCC visibility rules. When the transaction wants to commit, the database checks whether any of the ignored writes have now been committed. If so, the transaction must be aborted.

#### Detecting writes that affect prior reads

Use index-range locks.
DB remember which tx read which part of DB and use index lock to keep track. And when a tx want to write to DB, keep track of this write and commit status by the index locks.
The first one get to commit can succeed, the second tx want to commit, it will find the lock info, and know someone commit first, so abort


#### Performance of SSI
one trade-off is the granularity at which transactions’ reads and writes are tracked. If the database keeps track of each transaction’s activity in great detail, it can be precise about which transactions need to abort, but the bookkeeping overhead can become significant. 

Compared to 2 phase locking, better since writers don't block readers. Lower latency. For read-heavy workload, particularly faster.

Compared to serial execution, not limited to a single CPU core.

## Summary

Not all app will face some of the problems
That why we have different isolation level.

Level:
- read committed
- repeatable read (snapshot isolation)
- Serializable