"use client";

import { FormEvent, useState } from "react";
import { Box, Flex, chakra, Icon, Link, Spacer } from "@chakra-ui/react";
import { RiGithubFill } from "react-icons/ri";
import { Logo } from "../components/Logo";
import { DrawWorkspace } from "../components/Draw";
import { TutorialDialog } from "../components/TutorialDialog";
import { SaveModal } from "../components/SaveModal";
import { v4 as uuidv4 } from "uuid";
import supabase from "../utils/supabase";
import { SaveCompletedModal } from "../components/SaveCompletedModal";

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

export default function App(): JSX.Element {
  const [isTutorialDialogOpenedByUser, setIsTutorialDialogOpenedByUser] =
    useState(true);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isSaveCompletedModalOpen, setIsSaveCompletedModalOpen] =
    useState(false);

  const [currentId, setCurrentId] = useState("");
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [permitToShowOnTopPage, setPermitToShowOnTopPage] = useState(false);

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const workId = uuidv4();
    setCurrentId(workId);
    const canvas = document.getElementById(
      "defaultCanvas0",
    ) as HTMLCanvasElement;
    const file = canvas.toDataURL("image/jpeg");
    saveWork(workId, title, userName, permitToShowOnTopPage, file);
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
          <Box display={{ base: "none", lg: "block" }} fontSize="xl">
            draw
          </Box>
          <Spacer />

          <Box display="flex" alignItems="stretch">
            <chakra.button
              px={4}
              type="button"
              transition="color 0.2s"
              _hover={{ color: "blue.300" }}
              onClick={() => {
                setIsTutorialDialogOpenedByUser(true);
              }}
            >
              チュートリアル
            </chakra.button>
            <Link
              display="flex"
              alignItems="center"
              transition="color 0.2s"
              _hover={{ color: "blue.300" }}
              px={2}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ut-code/may-fes-93-algorithm"
            >
              <Icon w={6} h={6} as={RiGithubFill} />
            </Link>
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
      {isTutorialDialogOpenedByUser && (
        <TutorialDialog
          onClose={() => {
            setIsTutorialDialogOpenedByUser(false);
          }}
        />
      )}
      {isSaveModalOpen && (
        <SaveModal
          onClose={() => {
            setIsSaveModalOpen(false);
            setIsSaveCompletedModalOpen(true);
          }}
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
