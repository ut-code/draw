import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>ここに作品を展示する</div>
      <Link href="/draw">blockly環境はこちら</Link>
    </>
  );
}
