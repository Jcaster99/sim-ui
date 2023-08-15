# @sim/lib-ethers

[Ethers](https://www.npmjs.com/package/ethers)-based library for reading Liquity protocol state and sending transactions.

## Quickstart

Install in your project:

```
npm install --save @sim/lib-base @sim/lib-ethers ethers@^5.0.0
```

Connecting to an Ethereum node and sending a transaction:

```javascript
const { Wallet, providers } = require("ethers");
const { EthersLiquity } = require("@sim/lib-ethers");

async function example() {
  const provider = new providers.JsonRpcProvider("http://localhost:8545");
  const wallet = new Wallet(process.env.PRIVATE_KEY).connect(provider);
  const liquity = await EthersLiquity.connect(wallet);

  const { newTrove } = await liquity.openTrove({
    depositCollateral: 5, // ETH
    borrowLUSD: 2000
  });

  console.log(`Successfully opened a Liquity Trove (${newTrove})!`);
}
```

## API Reference

For now, it can be found in the public Liquity [repo](https://github.com/liquity/liquity/blob/master/docs/sdk/lib-ethers.md).

