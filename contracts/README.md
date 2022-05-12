# Basic Sample Hardhat Project

https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract

```shell
cp .env.example .env
vim .env # fill apiKey and wallet private key
npm install
npx hardhat help
npx hardhat compile

npx hardhat run scripts/deploy-greeter.js
vim .env # fill deployed contract address

npx hardhat run scripts/get-greeter.js # get last set message

# will cost some gas fee to set MSG to chain:
MSG="some message" npx hardhat run scripts/set-greeter.js
```

### Deployed contract

* `0xec8eeCa064Cd7Fe97667a6d997C2f485C31F7173`
* https://rinkeby.etherscan.io/address/0xec8eeCa064Cd7Fe97667a6d997C2f485C31F7173
