"use client";

import {  Center, Box, Container, FormControl, FormLabel, Input, Code, Button } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import React, { useState } from 'react';
import Web3 from 'web3';
import { Heading, Table, Tbody, Tr, Td } from "@chakra-ui/react";

import { SelectedOptionState } from "@/types";
import { DarkSelect } from "@/components/DarkSelect";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { MyButtonPro } from "@/components/MyButtonPro";

const web3 = new Web3();

const options = [
  { label: '账户地址以....结尾', value: 1 },
  { label: '账户地址以....开头', value: 2 },
  { label: '账户地址包含......', value: 3 },
  // 添加你需要的其他选项
];

const AccountCreateLayout= () => {
  const [text, setText] = useState<string>('');
  const [account, setAccount] = useState<{ privateKey: string; address: string } | null>(null);
  const [selectedChoiceOption, setSelectedChoiceOption] =
    useState<SelectedOptionState>(options[0]);
  const choice=selectedChoiceOption?.value.toString();
  const handleAccountCreate = async () => {
    if (text.startsWith('0x')) {
      setText(text.substring(2));
    }
    if (choice && text) {
      if (choice === '1') {
        while (true) {
          const account = web3.eth.accounts.create();
          if (account.address.endsWith(text)) {
            setAccount(account);
            break;
          }
        }
      } else if (choice === '2') {
        while (true) {
          const account = web3.eth.accounts.create();
          if (account.address.startsWith(`0x${text}`)) {
            setAccount(account);
            break;
          }
        }
      } else if (choice === '3') {
        while (true) {
          const account = web3.eth.accounts.create();
          if (account.address.includes(text)) {
            setAccount(account);
            break;
          }
        }
      }
    }
  };

  return (

<Layout>
  <Box w="full">
    <Heading color={"custom.pale"} textAlign="center" pt="2rem">
      AccountCreate
    </Heading>
    <Container>
      <FormControl mt={16}>
        <FormLabel>特定需求</FormLabel>
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
        <FormLabel>输入地址预期的内容</FormLabel>
        <Input
          type="string"
          placeholder="0x5a54"
          onChange={(e) => setText(e.target.value)}
          bg={"blackAlpha.300"}
        />
      </FormControl>
      <Center mt={8}>
       <MyButtonPro query={handleAccountCreate} />
      </Center>
    </Container>
    {account && (
      <Container mt={8}>
            <Code width="650px">
            Private Key: {account.privateKey} <CopyToClipboard textToCopy={account.privateKey} />
            Address: {account.address} <CopyToClipboard textToCopy={account.address} /> 
            </Code>
      </Container>
    )}
  </Box>
    </Layout>
  )
};






export default AccountCreateLayout;
