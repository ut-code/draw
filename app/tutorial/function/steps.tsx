import { Image, Text } from "@chakra-ui/react";

export const tutorialSteps = [
  {
    title: "関数とは",
    content: (
      <>
        <Text my={2}>
          プログラミング言語における関数とは、処理のまとまりに名前をつけたものです。関数を使うことで、同じ処理を繰り返し書く必要がなくなり、プログラムを簡潔に記述することができます。
        </Text>
        <Text my={2}>
          例として、五角形をたくさん書きたいという場合を考えてみましょう。
        </Text>

        <Image src="/function_1.png" alt="複数の五角形"></Image>
        <Text my={2}>
          関数を使わないでプログラムを書くと、このようになります。
        </Text>
        <Image
          src="/function_2.png"
          alt="関数を使わずに五角形を描くプログラム"
        ></Image>
        <Text my={2}>
          同じような処理が何度も出現していますね。これを関数を使って書き換えてみましょう。
        </Text>
      </>
    ),
  },
  {
    title: "関数を使ってみよう",
    content: (
      <>
        <Text my={2}>
          先ほどのプログラムで何度も出現していた処理を、五角形を描く関数としてまとめてみましょう。
        </Text>
        <Image src="/function_3.png" alt="五角形を描く関数を定義する"></Image>
        <Text>
          すると、五角形を描く動作が、「五角形を描く」関数を呼び出すだけで実現できるようになりました。
        </Text>
        <Image src="/function_4.png" alt="五角形を描く関数を使う"></Image>
      </>
    ),
  },
  {
    title: "引数を使ってみよう",
    content: (
      <>
        <Text my={2}>
          五角形の辺の長さを変えたいときはどうすればいいでしょうか。関数に引数
          (ひきすう)
          を与えることで、呼び出し時に関数の振る舞いを変えることができます。
        </Text>
        <Text my={2}>
          まず、先ほど作成した五角形を描く関数を変更し、辺の長さを引数として受け取れるようにします。
        </Text>
        <video
          style={{ width: "80%", margin: "auto" }}
          src="/function_5.mp4"
          muted
          autoPlay
          loop
        />
        <Text my={2}>
          次に、関数を呼び出す際に、引数として辺の長さを指定します。すると、辺の長さを指定するだけで、大きさの異なる五角形を描くことができました。
        </Text>
        <video
          style={{ width: "80%", margin: "auto" }}
          src="/function_6.mp4"
          muted
          autoPlay
          loop
        />
      </>
    ),
  },
  {
    title: "確認しよう",
    content: (
      <>
        <Text my={2}>今まで学んだ、関数を実際に確認してみましょう。</Text>
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
          おめでとうございます！これでチュートリアルは最後なので、確認ができたら右上の
          <Image
            src="/free_draw.png"
            alt="自由制作へ"
            display="inline"
            width="10%"
          />
          をクリックして、自由制作へ進みましょう。
        </Text>
      </>
    ),
  },
];
