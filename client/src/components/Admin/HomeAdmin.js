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
import { startOfDay, endOfDay, addDays, subDays, formatISO } from "date-fns";
import { CustomProvider, DateRangePicker } from "rsuite";
import vi from "date-fns/locale/vi";
import "rsuite/dist/rsuite.css";

const Calendar = {
  sunday: "CN",
  monday: "T2",
  tuesday: "T3",
  wednesday: "T4",
  thursday: "T5",
  friday: "T6",
  saturday: "T7",
  ok: "OK",
  /**
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   **/
  formattedMonthPattern: "MMM yyyy",
  formattedDayPattern: "dd MMM yyyy",
  dateLocale: vi,
};

// /////////////////////////////////////////////////////////////////
const Ranges = [
  {
    label: "Hôm nay",
    value: [startOfDay(new Date()), endOfDay(new Date())],
  },
  {
    label: "Hôm qua",
    value: [
      startOfDay(addDays(new Date(), -1)),
      endOfDay(addDays(new Date(), -1)),
    ],
  },
  {
    label: "7 ngày trước",
    value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
  },
  {
    label: "30 ngày trước",
    value: [startOfDay(subDays(new Date(), 30)), endOfDay(new Date())],
  },
];
const locale = {
  Calendar,
  Ranges,
  DatePicker: {
    ...Calendar,
  },
  DateRangePicker: {
    ...Calendar,
  },
};

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

const data2 = (data, labels) => ({
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: data,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
});

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
  const [valueDate, setvalueDate] = React.useState();
  const [dataProfitMonthy, setDataProfitMonthy] = React.useState();
  const [dataRange, setDataRange] = React.useState([]);
  const [indexChart, setIndexChart] = React.useState(1);
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
  const dataCustom = {
    labels: dataRange.map((item) => {
      return item?._id;
    }),
    datasets: [
      {
        label: "Doanh Thu",
        data: dataRange.map((item) => {
          return item?.tongTien;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const handleChangeRageDate = async (value) => {
    if (value === null) {
      setIndexChart(1);
      return;
    }
    let startDate = formatISO(value[0]);
    let endDate = formatISO(value[1]);
    setvalueDate(value);
    await axios
      .get(
        `/api/order/getOrderByDateRange/startDate=${startDate}&endDate=${endDate}`
      )
      .then((response) => {
        setDataRange(response.data);
      });
    setIndexChart(2);
  };
  return (
    <div className="page-container ">
      <h1 className="text-red-500  font-bold uppercase mt-28 text-center text-[20px]">
        Hiệu Quả Bán Hàng
      </h1>
      <div className="text-center">
        <CustomProvider locale={locale}>
          <DateRangePicker
            ranges={Ranges}
            onChange={handleChangeRageDate}
            placeholder="Chọn Mốc Thời Gian"
          ></DateRangePicker>
        </CustomProvider>
      </div>
      {indexChart === 1 && (
        <div className=" w-[900px] mt-10 page-container">
          <Bar options={options} data={dataProfit} />
        </div>
      )}
      {indexChart === 2 && (
        <div className=" w-[900px] mt-10 page-container">
          {dataRange && dataRange.length > 0 && (
            <Bar options={options} data={dataCustom} />
          )}
        </div>
      )}
    </div>
  );
};

export default HomeAdmin;
