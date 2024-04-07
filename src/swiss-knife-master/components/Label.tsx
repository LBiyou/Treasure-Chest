import { Td } from "@chakra-ui/react";

/**
    这段代码定义了一个名为 Label 的组件，它的作用是在表格中显示带有居中对齐的内容。
    Label 组件可以接受任意类型的子元素或文本内容，并将其显示在居中对齐的表格单元格中。
 */
export const Label = ({ children }: { children: React.ReactNode }) => (
  <Td textAlign={"center"}>{children}</Td>
);
