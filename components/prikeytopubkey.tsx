import Wallet from 'ethereumjs-wallet';
import * as EthUtil from 'ethereumjs-util';
import React, { useState } from 'react';
import { Heading, Table, Tbody, Tr, Td, Container, Code, Box, FormControl, FormLabel, Center } from "@chakra-ui/react";
import { InputField } from "@/components/InputField";
import { Label } from "@/components/Label";
import { MyButton } from "@/components/MyButton";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { Layout } from "@/components/Layout";

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
    <Box>
      <Box w="full">
        <Heading color={"custom.pale"} textAlign="center" pt="2rem">
          PrivateKey To PublicKey
        </Heading>
      </Box>
      <Container>
        <FormControl mt={10}>
          <FormLabel>输入私钥</FormLabel>
          <InputField
            type="string"
            placeholder="请确保私钥为”0x“开头,例如“0x123”"
            onChange={(e) => setPrivateKey(e.target.value)} />
        </FormControl>
        <Center mt={8}>
          <MyButton onClick={handleConvert} buttonText="convert" />
        </Center>
      </Container>
      <br />
      {publicKey && address && (
        <div style={{ width: '500px' }}>
          <strong>Private Key:</strong> {publicKey} <CopyToClipboard textToCopy={publicKey} />
          <br />
          <br />
          <strong>Address</strong> {address}  <CopyToClipboard textToCopy={address} />
        </div>
      )}
    </Box>

  );

}

export default PriKeyToPubKey;