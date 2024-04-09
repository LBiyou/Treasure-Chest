import React, { useState } from 'react';
import Web3 from 'web3';
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { InputField } from "@/components/InputField";
import { Label } from "@/components/Label";
import { MyButton } from "@/components/MyButton";

const web3 = new Web3();

const AccountCreate: React.FC = () => {
  const [choice, setChoice] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [account, setAccount] = useState<{privateKey: string; address: string} | null>(null);

  const handleAccountCreate = () => {
    if (choice && text) {
      while (true) {
        const account = web3.eth.accounts.create();
        if (
          (choice === '1' && account.address.endsWith(text)) ||
          (choice === '2' && account.address.startsWith(`0x${text}`)) ||
          (choice === '3' && account.address.includes(text))
        ) {
          setAccount(account);
          break;
        }
      }
    }
  };

  return (

    <>
    <Heading color={"custom.pale"}>AccountCreate</Heading>
    <Table mt={"3rem"} variant={"unstyled"}>
        <Tbody>
        <Tr>
            <Label>Choice</Label>
            <Td>
            <InputField
                autoFocus
                type="string"
                placeholder="choice"
                onChange={(e) => setChoice(e.target.value)}
            />
            </Td>
        </Tr>
        <Tr>
            <Label>Text</Label>
            <Td>
            <InputField
                type="string"
                placeholder="text"
                onChange={(e) =>
                  setText(e.target.value)
                }
            />
            </Td>
        </Tr>   
        <Tr style={{ display: 'flex', justifyContent: 'center' }}>
            <MyButton onClick={handleAccountCreate} buttonText="Generate"/>
        </Tr>

        {/** 如下是返回内容 */}

           {account && (
        <div>
          <p>Private Key: {account.privateKey}</p>
          <p>Address: {account.address}</p>
        </div>
      )}
        </Tbody>
    </Table>
    </>

    // <div>
    //   <label>Choice:</label>
    //   <input type="text" value={choice} onChange={(e) => setChoice(e.target.value)} />
    //   <label>Text:</label>
    //   <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    //   <button onClick={handleAccountCreate}>Create Account</button>
    //   {account && (
    //     <div>
    //       <p>Private Key: {account.privateKey}</p>
    //       <p>Address: {account.address}</p>
    //     </div>
    //   )}
    // </div>
  );
};

export default AccountCreate;