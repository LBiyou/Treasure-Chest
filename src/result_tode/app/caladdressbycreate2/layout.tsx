"use client";

import { HStack, Center } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { Sidebar, SidebarItem } from "@/components/Sidebar";
import subdomains from "@/subdomains";

const SidebarItems: SidebarItem[] = [
  { name: "CalAddressByCreate2", path: "caladdressbycreate2" },
];

const CalAddressByCreate2Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HStack alignItems={"stretch"} h="full">
        <Sidebar
          heading="ContractCreate2"
          items={SidebarItems}
          subdomain={subdomains.CALADDRESSBYCREATE2}
        />
        <Center flexDir={"column"} w="full">
          {children}
        </Center>
      </HStack>
    </Layout>
  );
};

export default CalAddressByCreate2Layout;
