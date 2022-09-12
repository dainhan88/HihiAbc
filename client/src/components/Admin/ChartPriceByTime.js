import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

var colorArray = ["#277BC0", "#7FB77E"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x1: {
      position: "top",
      ticks: {
        callback: function (value, index, values) {
          return this.getLabelForValue(value).split(";")[1];
        },
      },
    },
    x2: {
      position: "bottom",
      ticks: {
        callback: function (value, index, values) {
          return this.getLabelForValue(value).split(";")[0];
        },
      },
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const dataui2 = (data) => ({
  labels: data[0].price.map((item) => ""),
  datasets: [
    ...data.map((item, index) => {
      return {
        label: item.ram,
        data: [...item.price],
        borderColor: colorArray[index],
        backgroundColor: colorArray[index],
        xAxisID: "x1",
      };
    }),
    // {
    //   label: "Dataset 1",
    //   data: [15, 11, 13, 17, 12, 18, 16, 17],
    //   borderColor: "rgb(255, 99, 132)",
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    // {
    //   label: "Dataset 2",
    //   data: [10, 11, 12, 13, 14, 15, 16, 17],
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
});

const ChartPriceByTime = ({ options, data }) => {
  return <Line options={options} data={data} />;
};

export default ChartPriceByTime;
