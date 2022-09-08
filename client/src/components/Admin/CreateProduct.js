import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { converCurences } from "../../config";

const CreateProduct = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios.get("/api/products").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  const [tenSanPham, settenSanPham] = useState();
  const [maLoaiSanPham, setmaLoaiSanPham] = useState();
  const [soLuong, setsoLuong] = useState();
  const [donGiaSP, setdonGiaSP] = useState();
  const [cpu, setcpu] = useState();
  const [oCUng, setoCUng] = useState();
  const [cardDoHoa, setcardDoHoa] = useState();
  const [giaCu, setgiaCu] = useState();
  const [manHinh, setmanHinh] = useState();
  const [audio, setaudio] = useState();
  const [wedCam, setwedCam] = useState();
  const [pin, setpin] = useState();
  const [kichThuoc, setkichThuoc] = useState();
  const [nhuCau, setnhuCau] = useState();
  const [file, setFile] = useState();
  const [reload, setReload] = useState(false);
  const { register } = useForm();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tenSanPham", tenSanPham);
    formData.append("maLoaiSanPham", maLoaiSanPham);
    formData.append("soLuong", soLuong);
    formData.append("donGiaSP", donGiaSP);
    formData.append("cpu", cpu);
    formData.append("oCUng", oCUng);
    formData.append("cardDoHoa", cardDoHoa);
    formData.append("manHinh", manHinh);
    formData.append("audio", audio);
    formData.append("wedCam", wedCam);
    formData.append("pin", pin);
    formData.append("kichThuoc", kichThuoc);
    formData.append("nhuCau", nhuCau);
    formData.append("hinhanh", file);
    console.log(donGiaSP);
    axios.post("/api/products", formData).then((response) => {
      console.log(response);
      setReload(!reload);
    });
  };
  useEffect(() => {
    axios.get("/api/producers").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  const handleSetFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="page-container my-9 text-center ">
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className=" text-center text-[17px] mb-10 font-bold text-red-400 ">
          <select
            className=""
            name="nhuCau"
            onChange={(e) => {
              setnhuCau(e.target.value);
            }}
          >
            <option value="">Chọn Đối Tượng Người Mua </option>
            <option>LapTop Văn Phòng</option>
            <option>LapTop Gaming</option>
            <option>LapTop Đồ Hoạ</option>
            <option>LapTop Mỏng Nhẹ</option>
          </select>
        </div>
        <div className=" text-center text-[17px] mb-10 font-bold text-red-400 ">
          <select
            className=""
            name="maLoaiSanPham"
            onChange={(e) => {
              setmaLoaiSanPham(e.target.value);
            }}
          >
            <option value="">Chọn Hãng Sản Xuất</option>
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return (
                  <option value={item.tenNSX} key={item._id}>
                    {item.tenNSX}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="text-left flex gap-x-64 mx-24">
          <div>
            <div className="flex ">
              <p className="w-36 my-5 ">Tên Sản Phẩm :</p>
              <input
                type="text"
                name="tenSanPham"
                placeholder="Nhập Tên Sản Phẩm"
                onChange={(e) => {
                  settenSanPham(e.target.value);
                }}
                className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
              />
            </div>

            <div className="flex">
              <p className="w-36 my-5">Nhập Số Lượng :</p>
              <input
                type="text"
                name="soLuong"
                placeholder="Nhập Số Lượng Sản Phẩm"
                onChange={(e) => {
                  setsoLuong(e.target.value);
                }}
                className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Đơn Giá Sản Phẩm :</p>
              <input
                type="text"
                name="donGiaSP"
                placeholder="Nhập Đơn Giá Sản Phẩm"
                onChange={(e) => {
                  setdonGiaSP(e.target.value);
                }}
                className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
              />
              <br />
            </div>

            <div className="flex">
              <p className="w-36 my-5">Thông số CPU :</p>
              <input
                type="text"
                name="cpu"
                placeholder="Nhập Thông Số CPU"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2    my-2"
                onChange={(e) => {
                  setcpu(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Ổ Cứng :</p>
              <input
                type="text"
                name="oCUng"
                placeholder="Nhập Thông Số Ổ Cứng"
                className="py-3   border boder-gray-300 rounded-lg px-12  mx-2  my-2"
                onChange={(e) => {
                  setoCUng(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex">
              <p className="w-36 my-5">Card Đồ Hoại :</p>
              <input
                type="text"
                name="cardDoHoa"
                placeholder="Nhập Thông Số Card Đồ Họa"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setcardDoHoa(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Màn Hình :</p>
              <input
                type="text"
                name="manHinh"
                placeholder="Nhập Thông Số Màn Hình"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setmanHinh(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Thông Số Audio :</p>
              <input
                type="text"
                name="audio"
                placeholder="Nhập Thông Số Audio"
                className="py-3  border boder-gray-300 rounded-lg  px-12  mx-2  my-2"
                onChange={(e) => {
                  setaudio(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Kích Thước :</p>
              <input
                type="text"
                name="kichThuoc"
                placeholder="Nhập Thông Số Kích Thước"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setkichThuoc(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Thông Số Pin :</p>
              <input
                type="text"
                name="pin"
                placeholder="Nhập Thông Số Pin"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setpin(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Thông Số WedCam :</p>
              <input
                type="text"
                name="wedCam"
                placeholder="Nhập Thông Số WedCam"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setwedCam(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <p className="w-36 my-5">Đối Tượng :</p>
          <input
            type="text"
            name="nhuCau"
            placeholder="Nhập Thông Tin Nhu Cầu Hướng Đến"
            className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
            onChange={(e) => {
              setnhuCau(e.target.value);
            }}
          />
        </div> */}
        <div className="">
          <input type="file" name="hinhanh" onChange={handleSetFile} />
          <button
            type="submit"
            className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
          >
            Thêm Sản Phẩm
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};

export default CreateProduct;
