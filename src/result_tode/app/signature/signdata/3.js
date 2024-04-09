const ethereumjsUtil = require('ethereumjs-util');

function SignSourceData(text, PKey) {
  const privateKey = Buffer.from(PKey, 'hex');
  let buffer_message = Buffer.from(text);
  const messageHash = ethereumjsUtil.keccak256(buffer_message);
  const signature = ethereumjsUtil.ecsign(messageHash, privateKey);
  const formattedSignature = {
    v: signature.v,
    r: signature.r.toString('hex'),
    s: signature.s.toString('hex')
  };

  console.log('Message Hash:', messageHash.toString('hex'));
  console.log('Signature:', formattedSignature);

  
}


//test
SignSourceData("stage1", "0000000000000000000000000000000000000000000000000000000000000001");