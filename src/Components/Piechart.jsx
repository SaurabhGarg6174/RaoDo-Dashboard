import React from "react";
import { Chart } from "react-google-charts";
import data from "../Assets/Data.js";
import "../Styles/Piechart.css";

export default function Piechart() {
  const colors = ["#FFCB49", "#7464FF", "#4FD2B5"];

  return (
    <div
      className="piechart-container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      {data.map((item, index) => (
        <div
          className="piechart-card"
          key={index}
          style={{
            margin: "10px 12px",
            width: "196px",
            height: "266px",
            borderRadius: "12px",
            backgroundColor: "#ffffff",
          }}
        >
          <Chart
            
            chartType="PieChart"
            data={generateChartData(item)}
            options={{
              title: item.heading,
              titleTextStyle: {
                fontSize: "14",
              },
              pieSliceText: "none",
              pieHole: 0.55,
              colors: colors,
              pieSliceTextStyle: {
                color: "transparent",
              },
              legend: { position: "none" },
              backgroundColor: "transparent",
              pieSliceBorderColor: "transparent",
            }}
          />
          {Object.entries(item).map(([key, value], i) => (
            key !== "heading" && (
              <div
                key={key}
                className="legendName"
                style={{
                  backgroundColor: colors[i % colors.length],
                  padding: "2px",
                  margin: "2px",
                  borderRadius: "4px",
                }}
              >
                <span>{key} </span>
                <span> {value}</span>
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
}

// Function to generate chart data dynamically
function generateChartData(item) {
  const chartData = [["Task", "Count"]];

  for (const key in item) {
    if (key !== "heading") {
      chartData.push([key, item[key]]);
    }
  }

  return chartData;
}
