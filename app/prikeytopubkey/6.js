var Wallet = require('ethereumjs-wallet').default;
var EthUtil = require('ethereumjs-util');

function privateKeyToPA(privateKey) {
    const privateKeyBuffer = EthUtil.toBuffer(privateKey);
    const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
    // Get a public key
    const publicKey = wallet.getPublicKeyString();
    // 获取公钥的 Keccak-256 哈希值
    const publicKeyHash = EthUtil.keccak256(wallet.getPublicKey());
    // 取后 20 个字节
    const addressBuffer = publicKeyHash.slice(-20);
    // 转换为十六进制字符串，并添加 "0x" 前缀
    const address = '0x' + addressBuffer.toString('hex');
    console.log(`publicKey is => ${publicKey}`);
    console.log(`Address is => ${address}`);

}


//test
const privateKey = '0x9b139483dc6f6c8782fda2301e9b65a75b3d084d79e79e04c64683bebfa1741d';
privateKeyToPA(privateKey);