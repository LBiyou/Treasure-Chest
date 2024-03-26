const Web3 = require('web3'); // 引入 web3 模块
const web3 = new Web3(); 
function Creat2(choice, Bytecode, factoryAddress, text) {
    if (choice == "1") {
        const prefix = '0xff' + factoryAddress.slice(2,); // 将工厂合约地址前缀设为 '0xff'，并去掉开头的 '0x'
        const suffix = web3.utils.keccak256(Bytecode).slice(2,); // 将合约字节码的哈希值计算出来，并去掉开头的 '0x'
        var salt = 0; // 初始化 salt 为 0
        while (1) { // 循环直到找到满足条件的地址
            const saltHex = salt.toString(16).padStart(64, '0'); // 将 salt 转换为 16 进制，并填充到 64 位
            const concatString = prefix.concat(saltHex).concat(suffix);
    
            const address = "0x" + web3.utils.keccak256(concatString).slice(26,);
            //结尾
            if (address.startsWith("0x"+text)) {
                console.log(`salt: ${saltHex}, address: ${address}`);
                break;
            }
            salt++;
        }
    } else if (choice == "2") {
        const prefix = '0xff' + factoryAddress.slice(2,); // 将工厂合约地址前缀设为 '0xff'，并去掉开头的 '0x'
        const suffix = web3.utils.keccak256(Bytecode).slice(2,); // 将合约字节码的哈希值计算出来，并去掉开头的 '0x'
        var salt = 0; // 初始化 salt 为 0
        while (1) { // 循环直到找到满足条件的地址
            const saltHex = salt.toString(16).padStart(64, '0'); // 将 salt 转换为 16 进制，并填充到 64 位
            const concatString = prefix.concat(saltHex).concat(suffix);
    
            const address = "0x" + web3.utils.keccak256(concatString).slice(26,);
            //结尾
            if (address.endsWith(text)) {
                console.log(`salt: ${saltHex}, address: ${address}`);
                break;
            }
            salt++;
        }
        
    } else if (choice == "3") {
        const prefix = '0xff' + factoryAddress.slice(2,); // 将工厂合约地址前缀设为 '0xff'，并去掉开头的 '0x'
        const suffix = web3.utils.keccak256(Bytecode).slice(2,); // 将合约字节码的哈希值计算出来，并去掉开头的 '0x'
        var salt = 0; // 初始化 salt 为 0
        while (1) { // 循环直到找到满足条件的地址
            const saltHex = salt.toString(16).padStart(64, '0'); // 将 salt 转换为 16 进制，并填充到 64 位
            const concatString = prefix.concat(saltHex).concat(suffix);
    
            const address = "0x" + web3.utils.keccak256(concatString).slice(26,);
            //结尾
            if (address.includes(text)) {
                console.log(`salt: ${saltHex}, address: ${address}`);
                break;
            }
            salt++;
        } 
    }
}



//test
const code
    = "0x608060405234801561001057600080fd5b5060405161020d38038061020d833981810160405281019061003291906100db565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b6100b88161009d565b81146100c357600080fd5b50565b6000815190506100d5816100af565b92915050565b6000602082840312156100f1576100f0610078565b5b60006100ff848285016100c6565b91505092915050565b60f7806101166000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80638da5cb5b14602d575b600080fd5b60336047565b604051603e919060a8565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000609482606b565b9050919050565b60a281608b565b82525050565b600060208201905060bb6000830184609b565b9291505056fea264697066735822122026d2391212b4db1ed9d8c37357cd0b1613a16f4bb6c3f172cd4c1f48f5e0ee6f64736f6c634300081300330000000000000000000000005b38da6a701c568545dcfcb03fcb875f56beddc4"; // 合约的字节码
const factoryAddress = '0x1c91347f2A44538ce62453BEBd9Aa907C662b4bD'; // 已经部署的工厂合约地址
Creat2("1", code, factoryAddress, "5a54")
Creat2("2", code, factoryAddress, "5a54")
Creat2("3",code,factoryAddress,"5a54")