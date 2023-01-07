import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";

type PageHeaderWrapperProps = React.PropsWithChildren<{
  title?: string;
  description?: string;
}>;

export default function PageHeaderWrapper(props: PageHeaderWrapperProps) {
  const { title, description, children } = props;
  return (
    <>
      <Head>
        <title>{title ?? "Frank Hsu - homepage"}</title>
        <meta
          name="description"
          content={description ?? "Welcome to my cool website 👾"}
        />
      </Head>
      <Box
        bg={useColorModeValue("gray.100", "black")}
        sx={{
          minH: "100vh",
        }}
      >
        {children}
      </Box>
    </>
  );
}
