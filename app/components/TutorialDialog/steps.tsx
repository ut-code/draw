import { AspectRatio, Box, Grid, Image, Text } from "@chakra-ui/react";

export const tutorialTitle = "タイトル";

export const tutorialSteps = [
  {
    title: "基本操作",
    content: (
      <>
        <Text mb={3}>下の動画を見て、基本操作を学習できます。</Text>
        <AspectRatio ratio={16 / 9}>
          <iframe
            title="unique"
            src="https://www.youtube-nocookie.com/embed/iQXYZJ3R8pg"
            allow="autoplay; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </>
    ),
  },
  {
    title: "ステップのタイトル1",
    content: (
      <>
        <Text my={2}>HTMLのように書けます。</Text>
      </>
    ),
  },
  {
    title: "ステップのタイトル2",
    content: (
      <Grid templateColumns="4fr 3fr" gap={3}>
        <Box>
          <Text my={2}>画像も載せることができます。</Text>
        </Box>
        <Image src="sample.png" alt="サンプル画像" />
      </Grid>
    ),
  },
];
