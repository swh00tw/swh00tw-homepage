---
title: Decentralized Finance (DeFi) Infrastructure Learning Note
description: 
publishedAt: 2023-12-28
tags: 
published: false
coverImgSrc: posts/
backgroundImgSrc: posts/
lang:
---
## What is DeFi? and Why DeFi?

Current financial system is too inefficient. 
- It takes a few day to transfer money or ownership when buying share in a company. 
- Some people in the world are still unbanked or under-banked.
- Need too much extra fee for wire transfer

P2P interact don't need centralized third parties.
- Transparent
- Fast
- Secure

## The Value on Money

### History of Money

Barter was the early DeFi. However, very inefficient. Need to find an exact match.

So, money is invented.

Primary purpose:
- Unit of value
- A medium of exchange
Secondary purpose:
- Store of value: Allows value to be retained.
- Transfer of value: Ease of transfer of value and to defer value.

Characteristic:
- Durability
- Portability
- Divisibility: Fractional units
- Uniformity: Same currency have the same value
- Limited Supply: Unlimited supply will lead to zero value
- Acceptability
- Stability: If not stable, people find alternatives.

1950 Credit card
1968 First ATM
1983 Telephone banking
1994 Internet banking
1997 Contactless payment
2005 Chips and pin
2008 Bitcoin by Satoshi Nakamoto
2014 Apple Pay
2021 Blockchain: All leading banks have blockchain initiatives

### Where does the value of Bitcoin comes from?

Not backed by anything. It's a computer program. It's possible to have value even though the currency isn't necessarily backed by anything.

### Tangible vs Intangible Value

Tangible value: Gold, USD.
Intangible value: IP, patents, trademarks

### DeFi -> CeFi -> DeFi

DeFi actually opens up the possibility of returning to barter, but in a much more efficient way.

## Problems of CeFi

- Centralized control
- Limited access
	- Unbanked, underbanked
- Inefficient
	- 3% credit card fee, wire transfer fee, need to wait for a few days for slow wire transfer, fraud, insecure 
- Lack of interoperability
	- Difficult to move money between banks or non-bank
- Opacity
	- Little transparency
	- Unknown health of bank

## Origin of DeFi

### Blockchain and Crypto

Blockchain was originally an idea to keep track of timestamp of documents.
Proof of Work was originally an idea to eliminate junk email. It requires sender to do some works for sending an email. Therefore, it would be expensive to send a lot of junk emails for bad users.

Satoshi put this idea and invented Bitcoin. Originally, the vision is that this could be a new way to pay things, new transaction mechanism.

But, it's more successful to retain value now.

### Bitcoin
- Eliminate the problem with normal digital currencies in the past (double spend)
- Immutable ledger
- Easy to send or receive anywhere quickly and cheap
- Scarcity

### Ethereum

More than Bitcoin: smart contracts. Allows the creation of dApps.

dApps: allow peers to interact directly with each other without the need of centralized server. It uses smart contracts.

## Blockchain

### What is that?

It's a software or protocols allow multiple parties to operate or interact with each other without trusting each other. They only have to trust the blockchain technology.

The data store in blockchain can be anything. Ex: transaction, location or destination information in a supply chain, medical information or records, account balances of a token.

They store in multiple blocks which are linked by chain.

Blockchain is a distributed ledger

### How PoW works?

Math puzzle: Miner need to take the transactions together and plus a arbitrary number "nonce". Try to find a hash of this with a lot of leading zero. It's very computational expensive job given Bitcoin uses SHA256 to hash. Therefore, it's hard to mutate the history records.


## Cryptocurrency

### What is?

Asymmetric key:
- Private key
- Public key is derived from private key(one-way process)
- Address is derived from public key

