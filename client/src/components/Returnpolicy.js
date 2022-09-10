import React, { useState } from "react";
import ReturnProductSend from "./ReturnProductSend";

const Returnpolicy = () => {
  const [show, setShow] = useState();
  return (
    <div>
      <div className=" page-container  text-left leading-8">
        <h1 className="text-center text-red-600 uppercase font-bold text-[25px] mt-10">
          Chính Sách Đổi - Trả Hàng
        </h1>
        <div
          className=" underline inline-block text-[30px] hover:text-blue-600 text-red-600 px-3 cursor-pointer"
          onClick={() => {
            setShow(true);
          }}
        >
          Gửi Yêu Cầu Đổi Trả
        </div>
        <p className="italic justify-center text-[18px] mt-4 flex">
          <span className="font-bold text-red-700">Lưu ý </span>: Các thiết bị
          bảo hành phải trong thời gian bảo hành và còn nguyên tem của nhà sản
          xuất và AnTech Việt Nam
        </p>
        <div className="flex mt-4">
          <p className="font-bold text-[18px] mt-1 px-3">1. </p>

          <p className=" text-[15px]">
            Quý khách được quyền đổi máy mới nếu máy của Quý khách mắc lỗi kỹ
            thuật trong vòng 10 ngày kể từ thời điểm mua máy mới chính hãng và
            15 ngày đối với máy mới khác. Lỗi kỹ thuật này được xác định do nhà
            sản xuất.
            <br />- Đổi sản phẩm giống hệt tại cửa hàng mua trước đó (Cùng
            model, màu sắc, cấu hình), với điều kiện ngoại hình máy như mới,
            không bị xước, không mất tem và kèm theo đầy đủ hộp, các phụ kiện đi
            kèm.
            <br />- Nếu không có sản phẩm giống hệt, quý khách đợi điều chuyển
            hàng về tối đa 7 ngày. Trong thời gian chờ điều chuyển, Laptop88 sẽ
            cho quý khách mượn máy cũ có giá trị không quá 70% giá trị sản phẩm
            của khách hàng hoặc đổi sang sản phẩm khác có giá trị lớn hơn hoặc
            bằng 80% giá trị sản phẩm đã mua. Sản phẩm được đổi sang là sản phẩm
            mới 100% hoặc đổi sang dòng laptop cũ tại cửa hàng và áp dụng chính
            sách bảo hành đối với máy cũ.
            <br />{" "}
            <span className="italic text-[15px] font-bold">
              - Chính sách đổi máy laptop mới chính hãng trong 10 ngày không áp
              dụng với sản phẩm của Apple.
            </span>
          </p>
        </div>
        <div className="flex">
          <p className="font-bold text-[18px] mt-1 px-3  ">2.</p>
          <p className="text-[15px]">
            Đối với sản phẩm linh kiện bộ nhớ trong ram hoặc ổ cứng laptop mới
            còn hoạt động bình thường và không có thay đổi về ngoại hình sản
            phẩm, sẽ áp dụng giá nhập lại 80% so với giá bán ban đầu trong tháng
            đầu tiên, các tháng tiếp theo áp dụng theo giá thu mua niêm yết tại
            cửa hàng.
          </p>
        </div>
        <div className="flex">
          <p className="font-bold text-[18px] mt-1 px-3  ">3.</p>
          <p className="text-[15px]">
            Trong tháng đầu tiên kể từ ngày mua sản phẩm, AnTech Việt Nam sẽ
            nhận thu mua lại laptop mới với giá 80% so với giá bán ban đầu nếu
            sản phẩm hoạt động bình thường{" "}
            <span className="italic text-[15px]">
              (Giá bán ban đầu là giá trị máy tại thời điểm mua hàng);
            </span>{" "}
            - Từ tháng thứ 2 tới tháng thứ 6 sẽ trừ mỗi tháng 5%; Từ tháng thứ 7
            đến hết tháng thứ 12 sẽ trừ mỗi tháng 2%; Từ sau tháng thứ 12 giá
            thu mua lại sẽ do cửa hàng định giá tùy vào thực tế tình trạng máy.
          </p>
        </div>
        <div className="flex text-[15px]">
          <p className="font-bold mr-3 ml-10 mt-2 ">*Lưu ý:</p>
          <p className="italic ">
            Khi Quý khách bán lại máy, các phần quà hoặc khuyến mại (Có đơn giá
            tiền) ghi trên hóa đơn mua hàng bắt buộc phải đi kèm máy.
          </p>
        </div>
        <p className="mx-10 text-[15px] italic">
          Trong trường hợp Quý khách không cung cấp đủ, AnTech Việt Nam sẽ trừ
          đi tiền chênh lệch đúng bằng giá trị thể hiện trên hóa đơn của phần
          quà hoặc khuyến mại đó.
        </p>
        <div className="flex mt-1">
          <p className="font-bold text-[18px] mt-1 px-3 ">4.</p>
          <p className=" text-[15px]">
            Sản phẩm đã sửa chữa tại các hệ thống ngoài, AnTech Việt Nam sẽ {}
            <span className=" italic font-bold text-[15px]">
              không thu mua lại.
            </span>
          </p>
        </div>
        <div className="flex">
          <p className="font-bold text-[18px] mt-1 px-3">5.</p>
          <p className="text-[15px]">
            Sản phẩm còn trong hạn bảo hành chính hãng
          </p>
          <p className=" font-bold italic ml-1 text-[15px]"> nhưng bị lỗi</p>
          <p className="text-[15px]">, giá thu mua do cửa hàng quyết định.</p>
        </div>
        <div className="flex">
          <p className="font-bold text-[18px] mt-1 px-3"> 6.</p>
          <p className="text-[15px]">
            Sản phẩm hết thời hạn bảo hành, hình thức xấu, có lỗi sẽ do AnTech
            Việt Nam định giá sản phẩm khi thu mua. *Mức giá thu mua ở trên chưa
            bao gồm các khoản trừ có thể phát sinh khi sản phẩm có sự thay đổi
            về ngoại hình, chất lượng do người sử dụng gây ra.
            <span className="ml-1 italic text-[18px]">
              (Ví dụ: máy bị rơi, vỡ, biến dạng, gẫy cổng kết nối...).
            </span>
          </p>
        </div>
      </div>
      {show && <ReturnProductSend setShow={setShow}></ReturnProductSend>}
    </div>
  );
};

export default Returnpolicy;
