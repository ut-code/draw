import DownloadButton from "@/app/components/DownloadButton";
import supabase from "@/app/utils/supabase";
import { Box, Flex, Text } from "@chakra-ui/react";

export default async function Page({ params }: { params: { id: string } }) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const { data } = supabase.storage
    .from("work_image")
    .getPublicUrl(`${params.id}.jpg`);

  const response = await fetch(`${baseURL}/api/draw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      workId: params.id,
      mode: "download",
    }),
  });

  if (!response.ok) {
    throw new Error("fetch failed");
  }

  const workData = await response.json();

  return (
    <>
      <meta name="robots" content="noindex" />
      <Flex justify={"center"} mt={"10%"}>
        <svg style={{ width: "80%", height: "40vh" }}>
          <image
            xlinkHref="/frame.png"
            style={{ width: "100%", height: "100%" }}
          />
          <image
            x={"24.5%"}
            y={"23%"}
            xlinkHref={data.publicUrl}
            style={{ width: "52%", height: "52%" }}
          />
        </svg>
      </Flex>
      <Text align={"center"} fontSize="4xl">
        {workData[0].title}{" "}
      </Text>
      <Text align={"center"} fontSize="2xl">
        作: {workData[0].userName}画伯{" "}
      </Text>
      <Box w={"50%"} m={"auto"} mt={"10%"}>
        <DownloadButton title={workData[0].title} imageUrl={data.publicUrl} />
        <Text fontSize="xs">
          額縁:
          <a href="https://jp.freepik.com/free-psd/isolated-golden-luxury-photo-frame_49567803.htm#query=%E9%A1%8D%E7%B8%81&position=1&from_view=keyword&track=ais&uuid=6fd58981-e6cf-45d9-868d-e7891578e74f">
            著作者: vector_corp
          </a>
          /出典: Freepik
        </Text>
      </Box>
    </>
  );
}
