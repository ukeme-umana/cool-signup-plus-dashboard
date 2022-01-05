import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

function Charts() {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryLine
        style={{
          data: { stroke: "#0077FF" },
          parent: { border: "1px solid #ccc" }
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 6 },
          { x: 6, y: 8 },
          { x: 7, y: 12 },
          { x: 8, y: 15 },
          { x: 9, y: 15 },
          { x: 10, y: 16 }
        ]}
      />
    </VictoryChart>
  );
}

export default Charts;
