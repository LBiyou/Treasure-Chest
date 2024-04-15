// 从 Next.js 和 Chakra UI 中导入必须的钩子和组件。
import { useRouter, usePathname } from "next/navigation"; // 导入 Next.js 路由和路径名的钩子。
import { Box, Flex, Center, Heading } from "@chakra-ui/react"; // 导入 Chakra UI 组件。
import { getPath } from "@/utils"; // 导入一个自定义工具函数，用来获取路径。

// 定义 SidebarItem 的 TypeScript 接口，用来为侧边栏中的单个条目指定类型。
export interface SidebarItem {
  name: string; // 条目的名称。
  path: string; // 根据名称导航的相对路径。
}

// 扩展 SidebarItem 接口，添加了 subdomain 属性。
export interface SidebarItemProps extends SidebarItem {
  subdomain: string; // 子域名。
}

// 定义 SidebarItem 组件，它会渲染在侧边栏中的每个条目。
const SidebarItem = ({ name, subdomain, path }: SidebarItemProps) => {
  const router = useRouter(); // 使用 useRouter 钩子获取路由功能。
  const pathname = usePathname(); // 使用 usePathname 钩子获取当前路径名。

  // 返回一个 Box 组件，增加点击事件使得点击时导航到指定路由。
  return (
    <Box my={1} onClick={() => router.push(`${getPath(subdomain)}${path}`)}>
      <Flex
        align="center"       // 水平居中对齐。
        p="4"                // 内边距。
        mx="4"               // 水平外边距。
        borderRadius="lg"    // 边框圆角大。
        role="group"         // 指定角色为组，相辅相成的一组元素（主要是为了accessibility）。
        cursor="pointer"     // 鼠标悬停时显示指针。
        _hover={{            // 鼠标悬停样式。
          bg: "blue.200",    // 背景颜色。
          color: "gray.700", // 文字颜色。
        }}
        bg={pathname.includes(path) ? "blue.200" : undefined}          // 当前路径激活时的背景颜色。
        color={pathname.includes(path) ? "gray.700" : undefined}       // 当前路径激活时的文字颜色。
      >
        {name}  {/* // 显示条目名称。*/}
      </Flex>
    </Box>
  );
};

// 定义 Sidebar 组件，接收标题、条目列表和子域作为参数。
export const Sidebar = ({
  heading,
  items,
  subdomain,
}: {
  heading: string;
  items: SidebarItem[];
  subdomain: string;
}) => {
  // 返回一个侧边栏布局。
  return (
    <Flex
      flex={1}                              // 弹性值为1，允许组件填充可用空间。
      flexDir={"column"}                    // 子元素垂直排列。
      py={"3rem"}                           // 垂直内边距。
      borderRight="1px"                     // 右边框宽度。
      borderColor={"whiteAlpha.400"}        // 右边框颜色。
    >
      <Center
        pb="1rem"                           // 底部内边距。
        borderBottom="1px"                  // 底部边框宽度。
        borderColor={"whiteAlpha.400"}      // 底部边框颜色。
        roundedLeft={"lg"}                  // 左侧圆角。
      >
        <Heading size="lg" px="4" color={"green.200"}> {/*// 标题组件，指定大小、水平内边距和颜色。*/}
          {heading}   {/*// 显示侧边栏的标题。*/}
        </Heading>
      </Center>
      <Box mt="1rem"> {/* // 框组件，顶部余白。*/}
        {/* // 映射传入的 items 数组来创建 SidebarItem 组件。*/}
        {items.map((item) => (
          <SidebarItem
            key={item.name}  // React列表渲染的 key 属性。
            name={item.name} // 传递条目名称。
            subdomain={subdomain} // 传递子域。
            path={item.path} // 传递导航路径。
          />
        ))}
      </Box>
    </Flex>
  );
};