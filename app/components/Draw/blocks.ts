import Blockly /* , { FieldNumber } */ from "blockly";
import { javascriptGenerator } from "../../config/blockly";

const VALUE = "value";

export const CUSTOM_P5_ARC = "arc";
export const CUSTOM_P5_QUAD = "quad";
export const CUSTOM_P5_POINT = "point";
export const CUSTOM_P5_CIRCLE = "circle";
export const CUSTOM_P5_SQUARE ="square";
export const CUSTOM_P5_ELLIPSE ="ellipse";
export const CUSTOM_P5_RECT = "rect";
export const CUSTOM_P5_TRIANGLE = "triangle";
export const CUSTOM_P5_LINE = "line";
export const CUSTOM_P5_LINE_REL = "line_rel";
export const CUSTOM_P5_SIN = "sin";
export const CUSTOM_P5_COS = "cos";
export const CUSTOM_P5_RANDOM = "random";

export const CUSTOM_P5_X = "custom_p5_x";
export const CUSTOM_P5_Y = "custom_p5_y";
export const CUSTOM_P5_WIDTH = "custom_p5_width";
export const CUSTOM_P5_HEIGHT = "custom_p5_height";
export const CUSTOM_P5_ARC_START = "custom_p5_arc_start";
export const CUSTOM_P5_ARC_STOP = "custom_p5_arc_stop";

export const CUSTOM_P5_NUMBER_X1 = "custom_p5_number_x1";
export const CUSTOM_P5_NUMBER_Y1 = "custom_p5_number_y1";
export const CUSTOM_P5_NUMBER_X2 = "custom_p5_number_x2";
export const CUSTOM_P5_NUMBER_Y2 = "custom_p5_number_y2";
export const CUSTOM_P5_NUMBER_X3 = "custom_p5_number_x3";
export const CUSTOM_P5_NUMBER_Y3 = "custom_p5_number_y3";
export const CUSTOM_P5_NUMBER_X4 = "custom_p5_number_x4";
export const CUSTOM_P5_NUMBER_Y4 = "custom_p5_number_y4";
export const CUSTOM_P5_SIN_NUMBER = "custom_p5_sin_number";
export const CUSTOM_P5_COS_NUMBER = "custom_p5_cos_number";
export const CUSTOM_P5_MUMBER_REL = "custom_p5_number_rel";
export const CUSTOM_P5_NUMBER_ARG = "custom_p5_number_arg";
export const CUSTOM_P5_RANDOM_MIN = "custom_p5_random_min";
export const CUSTOM_P5_RANDOM_MAX = "custom_p5_random_max";

//四角形
Blockly.Blocks[CUSTOM_P5_QUAD] = {
  init() {
    this.appendValueInput(CUSTOM_P5_NUMBER_X1)
        .setCheck(null)
        .appendField("四角形: 四点の座標(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y1)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X2)
        .setCheck(null)
        .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y2)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X3)
        .setCheck(null)
        .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y3)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X4)
        .setCheck(null)
        .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y4)
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_QUAD] = (block) =>
  `${CUSTOM_P5_QUAD}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X1, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y1, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X2, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y2, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X3, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y3, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X4, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y4, 0)}
        );`;

//弧
Blockly.Blocks[CUSTOM_P5_ARC] = {
  init() {
    this.appendValueInput(CUSTOM_P5_X)
        .setCheck(null)
        .appendField("弧: 中心の座標(");
    this.appendValueInput(CUSTOM_P5_Y)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH)
        .setCheck(null)
        .appendField(") 幅");
    this.appendValueInput(CUSTOM_P5_HEIGHT)
        .setCheck(null)
        .appendField("高さ");
    this.appendValueInput(CUSTOM_P5_ARC_START)
        .setCheck(null)
        .appendField(" 時計回りに");
    this.appendValueInput(CUSTOM_P5_ARC_STOP)
        .setCheck(null)
        .appendField("度から");
    this.appendDummyInput()
        .appendField("度まで");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_ARC] = (block) =>
  `${CUSTOM_P5_ARC}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_X, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_Y, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_WIDTH, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_HEIGHT, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_ARC_START, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_ARC_STOP, 0)}
        );`;

