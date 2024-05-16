import { FormEvent, useState } from "react";
import {
  Box,
  Flex,
  chakra,
  Icon,
  Link as ChakraLink,
  Spacer,
  Text,
  Button,
} from "@chakra-ui/react";
import { RiGithubFill, RiPlayFill } from "react-icons/ri";
import { Logo } from "../Logo";
import { DrawWorkspace } from "../Draw";
import { TutorialDialog } from "../TutorialDialog";
import { SaveModal } from "../SaveModal";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../utils/supabase";
import { SaveCompletedModal } from "../SaveCompletedModal";
import Link from 'next/link'

type WorkspaceProps = {
  isTutorial: boolean;
  tutorialTitle?: string;
  tutorialSteps?: {
    title: string;
    content: JSX.Element;
  }[];
  prevTutorial?: {
    title: string;
    link: string;
  };
  nextTutorial?: {
    title: string;
    link: string;
  };
};

export default function Workspace(props: WorkspaceProps): JSX.Element {
  const {
    isTutorial,
    tutorialTitle,
    tutorialSteps,
    prevTutorial,
    nextTutorial,
  } = props;

  const [isTutorialDialogOpenedByUser, setIsTutorialDialogOpenedByUser] =
    useState(true);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isSaveCompletedModalOpen, setIsSaveCompletedModalOpen] =
    useState(false);

  const [currentId, setCurrentId] = useState("");
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [permitToShowOnTopPage, setPermitToShowOnTopPage] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const saveWork = async (
    workId: string,
    title: string,
    userName: string,
    permitToShowOnTopPage: boolean,
    fileString: string,
  ) => {
    const fileBuffer = Buffer.from(
      fileString.replace(/^data:\w+\/\w+;base64,/, ""),
      "base64",
    );
    const file = new File([fileBuffer], workId, { type: "image/jpeg" });
    await supabase.storage.from("work_image").upload(`${workId}.jpg`, file, {
      cacheControl: "3600",
      upsert: false,
    });

    const url = "/api/draw";
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workId,
        title: title === "" ? "無題" : title,
        userName: userName === "" ? "名無し" : userName,
        permitToShowOnTopPage: permitToShowOnTopPage,
        mode: "upload",
      }),
    };

    await fetch(url, params);
  };

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    setIsSaving(true);
    e.preventDefault();
    const workId = uuidv4();
    setCurrentId(workId);
    const canvas = document.getElementById(
      "defaultCanvas0",
    ) as HTMLCanvasElement;
    const file = canvas.toDataURL("image/jpeg");
    saveWork(workId, title, userName, permitToShowOnTopPage, file).then(() => {
      setIsSaving(false);
      setIsSaveModalOpen(false);
      setIsSaveCompletedModalOpen(true);
    });
  };

  return (
    <>
      <Flex direction="column" height="100%">
        <Flex
          align="center"
          justify="space-between"
          shadow="md"
          backgroundColor="gray.50"
          px={3}
        >
          <Logo />
          <Box display={{ base: "none", lg: "block" }} mx={2} fontSize="xl">
            <Link href="/">CodeYourArt</Link>
          </Box>
          <Spacer />

          <Box display="flex" alignItems="stretch">
            {isTutorial && (
              <>
                {prevTutorial && (
                  <Button
                    mx={2}
                    as="a"
                    href={`/tutorial/${prevTutorial.link}`}
                    colorScheme="blue"
                    variant="outline"
                    my="auto"
                  >
                    前のチュートリアルへ
                  </Button>
                )}
                <Box textAlign="center" mx={2}>
                  <Text fontSize="xl" m={"10px"}>
                    目標: {tutorialTitle}
                  </Text>
                </Box>
                {nextTutorial ? (
                  <Button
                    mx={2}
                    as="a"
                    href={`/tutorial/${nextTutorial.link}`}
                    colorScheme="blue"
                    variant="outline"
                    my="auto"
                  >
                    次のチュートリアルへ
                  </Button>
                ) : (
                  <Button
                    as="a"
                    href="/draw"
                    colorScheme="blue"
                    variant="outline"
                    my="auto"
                  >
                    自由制作へ
                  </Button>
                )}
                <Button
                  mx={2}
                  my="auto"
                  colorScheme="blue"
                  type="button"
                  transition="color 0.2s"
                  _hover={{ color: "blue.300" }}
                  onClick={() => {
                    setIsTutorialDialogOpenedByUser(true);
                  }}
                >
                  スライドを確認
                </Button>
              </>
            )}
            <ChakraLink
              display="flex"
              alignItems="center"
              transition="color 0.2s"
              _hover={{ color: "blue.300" }}
              px={2}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ut-code/draw"
            >
              <Icon w={6} h={6} as={RiGithubFill} />
            </ChakraLink>
          </Box>
        </Flex>
        <Box position="relative" flexGrow={1}>
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            backgroundColor="white"
          >
            <DrawWorkspace setIsSaveModalOpen={setIsSaveModalOpen} />
          </Box>
        </Box>
      </Flex>
      {isTutorialDialogOpenedByUser && tutorialTitle && tutorialSteps && (
        <TutorialDialog
          onClose={() => {
            setIsTutorialDialogOpenedByUser(false);
          }}
          tutorialTitle={tutorialTitle}
          tutorialSteps={tutorialSteps}
        />
      )}
      {isSaveModalOpen && (
        <SaveModal
          onClose={() => {
            setIsSaveModalOpen(false);
          }}
          isSaving={isSaving}
          title={title}
          setTitle={setTitle}
          userName={userName}
          setUserName={setUserName}
          permitToShowOnTopPage={permitToShowOnTopPage}
          setPermitToShowOnTopPage={setPermitToShowOnTopPage}
          handleSave={handleSave}
        />
      )}
      {isSaveCompletedModalOpen && (
        <SaveCompletedModal
          currentId={currentId}
          onClose={() => {
            setIsSaveCompletedModalOpen(false);
          }}
        />
      )}
    </>
  );
}
