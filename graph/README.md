# Greeting Graph

```
$ npm install -g @graphprotocol/graph-cli
# ...

$ graph init
✔ Protocol · ethereum
✔ Product for which to initialize · subgraph-studio
✔ Subgraph slug · hello-web3-subgraph
✔ Directory to create the subgraph in · graph
✔ Ethereum network · rinkeby
✔ Contract address · 0xec8eeCa064Cd7Fe97667a6d997C2f485C31F7173
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ ABI file (path) · contracts/artifacts/contracts/Greeter.sol/Greeter.json
✔ Contract Name · Greeter

$ vim schema.graphql
$ graph codegen
# ...

$ vim src/mapping.ts
$ graph build
# ...

$ graph deploy --studio hello-web3-subgraph
✔ Version Label (e.g. v0.0.1) · v0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: Greeter => build/Greeter/Greeter.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/Greeter/abis/Greeter.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmR4etmBs53AD3koeBH17Z2WkUogwJ8rNMghMcqtUf4vQN
  Add file to IPFS build/Greeter/abis/Greeter.json
                .. QmWNiTxQxahvGW5Txz29WefdXMJFjoefKLUBiHmL4DFK1D
  Add file to IPFS build/Greeter/Greeter.wasm
                .. QmeCvczFcJGxydyTwRgj7pdEyABXpWAgaDnVe2k3Pjt6yY
✔ Upload subgraph to IPFS

Build completed: QmcradbayfkXP68CiWxCsTspJPccwdhibvJu3asfgVueXV

Deployed to https://thegraph.com/studio/subgraph/hello-web3-subgraph

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/27233/hello-web3-subgraph/v0.0.2
Subscriptions (WS): https://api.studio.thegraph.com/query/27233/hello-web3-subgraph/v0.0.2
```

then visit https://api.studio.thegraph.com/query/27233/hello-web3-subgraph/v0.0.2

```graphql
{
  global(id: "only") {
    from
    count
    latestMessage
  }
}
```

will get latestMessage set from ../contracts/scripts/set-greeter.js

> even with CORS headers, ready for SPA to call
