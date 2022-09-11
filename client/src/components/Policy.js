import React from "react";
import { NavLink } from "react-router-dom";

const Policy = () => {
  return (
    <div className="page-container ">
      <h1 className=" text-center text-[35px] mt-8 font-bold">
        Các chính sách bảo hành của AnTech Việt Nam
      </h1>

      <div className="mt-24 ml-44">
        <NavLink
          to="/remotepolicy"
          className="uppercase  underline cursor-pointer text-red-600 text-[30px] hover:text-blue-600"
        >
          Chính sách mua hàng từ xa
        </NavLink>
      </div>

      <div className=" mt-7 ml-44">
        <NavLink
          to="/warrantypolicy"
          className="uppercase underline cursor-pointer text-red-600 text-[30px] hover:text-blue-600"
        >
          Chính sách bảo hành chính hãng
        </NavLink>
      </div>
      <div className="mt-10 mb-[350px] ml-44">
        <NavLink
          to="/returnpolicy"
          className="uppercase  underline cursor-pointer text-red-600  text-[30px] hover:text-blue-600"
        >
          Chính sách đổi - trả sản phẩm
        </NavLink>
      </div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v14.0"
        nonce="pBIdLwSO"
      ></script>
    </div>
  );
};

export default Policy;
