import React from "react";
import { chakra, Box, useColorMode } from "@chakra-ui/react";
import SimpleEditor from "react-simple-code-editor";

import "@/style/scroll.css";
import "highlight.js/styles/obsidian.css";
// only import the required language support
import hljs from "highlight.js/lib/core";

// 使用 hljs 对象注册了 JSON 语言的高亮显示，使用了 highlight.js 库中的 JSON 高亮显示插件。
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));

// 定义了一个 ChakraSimpleEditor 变量，它是通过 chakra 函数将 SimpleEditor 组件包装后生成的新组件。
// chakra 函数是 Chakra UI 中用于增强样式和功能的工具函数。
const ChakraSimpleEditor = chakra(SimpleEditor);

// 常量，用于存储 JSON 文本区域的默认占位符
const defaultABIPlaceholder = " \n \n \n \n \n \n \n \n \n ";

interface Props {
  value: string | undefined; // 接受字符串或 undefined 类型的值，表示文本区域的内容
  setValue: (value: string) => void; // 接受一个函数，用于更新文本区域的内容
  placeholder: string; // 表示文本区域的占位符
  ariaLabel: string; // 用于辅助技术（如屏幕阅读器）的标签
  readOnly?: boolean; // 可选属性，表示文本区域是否只读
  canResize?: boolean; // 可选属性，表示文本区域是否可调整大小
}

function JsonTextArea({
  value,
  setValue,
  placeholder,
  ariaLabel,
  readOnly,
  canResize,
}: Props) {
  return (
    // 这是 Chakra UI 的 Box 组件，用于包裹内容并设置样式
    // 对应的是 `calldata` 功能的 input 框
    <Box
      h="60" // 设置组件的高度为 60 像素
      overflowY="scroll" // 设置 Y 轴方向的溢出内容可以滚动
      className="scroll" // 添加了一个名为 scroll 的 CSS 类
      bg={"whiteAlpha.50"} // 设置背景色为白色的 50% 透明度
      border="1px" // 设置边框宽度为 1 像素
      borderColor={"gray.400"} // 设置边框颜色为灰色的 400
      roundedLeft="md" // 设置左侧边框为中等圆角
      roundedRight="4px" // 设置右侧边框为 4px 圆角
      resize={canResize ? "both" : "none"} // 根据 canResize 属性的值设置是否可以调整大小，如果为true，则可以垂直和水平调整大小，否则不可调整大小
    >
      
      <ChakraSimpleEditor
        // 这是一个使用 Chakra UI ChakraSimpleEditor 组件，用于显示和编辑文本内容       
        placeholder={placeholder} // 设置编辑器的占位符
        aria-label={ariaLabel} // 设置编辑器的辅助标签
        value={value ?? defaultABIPlaceholder} // 设置编辑器的内容，如果 value 为空或未定义，则使用 defaultABIPlaceholder
        onValueChange={setValue} // 设置内容变化时的回调函数
        readOnly={readOnly} // 设置编辑器是否只读
        // 设置内容的高亮显示，使用 hljs.highlight 函数对 JSON 内容进行高亮处理
        highlight={(contents) =>
          hljs.highlight(contents, { language: "json" }).value
        }
        
        // 设置编辑器文本的字体族，这里使用了多个备选字体。如果操作系统中存在这些字体，编辑器将会按照顺序使用第一个可用的字体
        fontFamily={"SFMono-Regular,Menlo,Monaco,Consolas,monospace"}
        // 设置编辑器中一个制表符的宽度为 2 个空格字符
        tabSize={2}
        // 设置编辑器在用户按下 Tab 键时插入空格字符而不是制表符
        insertSpaces={true}
        // 设置编辑器忽略 Tab 键的默认行为。这意味着在编辑器中按下 Tab 键时，不会切换焦点，而是插入空格或制表符（根据 insertSpaces 属性的设置）
        ignoreTabKey={true}
        // 设置编辑器内容区域的内边距为 2 个单位，这会在内容和边框之间留出一定的空间
        padding={2}
      />
    </Box>
  );
}

export default JsonTextArea;
