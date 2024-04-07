import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

export const ConnectWalletBtn = ({ onClick }: Props) => {
  return (
    <Button
      bg={"twitter.700"} // 背景颜色为 Twitter 主题色的深色
      _hover={{ // 鼠标悬停时的样式
        bg: "twitter.800", // 背景颜色变为 Twitter 主题色的更深色
      }}
      onClick={onClick} // 点击按钮时执行传入的 onClick 函数
      rounded={"xl"} // 圆角样式为圆形
    >
      Connect Wallet
    </Button>
  );
};
