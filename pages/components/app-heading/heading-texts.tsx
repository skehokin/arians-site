import React from "react";
import { Text } from "@chakra-ui/react";

type TextProps = React.ComponentProps<typeof Text>;

export function HeadingText(props: TextProps) {
  return (
    <Text
      as={"span"}
      fontSize={"112"}
      fontWeight={"200"}
      lineHeight={"1"}
      {...props}
    />
  );
}

export function Arian(props: TextProps) {
  return (
    <HeadingText
      fontSize={"60"}
      fontStyle={"italic"}
      fontFamily={"EB Garamond, serif"}
      color={"blue.400"}
      fontWeight={"400"}
      display={"block"}
      {...props}
    />
  );
}

export function Computing(props: TextProps) {
  return (
    <HeadingText
      fontSize={"120"}
      fontWeight={300}
      lineHeight={0.9}
      {...props}
    />
  );
}

export function Ampersand(props: TextProps) {
  return (
    <HeadingText
      color={"blue.300"}
      fontSize={"250"}
      fontFamily={"Cormorant, serif"}
      fontStyle={"italic"}
      letterSpacing={"-0.2rem"}
      lineHeight={0.1}
      {...props}
    />
  );
}

export function EnglishServices(props: TextProps) {
  return (
    <HeadingText
      fontSize={"112"}
      fontWeight={200}
      color={"blue.200"}
      {...props}
    />
  );
}
