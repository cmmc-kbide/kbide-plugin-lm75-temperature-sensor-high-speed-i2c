module.exports = [
    {
        name: "LM75",
        blocks: [
            {
                xml:
                    `<block type="lm75">
                        <value name="LM75SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="LM75SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="lm75gettemperature">
                     </block>`
            }
        ]
    }
];