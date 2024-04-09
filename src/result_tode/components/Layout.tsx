import { ReactNode } from "react";
import { Box, Container, Spacer, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface LayoutParams {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutParams) => {
  return (
    // 100vh是绿色分割线距离白框的距离
    <Box display={"flex"} flexDir={"column"} minHeight="100vh"> 
      <Box flexGrow={1}>
        <Navbar />
        
        <Container mt="8" minW="70vw">
          <Flex
            flexDir={"column"}
            mt="1rem" // logo距离白框的距离
            p="4"
            h="full"
            border="3px" // 这里是界面的白框粗细
            borderColor={"whiteAlpha.700"} 
            borderStyle={"ridge"} // 这里是框框的形状
            rounded={"lg"}
          >
            {children}
          </Flex>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
