import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { HeadingMainText } from "./heading-main-text";

export default function SiteHeading({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Flex
      width={"100%"}
      height="1200px"
      flexDir={"row"}
      align={"end"}
      justify={"center"}
      pb={"12"}
      background={`linear-gradient(180deg, 
      rgba(25,0,24,1) 0%, 
      rgba(9,83,125,1) 100%, 
      rgba(35,29,85,1) 100%)`}
      boxShadow={`0px 2px 20px rgba(0, 0, 0, 0.1)`}
    >
      <Flex maxW={1000} justify={"start"} ml={12}>
        <HeadingMainText label={label}>{children}</HeadingMainText>
      </Flex>
    </Flex>
  );
}
