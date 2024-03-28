import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  Spacer,
  FormControl,
} from "@chakra-ui/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

type SaveModalProps = {
  onClose(): void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  handleSave(e: FormEvent<HTMLFormElement>): void;
};

export function SaveModal(props: SaveModalProps): JSX.Element {
  return (
    <Modal size="md" isOpen onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>保存する</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={(e) => {
              props.handleSave(e);
              props.onClose();
            }}
          >
            <FormControl>
              <FormLabel>作品のタイトル</FormLabel>
              <Input
                type="text"
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
              ></Input>
              <FormLabel>ニックネーム</FormLabel>
              <Input
                type="text"
                value={props.userName}
                onChange={(e) => props.setUserName(e.target.value)}
              ></Input>
              <FormHelperText>個人情報を含めないでください。</FormHelperText>
              <Flex>
                <Spacer />
                <Button my={2} colorScheme="blue" type="submit">
                  保存
                </Button>
              </Flex>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
