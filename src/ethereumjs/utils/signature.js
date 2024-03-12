const ethereumjsUtil = require('ethereumjs-util');

// 要签名的消息
const message = 'stage1';

// 私钥（注意：这只是一个示例私钥，不应该在实际项目中使用）
const privateKey = Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex');

// 生成消息的 Keccak-256 哈希
let buffer_message = Buffer.from(message); // 将message转成字节流
const messageHash = ethereumjsUtil.keccak256(buffer_message);

// 使用私钥对消息哈希进行签名
const signature = ethereumjsUtil.ecsign(messageHash, privateKey);

// 将签名结果进行格式化
const formattedSignature = {
  v: signature.v,
  r: signature.r.toString('hex'),
  s: signature.s.toString('hex')
};

console.log('Message:', message);
console.log('Message Hash:', messageHash.toString('hex'));
console.log('Signature:', formattedSignature);

