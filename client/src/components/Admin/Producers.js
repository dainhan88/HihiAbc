import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { converCurences } from "../../config";
import { v4 as uuidv4 } from "uuid";

const Producers = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/producers").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const [tenNSX, settenNSX] = useState();
  const [diaChiNSX, setdiaChiNSX] = useState();
  const [websiteNSX, setwebsiteNSX] = useState();

  const [file, setFile] = useState();
  const [reload, setReload] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tenNSX", tenNSX);
    formData.append("diaChiNSX", diaChiNSX);
    formData.append("websiteNSX", websiteNSX);

    axios.post("/api/products", formData).then((response) => {
      setReload(!reload);
    });
  };

  return (
    <div className="page-container">
      <div>
        <NavLink
          to="/admin/createdroducers"
          type="submit"
          className=" flex w-[235px] transition-all h-10 my-5 py-2 mx-5 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill my-1"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          <p className="px-2">Thêm Nhà Sản Xuất </p>
        </NavLink>
      </div>

      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-[18px] text-orange-500 uppercase bg-gray-50 ">
          <tr>
            <th className="py-3 px-6">Tên Hãng</th>
            <th className="py-3 px-6">Địa Chỉ Nhà Sản Xuất</th>
            <th className="py-3 px-6">Wedsite Nhà Sản Xuất</th>
          </tr>
        </thead>
        <tbody className="text-[14px] ">
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <React.Fragment key={uuidv4()}>
                  <tr className="border-t">
                    <th className="px-6  uppercase font-bold">{item.tenNSX}</th>
                    <th className="px-6  uppercase font-bold">
                      {item.diaChiNSX}
                    </th>
                    <th className="px-6   font-bold">{item.websiteNSX}</th>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Producers;
