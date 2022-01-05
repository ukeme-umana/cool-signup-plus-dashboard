import React from "react";
import MetricCard from "react-metric-card";

function MetricCards() {
  return (
    <div className="card-positioning">
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"37"}
          valueColor="#fff"
          valueFontSize="1.9em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          cardClick={true}
          cardBgColor="#6202ed"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Total Groups"
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"90"}
          valueColor="#fff"
          valueFontSize="1.9em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          cardClick={true}
          cardBgColor="#2ac0b1"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Total Farmers"
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"0.843"}
          valueColor="#fff"
          valueFontSize="1.9em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          cardClick={true}
          cardBgColor="#2c50ed"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Average Field Size"
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"2.432"}
          valueColor="#fff"
          valueFontSize="1.9em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          cardClick={true}
          cardBgColor="#222537"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Average Group Size"
          fetching={false}
          error={null}
        />
      </div>
    </div>
  );
}

export default MetricCards;
