const Web3 = require('web3'); 
const web3 = new Web3();


function ecRecoverSign(Pk, message) {
    var sign = web3.eth.accounts.sign(message, Pk);
    console.log(sign);

}


// test
ecRecoverSign("4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318","0x3c837b95d0cb38696ea0386f66609eedc9867a85083eb2de68cc456b0ab5d5fa")
