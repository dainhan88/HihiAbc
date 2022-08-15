import React from "react";

const RemotePolicy = () => {
  return (
    <div className="page-container leading-8">
      <h1 className="uppercase font-bold text-center mt-20 text-[28px] text-red-600">
        Hướng Dẫn mua hàng từ xa
      </h1>
      <div>
        <div className="italic text-[20px] font-bold mt-10 ml-9">
          Để phục vụ quý khách hàng tốt hơn, AnTech Việt Nam áp dụng mô hình bán
          hàng từ xa - thanh toán tiền khi nhận hàng, dành cho các khách hàng ở
          ngoài khu vực Hà Nội có nhu cầu mua sản phẩm tại AnTech Việt Nam.
        </div>
        <p className="underline italic mt-3">
          Cụ thể quy trình mua hàng như sau :
        </p>
      </div>
      <div className="flex">
        <p className="font-bold text-[18px] mr-1"> Bước 1: </p>
        <p> {}Quý khách chọn sản phẩm muốn mua trên website</p>
      </div>
      <div className="flex">
        <p className="font-bold text-[18px] mr-1"> Bước 2: </p>
        <p> {}Quý khách chọn chi tiết của sản phẩm đã chọn trên website</p>
      </div>
      <div className="flex">
        <p className="font-bold text-[18px] mr-1"> Bước 3: </p>
        <p> {}Quý khách xác nhận mua hàng</p>
      </div>
      <div className="flex">
        <p className="font-bold text-[18px] mr-1"> Bước 4: </p>
        <p>
          {" "}
          {}Sau khi quý khách đặt hàng thành công sữ có chuyên viên bán hàng gọi
          điện liên lạc xác thực đơn hàng và tư vấn đơn hàng giúp Quý khách
        </p>
      </div>
      <div className="flex mt-4 ">
        <p className="my-5 mr-7">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#00cc66"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </p>
        <p>
          {" "}
          Sau 1 - 5 ngày nhân viên giao hàng sẽ giao hàng tại địa chỉ mà Quý
          khách đã đăng ký. AnTech Việt Nam đề nghị Quý khách quay video đồng
          kiểm khi nhận hàng có kèm hình ảnh của nhân viên giao nhận, sau đó
          thực hiện kiểm tra máy và thanh toán số tiền còn thiếu nếu máy đúng
          như mô tả
          <br />
          <span className="ml-16 italic font-bold ">
            (Căn cứ vào hình thức mô tả và ảnh chụp được gửi cho Quý khách trước
            đó).
          </span>
        </p>
      </div>
      <div>
        <p className="font-bold text-[20px]">*Quý khách lưu ý:</p>
        <div>
          <p>
            - Thời gian vận chuyển/nhận hàng trên không tính thứ 7 và chủ nhật.
            Thời gian vận chuyển có thể kéo dài do ảnh hưởng tình hình dịch bệnh
            tại các địa phương trung chuyển hàng hoá hoặc số lượng giao vận của
            các đơn vị vận chuyển giảm do bị nhiễm Covid-19.
          </p>
          <p>
            - Trường hợp sản phẩm không đúng như mô tả hoặc có lỗi khi kiểm tra,
            AnTech Việt Nam sẽ hoàn trả tiền đặt cọc cho Quý khách, đồng thời
            tặng Quý khách sản phẩm balo laptop theo máy.
          </p>
          <p>
            - Với sản phẩm laptop còn bảo hành của AnTech Việt Nam: Trong thời
            gian 1 tháng đầu tiên kể từ ngày nhận máy, Quý khách được hỗ trợ chi
            phí 2 chiều nếu sản phẩm gặp lỗi kỹ thuật mà không khắc phục được từ
            xa (Áp dụng với Khách hàng ở ngoài khu vực Hà Nội ); Ngoài thời gian
            1 tháng kể trên, áp dụng bảo hành sản phẩm theo quy định chung của
            AnTech Việt Nam.
          </p>
          <p>
            - Với sản phẩm laptop mới sau khi nhận hàng, Quý khách có thể nâng
            cấp sản phẩm tại TTBH của hãng hoặc các địa điểm do hãng ủy quyền
            tại địa phương. AnTech Việt Nam sẽ không chịu trách nhiệm nếu Quý
            khách tự ý nâng cấp sản phẩm vì bất kỳ lý do gì. Sau khi nâng cấp
            sản phẩm, Quý khách sẽ chỉ được hưởng các điều kiện bảo hành do hãng
            quy định. Trong thời gian bảo hành của hãng, nếu sản phẩm gặp lỗi.
            Quý khách vui lòng liên hệ Hotline 0969885858 của AnTech Việt Nam
            hoặc liên hệ trực tiếp tới các TTBH được hãng ủy quyền trên toàn
            quốc để được hỗ trợ bảo hành.
          </p>
        </div>
        <div className="ml-20 mt-9">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#ff3300"
              class="bi bi-chat-right-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2ZM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg>
          </p>
        </div>
        <div className=" px-28">
          <p className="text-blue-700 text-[20px]">
            Cảm ơn quý khách đã tin tưởng và ủng hộ AnTech Việt Nam. Mọi thắc
            mắc xin liên hệ trực tiếp số điện thoại Hotline: 0969885858 để gặp
            chuyên viên bán hàng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RemotePolicy;
