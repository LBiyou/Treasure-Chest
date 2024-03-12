// import Wallet from "ethereumjs-wallet";
// import EthUtil from "ethereumjs-util";

// 因为当前的没指定模块，所以默认使用require语句导入包
var Wallet = require('ethereumjs-wallet').default;
var EthUtil = require('ethereumjs-util');

// Get a wallet instance from a private key
// privatekey
const privateKey = '0x9b139483dc6f6c8782fda2301e9b65a75b3d084d79e79e04c64683bebfa1741d';
const privateKeyBuffer = EthUtil.toBuffer(privateKey);
const wallet = Wallet.fromPrivateKey(privateKeyBuffer);

// Get a public key
const publicKey = wallet.getPublicKeyString();                                                                                                                                                                                                                                                               
console.log(`publicKey is => ${publicKey}`);

// // const util = require()
// const publicKey2 = EthUtil.privateToPublic(privateKeyBuffer);
// console.log(`publicKey2 is => ${publicKey2}`);

// const secp256k1 = require("secp256k1");
// let result = secp256k1.publicKeyCreate(privateKeyBuffer,false).slice(1);

// console.log(result);

// let address = EthUtil.toChecksumAddress(EthUtil.keccak256(publicKey));