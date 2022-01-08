import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
import './HistoryChart.css';
import { historyOptions } from "./chartConfigs.js";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("yeah");
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.8)",
              borderColor: "rgba(174, 305, 204, 1.2)",
              pointRadius: 0.2,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });
  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <h2 className="curr_price">₹ {detail.current_price.toFixed(2)}</h2>
          {/* <h3
            className={
              detail.price_change_24h < 0
                ? "red1"
                : "green1"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </h3> */}

          {detail.price_change_24h < 0?
          <h3 className="red1">▼ {detail.price_change_percentage_24h.toFixed(2)}%</h3>:
          <h3 className="green1">▲ {detail.price_change_percentage_24h.toFixed(2)}%</h3>
          }
            

        </>
      );
    }
  };
  return (
    <div className="chart1" >
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={1000} height={400}></canvas>
      </div>

  <div className="button_s">
 <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-secondary" onClick={() => setTimeFormat("24h")}>24 Hrs</button>
  <button type="button" class="btn btn-warning" onClick={() => setTimeFormat("7d")}>7 Days</button>
  <button type="button" class="btn btn-info" onClick={() => setTimeFormat("1y")}>1 Year</button>
</div>
</div>
      </div>
  );
};

export default HistoryChart;