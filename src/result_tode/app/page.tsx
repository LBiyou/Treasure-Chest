"use client";// 指示这个代码应该只在客户端运行，对于服务端渲染的框架例如 Next.js 来说是一项重要声明

import Link from "next/link";
import { Box, Flex, GridItem, SimpleGrid ,Image, Text } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { getPath } from "@/utils";
import subdomains from "@/subdomains";
import { DarkButton } from "@/components/DarkButton";
// 将子域的标识映射成可读的文本标签
const subdomainToLabel = {
  [subdomains.CONSTANTS]: "Constants",
  [subdomains.EPOCH_CONVERTER]: "Epoch Converter",
  [subdomains.EXPLORER]: "Explorer",
  [subdomains.CONVERTER]: "Converter",
  [subdomains.TRANSACT]: "Transact",
  [subdomains.CALLDATA]: "Calldata",
  [subdomains.STORAGE_SLOTS]: "Storage Slots",
  [subdomains.UNISWAP]: "Uniswap V3",
  [subdomains.CHARACTER_COUNT]: "Character Counter",
  [subdomains.SIGNATURE]: "Signature",
  [subdomains.ACCOUNTCREATE]: "AccountCreate",
  [subdomains.CALADDRESSBYCREATE2]: "CalAddressByCreate2",
  [subdomains.PRIVATEKEYTOPUBLICKEY]: "PriKeyToPubKey"
  
};

// 定义一个 Btn 功能组件，接收子域名作为属性，并返回一个 GridItem 包裹的带链接的按钮
const Btn = ({ subdomain }: { subdomain: string }) => (
  <GridItem>
    <Link href={getPath(subdomain)}> {/*使用 Link 组件包裹按钮，并用 getPath 函数来获取到对应子域的路径*/}
      <DarkButton w="300px" style={{flex: '1'} }  > {/*// 使用自定义 DarkButton 组件创建按钮，设置宽度为 100%*/}
        {subdomainToLabel[subdomain] ?? subdomain} {/*// 显示该子域的标签文本，如果未映射则显示子域名本身*/}
      </DarkButton>
    </Link>
  </GridItem>
);

// 定义主页组件

const Home = () => {
  return (
    <Layout> 
      <Flex 
        direction="row" 
        alignItems="flex-start" 
        justifyContent="space-between" 
        w="100%" 
        minH="80vh"
      >

        <Flex direction="column" w="50%">
          {Object.values(subdomains).map((subdomain, i) => (
            <Btn key={i} subdomain={subdomain}/>
          ))}
        </Flex>
        <Box w="40%" textAlign="center">
          <Image 
            src="icon2.jpg" 
            alt="CSL" 
            w="100%" 
            h="auto"
          />
          <Text fontSize="2xl" fontWeight="bold">ChainSecLab</Text>
        </Box>


      </Flex>
    </Layout>
  );
};


export default Home;
