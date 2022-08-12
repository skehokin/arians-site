import React from "react";
import { Center, Flex } from "@chakra-ui/react";
import SiteHeading from "./app-heading/heading";
import { HeadingText } from "./app-heading/heading-texts";

export default function App() {
  return (
    <Center>
      <Flex
        width={"100%"}
        height={"100vh"}
        flexDirection={"column"}
        overflowY={"scroll"}
      >
        <SiteHeading label={"Arian's Computing and English Help Services"}>
          <HeadingText.Arian ml={12}>Arian's </HeadingText.Arian>
          <HeadingText.Computing>Computing</HeadingText.Computing>
          <HeadingText.Ampersand ml={3}>& </HeadingText.Ampersand>
          <HeadingText.EnglishServices ml={3}>
            English Services
          </HeadingText.EnglishServices>
        </SiteHeading>

        <Flex
          height={"1000"}
          background={`linear-gradient(90deg, #e8e2e2 0%, #fff 100%)`}
        >
          nayam
        </Flex>
      </Flex>
    </Center>
  );
}
