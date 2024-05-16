import supabase from "./utils/supabase";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import "./styles/style.css";
import { Logo } from "./components/Logo";

export default async function Home() {
  const EXTRACT_NUMBER = 10;

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseURL}/api/draw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mode: "public_download",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("fetch failed");
  }

  const workData: string[] = await response
    .json()
    .then((datas) => datas.map((data: { id: string }) => data.id));

  const imageURLs = workData.map(
    (id) =>
      supabase.storage.from("work_image").getPublicUrl(`${id}.jpg`).data
        .publicUrl,
  );

  const extractedImageURLsTop = imageURLs
    .sort(() => Math.random() - 0.5)
    .slice(0, EXTRACT_NUMBER);
  const extractedImageURLsBottom = imageURLs
    .sort(() => Math.random() - 0.5)
    .slice(0, EXTRACT_NUMBER);

  return (
    <>
      <Box mt={"5vh"} mb={"5vh"}>
        <VStack justify={"center"} width="100%">
          <Logo />
          <Heading as="h1" size="4xl">
            CodeYourArt
          </Heading>
          <Text fontSize="lg">
            ブロックプログラミングであなただけの絵を描こう！
          </Text>
          <Flex>
            <Tooltip label="基本操作とプログラミングの基礎を学ぶ">
              <Button mx={2} as="a" href="/tutorial/introduction">
                基本操作からはじめる
              </Button>
            </Tooltip>
            <Tooltip label="さっそく作る">
              <Button mx={2} as="a" href="/draw">
                自由制作からはじめる
              </Button>
            </Tooltip>
          </Flex>
        </VStack>
      </Box>
      <Box className="slide-contents">
        <Grid templateColumns={`repeat(${EXTRACT_NUMBER},1fr)`} gap={10}>
          {extractedImageURLsTop.map((url) => (
            <Image
              src={url}
              alt="image"
              key={`${url}_1`}
              width={300}
              height={300}
            />
          ))}
        </Grid>
        <Grid templateColumns={`repeat(${EXTRACT_NUMBER},1fr)`} gap={10}>
          {extractedImageURLsTop.map((url) => (
            <Image
              src={url}
              alt="image"
              key={`${url}_2`}
              width={300}
              height={300}
            />
          ))}
        </Grid>
      </Box>
      <Box className="slide-contents-reverse">
        <Grid templateColumns={`repeat(${EXTRACT_NUMBER},1fr)`} gap={10}>
          {extractedImageURLsBottom.map((url) => (
            <Image
              src={url}
              alt="image"
              key={`${url}_3`}
              width={300}
              height={300}
            />
          ))}
        </Grid>
        <Grid templateColumns={`repeat(${EXTRACT_NUMBER},1fr)`} gap={10}>
          {extractedImageURLsBottom.map((url) => (
            <Image
              src={url}
              alt="image"
              key={`${url}_4`}
              width={300}
              height={300}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}
