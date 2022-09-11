import React from "react";
import { v4 as uuidv4 } from "uuid";
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
import { converCurences } from "../../config";

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
  const [countOrder, setCountOrder] = React.useState();
  const [dataRange, setDataRange] = React.useState([]);
  const [indexChart, setIndexChart] = React.useState(1);
  React.useEffect(() => {
    axios.get("/api/order/v2/getProfitMonthly").then((res) => {
      setDataProfitMonthy(res.data);
    });
    axios.get("/api/order/v3/getQuantityOderByPhone").then((res) => {
      setCountOrder(res.data);
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
    <>
      <div className="page-container ">
        <h1 className="text-red-500  font-bold uppercase mt-5 text-center text-[20px]">
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

      <div className="page-container ">
        <h1 className="text-center text-red-500 mt-4 text-[20px]">
          Khách Hàng Thân Thiết
        </h1>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs uppercase text-[#fff]  bg-[#FF7C7C] ">
            <tr>
              <th className="py-3 border  text-center">Số Điện Thoại</th>
              <th className="py-3 border  text-center ">Khách Hàng</th>
              <th className="py-3 border  text-center">Địa Chỉ</th>
              <th className="py-3 border  text-center">Số Lần Đã Mua</th>
              <th className="py-3 border  text-center">Tổng Tiền Đã Mua</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {countOrder &&
              countOrder.length > 0 &&
              countOrder.map((item) => {
                return (
                  <React.Fragment key={uuidv4()}>
                    <tr className="border ">
                      <th className=" text-center border  uppercase font-bold text-black">
                        0{item._id}
                      </th>
                      <th className="text-center border  uppercase font-bold text-black">
                        {item.fullName}
                      </th>
                      <th className="text-center border  uppercase font-bold text-black">
                        {item.address}
                      </th>
                      <th className="text-center border  uppercase font-bold text-black">
                        {item.count}
                      </th>
                      <th className="text-center border   font-bold text-black">
                        {converCurences(item.total)} đ
                      </th>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeAdmin;
