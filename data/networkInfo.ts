const networkInfo = [
  {
    chainID: 1,
    name: "Ethereum Mainnet",
    api: `https://eth-mainnet.g.alchemy.com/v2/_2PBRcpL6YgcmneTHiuQdCZO2FKbVrlT`,
  },
  {
    chainID: 11155111,
    name: "Sepolia Testnet",
    api: `https://eth-sepolia.g.alchemy.com/v2/AKFeui4i9JSbzEsGfQEH92chmUopIfwT`,
    apikey: "AKFeui4i9JSbzEsGfQEH92chmUopIfwT",
  },
  {
    chainID: 5,
    name: "Goerli Testnet",
    api: `https://goerli.infura.io/v3/53426097a46945fea4ffc13036385232`,
    apikey: "53426097a46945fea4ffc13036385232",
  },
  {
    chainID: 17000,
    name: "Holesky Testnet",
    api: `https://ethereum-holesky.publicnode.com`,
    apikey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
  },
];

// TODO: add missing major chains

export default networkInfo;
