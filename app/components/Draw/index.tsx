import { useCallback, useRef, useState } from "react";
import { Stack, Grid } from "@chakra-ui/react";
import { useGetSet } from "react-use";
import p5Types from "p5";
import Sketch from "react-p5";
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
  CUSTOM_P5_POINT,
  CUSTOM_P5_SQUARE,
  CUSTOM_P5_TRIANGLE,
  CUSTOM_P5_ELLIPSE,
  CUSTOM_P5_RECT,
  CUSTOM_P5_LINE,
  CUSTOM_P5_LINE_REL,
  CUSTOM_P5_SIN,
  CUSTOM_P5_COS,
  CUSTOM_P5_RANDOM,
  CUSTOM_P5_CIRCLE,
  CUSTOM_P5_ARC,
  CUSTOM_P5_QUAD,
  CUSTOM_P5_COLOR,
  CUSTOM_P5_TURTLE_COORDINATE,
  CUSTOM_P5_TURTLE_COORDINATE_SET,
  CUSTOM_P5_STROKE_WEIGHT,
  CUSTOM_P5_STROKE_COLOR,
  CUSTOM_P5_ERASE_OR_NO_ERASE,
  CUSTOM_P5_COLOR_PRESET,
  CUSTOM_P5_STROKE_COLOR_PRESET
} from "./blocks";
import { ExecutionManager } from "../../components/ExecutionManager";
import VariableList from "../../components/VariableList";

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
        CUSTOM_P5_SIN,
        CUSTOM_P5_COS,
        CUSTOM_P5_RANDOM,
      ],
    },
    {
      name: "ペンを使う",
      blockTypes: [
        CUSTOM_P5_TURTLE_COORDINATE,
        CUSTOM_P5_TURTLE_COORDINATE_SET,
        CUSTOM_P5_LINE_REL,
        CUSTOM_P5_STROKE_WEIGHT,
        CUSTOM_P5_STROKE_COLOR,
        CUSTOM_P5_STROKE_COLOR_PRESET,
        CUSTOM_P5_ERASE_OR_NO_ERASE
      ],
    },
    {
      name: "座標を使う",
      blockTypes: [
        // ワークスペースごとに定義したブロック
        CUSTOM_P5_COLOR,
        CUSTOM_P5_COLOR_PRESET,
        CUSTOM_P5_ARC,
        CUSTOM_P5_ELLIPSE,
        CUSTOM_P5_CIRCLE,
        CUSTOM_P5_LINE,
        CUSTOM_P5_POINT,
        CUSTOM_P5_QUAD,
        CUSTOM_P5_RECT,
        CUSTOM_P5_SQUARE,
        CUSTOM_P5_TRIANGLE
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

export function DrawWorkspace(): JSX.Element {
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
    [CUSTOM_P5_STROKE_COLOR_PRESET]: (str: string) => {
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        if(str === "赤"){
          p5.stroke(255, 0, 0);
        }else if(str === "緑"){
          p5.stroke(0, 255, 0);
        }else if(str === "黒"){
          p5.stroke(0, 0, 0);
        }else{
          p5.stroke(0, 0, 255);
        }
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_COLOR_PRESET]: (str: string) => {
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        if(str === "赤"){
          p5.fill(255, 0, 0);
        }else if(str === "緑"){
          p5.fill(0, 255, 0);
        }else if(str === "黒"){
          p5.stroke(0, 0, 0);
        }else{
          p5.fill(0, 0, 255);
        }
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_ERASE_OR_NO_ERASE]: (str: string) => {
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        if(str === "下げる"){
          p5.noErase();
        }else{
          p5.erase();
        }
      };
      setState({ ...currentStateStart, draw });
    },

    [CUSTOM_P5_TURTLE_COORDINATE]: (coor: string) => {
      const currentStateStart = getState();
      const x = currentStateStart.currentX;
      const y = currentStateStart.currentY;
      if (coor === "x") {
        return x; 
      } else {
        return y; 
      }
    },
    
    [CUSTOM_P5_STROKE_COLOR]: (r: number, g: number, b: number) => {
      checkUndefined(r);
      checkUndefined(g);
      checkUndefined(b);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.stroke(r, g, b);
      };
      setState({ ...currentStateStart, draw });
    },

    [CUSTOM_P5_STROKE_WEIGHT]: (w: number) => {
      checkUndefined(w);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.strokeWeight(w);
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_TURTLE_COORDINATE_SET]: (x: number, y: number) => {
      checkUndefined(x);
      checkUndefined(y);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
      };
      setState({ draw, currentX: x, currentY: y });
    },
    
    [CUSTOM_P5_COLOR]: (r: number, g: number, b: number) => {
      checkUndefined(r);
      checkUndefined(g);
      checkUndefined(b);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.fill(p5.color(r, g, b));
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_ARC]: (x: number, y: number, w: number, h: number, start: number, stop: number) => {
      checkUndefined(x);
      checkUndefined(y);
      checkUndefined(w);
      checkUndefined(h);
      checkUndefined(start);
      checkUndefined(stop);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.arc(x, y, w, h, (start/180)*Math.PI, (stop/180)*Math.PI);
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_POINT]: (x: number, y: number) => {
      checkUndefined(x);
      checkUndefined(y);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.point(x, y);
      };
      setState({ ...currentStateStart, draw });
    },

    [CUSTOM_P5_CIRCLE]: (x: number, y: number, d: number) => {
      checkUndefined(x);
      checkUndefined(y);
      checkUndefined(d);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.circle(x, y, d);
      };
      setState({ ...currentStateStart, draw });
    },

    [CUSTOM_P5_SQUARE]: (x: number, y: number, s: number) => {
      checkUndefined(x);
      checkUndefined(y);
      checkUndefined(s);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.square(x, y, s);
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_TRIANGLE]: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => {
      checkUndefined(x1);
      checkUndefined(y1);
      checkUndefined(x2);
      checkUndefined(y2);
      checkUndefined(x3);
      checkUndefined(y3);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.triangle(x1, y1, x2, y2, x3, y3);
      };
      setState({ ...currentStateStart, draw });
    },
    [CUSTOM_P5_QUAD]: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4:number) => {
      checkUndefined(x1);
      checkUndefined(y1);
      checkUndefined(x2);
      checkUndefined(y2);
      checkUndefined(x3);
      checkUndefined(y3);
      checkUndefined(x4);
      checkUndefined(y4);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.quad(x1, y1, x2, y2, x3, y3, x4, y4);
      };
      setState({ ...currentStateStart, draw });
    },

    [CUSTOM_P5_ELLIPSE]: (x: number, y: number, w: number, h: number) => {
      checkUndefined(x);
      checkUndefined(y);
      checkUndefined(w);
      checkUndefined(h);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.ellipse(x, y, w, h);
      };
      setState({ ...currentStateStart, draw });
    },

    [CUSTOM_P5_RECT]: (x: number, y: number, w: number, h: number) => {
      checkUndefined(x);
      checkUndefined(y);
      checkUndefined(w);
      checkUndefined(h);
      const currentStateStart = getState();
      const draw: (p5: p5Types) => void = (p5) => {
        currentStateStart.draw(p5);
        p5.rect(x, y, w, h);
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
        setState({draw, currentX: x2, currentY: y2});
    },
    [CUSTOM_P5_SIN]: (x: number) => {
      checkUndefined(x);
      return Math.sin((x / 180) * Math.PI);
    },
    [CUSTOM_P5_COS]: (x: number) => {
      checkUndefined(x);
      return Math.cos((x / 180) * Math.PI);
    },    
    [CUSTOM_P5_RANDOM]: (x: number, y: number) => {
      checkUndefined(x);
      checkUndefined(y);
      return Math.floor(Math.random() * (y - x + 1)) + x;
    }
  }).current;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
    p5.colorMode(p5.RGB, 256); //色を実装したい
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(300, 300);
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
    <Grid h="100%" templateColumns="1fr 25rem">
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
        <Sketch
          setup={setup}
          draw={getState().draw}
          windowResized={windowResized}
        />
      </Stack>
    </Grid>
  );
}
