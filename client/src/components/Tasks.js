import axios from "axios";
import React, { useEffect, useState } from "react";
const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/tasks").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="grid grid-cols-3 page-container ">
      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <div
              key={item._id}
              className="text-blue-700 text-center border border-cyan-600 m-4 p-2 flex flex-col  group "
            >
              <img
                src={`./images/${item.image}`}
                alt=""
                className=" justify-items-center w-700 object-cover rounded-lg-50 py-11 group-hover:-translate-y-2 ease-out duration-300"
              ></img>
              <div className="flex flex-col mt-auto">
                <div>
                  <span> {item.task1} </span>
                  <span> {item.task2} </span>
                </div>
                <div className="py-2 flex items-center gap-x-2 justify-center mt-auto">
                  <button
                    type="submit"
                    className="h-10 w-full font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
                  >
                    Chi Tiết Sản Phẩm
                  </button>
                  <button
                    type="submit"
                    className="h-10 w-full font-semibold rounded-md bg-pink-600 text-white  hover:bg-red-900"
                  >
                    Thêm Vào Giỏ Hàng
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tasks;
