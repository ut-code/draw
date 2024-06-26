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
          ペンと繰り返し文を組み合わせると以下のように正多角形を描くことができます。まずペンの位置を設定します。その後、ペンの角度が360度になるまで、「30度回転して50だけ進む」という動作を繰り返します。ペンの角度が360度になることは、ペンが一回転して初期位置に戻ったことを意味します。
        </Text>
        <Text my={2}>
          以下の例では、正12角形の外角は30度なので、一回あたりのペンの回転角度を30度にすることで正12角形を書くことができています。ペンの角度が360度になるまで描き続けることは、多角形の外角の和が360度になることからも説明できます。
        </Text>
        <Text fontSize="3xl">課題</Text>
        <Text my={2}>
          以下の画像を参考にして、正六角形や正八角形といった、色々な正多角形を描くプログラムをつくってみましょう。
        </Text>
        <Image src="/loop_1.png" alt="正12角形" />
        <Text fontSize="3xl">応用課題</Text>
        <Text my={2}>
          以下の画像のように、繰り返しを用いて色々な図形を描くプログラムをつくってみましょう。
        </Text>
        <Image
          src="/loop_4.png"
          w="30%"
          m="auto"
          alt="繰り返しを用いた色々な図形"
        />
      </>
    ),
  },
  {
    title: "グラデーションを作ろう",
    content: (
      <>
        <Text my={2}>
          変数と繰り返し文を組み合わせると以下のようなグラデーションを作ることができます。ループごとにxの値が増えることで円が右に移動していき、rの値が増えることで色見が変わっていきます。
        </Text>
        <Image src="/loop_2.png" alt="グラデーション" />
      </>
    ),
  },
  // {
  //   title: "乱数を使おう",
  //   content: (
  //     <>
  //       <Text my={2}>
  //         また、画面左の「基本」にある乱数ブロックを使うと以下のような模様を描くことができます。繰り返し文や乱数を使って様々な図形を書いてみましょう。
  //       </Text>
  //       <Image src="/loop_3.png" alt="乱数を使った図形" />
  //     </>
  //   ),
  // },
  {
    title: "確認しよう",
    content: (
      <>
        <Text my={2}>今まで学んだ、繰り返し文を実際に確認してみましょう。</Text>
        <Text my={2}>
          右下の「はじめる」を押して開始しましょう。このスライドは右上の{" "}
          <Image
            src="/check_slide.png"
            alt="スライドを確認する"
            display="inline"
            width="10%"
          />
          を押すともう一度みることができます。
        </Text>
        <Text my={2}>
          確認ができたら右上の
          <Image
            src="/next_tutorial.png"
            alt="次のチュートリアルへ"
            display="inline"
            width="15%"
          />
          をクリックして、次のチュートリアルへ進みましょう。
        </Text>
      </>
    ),
  },
];
