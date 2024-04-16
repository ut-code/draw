import { AspectRatio, Box, Grid, Image, Text } from "@chakra-ui/react";

export const tutorialTitle = "draw";

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
    title: "drawについて",
    content: (
      <>
        <Text my={2}>
          drawは、スクラッチのように簡単なプログラミングで色々な図形を書いてみようという企画です。
        </Text>
      </>
    ),
  },
  {
    title: "簡単な図形を書いてみよう",
    content: (
      <>
        <Text my={2}>まずは簡単な図形を書いてみましょう。</Text>
      </>
    ),
  },
  {
    title: "ループ文を使ってみよう",
    content: (
      <Grid templateColumns="4fr 3fr" gap={3}>
        <Box>
          <Text my={2}>ループ文を使ってみましょう。</Text>
        </Box>
        <Image src="sample.png" alt="サンプル画像" />
      </Grid>
    ),
  },
];
