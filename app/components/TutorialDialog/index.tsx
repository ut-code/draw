import { Fragment, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { tutorialSteps } from "./steps";
import { tutorialTitle } from "./steps";

type TutorialDialogProps = {
  onClose(): void;
};

export function TutorialDialog(props: TutorialDialogProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Modal size="4xl" isOpen onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{tutorialTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" alignItems="center">
          {tutorialSteps.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && <Icon mx={2} w={5} h={5} as={RiArrowRightSLine} />}
              <Button
                key={step.title}
                colorScheme="blue"
                variant={i === selectedIndex ? "solid" : "ghost"}
                isDisabled={i === selectedIndex}
                flexGrow={1}
                flexBasis={0}
                onClick={() => {
                  setSelectedIndex(i);
                }}
              >
                {step.title}
              </Button>
            </Fragment>
          ))}
        </ModalBody>
        <ModalBody>{tutorialSteps[selectedIndex].content}</ModalBody>
        <ModalFooter>
          <HStack spacing={2}>
            <Button
              isDisabled={selectedIndex === 0}
              onClick={() => {
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              前へ
            </Button>
            <Button
              isDisabled={selectedIndex === tutorialSteps.length - 1}
              onClick={() => {
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              次へ
            </Button>
            {selectedIndex === tutorialSteps.length - 1 && (
              <Button colorScheme="blue" onClick={props.onClose}>
                はじめる
              </Button>
            )}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
