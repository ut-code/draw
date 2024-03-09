import Blockly /* , { FieldNumber } */ from "blockly";
import { javascriptGenerator } from "../../config/blockly";

const VALUE = "value";

export const CUSTOM_P5_RECT = "rect";
export const CUSTOM_P5_LINE = "line";
export const CUSTOM_P5_LINE_REL = "line_rel";
export const CUSTOM_P5_SIN = "sin";
export const CUSTOM_P5_COS = "cos";

export const CUSTOM_P5_NUMBER_X1 = "custom_p5_number_x1";
export const CUSTOM_P5_NUMBER_Y1 = "custom_p5_number_y1";
export const CUSTOM_P5_NUMBER_X2 = "custom_p5_number_x2";
export const CUSTOM_P5_NUMBER_Y2 = "custom_p5_number_y2";
export const CUSTOM_P5_SIN_NUMBER = "custom_p5_sin_number";
export const CUSTOM_P5_COS_NUMBER = "custom_p5_cos_number";
export const CUSTOM_P5_MUMBER_REL = "custom_p5_number_rel";
export const CUSTOM_P5_NUMBER_ARG = "custom_p5_number_arg";

Blockly.Blocks[CUSTOM_P5_RECT] = {
  init() {
    this.appendDummyInput().appendField("四角");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
  },
};
javascriptGenerator[CUSTOM_P5_RECT] = () => `${CUSTOM_P5_RECT}();`;

Blockly.Blocks[CUSTOM_P5_LINE] = {
  init() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput().appendField("(");
    this.appendValueInput(CUSTOM_P5_NUMBER_X1).setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y1).setCheck("Number");
    this.appendDummyInput().appendField(")から(");
    this.appendValueInput(CUSTOM_P5_NUMBER_X2).setCheck("Number");
    this.appendDummyInput().appendField(",");
    this.appendValueInput(CUSTOM_P5_NUMBER_Y2).setCheck("Number");
    this.appendDummyInput().appendField(")への直線");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
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
    this.appendDummyInput().appendField("ペンの位置から長さ");
    this.appendValueInput(CUSTOM_P5_MUMBER_REL).setCheck("Number");
    this.appendDummyInput().appendField("角度");
    this.appendValueInput(CUSTOM_P5_NUMBER_ARG).setCheck("Number");
    this.appendDummyInput().appendField("度の直線");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
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
