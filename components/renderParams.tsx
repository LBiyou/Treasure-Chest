import React, { useState, useEffect } from "react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { ParamType } from "ethers";
import {
  UintParam,
  StringParam,
  AddressParam,
  TupleParam,
  ArrayParam,
  IntParam,
} from "@/components/fnParams";
import { BytesParam } from "./fnParams/BytesParam";

/**
 * 
  接受两个参数：input 表示参数类型的信息，value 表示参数的实际值。
  函数根据输入的参数类型信息和值来确定应该渲染哪种类型的参数组件，并返回相应的组件
 */
export const renderParamTypes = (input: ParamType, value: any) => {
  if (input.baseType.includes("uint")) {
    return <UintParam value={value} />;
  } else if (input.baseType.includes("int")) {
    return <IntParam value={value} />;
  } else if (input.baseType === "address") {
    return <AddressParam value={value} />;
  } else if (input.baseType.includes("bytes")) {
    return <BytesParam value={value} />;
  } else if (input.baseType === "tuple") {
    return <TupleParam value={value} input={input} />;
  } else if (input.baseType === "array") {
    return <ArrayParam value={value} input={input} />;
  } else {
    return <StringParam value={value} />;
  }
};

export const renderParams = (key: number, input: ParamType, value: any) => {
  // 判断参数的类型是否包含 "tuple"，如果是则将类型设置为 "tuple"，否则保持原来的类型
  const type = input.type.includes("tuple") ? "tuple" : input.type;

  return (
    <Stack
      key={key} // 设置组件的键值
      p={4} // 设置内边距为 4
      bg={"whiteAlpha.100"} // 设置背景颜色为白色半透明
      // 设置边框样式和颜色
      border="1px" 
      borderColor={"whiteAlpha.500"} 
      rounded={"lg"} // 设置圆角边框
    >
      {input.name ? (
        <Box>
          <Box fontSize={"xs"} fontWeight={"thin"} color={"whiteAlpha.600"}>
            {type}
          </Box>
          <HStack>
            <Box>{input.name}</Box>
            {input.baseType === "array" ? (
              <Box fontSize={"xs"} fontWeight={"thin"} color={"whiteAlpha.600"}>
                (length: {value.length})
              </Box>
            ) : null}
          </HStack>
        </Box>
      ) : (
        <HStack>
          <Text fontSize={"sm"}>{type}</Text>
          {input.baseType === "array" ? (
            <Box fontSize={"xs"} fontWeight={"thin"} color={"whiteAlpha.600"}>
              (length: {value.length})
            </Box>
          ) : null}
        </HStack>
      )}
      <Stack spacing={2}>{renderParamTypes(input, value)}</Stack>
    </Stack>
  );
};
