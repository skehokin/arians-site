import React from "react";
import { Center, Flex } from "@chakra-ui/react";

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <Center>
      <Flex
        width={"100%"}
        height={"100vh"}
        flexDirection={"column"}
        overflowY={"scroll"}
      >
        {children}
      </Flex>
    </Center>
  );
}
