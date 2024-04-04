"use client";

import { Button } from "@chakra-ui/react";

const saveImage = (fileName: string, imageUrl: string) => {
  fetch(imageUrl, {
    method: "GET",
    headers: {},
  }).then((response) => {
    response
      .arrayBuffer()
      .then((buffer) => {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

const DownloadButton = (props: {
  title: string;
  imageUrl: string;
}): JSX.Element => {
  return (
    <Button
      w={"100%"}
      onClick={() => saveImage(`${props.title}.png`, props.imageUrl)}
    >
      端末にダウンロード
    </Button>
  );
};

export default DownloadButton;
