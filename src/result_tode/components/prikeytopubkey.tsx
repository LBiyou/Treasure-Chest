import Wallet from 'ethereumjs-wallet';
import EthUtil from 'ethereumjs-util';
import React, { useState } from 'react';
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { InputField } from "@/components/InputField";
import { Label } from "@/components/Label";
import { MyButton } from "@/components/MyButton";

const PriKeyToPubKey: React.FC = () => {
  const [privateKey, setPrivateKey] = useState<string>('');
  const [publicKey, setPublicKey] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleConvert = () => {
    if (privateKey) {
      const privateKeyBuffer = EthUtil.toBuffer(privateKey);
      const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
      const publicKey = wallet.getPublicKeyString();
      const publicKeyHash = EthUtil.keccak256(wallet.getPublicKey());
      const addressBuffer = publicKeyHash.slice(-20);
      const address = '0x' + addressBuffer.toString('hex');

      setPublicKey(publicKey);
      setAddress(address);
    }
  };

  return (
    <>
    <Heading color={"custom.pale"}>PrivateKey To PublicKey</Heading>
    <Table mt={"3rem"} variant={"unstyled"}>
        <Tbody>
        <Tr>
            <Label>PrivateKey</Label>
            <Td>
            <InputField
                autoFocus
                type="string"
                placeholder="PrivateKey"
                onChange={(e) => setPrivateKey(e.target.value)}
            />
            </Td>
        </Tr>

        <Tr style={{ display: 'flex', justifyContent: 'center' }}>
            <MyButton onClick={handleConvert} buttonText="convert"/>
        </Tr>

        {/** 如下是返回内容 */}
        {privateKey && (
        <div>
          <p>Private Key: {publicKey}</p>
          <p>Address: {address}</p>
        </div>
      )}

        </Tbody>
    </Table>
    </>
    // <div>
    //   <label>Private Key:</label>
    //   <input type="text" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
    //   <button onClick={handleConvert}>Convert</button>
    //   <p>Public Key: {publicKey}</p>
    //   <p>Address: {address}</p>
    // </div>
  );

}

export default PriKeyToPubKey;