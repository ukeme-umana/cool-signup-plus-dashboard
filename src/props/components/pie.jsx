import React, { Component } from "react";
import { VictoryPie } from "victory";

class Pie extends React.Component {
  render() {
    return (
      <VictoryPie
        innerRadius={80}
        data={[
          { x: "male", y: 68 },
          { x: "female", y: 21 },
          { x: "farms", y: 11 }
        ]}
        radius={({ datum }) => 130 + datum.y * 0.6}
        colorScale={["#222537", "#2ac0b1", "grey"]}
      />
    );
  }
}

export default Pie;
