import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import {
  Stack,
  Grid,
  Box,
  Button,
  Flex,
  Tbody,
  Tr,
  Table,
  Text,
  chakra,
} from "@chakra-ui/react";
import { useGetSet } from "react-use";
import p5Types from "p5";
import {
  // BlocklyEditorMessage,
  useBlocklyInterpreter,
} from "../../commons/interpreter";
import {
  BlocklyToolboxDefinition,
  useBlocklyWorkspace,
} from "../../commons/blockly";
import {
  CUSTOM_COMMON_WHILE_TRUE,
  CUSTOM_COMMON_DO_UNTIL,
  CUSTOM_COMMON_IF,
  CUSTOM_COMMON_IF_ELSE,
  BUILTIN_LOGIC_COMPARE,
  BUILTIN_LOGIC_NEGATE,
  BUILTIN_LOGIC_OPERATION,
  BUILTIN_MATH_ARITHMETIC,
  BUILTIN_MATH_NUMBER,
} from "../../config/blockly.blocks";
import {
  CUSTOM_P5_RECT,
  CUSTOM_P5_LINE,
  CUSTOM_P5_LINE_REL,
  CUSTOM_P5_SIN,
  CUSTOM_P5_COS,
} from "./blocks";
import { ExecutionManager } from "../../components/ExecutionManager";
import VariableList from "../../components/VariableList";
import dynamic from "next/dynamic";
import Image from "next/image";

const Sketch = dynamic(() => import("react-p5"), {
  ssr: false,
});
const Td = chakra("td", {
  baseStyle: { border: "1px solid gray", px: 2, py: 1 },
});

const toolboxDefinition: BlocklyToolboxDefinition = {
  type: "category",
  categories: [
    {
      name: "基本",
      blockTypes: [
        // 共有のブロック
        CUSTOM_COMMON_WHILE_TRUE,
        CUSTOM_COMMON_DO_UNTIL,
        CUSTOM_COMMON_IF,
        CUSTOM_COMMON_IF_ELSE,
        BUILTIN_LOGIC_COMPARE,
        BUILTIN_LOGIC_NEGATE,
        BUILTIN_LOGIC_OPERATION,
        BUILTIN_MATH_ARITHMETIC,
        BUILTIN_MATH_NUMBER,
        // ワークスペースごとに定義したブロック
        CUSTOM_P5_RECT,
        CUSTOM_P5_LINE,
        CUSTOM_P5_LINE_REL,
        CUSTOM_P5_SIN,
        CUSTOM_P5_COS,
      ],
    },
  ],
  enableVariables: true,
};

type P5WorkspaceState = {
  draw: (p5: p5Types) => void;
  currentX: number;
  currentY: number;
};

function checkUndefined(value: number) {
  if (value === undefined) {
    throw new Error(`値が定義されたブロックを当てはめてください。`);
  }
}

type drawWorkspaceInput = {
  setIsSaveModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function DrawWorkspace(props: drawWorkspaceInput): JSX.Element {
  function init(): P5WorkspaceState {
    const draw = (p5: p5Types) => {
      p5.background(255);
    };
    return {
      draw,
      currentX: 0,
      currentY: 0,
    };
  }

  // interpreter に渡す関数は実行開始時に決定されるため、通常の state だと最新の情報が参照できません
  // このため、反則ですが内部的に ref を用いて状態管理をしている react-use の [useGetSet](https://github.com/streamich/react-use/blob/master/docs/useGetSet.md) を用いています。
  const [getState, setState] = useGetSet(init());
  const [variableNames, setVariableNames] = useState<string[]>([]);

  // javascriptGenerator により生成されたコードから呼ばれる関数を定義します
  const globalFunctions = useRef({
    [CUSTOM_P5_RECT]: () => {
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.rect(0, 0, 100, 100);
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_LINE]: (x1: number, y1: number, x2: number, y2: number) => {
      checkUndefined(x1);
      checkUndefined(y1);
      checkUndefined(x2);
      checkUndefined(y2);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.line(x1, y1, x2, y2);
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_LINE_REL]: (len: number, arg: number) => {
      checkUndefined(len);
      checkUndefined(arg);
      const currentStateStart = getState();
      const x1 = currentStateStart.currentX;
      const y1 = currentStateStart.currentY;
      const x2 = x1 + len * Math.cos((arg / 180) * Math.PI);
      const y2 = y1 + len * Math.sin((arg / 180) * Math.PI);
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.line(x1, y1, x2, y2);
      };
      setState({ draw, currentX: x2, currentY: y2 });
    },
    [CUSTOM_P5_SIN]: (x: number) => {
      checkUndefined(x);
      return Math.sin((x / 180) * Math.PI);
    },
    [CUSTOM_P5_COS]: (x: number) => {
      checkUndefined(x);
      return Math.cos((x / 180) * Math.PI);
    },
  }).current;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 100, 100, 100);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(500, 500);
  };

  const [interval, setInterval] = useState(500);
  const { workspaceAreaRef, highlightBlock, getCode } = useBlocklyWorkspace({
    toolboxDefinition,
    onCodeChange: useCallback((_: unknown, newVariableNames: string[]) => {
      setVariableNames(newVariableNames);
    }, []),
  });
  const interpreter = useBlocklyInterpreter({
    globalFunctions,
    executionInterval: interval,
    onStep: highlightBlock,
  });

  return (
    <Grid h="100%" templateColumns="1fr 0.75fr">
      <div ref={workspaceAreaRef} />
      <Stack p={4} spacing={2} overflow="auto">
        <ExecutionManager
          interpreter={interpreter}
          interval={interval}
          setInterval={setInterval}
          onStart={() => {
            interpreter.start(getCode());
          }}
          onReset={() => {
            setState(init());
          }}
        />
        <VariableList
          interpreter={interpreter}
          variableNames={variableNames}
          renderVariable={() => {
            return undefined;
          }}
        />
        <Grid templateColumns={"0.25fr 0.75fr"}>
          <Text fontSize="xl" mt={2} mr={2}>
            ペンの位置
          </Text>
          <Table>
            <Tbody>
              <Tr>
                <Td>左から {getState().currentX.toPrecision(3)}</Td>
                <Td>上から {getState().currentY.toPrecision(3)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Grid>
        <Flex justifyContent={"center"}>
          <Image
            style={{ marginTop: "23px" }}
            src="./side_scale.svg"
            width={23}
            height={500}
            alt="side scale"
          />
          <Box>
            <Image
              src="./top_scale.svg"
              width={500}
              height={23}
              alt="side scale"
            />
            <Sketch
              setup={setup}
              draw={getState().draw}
              windowResized={windowResized}
            />
          </Box>
        </Flex>
        <Button onClick={() => props.setIsSaveModalOpen(true)} py={2}>
          保存
        </Button>
      </Stack>
    </Grid>
  );
}
