import Blockly /* , { FieldNumber } */ from "blockly";
import { javascriptGenerator } from "../../config/blockly";

const VALUE = "value";

export const CUSTOM_P5_ARC = "arc";
export const CUSTOM_P5_QUAD = "quad";
export const CUSTOM_P5_POINT = "point";
export const CUSTOM_P5_CIRCLE = "circle";
export const CUSTOM_P5_SQUARE = "square";
export const CUSTOM_P5_ELLIPSE = "ellipse";
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

export const CUSTOM_P5_COLOR = "custom_p5_color";
export const CUSTOM_P5_COLOR_RED = "custom_p5_color_red";
export const CUSTOM_P5_COLOR_GREEN = "custom_p5_color_green";
export const CUSTOM_P5_COLOR_BLUE = "custom_p5_color_blue";
export const CUSTOM_P5_TURTLE_COORDINATE = "custom_p5_turtle_coordinate";
export const CUSTOM_P5_TURTLE_COORDINATE_SET =
  "custom_p5_turtle_coordinate_set";
export const CUSTOM_P5_STROKE_WEIGHT = "custom_p5_stroke_weight";
export const CUSTOM_P5_STROKE_COLOR = "custom_p5_stroke_color";
export const CUSTOM_P5_ERASE_OR_NO_ERASE = "custom_p5_erase_or_no_erase";
export const CUSTOM_P5_COLOR_PRESET = "custom_p5_color_preset";
export const CUSTOM_P5_STROKE_COLOR_PRESET = "custom_p5_stroke_color_preset";
export const CUSTOM_P5_ANGLE_CHANGE = "custom_p5_angle_change";

