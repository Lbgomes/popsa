import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Popsa.com</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head>
      <div>
        <Flex direction="column" textAlign="center" py="100px" px="20px">
          <Image src="/logo.svg" alt="Popsa" width="127" height="32" />
          <Heading as='h1' mt="53px" mb="20px" fontSize="32px">Welcome to the React frontend test</Heading>
          <Link href="/testpage">
          <Button w="156.4px" h="40px" _active={false} transition="none" _hover={false} mt="51px" color="white" bgColor="#ff015c" borderRadius="8px" alignSelf="center" fontSize="13px" fontWeight="600">Start test</Button>
          </Link> 
        </Flex>
      </div>
    </>
  );
}
