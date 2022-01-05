import React, { Component } from "react";
import MetricCard from "react-metric-card";

class TheMetricCard extends Component {
  render() {
    return (
      <div>
        <MetricCard
          valueFontFamily="Montserrat"
          value={"89.04%"}
          valueColor="#3e4e78"
          valueFontSize="1.5em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.2em"
          titleColor="#3e4e78"
          iconBgColor="#3e4e78"
          cardClick={true}
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Service Success Rate Percentage"
          fetching={false}
          error={null}
        />
      </div>
    );
  }
}

export default TheMetricCard;
