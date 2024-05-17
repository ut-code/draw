import { Image, Text } from "@chakra-ui/react";

export const tutorialSteps = [
  {
    title: "CodeYourArtについて",
    content: (
      <>
        <Text my={2}>
          CodeYourArtは、ブロックプログラミングで絵を描くことを通じて、創作をしながらプログラムの基本構造を体験いただく企画です。
        </Text>
        <Text my={2}>
          絵を描く方法には、ペンを使う方法と座標を使う方法があります。座標は左上を基準として数え、右下に向かうにつれて大きくなります。
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
          また、「ペンの向き」は横軸に対する角度から指定する方法と、今の方向からの回転量で指定する方法があります。どちらも時計回りが正の向きです。
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
        <Text>
          中心の座標は((左からの距離),(上からの距離))のように対応します。
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
          次に変数を使ってみましょう。変数とは、「値を一時的に保存しておくための入れ物」です。この場合は、値を使い回せることと値の変更が容易であることが変数を使うメリットです。
        </Text>
        <Text my={2}>
          以下の例では、xとyという変数に300という値を保存し、円の中心の座標として使っています。
        </Text>
        <Image src="/introduction_3.png" alt="座標を指定した円" />
        <Text my={2}>
          以下の例では、RGB値を変数で指定しています。RGBとは、「赤(Red)」「緑(Green)」「青(Blue)」の色を、0~255の範囲でどの程度混ぜ合わせるかを指定することで、様々な色を表現できます。例えば、(0,
          0, 0)なら黒、(47, 153, 142)なら緑と青の中間、(255, 255,
          255)なら白です。インターネットで検索すると、RGB値と実際の色の対応関係がわかります。
        </Text>
        <Image src="/introduction_4.png" alt="RGB値を指定した円" />
        <Text my={2}>変数やRGB値を用いて様々な図形を作ってみましょう。</Text>
      </>
    ),
  },
];
