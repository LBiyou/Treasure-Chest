import { Button, ButtonProps } from "@chakra-ui/react";

interface DarkButtonProps extends ButtonProps {}


/// 这段代码定义了一个名为 DarkButton 的按钮组件，它基于 Chakra UI 的 <Button> 组件，
/// 并设置了一些特定的样式和属性，同时可以接收任意其他属性并透传给内部的 <Button> 组件
export const DarkButton = ({ ...rest }: DarkButtonProps) => (
  //按钮
  <Button
    color="white" // 设置按钮的文本颜色为白色
    bg={"blackAlpha.400"} // 设置按钮的背景颜色为黑色的 40% 透明度

    _hover={{ // 使用伪类 _hover 定义按钮的鼠标悬停状态样式，当鼠标悬停在按钮上时，背景颜色变为黑色的 10% 透明度 (bg: "blackAlpha.100")
      bg: "blue.500", //
    }}

    border="1px solid" // 设置按钮的边框为 1 像素的实线边框
    borderColor={"whiteAlpha.200"} //设置按钮边框的颜色为白色的 20% 透明度

    // 使用展开操作符 {...rest} 将解构的 props 中的所有属性传递给 <Button> 组件，
    // 这样可以让 DarkButton 组件接收到的所有 props 都传递给内部的 <Button> 组件，实现属性的透传
    {...rest} 
    // 下一行可以在功能名称前添加东西
    // 在 Button 组件中使用 rest.children 来显示组件接收到的子元素或文本内容，这样可以在使用 DarkButton 组件时传入子元素或文本，使得按钮显示的内容动态化
  >
    {rest.children} 
  </Button>
);
