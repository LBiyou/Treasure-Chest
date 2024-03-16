const Web3 = require('web3'); // 引入 web3 模块
const web3 = new Web3();

//ETH转其他类型
function EthToOther(a) {

    Wei = web3.utils.toWei(a, "ether");
    Gwei = web3.utils.fromWei(Wei, "gwei");
    Finney = web3.utils.fromWei(Wei, "finney");
    console.log("wei ==> ",Wei)
    console.log("gwei ==> ",Gwei)
    console.log("finney ==> ",Finney)
    
}
//Wei转其他类型
function WeiToOther(Wei) {
    Gwei = web3.utils.fromWei(Wei, "gwei");
    Finney = web3.utils.fromWei(Wei, "finney");
    Eth=web3.utils.fromWei(Wei, "ether");
    console.log("gwei ==> ",Gwei)
    console.log("finney ==> ", Finney)
    console.log("ETH ==> ",Eth)
}


//test
EthToOther("1")
WeiToOther("1000000000000000000")