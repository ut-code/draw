'use client'

import { useState } from "react";
import { Box, Flex, chakra, Icon, Link, Spacer } from "@chakra-ui/react";
import { RiQuestionFill, RiGithubFill } from "react-icons/ri";
import { Logo } from "../components/Logo";
import { HelpDialog } from "../components/HelpDialog";
import { DrawWorkspace } from "../components/Draw";

export default function App(): JSX.Element {
  const [isTutorialDialogOpenedByUser, setIsTutorialDialogOpenedByUser] =
    useState(false);
  const [isHelpDialogVisible, setIsHelpDialogVisible] = useState(true);

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
            {/* {!isRoot && (
              <chakra.button
                px={4}
                type="button"
                transition="color 0.2s"
                _hover={{ color: "blue.300" }}
                onClick={() => {
                  setIsTutorialDialogOpenedByUser(true);
                }}
              >
                ヒント
              </chakra.button>
            )} */}
            <chakra.button
              px={2}
              type="button"
              transition="color 0.2s"
              _hover={{ color: "blue.300" }}
              onClick={() => {
                setIsHelpDialogVisible(true);
              }}
            >
              <Icon w={6} h={6} as={RiQuestionFill} />
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
              <DrawWorkspace />
            </Box>
        </Box>
      </Flex>
      <HelpDialog
        onClose={() => {
          setIsHelpDialogVisible(false);
        }}
        visible={isHelpDialogVisible}
      />
      {/* {currentRoute &&
        (isTutorialDialogOpenedByUser ||
          !tutorialFinishedRoutePathSet.has(currentRoute.path)) && (
          <TutorialDialog
            isFirstView={!tutorialFinishedRoutePathSet.has(currentRoute.path)}
            onClose={() => {
              setIsTutorialDialogOpenedByUser(false);
              setTutorialFinishedRoutePathSet(
                new Set(tutorialFinishedRoutePathSet).add(currentRoute.path)
              );
            }}
            title={currentRoute.label}
            steps={currentRoute.tutorialSteps}
          />
        )} */}
    </>
  );
}
