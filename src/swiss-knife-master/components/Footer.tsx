import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Center,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <Box
      flexShrink={0}
      mt="6rem"
      bg={"blackAlpha.500"}
      color={"gray.200"}
      borderTop={"solid"}
      borderTopWidth={1}
      borderColor={"custom.greenDarker"}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <VStack spacing={5}>
          <Center flexDir={"column"}>
            <Heading size="md">
              <Link
                color={"white"}
                href="https://twitter.com/biyou177209"
                isExternal
              >
                <HStack>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  {"  "}
                  <Text display="inline">@BY_DLIFE</Text>{" "}
                  <ExternalLinkIcon />
                </HStack>
              </Link>
            </Heading>
          </Center>
          <Center>
            <Link
              href={"https://discord.gg/w9uDexf9vR"}
              color="twitter.300"
              isExternal
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </Link>
          </Center>
        </VStack>
      </Container>
    </Box>
  );
};
