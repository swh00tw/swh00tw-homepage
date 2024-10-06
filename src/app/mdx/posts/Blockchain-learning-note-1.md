---
title: Blockchain learning note 1
description: Blockchain, Cryptocurrency, and Wallet
publishedAt: 2023-07-22
tags:
  - blockchain
  - web3
published: true
coverImgSrc: posts/blockchain-101-small.webp
backgroundImgSrc: posts/blockchain-101-big.webp
lang: en
---

## Preface

In this "Blockchain learning note" series, I will cover the basic knowledge of blockchain and web 3.0. Aim to give newbie like me gain general knowledge about this exciting field. This is the first episode. I will talk about what is Blockchain, Cryptocurrecies, and Wallets. Let's get started 🚀

## Blockchain Fundamentals

### Basic knowledge

Blockchain is a distributed ledger that records transactions across a bunch of computers (A network). The designs of blockchain ensure the integrity and security of the data.

- **Hash**: Each block stores the data, the previous block's hash, and a current hash derived by hashing the content of this block. This ensures immutability. It is nearly impossible to do something bad since if you mess around with one block, all the subsequent blocks will be invalidated.
- **Consensus mechanism**: The blockchain members need to reach a consensus to add a new block to the blockchain. Or it will be rejected to add to the blockchain. Different blockchains might use different consensus mechanisms (like PoW or PoS).

It is decentralized, it runs on a P2P network. Therefore, no single entity has control over the entire network.

Takeaway, just remember these important properties:

- Immutability
- Security
- Decentralized

### Consensus

**Proof of work (PoW):**

"Miners" are potential block creators. They compete with each other in solving complex cryptographic puzzle that needs expensive computational power. It's hard to do something malicious as a miner since you need to re-mine all the subsequent blocks which is practically infeasible and needs too much computational power. Successful miners will often gain a block rewards and a transaction fee for that transaction.

The downside of PoW is that it's too energy-consuming.

**Proof of stake (PoS):**

PoS is typically less energy-intensive than PoW. Here is how it works.

PoS selects validators to create a new block based on their stake in the network. The larger the stake, generally, the higher the chances of being chosen as a validator. Many PoS systems use some form of randomization in selecting validators to ensure fairness and security. Once chosen, validators are responsible for validating transactions, creating new blocks, and maintaining the blockchain's integrity. Validators receive rewards such as gas fees or some special token depending on different networks.
Security is ensured as validators have a financial stake in the network. Acting maliciously would lose money.

In PoS, those with larger stakes have more power, which could also lead to centralization concerns

### What will actually happen after a transaction is made

1. The user initiates a transaction, which typically includes the sender's address, receiver's address, amount to be transferred, and transaction fee.
2. Digitally signed by private key.
3. Broadcast to the participants in the network.
4. Participants (nodes) verify the transaction at first by checking the digital signature and ensuring the sender has enough money to perform the transaction.
5. Once verified, the transaction will be put in "mempool". It is a pool for unconfirmed transactions.
6. Miners (in PoW) or validators (in PoS) select transactions from the mempool to form a new block. The selection process often prioritizes transactions with higher fees.
7. In PoW, miners solve a cryptographic puzzle to validate the block. In PoS, validators are chosen based on their stake to validate and add the block.
8. Once validated, the new block, including the transaction, is added to the blockchain. This act confirms the transaction.
9. Broadcast to all nodes in the network. Nodes validate the new block again. Then, update the blockchain ledger.

### What is Smart Contracts

Some new blockchains can not only store transactions but also put pieces of code on the chain. Smart contracts are computer programs deployed on the chain. They are self-executing contracts with the terms of the agreement directly written into code.

They served as backend API endpoint in my opinion. Users interact with the contract and get something back afterward. I will talk more about this in other posts in the future.

### Applications Beyond Cryptocurrency

While initially developed for Bitcoin, blockchain technology has far-reaching applications beyond cryptocurrencies, including supply chain management, healthcare, finance, and voting systems.

### Are Web 3.0 and blockchain the same thing?

The answer would be no.

But, actually, they are highly related concepts. I've explained the concept of blockchain above, it's a technology that has properties of immutability and decentralization. As for Web 3.0, it's a concept proposed by Ethereum co-founder **Gavin Wood** in 2014. Different from Web 2.0, web 3.0 emphasizes that users can own their data. It's decentralized. The core technology of Web 3.0 is blockchain. Web 3.0 covers more technologies than just blockchain, for example, GameFi, Defi, DApp, and NFT.

## Cryptocurrency and Wallets

### Cryptocurrency

Cryptocurrency is a digital currency that operates on a blockchain. It's a medium of exchange and a store of value. Cryptocurrencies often have their own native blockchain. Like, Bitcoin operates on its own native blockchain - Bitcoin blockchain, and Ether operates on Ethereum blockchain. Buying crypto is actually kinda like buying stock. But the fluctuation could be much more crazy lol.

### Wallet

Wallets store cryptocurrency assets and allow users to make transactions. Each wallet contains information like public keys and private keys. You can think a public key of a network is like an email address. People can have your public key so that they can transfer money to you. However, you should never share private key. It's like the password of an account. Once you give people your private key(password), they have your money.

We can further categorize wallets on two different dimensions: **custody** and **hot/cold**.

Custody:

- **Self-custodial(Non-custodial)**: You manage your own private key. You have full control of your wallet. Once you lose your private key. You lose your assets.
- **Custodial**: Some third parties manage your account(private) for you. You don't have to remember your private key. It's easier to manage. However, if the company goes bankrupt, you might lose your money.

Hot/cold:

- **Hot**: How wallets are connected to the internet. It's basically a desktop application, mobile application, or browser extension. Hot wallets are generally **software wallets**.
- **Cold**: Cold wallets are not connected to the internet. It allows us to store the keys in hardware devices like a USB drive (or you can write down the keys on paper, it's called the Paper wallet). It's generally considered safer and less likely to be hacked. However, they are not immune to all types of risks, such as physical damage or loss. Cold wallets are generally **hardware wallets**.

Some wallet can support multiple cryptocurrencies and interaction with multiple networks. For example, MetaMask supports networks which are compatible to Ethereum technology. This kind of wallet is called "Multi-currency" wallet. This kind of wallet often offers a unified interface for you to manage all your cryptocurrencies and view them. It often uses a single master seed phrase to generate all the private keys for different networks. This seed phrase is super important and must be stored properly since it can restore your wallet when you lose it.

## Notes

🙋 Each cryptocurrency has its own native network. Is it correct to say that?

Generally correct for most cryptocurrencies. But, for some special coins like some wrapped tokens and some stable coins, they do not have native networks. Furthermore, some cryptocurrencies are created using existing standard like ERC-20 on Ethereum, they do not have their own blockchains but uses infrastructure of existing network.

🙋 Is the relationship between network to cryptocurrency 1-to-1 mapping or 1-to-N mapping?

Both of cases exist. As I mentioned above, some special cryptocurrencies do not have their own native networks and can operate on multiple networks. A network can support multiple cryptocurrencies at the same time.
