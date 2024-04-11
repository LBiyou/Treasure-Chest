"use client";

import { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  Center,
  HStack,
  Button,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import Web3 from 'web3'; // 引入 web3 模块
import { Layout } from "@/components/Layout";
import { DarkSelect } from "@/components/DarkSelect";
import { SelectedOptionState } from "@/types";
import networkInfo from "@/data/networkInfo";


const StorageSlotInput = ({
  storageSlot,
  setStorageSlot,
}: {
  storageSlot?: string;
  setStorageSlot: (value: string) => void;
}) => {
  return (
    <Container mt={10}>
      <FormControl>
        <FormLabel>Enter storage slot:</FormLabel>
        <Input
          autoComplete="off"
          value={storageSlot}
          onChange={(e) => {
            setStorageSlot(e.target.value);
          }}
          bg={"blackAlpha.300"}
          placeholder="123 or 0xabc123..."
        />
      </FormControl>
    </Container>
  );
};

const Query = ({ query }: { query: () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Center mt={8}>
      <Button
        color="white"
        bg={"blackAlpha.400"}
        _hover={{
          bg: "blackAlpha.100",
        }}
        border="1px solid"
        borderColor={"whiteAlpha.500"}
        onClick={async () => {
          setIsLoading(true);
          try {
            await query();
          } catch (e) {
            console.error(e);
          }
          setIsLoading(false);
        }}
        isLoading={isLoading}
      >
        Get
      </Button>
    </Center>
  );
};

const formatOptions = ["hex", "address", "uint256", "bool", "int256"];
const Result = ({
  result,
}: {
  result: {
    value?: string;
    storageSlot?: string;
    error?: string;
  };
}) => {
  const [selectedFormatOption, setSelectedFormatOption] =
    useState<SelectedOptionState>({
      label: formatOptions[0],
      value: formatOptions[0],
    });
  const [formattedResult, setFormattedResult] = useState<string>();

  useEffect(() => {
    if (result.value) {
      if (selectedFormatOption?.value === "hex") {
        setFormattedResult(result.value);
      } else {
        setFormattedResult(
          ethers.AbiCoder.defaultAbiCoder()
            .decode([selectedFormatOption!.value.toString()], result.value)[0]
            .toString()
        );
      }
    }
  }, [selectedFormatOption, result]);

  return (
    <Container mt={4} minW={"50%"}>
      <Box>
        {!result.error ? (
          <>
            <HStack>
              <Heading fontSize={"3xl"} color="whiteAlpha.800">
                Result
              </Heading>
              <DarkSelect
                boxProps={{
                  w: "10rem",
                }}
                isCreatable
                selectedOption={selectedFormatOption}
                setSelectedOption={setSelectedFormatOption}
                options={formatOptions.map((str) => ({
                  label: str,
                  value: str,
                }))}
              />
            </HStack>
            <HStack mt={4}>
              <Text color="whiteAlpha.700">Value:</Text>
              <Text mt={2}>{formattedResult}</Text>
            </HStack>

            <Box mt={2}>
              <Text color="whiteAlpha.700">At storage slot:</Text>
              <Text>{result.storageSlot}</Text>
            </Box>
          </>
        ) : (
          <Text>Error: {result.error}</Text>
        )}
      </Box>
    </Container>
  );
};

//核心脚本
const getSlotScript = async (rpcURL: string, address: string, slot: number): Promise<string> => {
    const web3 = new Web3(rpcURL); // 创建一个 web3 实例，连接 Infura 节点
    const value: string = await web3.eth.getStorageAt(address, slot);
    return value;
}

const networkOptions: { label: string; value: number }[] = networkInfo.map(
  (n, i) => ({
    label: n.name,
    value: i, // index in the networkInfo array
  })
);

const StorageSlots = () => {
  const [address, setAddress] = useState<string>();
  const [selectedNetworkOption, setSelectedNetworkOption] =
    useState<SelectedOptionState>(networkOptions[0]);
  const [storageSlot, setStorageSlot] = useState<string>();
  const [result, setResult] = useState<{
    value?: string;
    storageSlot?: string;
    error?: string;
  }>();

  const query = async () => {
    // validate address
    if (!ethers.isAddress(address)) {
      setResult({ error: "Address is invalid" });
      return;
    }
    const rpc = networkInfo[parseInt(selectedNetworkOption!.value.toString())].api
    let _storageSlot = storageSlot;
    if (!_storageSlot) {
      setResult({ error: "Storage slot not entered." });
      return;
    }
    try {
      const res = await getSlotScript(rpc, address, Number(_storageSlot));
      if (_storageSlot.substring(0, 2) !== "0x") {
        _storageSlot = `0x${_storageSlot}`;
      }
      setResult({
        value: res,
        storageSlot: _storageSlot,
      });
    } catch (e) {
      setResult({
        error: "Invalid storage slot entered",
      });
    }
  };


  return (
    <Layout>
      <Box minW={["0", "0", "2xl", "2xl"]}>
        <Heading textAlign="center" pt="2rem">
          Slot-----Storage 
        </Heading>
        <Container>
          <FormControl mt={16}>
            <FormLabel>Contract Address</FormLabel>
            <Input
              autoFocus
              autoComplete="off"
              placeholder="0x00..."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              bg={"blackAlpha.300"}
            />
          </FormControl>
          <DarkSelect
            boxProps={{
              w: "100%",
              mt: "2",
            }}
            selectedOption={selectedNetworkOption}
            setSelectedOption={setSelectedNetworkOption}
            options={networkOptions}
          />
        </Container>
                <StorageSlotInput
                  storageSlot={storageSlot}
                  setStorageSlot={setStorageSlot}
                />
        <Query query={query} />
        {(result?.value || result?.error) && <Result result={result} />}
      </Box>
    </Layout>
  );
};

export default StorageSlots;
