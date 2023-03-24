import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";
import "chartjs-plugin-datalabels";
import moment from "moment";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export default function CoinChart(props) {
  const { coin } = props;

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: coin.values.dates.map((item) =>
            moment(item).format("DD/MM/YYYY HH:mm:ss")
          ),
          datasets: [
            {
              label: "Valor",
              data: coin.values.prices.map((item) => item),
              fill: false,
              borderColor: "#0077be",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [coin]);

  return (
    <canvas
      ref={chartRef}
      style={{ height: "60%", width: "60%", borderRadius: "8px" }}
    />
  );
}
