import React, { useState } from 'react';
import Web3 from 'web3';
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { InputField } from "@/components/InputField";
import { Label } from "@/components/Label";
import { MyButton } from "@/components/MyButton";


const web3 = new Web3();

const ContractCreate2: React.FC = () => {
  const [choice, setChoice] = useState<string>('');
  const [bytecode, setBytecode] = useState<string>('');
  const [factoryAddress, setFactoryAddress] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<{salt: string; address: string} | null>(null);

  const handleCreate2 = () => {
    if (choice && bytecode && factoryAddress && text) {
      const prefix = '0xff' + factoryAddress.slice(2);
      const suffix = web3.utils.keccak256(bytecode).slice(2);
      let salt = 0;

      while (true) {
        const saltHex = salt.toString(16).padStart(64, '0');
        const concatString = prefix.concat(saltHex).concat(suffix);
        const address = "0x" + web3.utils.keccak256(concatString).slice(26);

        if (
          (choice === '1' && address.startsWith(`0x${text}`)) ||
          (choice === '2' && address.endsWith(text)) ||
          (choice === '3' && address.includes(text))
        ) {
          setResult({salt: saltHex, address: address});
          break;
        }
        salt++;
      }
    }
  };

  return (

    <>
    <Heading color={"custom.pale"}>CalAddressByCreate2</Heading>
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
            <Label>CreationCode</Label>
            <Td>
            <InputField
                type="string"
                placeholder="CreationCode"
                onChange={(e) =>
                    setBytecode(e.target.value)
                }
            />
            </Td>
        </Tr>   
        <Tr>
            <Label>DeployerAddress</Label>
            <Td>
            <InputField
                type="string"
                placeholder="DeployerAddress"
                onChange={(e) =>
                    setFactoryAddress(e.target.value)
                }
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
            <MyButton onClick={handleCreate2} buttonText="Generate"/>
        </Tr>

        {/** 如下是返回内容 */}

           {result && (
        <div>
          <p>Salt: {result.salt}</p>
          <p>Address: {result.address}</p>
        </div>
      )}
        </Tbody>
    </Table>
    </>

    // <div>
    //   <label>Choice:</label>
    //   <input type="text" value={choice} onChange={(e) => setChoice(e.target.value)} />
    //   <label>Bytecode:</label>
    //   <input type="text" value={bytecode} onChange={(e) => setBytecode(e.target.value)} />
    //   <label>Factory Address:</label>
    //   <input type="text" value={factoryAddress} onChange={(e) => setFactoryAddress(e.target.value)} />
    //   <label>Text:</label>
    //   <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    //   <button onClick={handleCreate2}>Create Contract Address</button>
    //   {result && (
    //     <div>
    //       <p>Salt: {result.salt}</p>
    //       <p>Address: {result.address}</p>
    //     </div>
    //   )}
    // </div>
  );
};

export default ContractCreate2;