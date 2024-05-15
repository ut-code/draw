import { AspectRatio, Box, Grid, Image, Text } from "@chakra-ui/react";

export const tutorialSteps = [
  {
    title: "条件分岐とは",
    content: (
      <>
        <Text my={2}>
          条件分岐とは、プログラムが特定の条件に基づいて異なる処理を行う仕組みのことです。簡単に言うと、「もし〜ならば、〜する」というような判断をプログラム内で行う方法です。
        </Text>
        <Text my={2}>
          以下の例は、サイコロをふって出た目が3以下のときに、横軸に対して45度で100進むプログラムとなります。
        </Text>
        <Image src="/conditional_1.png" alt="条件分岐の例"></Image>
      </>
    ),
  },
  {
    title: "条件にあてはまらない場合",
    content: (
      <>
        <Text my={2}>
          条件分岐では、条件にあてはまる際の処理と、そうでない場合の処理をまとめて書くことができます。「もし〜ならば〜、違えば～」のブロックを使用します。
        </Text>
        <Text my={2}>
          以下の例は、サイコロをふって出た目が3以下のときに、横軸に対して45度で100進み、そうでないとき、つまりサイコロをふって出た目が3以上のときに、横軸に対して-45度で100進むプログラムとなります。
        </Text>
        <Image src="/conditional_2.png" alt="条件分岐の例"></Image>
      </>
    ),
  },
  {
    title: "使ってみよう",
    content: (
      <>
        <Text my={2}>
          条件分岐を使って、ランダムに角度を変えながらペンを移動させてみましょう。
        </Text>
        <Text my={2}>
          以下のように、
        </Text>
        <Image src="/conditional_2.png" alt="条件分岐の例"></Image>
      </>
    ),
  },
];
