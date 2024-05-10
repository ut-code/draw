"use client";

import Workspace from "../../components/Workspace";
import { tutorialSteps } from "./steps";

export default function App(): JSX.Element {
  return (
    <Workspace
      isTutorial
      tutorialTitle="条件分岐を使う"
      tutorialSteps={tutorialSteps}
      prevTutorial={{ title: "繰り返し文", link: "loop" }}
      nextTutorial={{ title: "関数", link: "function" }}
    />
  );
}
