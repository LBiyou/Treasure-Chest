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
    <Box display={"flex"} flexDir={"column"} minHeight="100vh" background="#eddfd6"> 
      <Box flexGrow={1}>

  <Navbar />

        
        <Container mt="8" minW="70vw" background="black" borderRadius="30px">
          <Flex
            flexDirection="column" // 设置 flex 容器的主轴方向为垂直方向
            marginTop="2rem" // 设置上边距，logo与上方元素的距离为1个rem单位
            padding="16" // 设置内边距，值为4，这取决于使用的主题或设计系统
            height="100%" // 设置元素高度为父元素的100%
            borderWidth="20px" // 设置边框的宽度为3像素
            borderColor="#eddfd6" // 设置边框颜色，使用白色的70%不透明度
            borderStyle="solid" //将边框样式改为实线
            borderRadius="xl" // 增大圆角半径以创造更柔和的边缘外观
            // boxShadow="lg" // 添加大型的阴影效果，为组件增添深度和立体感
            boxShadow="0px -5px 15px rgba(0, 0, 0, 0.3)" 
          >
            {children}
          </Flex>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
