import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";

type SaveCompletedModalProps = {
  currentId: string;
  onClose(): void;
};

export function SaveCompletedModal(
  props: SaveCompletedModalProps,
): JSX.Element {
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
          <Button
            onClick={() => {
              window.open(
                `http://localhost:3000/work/${props.currentId}`,
                "_blank",
              );
            }}
          >
            作品を見る
            <RiExternalLinkLine />
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
