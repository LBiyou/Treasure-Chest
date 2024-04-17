"use client";// 指示这个代码应该只在客户端运行，对于服务端渲染的框架例如 Next.js 来说是一项重要声明

import Link from "next/link";
import { Box, Flex, GridItem, SimpleGrid, Image, Text, Stack, Grid } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { getPath } from "@/utils";
import subdomains from "@/subdomains";
import { DarkButton } from "@/components/DarkButton";
import { F } from "@upstash/redis/zmscore-5d82e632";
// 将子域的标识映射成可读的文本标签
const subdomainToLabel = {
  [subdomains.CONSTANTS]: "Constants",
  [subdomains.EPOCH_CONVERTER]: "Epoch Converter",
  [subdomains.CONVERTER]: "Converter",
  [subdomains.TRANSACT]: "Transact",
  [subdomains.CALLDATA]: "Calldata",
  [subdomains.STORAGE_SLOTS]: "Storage Slots",
  [subdomains.CHARACTER_COUNT]: "Character Counter",
  [subdomains.SIGNATURE]: "Signature",
  [subdomains.ACCOUNTCREATE]: "AccountCreate",
  [subdomains.CALADDRESSBYCREATE2]: "CalAddressByCreate2",
  [subdomains.PRIVATEKEYTOPUBLICKEY]: "PriKeyToPubKey"

};

const verticalSubdomains = Object.values(subdomains).slice(0, 3);
const horizontalSubdomains = Object.values(subdomains).slice(3);

// 定义一个 Btn 功能组件，接收子域名作为属性，并返回一个 GridItem 包裹的带链接的按钮
const Btn = ({ subdomain }: { subdomain: string }) => (
  <GridItem >
    <Link href={getPath(subdomain)}> {/*使用 Link 组件包裹按钮，并用 getPath 函数来获取到对应子域的路径*/}
      <DarkButton w="400px" h="100px" style={{ flex: '1' }}  > {/*// 使用自定义 DarkButton 组件创建按钮，设置宽度为 100%*/}
        {subdomainToLabel[subdomain] ?? subdomain} {/*// 显示该子域的标签文本，如果未映射则显示子域名本身*/}
      </DarkButton>
    </Link>
  </GridItem>
);

// 定义主页组件

const Home = () => {
  return (
    <Layout>


      <Flex direction="row">
        <Flex direction="column" w="50%">
          <Stack spacing={3}>
            {verticalSubdomains.map((subdomain, i) => (
              <Btn key={i} subdomain={subdomain} />
            ))}
          </Stack>
        </Flex>
        <Box w="41%" marginLeft="7%"> {/*左侧外侧边距调整以产生左移效果*/}
          <Flex> {/* 左侧内侧边距调整以产生左移效果 */}
            <Image
              src="icon2.jpg"
              alt="CSL"
              w="100%"
              h="480%"
              borderRadius="25"
            />

          </Flex>
        </Box>
      </Flex>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {horizontalSubdomains.map((subdomain, i) => (
          <Btn key={i} subdomain={subdomain} />
        ))}
      </Grid>



    </Layout>
  );
};


export default Home;
