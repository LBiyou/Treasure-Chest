const secp256k1 = require('secp256k1');
const { randomBytes } = require('crypto');

//生成多个hash签名，(生成签名数量，私钥，打包的消息hash)  
//用于合约中ecrecover的实现
function batchSign(numSignatures, PKey, MessageHash) {
    const privateKey = Buffer.from(PKey, 'hex');
    const messageHash = Buffer.from(MessageHash, 'hex');
    for (let i = 0; i < numSignatures; i++) {
        const { signature } = secp256k1.ecdsaSign(messageHash, privateKey, { data: randomBytes(32) });
        signatureBytes = Buffer.from(signature)
        signatureHex = signatureBytes.toString('hex');
        const r = signatureHex.slice(0, 64);
        const s = signatureHex.slice(64);
        console.log(`Signature ${i + 1}:`);
        console.log("Signature:",signatureHex);
        // console.log('Signature (v):', v);
        console.log('Signature (r):', r);
        console.log('Signature (s):', s);
        console.log("27 or 28");
        console.log('----------------------');
    }
}


//test
batchSign(5, "0000000000000000000000000000000000000000000000000000000000000001", "8252a7072c69c0cdba0c0bc059898f7992314306b3f0845bbb76593da6b98311")