//点
Blockly.Blocks[CUSTOM_P5_POINT] = {
  init() {
    this.appendValueInput(CUSTOM_P5_X)
        .setCheck(null)
        .appendField("点: 座標(");
    this.appendValueInput(CUSTOM_P5_Y)
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_POINT] = (block) =>
  `${CUSTOM_P5_POINT}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_X, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_Y, 0)}
        );`;

//円
Blockly.Blocks[CUSTOM_P5_CIRCLE] = {
  init() {
    this.appendValueInput(CUSTOM_P5_X)
        .setCheck(null)
        .appendField("円: 中心の座標(");
    this.appendValueInput(CUSTOM_P5_Y)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH)
        .setCheck(null)
        .appendField(") 直径");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_CIRCLE] = (block) =>
  `${CUSTOM_P5_CIRCLE}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_X, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_Y, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_WIDTH, 0)}
        );`;

//正方形
Blockly.Blocks[CUSTOM_P5_SQUARE] = {
  init() {
    this.appendValueInput(CUSTOM_P5_X)
        .setCheck(null)
        .appendField("正方形: 左上の頂点の座標(");
    this.appendValueInput(CUSTOM_P5_Y)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH)
        .setCheck(null)
        .appendField(") 一辺の長さ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_SQUARE] = (block) =>
  `${CUSTOM_P5_SQUARE}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_X, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_Y, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_WIDTH, 0)}
        );`;

//三角形
Blockly.Blocks[CUSTOM_P5_TRIANGLE] = {
  init() {
    this.appendValueInput(CUSTOM_P5_NUMBER_X1)
        .setCheck(null)
        .appendField("三角形: 三点の座標(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y1)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X2)
        .setCheck(null)
        .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y2)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X3)
        .setCheck(null)
        .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y3)
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_TRIANGLE] = (block) =>
  `${CUSTOM_P5_TRIANGLE}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X1, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y1, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X2, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y2, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X3, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y3, 0)}
        );`;

//楕円
Blockly.Blocks[CUSTOM_P5_ELLIPSE] = {
  init() {
    this.appendValueInput(CUSTOM_P5_X)
        .setCheck(null)
        .appendField("楕円: 中心の座標（");
    this.appendValueInput(CUSTOM_P5_Y)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH)
        .setCheck(null)
        .appendField(") 幅");
    this.appendValueInput(CUSTOM_P5_HEIGHT)
        .setCheck(null)
        .appendField("高さ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_ELLIPSE] = (block) =>
  `${CUSTOM_P5_ELLIPSE}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_X, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_Y, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_WIDTH, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_HEIGHT, 0)}
        );`;

//長方形
Blockly.Blocks[CUSTOM_P5_RECT] = {
  init() {
    this.appendValueInput(CUSTOM_P5_X)
        .setCheck(null)
        .appendField("長方形: 左上の頂点の座標（");
    this.appendValueInput(CUSTOM_P5_Y)
        .setCheck(null)
        .appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH)
        .setCheck(null)
        .appendField(") 幅");
    this.appendValueInput(CUSTOM_P5_HEIGHT)
        .setCheck(null)
        .appendField("高さ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_RECT] = (block) =>
  `${CUSTOM_P5_RECT}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_X, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_Y, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_WIDTH, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_HEIGHT, 0)}
        );`;

Blockly.Blocks[CUSTOM_P5_LINE] = {
  init() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput().appendField("直線: (");
    this.appendValueInput(CUSTOM_P5_NUMBER_X1).setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y1).setCheck("Number");
    this.appendDummyInput().appendField(")から(");
    this.appendValueInput(CUSTOM_P5_NUMBER_X2).setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y2).setCheck("Number");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  },
};
javascriptGenerator[CUSTOM_P5_LINE] = (block) =>
  `${CUSTOM_P5_LINE}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X1, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y1, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_X2, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_Y2, 0)}
        );`;

Blockly.Blocks[CUSTOM_P5_LINE_REL] = {
  init() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput().appendField("直線: ペンの位置から長さ");
    this.appendValueInput(CUSTOM_P5_MUMBER_REL).setCheck("Number");
    this.appendDummyInput().appendField("角度");
    this.appendValueInput(CUSTOM_P5_NUMBER_ARG).setCheck("Number");
    this.appendDummyInput().appendField("度");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  },
};
javascriptGenerator[CUSTOM_P5_LINE_REL] = (block) =>
  `${CUSTOM_P5_LINE_REL}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_MUMBER_REL, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_NUMBER_ARG, 0)}
        );`;

Blockly.Blocks[CUSTOM_P5_SIN] = {
  init() {
    this.appendDummyInput().appendField("sin");
    this.appendValueInput(CUSTOM_P5_SIN_NUMBER).setCheck("Number");
    this.appendDummyInput().appendField("°");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
  },
};
javascriptGenerator[CUSTOM_P5_SIN] = (block) => [
  `${CUSTOM_P5_SIN}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_SIN_NUMBER, 0)}
        )`,
  0,
];
Blockly.Blocks[CUSTOM_P5_COS] = {
  init() {
    this.appendDummyInput().appendField("cos");
    this.appendValueInput(CUSTOM_P5_COS_NUMBER).setCheck("Number");
    this.appendDummyInput().appendField("°");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
  },
};
javascriptGenerator[CUSTOM_P5_COS] = (block) => [
  `${CUSTOM_P5_COS}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_COS_NUMBER, 0)}
        )`,
  0,
];

Blockly.Blocks[CUSTOM_P5_RANDOM] = {
  init() {
    this.appendValueInput(CUSTOM_P5_RANDOM_MIN)
        .setCheck(null);
    this.appendDummyInput()
        .appendField("以上");
    this.appendValueInput(CUSTOM_P5_RANDOM_MAX)
        .setCheck(null);
    this.appendDummyInput()
        .appendField("以下のランダムな整数"); 
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
javascriptGenerator[CUSTOM_P5_RANDOM] = (block) => [
  `${CUSTOM_P5_RANDOM}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_RANDOM_MIN, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_RANDOM_MAX, 0)}
        )`, 0,
];