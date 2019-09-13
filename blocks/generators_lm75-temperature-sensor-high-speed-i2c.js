Blockly.JavaScript['lm75'] = function(block) {
  var variable_lm751 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('LM751'), Blockly.Variables.NAME_TYPE);
  var text_lm75add = block.getFieldValue('LM75ADD');
  var value_lm75sda = Blockly.JavaScript.valueToCode(block, 'LM75SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lm75scl = Blockly.JavaScript.valueToCode(block, 'LM75SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
      var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include <M2M_LM75A.h>#END

#VARIABLE
M2M_LM75A ${variable_lm751}(${text_lm75add});
#END
Wire.begin(${value_lm75sda},${value_lm75scl});\n

`;
  return code;
};
Blockly.JavaScript['lm75gettemperature'] = function(block) {
  var variable_lm751 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('LM751'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_lm751}.getTemperature()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};