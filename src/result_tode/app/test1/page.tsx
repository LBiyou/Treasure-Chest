"use client";

import { Heading, Table, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { constants } from "@/data/constants";
import { CopyToClipboard } from "@/components/CopyToClipboard";

import Warning from "./a";

// TODO: custom metadata title based on current page
const Constants = () => {

  return ( // 返回 JSX 元素
    <Layout>
      <Heading>Constants</Heading>  {/** 渲染标题为 "Constants" */}
      <Table variant="simple" mt="2rem">  {/** 渲染一个简单样式的表格，上边距为 2rem */}

      </Table>
      <Warning />
    </Layout>
  );
};

export default Constants;
