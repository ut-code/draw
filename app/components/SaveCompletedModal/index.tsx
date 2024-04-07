import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";
import { QRCodeSVG } from "qrcode.react";

type SaveCompletedModalProps = {
  currentId: string;
  onClose(): void;
};

export function SaveCompletedModal(
  props: SaveCompletedModalProps,
): JSX.Element {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <Modal size="lg" isOpen onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>保存が完了しました！</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={3}>
            以下のQRコードを読み込むと、お手持ちのスマートフォンから作品を閲覧・ダウンロードできます。
          </Text>
          <Flex justifyContent={"center"}>
            <QRCodeSVG value={`${baseURL}/work/${props.currentId}`} />
          </Flex>
          <Text my={3}>または</Text>
          <Button
            onClick={() => {
              window.open(`${baseURL}/work/${props.currentId}`, "_blank");
            }}
          >
            この端末で作品を見る
            <RiExternalLinkLine />
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
