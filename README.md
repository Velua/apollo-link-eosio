# apollo-link-eosio

# ⚠️ W.I.P️️ ️⚠️

An Apollo Link to redirect GraphQL mutations to an EOSIO transaction

## Purpose

Apollo is a popular gateway to querying GraphQL servers however EOSIO based dApps typically mutate data on chain via transactions. **apollo-link-eosio** allows the developer write GraphQL mutations which are executed as EOSIO transactions.

## Installation

`apollo-link`, `graphql` and `eosjs` are peer dependencies needed by `apollo-link-eosio`.

```

const eosioLink = new EOSIOLink({

})


```
