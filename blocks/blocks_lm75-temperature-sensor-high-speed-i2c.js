Blockly.Blocks['lm75'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LM751", null,["Plugin.LM75"], ["Plugin.LM75"]), "LM751")
        .appendField("begin ADD")
        .appendField(new Blockly.FieldTextInput("0x48"), "LM75ADD");
    this.appendValueInput("LM75SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("LM75SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['lm75gettemperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("LM751", null,["Plugin.LM75"], ["Plugin.LM75"]), "LM751")
        .appendField("GetTemperature");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};