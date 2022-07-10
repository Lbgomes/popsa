import Head from "next/head";
import { Text, Box, useMediaQuery } from "@chakra-ui/react";
import PrintPage from '../components/printPage'


export default function Testpage() {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    const initialData = {
        content: {
          1: { id: 1, image: "https://videodelivery.net/775b1b7196b2c126b8dc343416211fdb/thumbnails/thumbnail.jpg?height=1080" },
          2: { id: 2, image: "https://videodelivery.net/9ad2bb839e4e3cc1074e5d73b0a0379b/thumbnails/thumbnail.jpg?height=1080" },
          3: { id: 3, image: "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/bde5b129-52ba-4f43-b3f4-97591952ea00/large" },
          4: { id: 4, image: "https://videodelivery.net/91097538e177847ebeb934a492e146e9/thumbnails/thumbnail.jpg?height=1080" },
          5: { id: 5, image: "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/b73c2865-7a02-408b-654d-89ce2512ae00/large" },
        },
        columns: {
          "column-1": {
            id: "column-1",
            title: "Page 1",
            imageIds: [1],
          },
          "column-2": {
            id: "column-2",
            title: "Page 2",
            imageIds: [2, 3],
          },
          "column-3": {
            id: "column-3",
            title: "Page 3",
            imageIds: [4, 5],
          },
        },
        // Facilitate reordering of the columns
        columnOrder: ["column-1", "column-2", "column-3"],
    };


  return (
    <>
      <Head>
        <title>Test Page | Popsa.com</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head>

      <Box w={isLargerThan600 ? "600px" : "90%"} m="auto" borderBottom="1px" borderColor="#e4e4e4" mb="30px" pb="21px" >
        <Text fontSize="28px" letterSpacing="0.36px" fontWeight="700" lineHeight="34px" color="#585858" mb="5px" mt="19px" as="h1">Trip to the Beach</Text>
        <Text color="#797979" as="p">Hardback Photobook last edited on Thursday 13 April 2022 at 16:28</Text>
      </Box>
      <PrintPage
        data={initialData}
      />
    </>
  );
}
