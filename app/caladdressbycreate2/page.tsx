"use client";

import {  Center, Box, Container, FormControl, FormLabel, Input, Button, Code } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import React, { useState } from 'react';
import Web3 from 'web3';
import { Heading} from "@chakra-ui/react";

import { MyButtonPro } from "@/components/MyButtonPro";
import { SelectedOptionState } from "@/types";
import { DarkSelect } from "@/components/DarkSelect";
import { CopyToClipboard } from "@/components/CopyToClipboard";


const web3 = new Web3();
const options = [
  { label: '合约地址以....开头', value: 1 },
  { label: '合约地址以....结尾', value: 2 },
  { label: '账户包含......', value: 3 },
  // 添加你需要的其他选项
];

const CalAddressByCreate2Layout: React.FC = () => {

  const [bytecode, setBytecode] = useState<string>('');
  const [factoryAddress, setFactoryAddress] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<{ salt: string; address: string } | null>(null);
  const [selectedChoiceOption, setSelectedChoiceOption] =
    useState<SelectedOptionState>(options[0]);
  const choice = selectedChoiceOption?.value.toString();
  const handleCreate2 = async () => {
    if (choice && bytecode && factoryAddress && text) {
      if (text.startsWith('0x')) {
        setText(text.substring(2));
      }
      const prefix = '0xff' + factoryAddress.slice(2);
      const suffix = web3.utils.keccak256(bytecode).slice(2);
      let salt = 0;

      if (choice === '1') {
        while (true) {
          const saltHex = salt.toString(16).padStart(64, '0');
          const concatString = prefix.concat(saltHex).concat(suffix);
          const address = "0x" + web3.utils.keccak256(concatString).slice(26);

          if (address.startsWith(`0x${text}`)) {
            setResult({ salt: saltHex, address: address });
            break;
          }
          salt++;
        }
      } else if (choice === '2') {
        while (true) {
          const saltHex = salt.toString(16).padStart(64, '0');
          const concatString = prefix.concat(saltHex).concat(suffix);
          const address = "0x" + web3.utils.keccak256(concatString).slice(26);

          if (address.endsWith(text)) {
            setResult({ salt: saltHex, address: address });
            break;
          }
          salt++;
        }
      } else if (choice === '3') {
        while (true) {
          const saltHex = salt.toString(16).padStart(64, '0');
          const concatString = prefix.concat(saltHex).concat(suffix);
          const address = "0x" + web3.utils.keccak256(concatString).slice(26);
          if (address.includes(text)) {
            setResult({ salt: saltHex, address: address });
            break;
          }
          salt++;
        }
      }
    }
  };

  return (

    <Layout>
      <Box w="full">
        <Heading color={"custom.pale"} textAlign="center" pt="2rem">
          CalAddressByCreate2
        </Heading>
        <Container>
          <FormControl mt={16}>
            <FormLabel>Choice</FormLabel>
            <DarkSelect
              boxProps={{
                w: "100%",
                mt: "2",
              }}
              selectedOption={selectedChoiceOption}
              setSelectedOption={setSelectedChoiceOption}
              options={options}
            />
          </FormControl>
          <FormControl mt={8}>
            <FormLabel>CreationCode</FormLabel>
            <Input
              type="string"
              placeholder="0x6080........"
              onChange={(e) => setBytecode(e.target.value)}
              bg={"blackAlpha.300"}
            />
          </FormControl>
          <FormControl mt={8}>
            <FormLabel>DeployerAddress</FormLabel>
            <Input
              type="string"
              placeholder="0x........."
              onChange={(e) => setFactoryAddress(e.target.value)}
              bg={"blackAlpha.300"}
            />
          </FormControl>
          <FormControl mt={8}>
            <FormLabel>Text</FormLabel>
            <Input
              type="string"
              placeholder="0x2024"
              onChange={(e) => setText(e.target.value)}
              bg={"blackAlpha.300"}
            />
          </FormControl>
          <Center mt={8}>
            <MyButtonPro query={handleCreate2}/>

          </Center>
        </Container>
        {result && (
          <Container mt={8}>
            <Code width="650px">
              Salt Hex: {result.salt} <CopyToClipboard textToCopy={result.salt} />
              Address:{result.address} <CopyToClipboard textToCopy={result.address} />
            </Code>
          </Container>
        )}
      </Box>
    </Layout>
  );
}
  export default CalAddressByCreate2Layout;