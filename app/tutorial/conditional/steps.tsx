import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const tutorialSteps = [
  {
    title: "条件分岐とは",
    content: (
      <>
        <Text my={2}>
          条件分岐とは、プログラムが特定の条件に基づいて異なる処理を行う仕組みのことです。簡単に言うと、「もし〜ならば、〜する」というような判断をプログラム内で行う方法です。
        </Text>
        <Text my={2}>
          以下の例は、サイコロをふって出た目が3以下のときに、ペンを横軸に対して45度で100進めるプログラムとなります。
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
          以下の例は、サイコロをふって出た目が3以下のときに、ペンを横軸に対して45度で100進め、そうでないとき、つまりサイコロをふって出た目が4以上のときに、ペンを横軸に対して-45度で100進めるプログラムとなります。
        </Text>
        <Image src="/conditional_2.png" alt="条件分岐の例"></Image>
      </>
    ),
  },
  {
    title: "使ってみよう",
    content: (
      <>
        <Text fontSize="3xl">課題</Text>
        <Text my={2}>
          以下の画像のように、条件分岐を使って、ランダムに上に行ったり下に行ったりしながら、ペンを左端から右端まで移動させてみましょう。例えば確率1/2で右上に向かって進み、確率1/2で右下に向かって進むことが考えられます。
        </Text>
        <Text my={2}>
          このように、次の状態(今回の場合、ペンの位置)が現在の状態(ペンの位置)に依存してランダムに変動する過程を、
          <Text as="b">ランダムウォーク</Text>といいます。
        </Text>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              ヒント
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <UnorderedList>
                <ListItem>
                  サイコロをふって3以下の目が出る確率は1/2です。さらに、そうでない(4以上の目が出る)ときの確率も1/2です。
                </ListItem>
                <ListItem>
                  「サイコロをふる」は「1以上6以下のランダムな整数」で実現できます。
                </ListItem>
                <ListItem>
                  「右下に進む」は「横軸に対して45度で100だけ進む」ブロックで実現できます。逆に「右上に進む」は「横軸に対して-45度で100だけ進む」ブロックで実現できます。
                </ListItem>
                <ListItem>「繰り返し」を用いて右端に到達しましょう。</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <video
          style={{ width: "60%", margin: "auto" }}
          src="/conditional_3.mp4"
          muted
          autoPlay
          loop
        />
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
