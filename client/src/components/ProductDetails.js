// import axios from "axios";
// import React, { useEffect, useState } from "react";
// const ProductDetails = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("/api/productDetails").then((res) => {
//       setData(res.data);
//     });
//   }, []);
//   console.log(data);
//   const [idSanPham, setidSanPham] = useState();
//   const [mauSac, setmauSac] = useState();
//   const [thongSoKyThuat, setthongSoKyThuat] = useState();
//   const [donGia, setdonGia] = useState();
//   const [soLuong, setsoLuong] = useState();
//   const [reload, setReload] = useState(false);
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("idSanPham", idSanPham);
//     formData.append("mauSac", mauSac);
//     formData.append("thongSoKyThuat", thongSoKyThuat);
//     formData.append("donGia", donGia);
//     formData.append("soLuong", soLuong);
//     axios.post("/api/productDetails", formData).then((response) => {
//       setReload(!reload);
//     });
//   };
//   return (
//     <div>
//       <div className="flex page-container  items-center gap-x-5">
//         <input
//           placeholder="Search..."
//           className="py-3 px-5 w-full  rounded-lg  my-2 text-black outline-none outline-offset-0	border border-cyan-900 focus:outline-blue-400"
//         />
//         <button className=" bg-cyan-600 text-white rounded-lg min-w-[120px] h-[50px] hover:bg-cyan-900">
//           Tìm Kiếm
//         </button>
//       </div>
//       <form onSubmit={(e) => handleFormSubmit(e)} encType="multipart/form-data">
//         <select id="idSanPham">
//           <option value={"idSanPham"}></option>
//         </select>
//         <input
//           type="text"
//           name="mauSac"
//           placeholder="Nhập Màu Sắc Sản Phẩm"
//           onChange={(e) => {
//             setmauSac(e.target.value);
//           }}
//           className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
//         />
//         <input
//           type="text"
//           name="thongSoKyThuat"
//           placeholder="Nhập Thông Số Kỹ Thuật Sản Phẩm"
//           onChange={(e) => {
//             setthongSoKyThuat(e.target.value);
//           }}
//           className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
//         />
//         <input
//           type="text"
//           name="soLuong"
//           placeholder="Nhập Số Lượng Sản Phẩm"
//           onChange={(e) => {
//             setsoLuong(e.target.value);
//           }}
//           className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
//         />
//         <input
//           type="text"
//           name="donGia"
//           placeholder="Nhập Đơn Giá Sản Phẩm"
//           onChange={(e) => {
//             setdonGia(e.target.value);
//           }}
//           className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
//         />

//         <button
//           type="submit"
//           className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
//         >
//           Thêm Sản Phẩm
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductDetails;
