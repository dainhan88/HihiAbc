import React from "react";

const WarrantyPolicy = () => {
  return (
    <div>
      <div className=" page-container  text-left">
        <div>
          {/* <h1 className="text-[25px] font-medium text-red-600 mx-10">
            Chính Sách Bảo Trì,Bảo Hành
          </h1> */}
          <p className="font-family text-center text-red-600 font-bold text-[25px] leading-loose py-5">
            CHÍNH SÁCH BẢO HÀNH TẠI CÔNG TY ANTECH VIỆT NAM
          </p>
        </div>
        <div className="mx-48 text-[#000000] font-[14pt] font-[Roboto] leading-8">
          <div className="text-[18px]  font-bold">
            1. Quý khách được quyền đổi máy mới nếu máy của Quý khách mắc lỗi kỹ
            thuật trong vòng 10 ngày kể từ thời điểm mua máy mới chính hãng và
            15 ngày đối với máy mới khác. Đối với máy mới chính hãng thì lỗi kỹ
            thuật được xác định là lỗi phần cứng và do Trung tâm bảo hành hãng
            xác nhận chính thức bằng văn bản. Đối với các máy mới khác thì sẽ do
            các Trung tâm bảo hành do ANTECH Việt Nam ủy quyền xác nhận.
          </div>
          <ul className="list-style-none text-[18px] font-[Roboto] leading-normal">
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
          <p className="bg-transparent text-[20px] font-bold">
            2. Bảo hành tại đại lý hay bảo hành tại hãng?
          </p>
          <div className="font-[Roboto] text-[18px]">
            <span>
              - Thông thường các đại lý bán lẻ đều có trung tâm bảo hành và có
              tiếp nhận sản phẩm bảo hành cho khách hàng. Tuy nhiên đại lý sẽ
              chỉ kiểm tra, xác định lỗi ban đầu và không tự thay thế linh kiện.
              Việc thực hiện bảo hành là nhiệm vụ của các trung tâm bảo hành
              chính hãng. Sau khi nhận sản phẩm từ khách hàng, đại lý sẽ chuyển
              sản phẩm tới TTBH của hãng để bảo hành.
            </span>
            <br />
            <span className="">
              - Thông thường người dùng không có nhiều kinh nghiệm sẽ mang sản
              phẩm đến TTBH của đại lý bán lẻ nơi mình mua hàng để nhận được hỗ
              trợ trực tiếp. Người dùng có kinh nghiệm hơn thường tự mang sản
              phẩm tới TTBH chính hãng để giảm bớt thời gian chờ ở khâu trung
              gian là thông qua đại lý. Ngoài ra, người dùng còn có thể sử dụng
              dịch vụ bảo hành tận nơi mà một số hãng phân phối cung cấp.
            </span>
            <ul className="mx-5 my-5">
              - Bên cạnh dịch vụ hỗ trợ bảo hành hãng, Công ty AnTech Việt Nam
              cung cấp hỗ trợ thêm dành cho khách hàng gồm có:
              <li className="mx-8">
                {""}+ Hỗ trợ phần mềm, bảo dưỡng máy tính miễn phí, thay keo tản
                nhiệt miễn phí
              </li>
              <li className="mx-8">
                {""}+ Miễn phí dán Skin mặt lưng máy (Áp dụng tại Hà Nội)
              </li>
              <li className="mx-8">
                {""}+ Hỗ trợ nâng cấp bộ nhớ trong ram, ổ cứng SSD
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-48 ">
          <p className="text-center text-lg text-red-700">
            Chính sách bảo hành và địa chỉ trung tâm bảo hành theo các nhóm sản
            phẩm.
          </p>
          <thead className="text-xs text-orange-500 text-center uppercase bg-gray-50 ">
            <tr>
              <th className="py-3 border px-6">Sản Phẩm</th>
              <th className="py-3 border px-6">Thương hiệu</th>
              <th className="py-3 border px-6">căn cứ bản hành</th>
              <th className="py-3  border px-6">Hình Thức bảo hành</th>
              <th className="py-3 border px-6">Trung Tâm bảo hành</th>
            </tr>
          </thead>
          <tbody className="text-xs leading-6  font-[roboto] ">
            <tr>
              <th className="py-3 border  px-6 ">LAPTOP</th>
              <th className="py-3 border  px-6">DELL</th>
              <th className="py-3 border px-6">Serial Number</th>
              <th className="py-3 border px-6">
                ĐỔI MỚI trong 30 ngày nếu sản phẩm đạt yêu cầu HOẶC Sửa chữa
              </th>
              <th className="py-3 border px-6">
                Dell có dịch vụ bảo hành tại nơi sử dụng Liên hệ:{" "}
                <a className="text-red-600" href="tel:1800-54-54-55">
                  1800-54-54-55
                </a>
                <p>_Số 26 Yên Lãng, P. Láng Hạ, Q. Đống Đa, Hà Nội</p>
                <p>_Số 23 Nguyễn Thị Huỳnh, P.8, Q.Phú Nhuận, TP. HCM</p>
                <p>_Số 36 Hàm Nghi,P. Thạc Gián, Q.Thanh Khê, Đà Nẵng</p>
                <p>_ Số 211/2 Nguyễn Văn Linh, Q. Ninh Kiều, TP. Cần Thơ</p>
              </th>
            </tr>
          </tbody>
          <tbody className="text-xs leading-6 font-[roboto] ">
            <tr>
              <th className="py-3 border  px-6 ">LAPTOP</th>
              <th className="py-3 border px-6">HP</th>
              <th className="py-3 border px-6">Serial Number</th>
              <th className="py-3 border px-6">
                ĐỔI MỚI trong 30 ngày nếu sản phẩm đạt yêu cầu HOẶC Sửa chữa
              </th>
              <th className="py-3 border px-6">
                HP có dịch vụ bảo hành tại nơi sử dụng Liên hệ:
                <a className="text-red-600" href="tel:1800-58-88-68">
                  1800-58-88-68
                </a>
                <br />
                <a
                  className="text-red-600"
                  href="https://www.hp.com/vn-en/privacy/privacy_warranty.html"
                >
                  https://www.hp.com/vn-en/privacy/privacy_warranty.html
                </a>
                <p>_Số 156 Thái Thịnh, P.Láng Hạ, Q.Đống Đa, Hà Nội</p>
                <p>_Số 45 Trần Quang Khải, P.Tân Định, Q1, TP. HCM</p>
                <p>
                  _Số 108 Hoàng Hoa Thám, P. Thạc Gián, Q. Thanh Khê, Đà Nẵng
                </p>
                <p>
                  _138 Trần Hưng Đạo, P. An Nghiệp, Q.Ninh Kiều, TP. Cần Thơ
                </p>
              </th>
            </tr>
          </tbody>
          <tbody className="text-xs leading-6 font-[roboto] ">
            <tr>
              <th className="py-3 border  px-6 ">LAPTOP</th>
              <th className="py-3 border px-6">Asus</th>
              <th className="py-3 border px-6">Serial Number</th>
              <th className="py-3 border px-6">
                ĐỔI MỚI trong 30 ngày nếu sản phẩm đạt yêu cầu HOẶC Sửa chữa
              </th>
              <th className="py-3 border px-6">
                Asus có dịch vụ bảo hành tại nơi sử dụng Liên hệ:
                <a className="text-red-600" href="tel:1800-65-88">
                  1800-65-88
                </a>
                <br />
                <a
                  className="text-red-600"
                  href="https://www.asus.com/vn/support/Article/839/"
                >
                  https://www.asus.com/vn/support/Article/839/
                </a>
                <p>_Số 156 Thái Thịnh, P.Láng Hạ, Q.Đống Đa, Hà Nội</p>
                <p>_Số 45 Trần Quang Khải, P.Tân Định, Q1, TP. HCM</p>
                <p>
                  _Số 108 Hoàng Hoa Thám, P. Thạc Gián, Q. Thanh Khê, Đà Nẵng
                </p>
                <p>
                  _138 Trần Hưng Đạo, P. An Nghiệp, Q.Ninh Kiều, TP. Cần Thơ
                </p>
              </th>
            </tr>
          </tbody>
          <tbody className="text-xs leading-6 font-[roboto] ">
            <tr>
              <th className="py-3 border  px-6 ">LAPTOP</th>
              <th className="py-3 border px-6">Acer</th>
              <th className="py-3 border px-6">Serial Number</th>
              <th className="py-3 border px-6">
                ĐỔI MỚI trong 30 ngày nếu sản phẩm đạt yêu cầu HOẶC Sửa chữa
              </th>
              <th className="py-3 border px-6">
                <br />
                <a
                  className="text-red-600"
                  href="https://www.acervietnam.com.vn/tin-tuc/chinh-sach-bao-hanh-san-pham-acer-viet-nam"
                >
                  https://www.acervietnam.com.vn/tin-tuc/chinh-sach-bao-hanh-san-pham-acer-viet-nam
                </a>
                <p>_Số 585-587 Điện Biên Phủ, Phường 1, Quận 3, TP. HCM</p>
                <p>_Số 45 Trần Quang Khải, P.Tân Định, Q1, TP. HCM</p>
                <p>
                  _36 Hà Huy Tập, Phường Xuân Hà, Quận Thanh Khê, Thành Phố Đà
                  Nẵng
                </p>
                <p>
                  _Số 90 Ung Văn Khiêm (TTTM Cái Khế), P. Cái Khế, Q. Ninh Kiều,
                  TP. Cần Thơ
                </p>
              </th>
            </tr>
          </tbody>
          <tbody className="text-xs leading-6 font-[roboto] ">
            <tr>
              <th className="py-3 border  px-6 ">LAPTOP</th>
              <th className="py-3 border px-6">MSI</th>
              <th className="py-3 border px-6">Serial Number</th>
              <th className="py-3 border px-6">
                ĐỔI MỚI trong 30 ngày nếu sản phẩm đạt yêu cầu HOẶC Sửa chữa
              </th>
              <th className="py-3 border px-6">
                <br />
                <a
                  className="text-red-600"
                  href="_https://vn.msi.com/page/warranty"
                >
                  _https://vn.msi.com/page/warranty
                </a>
                <p>_Số 27 Yên Lãng, P. Thịnh Quang, Q. Đống Đa, Hà Nội</p>
                <p>_Số 194/3 Nguyễn Trọng Tuyển, P.8, Q.Phú Nhuận, TP. HCM</p>
                <p>
                  _ Số 77 Hàm Nghi, Phường Vĩnh Trung, Q. Thanh Khê, Đà Nẵng
                </p>
                <p>
                  _Số 90 Ung Văn Khiêm (TTTM Cái Khế), P. Cái Khế, Q. Ninh Kiều,
                  TP. Cần Thơ
                </p>
              </th>
            </tr>
          </tbody>
          <tbody className="text-xs leading-6 font-[roboto] ">
            <tr>
              <th className="py-3 border  px-6 ">LAPTOP</th>
              <th className="py-3 border px-6">Apple</th>
              <th className="py-3 border px-6">Serial Number</th>
              <th className="py-3 border px-6">
                ĐỔI MỚI trong 30 ngày nếu sản phẩm đạt yêu cầu HOẶC Sửa chữa
              </th>
              <th className="py-3 border px-6">
                <br />
                <a
                  className="text-red-600"
                  href="_https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-vietnamese.html"
                >
                  _https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-vietnamese.html
                </a>
                <p>_Số 4, Yết Kiêu, Q. Hoàn Kiếm, Hà Nội</p>
                <p>
                  _Số 109 Mai Hắc Đế, P. Bùi Thị Xuân, Q. Hai Bà Trưng, Hà Nội
                </p>
                <p>_Số 72B, Đinh Tiên Hoàng, P. Đa Kao, Q. 1, TP. HCM</p>
                <p>_Số 38 Lê Đình Lý, P. Thạc Gián, Q. Thanh Khê, Đà Nẵng</p>
                <p>
                  _Số 90 Ung Văn Khiêm ( TTTM Cái Khế), P. Cái Khế, Q. Ninh
                  Kiều, TP Cần Thơ
                </p>
              </th>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
