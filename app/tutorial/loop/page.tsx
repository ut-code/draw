"use client";

import Workspace from "../../components/Workspace";
import { tutorialSteps } from "./steps";

export default function App(): JSX.Element {
  return (
    <Workspace
      isTutorial
      tutorialTitle="繰り返し文を使う"
      tutorialSteps={tutorialSteps}
      prevTutorial={{ title: "基本操作", link: "introduction" }}
      nextTutorial={{ title: "条件分岐", link: "conditional" }}
    />
  );
}
