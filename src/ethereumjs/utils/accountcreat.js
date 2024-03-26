const Web3 = require('web3'); // 引入 web3 模块
const web3 = new Web3(); // 创建一个 web3 实例，连接 Infura 节点

function AccountCreat(choice, text) {
        //账户结尾
    if (choice == "1") {
        while (1) {
            const account = web3.eth.accounts.create();
            if (account.address.endsWith(text)) {
                console.log('Private Key: ', account.privateKey);
                console.log('Address: ', account.address);
                break;
            }
        }
    }
        //账户开头
    else if (choice == "2") {
        while (1) {
            const account = web3.eth.accounts.create();
            if (account.address.startsWith("0x"+text)) {
                console.log('Private Key: ', account.privateKey);
                console.log('Address: ', account.address);
                break;
            }
        }
    }
        //账户包含
    else if (choice == "3") {
        while (1) {
            const account = web3.eth.accounts.create();
            if (account.address.includes(text)) {
                console.log('Private Key: ', account.privateKey);
                console.log('Address: ', account.address);
                break;
            }
        }
    }
}


//test
AccountCreat("1", 812);
AccountCreat("2", 812);
AccountCreat("3", 812);