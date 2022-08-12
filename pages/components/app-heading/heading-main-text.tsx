import React from "react";
import { Heading } from "@chakra-ui/react";

export function HeadingMainText({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Heading
      aria-label={label}
      role={"heading"}
      as="h1"
      color="yellow.50"
      textShadow={`0px 2px 7px rgb(0 0 0 / 32%)`}
    >
      {children}
    </Heading>
  );
}
