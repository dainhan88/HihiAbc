import React from "react";

const WarrantyPolicy = () => {
  return (
    <div>
      <div className=" page-container  ">
        <div>
          <h1 className="text-[25px] font-medium text-red-600 mx-10">
            Chính Sách Bảo Trì,Bảo Hành
          </h1>
          <p className="font-family text-center text-sky-700 font-medium text-[18px] leading-loose py-5">
            CHÍNH SÁCH BẢO HÀNH TẠI CÔNG TY ANTECH VIỆT NAM
          </p>
        </div>
        <div className="mx-48 text-[#000000] font-[14pt] leading-8">
          <div className="text-[20px]">
            1. Quý khách được quyền đổi máy mới nếu máy của Quý khách mắc lỗi kỹ
            thuật trong vòng 10 ngày kể từ thời điểm mua máy mới chính hãng và
            15 ngày đối với máy mới khác. Đối với máy mới chính hãng thì lỗi kỹ
            thuật được xác định là lỗi phần cứng và do Trung tâm bảo hành hãng
            xác nhận chính thức bằng văn bản. Đối với các máy mới khác thì sẽ do
            các Trung tâm bảo hành do ANTECH Việt Nam ủy quyền xác nhận.
          </div>
          <ul className="list-style-none text-[18px]">
            <li>
              - Việc đổi mới được tiến hành với điều kiện ngoại hình của Laptop
              được xác định lỗi kỹ thuật phải được đảm bảo không thay đổi so với
              lúc mới mua, không dán decal trang trí, không mất tem và kèm theo
              đầy đủ hộp, các phụ kiện, quà khuyến mại đi kèm. Nếu ngoại hình có
              sự khác biệt thì sẽ chuyển sang hình thức bảo hành sản phẩm. Sản
              phẩm được đổi mới căn cứ vào thực tế tồn kho tại cửa hàng nhưng
              đảm bảo cùng Model, cấu hình tương đương.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
