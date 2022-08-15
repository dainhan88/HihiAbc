import React from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Phân Tích  Bán Hàng",
    },
  },
};

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 5, 6, 5, 4, 9, 7, 8],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const handleData = (data, labels) => {
  if (!data) return;
  return labels
    .reduce((acc, curr, index) => {
      return [...acc, { name: curr, value: 0 }];
    }, [])
    ?.map((itemlb, index) => {
      data.map((item) => {
        if (item._id - 1 === index) {
          return (itemlb = { value: item.total });
        }
      });
      return itemlb.value;
    });
};

const HomeAdmin = () => {
  const [dataProfitMonthy, setDataProfitMonthy] = React.useState();
  React.useEffect(() => {
    axios.get("/api/order/v2/getProfitMonthly").then((res) => {
      setDataProfitMonthy(res.data);
    });
  }, []);
  const monthlyProfit = handleData(dataProfitMonthy, labels);
  const dataProfit = {
    labels,
    datasets: [
      {
        label: "Doanh Thu",
        data: monthlyProfit,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="page-container ">
      <h1 className="text-red-500  font-bold uppercase mt-28 text-center text-[20px]">
        Hiệu Quả Bán Hàng
      </h1>
      <div className=" w-[900px] mt-10 page-container">
        <Bar options={options} data={dataProfit} />
      </div>
    </div>
  );
};

export default HomeAdmin;
