import { useState } from "react";
import { Button, HStack, Text, ButtonProps } from "@chakra-ui/react";
import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";

interface CopyToClipboardParams extends ButtonProps {
  textToCopy: string;
  labelText?: string;
}

export const CopyToClipboard = ({
  textToCopy, // 要复制到剪贴板的文本内容
  labelText, // 按钮文本的标签（可选）
  ...rest // 其他 ButtonProps 接口的属性，如 size、colorScheme 等
}: CopyToClipboardParams) => {

  // 使用 useState 定义 loading 和 copySuccess 两个状态
  const [loading, setLoading] = useState(false); // loading 状态用于表示是否处于加载状态
  const [copySuccess, setCopySuccess] = useState(false); // copySuccess 状态用于表示是否复制成功

  // 返回一个 Button 组件，实现了复制到剪贴板的功能
  return (
    <Button
      size="sm" // 按钮尺寸为 small
      onClick={async () => { // 点击按钮时的异步处理函数
        setLoading(true); // 设置 loading 状态为 true，表示处于加载状态
        await navigator.clipboard.writeText(textToCopy); // 使用浏览器 API 将文本复制到剪贴板
        setLoading(false); // 复制完成后，将 loading 状态设置为 false
        setCopySuccess(true); // 设置复制成功的状态为 true
        setTimeout(() => setCopySuccess(false), 2_000); // // 2 秒后将复制成功的状态设置为 false
      }}
      isLoading={loading} // 根据 loading 状态设置按钮是否处于加载状态
      {...rest} // 将剩余的属性传递给 Button 组件，如 colorScheme、variant 等
    >
      {/* 按钮内容为一个水平排列的组件，包括复制图标和文本 */}
      <HStack>
        {copySuccess ? <CheckCircleIcon color={"green.300"} /> : <CopyIcon />} {/* 根据复制成功状态显示不同的图标 */}
        {labelText ? ( // 如果有标签文本，则显示标签文本
          copySuccess ? ( // 如果复制成功，则显示 "Copied" 文本，否则显示标签文本
            <Text>Copied</Text> 
          ) : (
            <Text>{labelText}</Text>
          )
        ) : null}
      </HStack>
    </Button>
  );
};
