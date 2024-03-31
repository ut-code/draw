import supabase from "@/app/utils/supabase";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = supabase.storage
    .from("work_image")
    .getPublicUrl(`${params.id}.jpg`);

  const host = headers().get("host");

  const response = await fetch(`http://${host}/api/draw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      workId: params.id,
      mode: "download",
    }),
  });

  if (!response.ok) {
    throw new Error("fetch failed");
  }

  const workData = await response.json();

  return (
    <>
      <Image
        src={data.publicUrl}
        alt="作品の画像"
        width={1000}
        height={1000}
        style={{ width: "50%", height: "50%" }}
      />
      <div>work id: {params.id}</div>
      <div>title: {workData[0].title} </div>
      <div>user name: {workData[0].userName} </div>
    </>
  );
}