Blockly.Blocks[CUSTOM_P5_ANGLE_CHANGE] = {
  init() {
    this.appendValueInput("angle")
      .setCheck(null)
      .appendField("直線: 今向いている方向から時計回りに");
    this.appendValueInput("length").setCheck(null).appendField("度回転して");
    this.appendDummyInput().appendField("だけ進む");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
javascriptGenerator[CUSTOM_P5_ANGLE_CHANGE] = (block) =>
  `${CUSTOM_P5_ANGLE_CHANGE}(
        ${javascriptGenerator.valueToCode(block, "angle", 0)},
        ${javascriptGenerator.valueToCode(block, "length", 0)}
        );`;

Blockly.Blocks[CUSTOM_P5_STROKE_COLOR_PRESET] = {
  init() {
    this.appendDummyInput()
      .appendField("ペンの色を")
      .appendField(
        new Blockly.FieldDropdown([
          ["赤", "赤"],
          ["緑", "緑"],
          ["青", "青"],
          ["黒", "黒"],
        ]),
        "field",
      )
      .appendField("にする");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator[CUSTOM_P5_STROKE_COLOR_PRESET] = (block) => {
  const dropdownValue = block.getFieldValue("field");
  return `${CUSTOM_P5_STROKE_COLOR_PRESET}('${dropdownValue}');`;
};

Blockly.Blocks[CUSTOM_P5_COLOR_PRESET] = {
  init() {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["赤", "赤"],
          ["緑", "緑"],
          ["青", "青"],
          ["黒", "黒"],
        ]),
        "field",
      )
      .appendField("で塗りつぶす");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator[CUSTOM_P5_COLOR_PRESET] = (block) => {
  const dropdownValue = block.getFieldValue("field");
  return `${CUSTOM_P5_COLOR_PRESET}('${dropdownValue}');`;
};

Blockly.Blocks[CUSTOM_P5_ERASE_OR_NO_ERASE] = {
  init() {
    this.appendDummyInput()
      .appendField("ペンを")
      .appendField(
        new Blockly.FieldDropdown([
          ["上げる", "上げる"],
          ["下げる", "下げる"],
        ]),
        "field",
      );
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator[CUSTOM_P5_ERASE_OR_NO_ERASE] = (block) => {
  const dropdownValue = block.getFieldValue("field");
  return `${CUSTOM_P5_ERASE_OR_NO_ERASE}('${dropdownValue}');`;
};

Blockly.Blocks[CUSTOM_P5_TURTLE_COORDINATE] = {
  init() {
    this.appendDummyInput()
      .appendField("ペンの")
      .appendField(
        new Blockly.FieldDropdown([
          ["x", "x"],
          ["y", "y"],
        ]),
        "field",
      )
      .appendField("座標");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
javascriptGenerator[CUSTOM_P5_TURTLE_COORDINATE] = (block) => [
  `${CUSTOM_P5_TURTLE_COORDINATE}(
        ${javascriptGenerator.statementToCode(block, "field")}
        )`,
  0,
];

Blockly.Blocks[CUSTOM_P5_STROKE_COLOR] = {
  init: function () {
    this.appendValueInput("r").setCheck(null).appendField("ペンの色を（");
    this.appendValueInput("g").setCheck(null).appendField(",");
    this.appendValueInput("b").setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
javascriptGenerator[CUSTOM_P5_STROKE_COLOR] = (block) =>
  `${CUSTOM_P5_STROKE_COLOR}(
        ${javascriptGenerator.valueToCode(block, "r", 0)},
        ${javascriptGenerator.valueToCode(block, "g", 0)},
        ${javascriptGenerator.valueToCode(block, "b", 0)}
        );`;

Blockly.Blocks[CUSTOM_P5_STROKE_WEIGHT] = {
  init() {
    this.setPreviousStatement(true, null);
    this.appendValueInput("weight").setCheck(null).appendField("ペンの太さを");
    this.appendDummyInput().appendField("にする");
    this.setColour(230);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
javascriptGenerator[CUSTOM_P5_STROKE_WEIGHT] = (block) =>
  `${CUSTOM_P5_STROKE_WEIGHT}(
        ${javascriptGenerator.valueToCode(block, "weight", 0)}
        );`;

Blockly.Blocks[CUSTOM_P5_TURTLE_COORDINATE_SET] = {
  init() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput().appendField("ペンの位置を(");
    this.appendValueInput("x").setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput("y").setCheck("Number");
    this.appendDummyInput().appendField(")にセットする");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
  },
};
javascriptGenerator[CUSTOM_P5_TURTLE_COORDINATE_SET] = (block) =>
  `${CUSTOM_P5_TURTLE_COORDINATE_SET}(
        ${javascriptGenerator.valueToCode(block, "x", 0)},
        ${javascriptGenerator.valueToCode(block, "y", 0)}
        );`;

Blockly.Blocks[CUSTOM_P5_COLOR] = {
  init() {
    this.appendValueInput(CUSTOM_P5_COLOR_RED)
      .setCheck(null)
      .appendField("RGB(");
    this.appendValueInput(CUSTOM_P5_COLOR_GREEN)
      .setCheck(null)
      .appendField(",");
    this.appendValueInput(CUSTOM_P5_COLOR_BLUE).setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
javascriptGenerator[CUSTOM_P5_COLOR] = (block) =>
  `${CUSTOM_P5_COLOR}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_COLOR_RED, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_COLOR_GREEN, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_COLOR_BLUE, 0)}
        );`;

//四角形
Blockly.Blocks[CUSTOM_P5_QUAD] = {
  init() {
    this.appendValueInput(CUSTOM_P5_NUMBER_X1)
      .setCheck(null)
      .appendField("四角形: 四点の座標(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y1).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X2)
      .setCheck(null)
      .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y2).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X3)
      .setCheck(null)
      .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y3).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X4)
      .setCheck(null)
      .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y4).setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendValueInput(CUSTOM_P5_Y).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH).setCheck(null).appendField(") 幅");
    this.appendValueInput(CUSTOM_P5_HEIGHT).setCheck(null).appendField("高さ");
    this.appendValueInput(CUSTOM_P5_ARC_START)
      .setCheck(null)
      .appendField(" 時計回りに");
    this.appendValueInput(CUSTOM_P5_ARC_STOP)
      .setCheck(null)
      .appendField("度から");
    this.appendDummyInput().appendField("度まで");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendValueInput(CUSTOM_P5_X).setCheck(null).appendField("点: 座標(");
    this.appendValueInput(CUSTOM_P5_Y).setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendValueInput(CUSTOM_P5_Y).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH).setCheck(null).appendField(") 直径");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendValueInput(CUSTOM_P5_Y).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH)
      .setCheck(null)
      .appendField(") 一辺の長さ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendValueInput(CUSTOM_P5_NUMBER_Y1).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X2)
      .setCheck(null)
      .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y2).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_X3)
      .setCheck(null)
      .appendField("),(");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y3).setCheck(null).appendField(",");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendValueInput(CUSTOM_P5_Y).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH).setCheck(null).appendField(") 幅");
    this.appendValueInput(CUSTOM_P5_HEIGHT).setCheck(null).appendField("高さ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendValueInput(CUSTOM_P5_Y).setCheck(null).appendField(",");
    this.appendValueInput(CUSTOM_P5_WIDTH).setCheck(null).appendField(") 幅");
    this.appendValueInput(CUSTOM_P5_HEIGHT).setCheck(null).appendField("高さ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
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
    this.appendDummyInput().appendField("直線: 長さ");
    this.appendValueInput(CUSTOM_P5_MUMBER_REL).setCheck("Number");
    this.appendDummyInput().appendField("横軸に対して");
    this.appendValueInput(CUSTOM_P5_NUMBER_ARG).setCheck("Number");
    this.appendDummyInput().appendField("度で進む");
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
    this.appendValueInput(CUSTOM_P5_RANDOM_MIN).setCheck(null);
    this.appendDummyInput().appendField("以上");
    this.appendValueInput(CUSTOM_P5_RANDOM_MAX).setCheck(null);
    this.appendDummyInput().appendField("以下のランダムな整数");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
javascriptGenerator[CUSTOM_P5_RANDOM] = (block) => [
  `${CUSTOM_P5_RANDOM}(
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_RANDOM_MIN, 0)},
        ${javascriptGenerator.valueToCode(block, CUSTOM_P5_RANDOM_MAX, 0)}
        )`,
  0,
];
