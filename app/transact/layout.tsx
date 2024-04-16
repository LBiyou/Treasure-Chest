"use client";

import { HStack, Center, Flex, Spacer } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { Sidebar, SidebarItem } from "@/components/Sidebar";
import { ConnectButton } from "@/components/ConnectButton";
import subdomains from "@/subdomains";

// 侧边栏
const SidebarItems: SidebarItem[] = [{ name: "Send Tx", path: "send-tx" }];

const TransactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HStack alignItems={"stretch"}>
        <Sidebar // 侧边栏组件，具有标题 "Transact"，接受 items 属性作为侧边栏项的数据来源，以及 subdomain 属性表示子域
          heading="Transact"
          items={SidebarItems}
          subdomain={subdomains.TRANSACT}
          style={{color:'white'}}
        />
        <Center flexDir={"column"} w="full" style={{color:'white'}}>
          <Flex w="100%" mb="3rem"> {/** 弹性布局容器，用于放置连接按钮 (ConnectButton) */}
            <Spacer /> 
            <ConnectButton />
          </Flex>
          {children} 
        </Center>
      </HStack>
    </Layout>
  );
};

export default TransactLayout;
