import {
  Input,
  InputGroup,
  InputRightElement,
  InputProps,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { CopyToClipboard } from "@/components/CopyToClipboard";

interface InputFieldProps extends InputProps {
  placeholder: string; // 输入框的占位符，字符串类型
  value?: string; // 输入框的值，可选的字符串类型
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  isInvalid,
  ...rest
}: InputFieldProps) => (
  <InputGroup>
    <Input
      type={type ?? "text"} // 设置输入框的类型，默认为文本类型
      placeholder={placeholder} // 设置输入框的占位符
      value={value} // 设置输入框的值
      onChange={onChange} // 设置输入框值变化时的回调函数
      {...rest} // 使用展开操作符将剩余的属性传递给 Input 组件，实现属性的透传
    />
    <InputRightElement pr={1}>
      {/** 根据 isInvalid 属性的值决定显示复制元素还是警告图标。
        如果 isInvalid 为假，则显示 CopyToClipboard 组件，否则显示红色的警告图标 WarningIcon */}
      {!isInvalid ? (
        <CopyToClipboard textToCopy={value ?? ""} />
      ) : (
        <WarningIcon color={"red.300"} />
      )}
    </InputRightElement>
  </InputGroup>
);
