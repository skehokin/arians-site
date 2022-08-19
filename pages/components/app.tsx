import React from "react";
import { Flex } from "@chakra-ui/react";
import { Screen } from "./screen";
import {
  Arian,
  Computing,
  Ampersand,
  EnglishServices,
  SiteHeading,
} from "./app-heading";

export default function App() {
  return (
    <Screen>
      <SiteHeading label={"Arian's Computing and English Help Services"}>
        <Arian ml={12}>Arian's </Arian>
        <Computing>Computing</Computing>
        <Ampersand ml={3}>& </Ampersand>
        <EnglishServices ml={3}>English Services</EnglishServices>
      </SiteHeading>

      <Flex
        height={"1000"}
        background={`linear-gradient(90deg, #e8e2e2 0%, #fff 100%)`}
      ></Flex>
    </Screen>
  );
}
