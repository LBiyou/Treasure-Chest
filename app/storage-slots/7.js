const Web3 = require('web3'); // 引入 web3 模块

function GetSlot(rpcURL, address, slot) {
  const web3 = new Web3(rpcURL); // 创建一个 web3 实例，连接 Infura 节
  web3.eth.getStorageAt(address, slot).then(value => {
    console.log(value); // 在这里处理获取到的值
  })
}


//test
const rpcURL = "https://goerli.infura.io/v3/53426097a46945fea4ffc13036385232";
slot = 0;
address = "0x49c3C01ff2651a94ffD162e75e19dbF6b551eEDc";
GetSlot(rpcURL, address, slot);