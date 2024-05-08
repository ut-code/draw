"use client";

import Workspace from "../../components/Workspace";
import { tutorialSteps } from "./steps";

export default function App(): JSX.Element {
  return (
    <Workspace
      isTutorial
      tutorialTitle="関数を使う"
      tutorialSteps={tutorialSteps}
      prevTutorial={{ title: "条件分岐", link: "conditional" }}
    />
  );
}
