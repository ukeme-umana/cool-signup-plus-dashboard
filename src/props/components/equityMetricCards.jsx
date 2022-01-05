import React from "react";
import MetricCard from "react-metric-card";

function EquityMetricCards() {
  return (
    <div className="card-positioning">
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"2194"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="0.9em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#1d38ad"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Farmers Paid Complete Upfront"
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"5349"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="0.9em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#1e9a8d"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Farmers Paid Partial Upfront"
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"1394"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="0.9em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#2c50ed"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Groups Complete Upfront"
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"503"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="0.9em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#222537"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          title="Groups Paid Partial Upfront"
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"N205,000"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#222537"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          trendFontFamily=""
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"N40,000"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#2c50ed"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"N80,000"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#2ac0b1"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          fetching={false}
          error={null}
        />
      </div>
      <div className="mc-div">
        <MetricCard
          valueFontFamily="Montserrat"
          value={"N64,000"}
          valueColor="#fff"
          valueFontSize="2.1em"
          valueFontFamily="Montserrat"
          titleFontFamily="Montserrat"
          titleFontSize="1.1em"
          titleColor="#fff"
          iconBgColor="#3e4e78"
          iconWidth="0px"
          cardClick={true}
          cardBgColor="#6202ed"
          trend={{
            slope: 1,
            description: "Compared to last week",
            value: "0.5%"
          }}
          fetching={false}
          error={null}
        />
      </div>
    </div>
  );
}

export default EquityMetricCards;
