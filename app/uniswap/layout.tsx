"use client";

import { HStack, Center } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { Sidebar, SidebarItem } from "@/components/Sidebar";
import subdomains from "@/subdomains";

const SidebarItems: SidebarItem[] = [
  { name: "Tick to Price", path: "tick-to-price" },
];

const UniswapLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HStack alignItems={"stretch"} h="full">
        <Sidebar
          heading="UniswapV3"
          items={SidebarItems}
          subdomain={subdomains.UNISWAP}
          style={{color:'white'}}
        />
        <Center flexDir={"column"} w="full" style={{color:'white'}}>
          {children}
        </Center>
      </HStack>
    </Layout>
  );
};

export default UniswapLayout;
