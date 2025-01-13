---
title: Data Models and Query Language
description: Summary of DDIA Chapter 2
publishedAt: 2024-10-20
tags:
  - DDIA
published: false
coverImgSrc: 
lang: en
---
## Preface

Most apps are built by layering data models. Each model represents data in terms of next-lower layer and abstract the complexity away.

## Relational Model vs Document Model

### SQL and NoSQL history
- SQL
- NoSQL
- Polyglot persistence

## The Object-Relational Mismatch
> 1st comparison point between SQL and NoSQL. Use one-to-many to explain the pros of NoSQL
- *Impedance mismatch*: Most apps today uses OOP languages + RDBMS combination, which requires a layer to translate table or column data in database model to object data in application code.
- The ORM (Object-relational Mapping) reduces the needs to write boilerplate code. However, cannot fully hide the complexity.
- In Resume example 
	- For relational DB, behind the JSON object, need to express the object in relational schema (need to design database to model one-to-many relation). 
	- Document-based DB like MongoDB supports JSON data model
	- Some people feel JSON model reduces the mismatch between app code and storage layer.
	- Will discuss problem of document-based DB in ch4.
- NoSQL has better **locality** than SQL
	- SQL need to perform multiple queries or join between tables, whereas NoSQL only need one query
### Many-to-one relationship (many-to-many relationship)
> Use normalization to explain the limitation of NoSQL DB

Why store id instead of plain-text?
- Consistent style and spelling
- Ease of updating
- Localization support
- Avoid duplication data

The removing duplication is a important idea of relational DB: *normalization*.
The concept doesn't exist in NoSQL since there's no many-to-one relationships and NoSQL doesn't store id in other table like SQL and joining tables.

Relational DB provides better flexibility and scalability when want to add more features, e.g.
- Extend organization and school as entity and add more attributes
- Recommendation

### Are Document Databases Repeating History?

- The Great Debate
- Before SQL, there's IBM's IMS which use hierarchy model (similar to JSON model), store data in tree format, can't normalize many-to-many or many-to-one. Proposed solutions:
	- Network model (not widely adopted)
		- CODASYL
		- One tree node (record) can have multiple parent now, which solves the limitation of tree structure, each node can only have one parent, which leads to denormalization
		- Query of record by moving a cursor through children
		- Pros:
			- Efficient usage of hardware
			- Updating and querying are complicated and inflexible
	- Relational model
		- No more nested and complicated access path
		- Use multiple tables(relation)

### Relational Versus Document Databases Today

In this chapter, only focus on differences in data model
Ch5: fault-tolerance
Ch7: Concurrency

Main arguments in favor of document data model
- Flexibility since no schema
- Better performance due to locality
For relational:
- Better support for many-to-many relationship
- Scalability

Compare based on
#### Which data model leads to simpler application code?
- If the data in your application has a document-like structure (i.e., a tree of one-tomany relationships), document model is more suitable
- If your application does use many-to-many relationships, relational model is more suitable

#### Schema flexibility in the document model

For document DB, since there's no explicit schema, it's more flexible but no validation, arbitrary key and values can be added to a document, and no guarantee what fields the documents might contain.

*schemaless?* Thereis a implicit schema but not enforced by database. A more accurate term is *schema-on-read* (the structure of the data is implicit and only interpreted when the data is read), in contrast with *schema-on-write* (perform validation on write to DB, traditional relational DB, the schema is explicit)

Another analogy
- *schema-on-read* is like dynamic runtime type-checking
- *schema-on-write* is like static compile-time type-checking

No right answer about which one is better. But we can see the difference when the format of app's data need to change (give example)
- *schema-on-read* is advantageous since we can handle different format of data in application code (flexible)
- *schema-on-write* needs migration file to update the database, sometimes it's slow and might lead to downtime if migration time is too long

#### Data locality for queries

- If you need large parts of the document at the same time, document model is better since less queries needed due to locality.
- If only need a small portion of the document, it's better to use relational database.

#### Convergence of document and relational databases

With the functionality to store XML or JSON in relational DB and search/index by the key in XML/JSON, it seems the relational and document DB are becoming similar over time. The hybrid might be the future.


## Query Languages for Data

SQL is declarative language
There are some old DB systems use imperative query language

### Imperative query language vs Declarative query language
- Imperative language tells computer to perform instructions in certain order
	- Harder to do parallelization
- Declarative language simply specify the condition or the pattern of the data, NOT how to achieve the query (this part it's up to DB's engine to decide how to do it efficiently)
	- Shorter code, concise language
	- Easier to optimize
	- Better

### MapReduce querying
- Neither imperative nor declarative, somewhere in between
- Used for querying across distributed system
- The logic of the query is expressed with snippets of code, which are called repeatedly by the processing framework. It is based on the map (also known as collect) and reduce (also known as fold or inject) functions that exist in many functional programming languages.
- Supported by some DB like MongoDB, here use MongoDB's MapReduce as example
- Restrictions
	- `map` and `reduce` must be pure function and must not have any side-effect. This can ensure every time we run the same mapReduce query, we will get the same output.
- There are also many distributed implementation of SQL that don't use MapReduce

## Graph-Like Data Models
Although for many-to-many data, it's better to use relational DB over document-based. When data become too complex, model data as a graph (V, E) is more natural.

Example data:
- Social graphs
- Web graph
- Road or rail network

Node or vertices can be the same type of data or different type of data. (Use facebook example)
- Property graph model
- Triple-store model

### Property graph
Vertex consists of
- id
- out edges
- in edges
- properties (kv pairs)
Edge consists of 
- id
- start
- to
- label describe the relationship
- properties (kv pairs)

Can be represented by relational DB's schema.

Why use graph over relational DB?
- Can represent complex relationship between different type of data
- Good at evolvability e.g. adding new features

### Cypher

Declarative query language for property graphs, created for the Neo4j
(Show how to insert data and create edge)
(Show how to do interesting query)

Can we do this in SQL? Yes, but difficult. The number of joins is not fixed. (Don't have to include this part)

### Triple-Stores

The triple-store model is mostly equivalent to the property graph model, using different words to describe the same ideas.
In triple-stores, all information stored in a form of (subject, predicate, object) like (Jim, like, Banana)
The object can be two things
1. Property: in such case, the predicate is the key
2. Other vertex: in this case, the predicate is the edge

(Show example of language)

### SPARQL

Query language for triple-stores

(Show example)

### Datalog (optional)

Older language but provides the foundation that later query language build upon.
Idea is similar to triple-store, it represents information using predicate(subject, object)

## Summary

- Compare relational and document-based
- Document and graph don't enforce a schema for the data they store -> Easier to adapt changing requirement, flexible
	- However, application mostly likely to assume the data has certain structure
	- It's just a question of whether the schema is explicit (enforced on write) or implicit (handled on read)