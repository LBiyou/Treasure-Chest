"use client";

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { Layout } from "@/components/Layout";
import { constants } from "@/data/constants";
import { Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

// TODO: custom metadata title based on current page
const Constants = () => {
  return (
    <Layout>
      <Heading>Constants</Heading>
      <Table variant="simple" mt="2rem">
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Value</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {constants.map((c, i) => (
            <Tr key={i}>
              <Td>{c.label}</Td>
              <Td
                maxW="20rem" // 单元格的最大宽度设为25rem
                whiteSpace="nowrap" // 设置文本在单元格内自动换行
                overflowX="auto" // 隐藏水平滚动条
                sx={{
                  "::-webkit-scrollbar": {
                    height: "10px", // 设置滚动条的高度为10px
                  },
                  "::-webkit-scrollbar-track": {
                    background: "gray.300", // 设置滚动条轨道的背景颜色为浅灰色
                    borderRadius: "8px", // 设置滚动条轨道的圆角为8px
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "green.400", // 设置滚动条滑块的背景颜色为亮绿色
                    borderRadius: "8px", // 设置滚动条滑块的圆角为8px
                    "&:hover": { // 当鼠标悬停在滚动条滑块上时的样式
                      background: "green.600", // 悬停时滑块的背景颜色变为更深的绿色
                    }
                  },
                }}
              >
                {c.data}
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