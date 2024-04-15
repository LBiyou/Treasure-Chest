import { Button, Center } from "@chakra-ui/react";
import { useState } from "react";


export const MyButtonPro = ({ query }: { query: () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Center mt={8}>
      <Button
        color="white"
        bg={"green.400"}
        _hover={{
          bg: "blue.100",
        }}
        border="1px solid"
        borderColor={"blue.500"}
        onClick={async () => {
  setIsLoading(true);
      setTimeout(async () => {
        try {
          await query();
        } catch (e) {
          console.error(e);
        }
        setIsLoading(false);
      }, 200); // 2 second delay
    }}
        isLoading={isLoading}
      >
        获取
      </Button>
    </Center>
  );
};