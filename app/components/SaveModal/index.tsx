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
  Switch,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

type SaveModalProps = {
  onClose(): void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  permitToShowOnTopPage: boolean;
  setPermitToShowOnTopPage: Dispatch<SetStateAction<boolean>>;
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
                mb={6}
              />
              <FormLabel>ニックネーム</FormLabel>
              <Input
                type="text"
                value={props.userName}
                onChange={(e) => props.setUserName(e.target.value)}
              />
              <FormHelperText mb={6}>
                個人情報を含めないでください。
              </FormHelperText>
              <Flex>
                <Switch
                  type="checkbox"
                  isChecked={props.permitToShowOnTopPage}
                  onChange={(e) =>
                    props.setPermitToShowOnTopPage(e.target.checked)
                  }
                />
                <FormLabel>トップページへの掲載を許可</FormLabel>
              </Flex>
              <Alert status="warning">
                <AlertIcon />
                送信された情報は第三者に閲覧される可能性があります。了承できる場合のみ保存ボタンを押してください。
              </Alert>
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
