"use client";

import Workspace from "../../components/Workspace";
import { tutorialSteps } from "./steps";

export default function App(): JSX.Element {
  return (
    <Workspace
      isTutorial
      tutorialTitle="基本操作を学ぶ"
      tutorialSteps={tutorialSteps}
      nextTutorial={{ title: "繰り返し文", link: "loop" }}
    />
  );
}
