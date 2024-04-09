"use client";

import { Heading, Table, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { constants } from "@/data/constants";
import { CopyToClipboard } from "@/components/CopyToClipboard";

// TODO: custom metadata title based on current page
const Constants = () => {
  return ( // 返回 JSX 元素
    <Layout>
      <Heading>Constants</Heading>  {/** 渲染标题为 "Constants" */}
      <Table variant="simple" mt="2rem">  {/** 渲染一个简单样式的表格，上边距为 2rem */}
        <Thead> 
          <Tr>
            <Th>Name</Th>
            <Th>Value</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {constants.map((c, i) => ( // 遍历常量数组，并渲染表格行
            <Tr key={i}> 
              <Td>{c.label}</Td>
              <Td
                maxW="25rem" // 最大宽度为 25rem
                whiteSpace={"nowrap"} // 不换行
                overflowX={"auto"} // 横向滚动条
                sx={{ // 自定义样式
                  "::-webkit-scrollbar": { // WebKit 浏览器的滚动条样式
                    h: "12px",  // 水平滚动条高度
                  },
                  "::-webkit-scrollbar-track ": { // 滚动条轨道样式
                    bg: "gray.700", // 背景颜色
                    rounded: "lg",  // 圆角
                  },
                  "::-webkit-scrollbar-thumb": { // 滚动条滑块样式
                    bg: "gray.600", // 滑块背景颜色
                    rounded: "lg", // 圆角
                  },
                }}
              >
                {c.data} {/** 显示常量的数值 */}
              </Td>
              <Td>
                <CopyToClipboard textToCopy={c.data} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Layout>
  );
};

export default Constants;
