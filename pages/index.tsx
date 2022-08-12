import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./components/app";
import { useEffect } from "react";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "sans-serif",
    heading: "Urbanist, sans-serif",
  },
});

// HACK(?) for getting around webfontloader not working with SSR
// This may or may not work anyway
async function loadFonts() {
  const WebFont = (await import("webfontloader")).default;
  WebFont?.load?.({
    google: {
      families: [
        "Urbanist:200,300,400,600,900",
        "Cormorant:400,700i",
        "EB Garamond:600i,700i,800i",
        "Playfair Display:400,700",
      ],
    },
  });
}

export default function Index() {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Arian's Computer and English Help Armidale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </ChakraProvider>
  );
}
