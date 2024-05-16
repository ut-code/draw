import { Image, Text } from "@chakra-ui/react";

export const tutorialSteps = [
  {
    title: "CodeYourArtについて",
    content: (
      <>
        <Text my={2}>
          CodeYourArtは、ブロックプログラミングで絵を描くことを通じてプログラミングの基本に親しんでもらおうという企画です。
        </Text>
        <Text my={2}>
          絵を描く方法は大きく二つに分けられて、ペンを使う方法と座標を使う方法です。
        </Text>
      </>
    ),
  },
  {
    title: "ペンを使おう",
    content: (
      <>
        <Text my={2}>まずはペンを使ってみましょう。</Text>
        <Text my={2}>
          画面左にある「ペンを使う」をクリックして、必要なブロックを持ってきます。数字のブロックは「基本」の中に入っています。
        </Text>
        <Text my={2}>
          ブロックをおいたら、「実行」を押すとプログラムが実行されます。実行したら「リセット」を押さないと再実行できません。
        </Text>
        <Text my={2}>
          また、ペンを使うときの角度は横軸に対する角度から指定する方法と今向いている方向から指定する方法があります。どちらも時計回りが正の向きです。
        </Text>
        <Image
          src="/introduction_5.svg"
          alt="角度指定の方法"
          w="50%"
          m="auto"
        />
        <Image src="/introduction_1.png" alt="ペンを使って直線を描く方法" />
      </>
    ),
  },
  {
    title: "座標を使おう",
    content: (
      <>
        <Text my={2}>次に座標を使って簡単な図形を書いてみましょう。</Text>
        <Text my={2}>
          画面左にある「座標を使う」をクリックして、必要なブロックを持ってきます。「以下の図形を赤で塗りつぶす」ブロックを「円」ブロックの上につなげることで円が赤で塗りつぶされます。
        </Text>
        <Image src="/introduction_2.png" alt="赤で塗りつぶした円" />
      </>
    ),
  },
  {
    title: "変数を使おう",
    content: (
      <>
        <Text my={2}>
          次に変数を使ってみましょう。変数とは、「値を一時的に保存しておくための入れ物」です。
        </Text>
        <Text my={2}>
          以下の例では、xとyという変数に300という値を保存し、円の中心の座標として使っています。
        </Text>
        <Image src="/introduction_3.png" alt="座標を指定した円" />
        <Text my={2}>
          以下の例では、RGB値を変数で指定しています。RGBとは、「赤（Red）」「緑（Green）」「青（Blue）」の略で、それぞれに0~255の値を指定することで様々な色を表現できます。例えば、(0,0,0)なら黒、(255,255,255)なら白です。
        </Text>
        <Image src="/introduction_4.png" alt="RGB値を指定した円" />
        <Text my={2}>RGBを用いて様々な色の図形を作ってみましょう。</Text>
      </>
    ),
  },
];
