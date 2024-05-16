import { Image, Text } from "@chakra-ui/react";

export const tutorialSteps = [
  {
    title: "繰り返し文を使ってみよう",
    content: (
      <>
        <Text my={2}>
          繰り返し文を用いると、ある条件が満たされている間実行され続けるプログラムを記述することができます。
        </Text>
      </>
    ),
  },
  {
    title: "正多角形を書こう",
    content: (
      <>
        <Text my={2}>
          ペンと繰り返し文を組み合わせると以下のように正多角形を描くことができます。まずペンの座標を設定して、ペンの角度が360度になるまで、「30度回転して50だけ進む」という動作を繰り返しています。
        </Text>
        <Image src="/loop_1.png" alt="正12角形"></Image>
      </>
    ),
  },
  {
    title: "グラデーションを作ろう",
    content: (
      <>
        <Text my={2}>
          変数と繰り返し文を組み合わせると以下のようなグラデーションを作ることができます。
        </Text>
        <Image src="/loop_2.png" alt="グラデーション"></Image>
      </>
    ),
  },
  {
    title: "乱数を使おう",
    content: (
      <>
        <Text my={2}>
          また、画面左の「基本」にある乱数ブロックを使うと以下のような模様を描くことができます。繰り返し文を使って様々な図形を書いてみましょう。
        </Text>
        <Image src="/loop_3.png" alt="乱数を使った図形"></Image>
      </>
    ),
  },
];
