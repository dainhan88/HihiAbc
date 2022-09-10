import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProductAdmin = () => {
  const [data, setData] = useState();
  const [label, setLabel] = useState();
  const [dataCate, setDataCate] = useState();
  const { sanphamid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`/api/products/${sanphamid}`).then((res) => {
      setData(res.data);
      setLabel(res.data.maLoaiSanPham);
    });
    axios.get("/api/producers").then((res) => {
      setDataCate(res.data);
    });
  }, [sanphamid]);

  const [file, setFile] = useState();
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    const formData = new FormData();
    if (!file) {
      formData.append("tenSanPham", data.tenSanPham);
      formData.append("maLoaiSanPham", label);
      formData.append("soLuong", data.soLuong);
      formData.append("donGiaSP", data.donGiaSP);
      formData.append("donGiaCuSP", data.donGiaCuSP);
      formData.append("cpu", data.cpu);
      formData.append("oCUng", data.oCUng);
      formData.append("cardDoHoa", data.cardDoHoa);
      formData.append("manHinh", data.manHinh);
      formData.append("audio", data.audio);
      formData.append("wedCam", data.wedCam);
      formData.append("pin", data.pin);
      formData.append("kichThuoc", data.kichThuoc);
      formData.append("nhuCau", data.nhuCau);
    } else {
      formData.append("tenSanPham", data.tenSanPham);
      formData.append("maLoaiSanPham", label);
      formData.append("soLuong", data.soLuong);
      formData.append("donGiaCuSP", data.donGiaCuSP);
      formData.append("cpu", data.cpu);
      formData.append("oCUng", data.oCUng);
      formData.append("cardDoHoa", data.cardDoHoa);
      formData.append("manHinh", data.manHinh);
      formData.append("audio", data.audio);
      formData.append("wedCam", data.wedCam);
      formData.append("pin", data.pin);
      formData.append("kichThuoc", data.kichThuoc);
      formData.append("nhuCau", data.nhuCau);
      formData.append("hinhanh", file);
    }

    console.log(data);
    axios.put(`/api/products/${sanphamid}`, formData).then((response) => {
      console.log(response);
      // setReload(!reload);
    });
  };
  const handleSetFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChangeCate = (e) => {
    setLabel(e.target.value);
  };
  console.log(data);
  return (
    <>
      {data && (
        <div className="page-container my-9 text-center ">
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            encType="multipart/form-data"
          >
            <div className=" text-center text-[17px] mb-10 font-bold text-red-400 ">
              <select className="" name="nhuCau" {...register("nhuCau")}>
                <option value={data.nhuCau}>{data.nhuCau}</option>
                <option value={"LapTop Văn Phòng"}>LapTop Văn Phòng</option>
                <option value={"LapTop Gaming"}>LapTop Gaming</option>
                <option value={"LapTop Đồ Hoạ"}>LapTop Đồ Hoạ</option>
                <option value={"LapTop Mỏng Nhẹ"}>LapTop Mỏng Nhẹ</option>
              </select>
            </div>

            <div className="text-left flex gap-x-64 mx-24">
              <div>
                <div className="flex ">
                  <p className="w-36 my-5 ">Tên Sản Phẩm :</p>
                  <input
                    type="text"
                    id="tenSanPham"
                    defaultValue={data.tenSanPham}
                    {...register("tenSanPham")}
                    placeholder="Tên sản phẩm"
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div>
                {/* <div className="flex">
                  <p className="w-36 my-5">Thương Hiệu :</p>
                  <input
                    type="text"
                    name="maLoaiSanPham"
                    placeholder="Nhập Hãng Sản Phẩm"
                    defaultValue={data.maLoaiSanPham}
                    {...register("maLoaiSanPham")}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div> */}
                <div className="flex">
                  <p className="w-36 my-5">Thương Hiệu :</p>
                  <select
                    // {...register("maLoaiSanPham")}
                    value={label}
                    onChange={handleChangeCate}
                  >
                    {dataCate &&
                      dataCate.length > 0 &&
                      dataCate.map((item) => {
                        return (
                          <option value={item.tenNSX} key={item._id}>
                            {item.tenNSX}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Nhập Số Lượng :</p>
                  <input
                    type="text"
                    name="soLuong"
                    placeholder="Nhập Số Lượng Sản Phẩm"
                    defaultValue={data.soLuong}
                    {...register("soLuong")}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Đơn Giá Sản Phẩm :</p>
                  <input
                    type="text"
                    name="donGiaSP"
                    placeholder="Nhập Đơn Giá Sản Phẩm"
                    defaultValue={data.donGiaSP}
                    {...register("donGiaSP")}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                  <br />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Đơn Giá Sản Phẩm :</p>
                  <input
                    type="text"
                    name="donGiaCuSP"
                    placeholder="Nhập Giá Cũ Sản Phẩm"
                    defaultValue={data.donGiaCuSP}
                    {...register("donGiaCuSP")}
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
                    defaultValue={data.cpu}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2    my-2"
                    {...register("cpu")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Ổ Cứng :</p>
                  <input
                    type="text"
                    name="oCUng"
                    placeholder="Nhập Thông Số Ổ Cứng"
                    defaultValue={data.oCUng}
                    className="py-3   border boder-gray-300 rounded-lg px-12  mx-2  my-2"
                    {...register("oCUng")}
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
                    defaultValue={data.cardDoHoa}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("cardDoHoa")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Màn Hình :</p>
                  <input
                    type="text"
                    name="manHinh"
                    placeholder="Nhập Thông Số Màn Hình"
                    defaultValue={data.manHinh}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("manHinh")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Thông Số Audio :</p>
                  <input
                    type="text"
                    name="audio"
                    placeholder="Nhập Thông Số Audio"
                    defaultValue={data.audio}
                    className="py-3  border boder-gray-300 rounded-lg  px-12  mx-2  my-2"
                    {...register("audio")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Kích Thước :</p>
                  <input
                    type="text"
                    name="kichThuoc"
                    placeholder="Nhập Thông Số Kích Thước"
                    defaultValue={data.kichThuoc}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("kichThuoc")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Thông Số Pin :</p>
                  <input
                    type="text"
                    name="pin"
                    placeholder="Nhập Thông Số Pin"
                    defaultValue={data.pin}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("pin")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Thông Số WedCam :</p>
                  <input
                    type="text"
                    name="wedCam"
                    placeholder="Nhập Thông Số WedCam"
                    defaultValue={data.wedCam}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("wedCam")}
                  />
                </div>
              </div>
            </div>
            <div>
              <img
                src={`/images/${data.hinhanh}`}
                alt=""
                className="w-[150px] h-[150px]"
              />
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
            </div>
            <button
              type="submit"
              className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
            >
              Thêm Sản Phẩm
            </button>
          </form>
          <br />
        </div>
      )}
    </>
  );
};

export default UpdateProductAdmin;
