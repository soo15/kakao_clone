import React from "react";

function Charactetbest() {
  return (
    <div className="wrap_characterbest">
      <div className="area_tit">
        <strong className="tit_g">내가 좋아하는 캐릭터</strong>
      </div>
      <strong className="screen_out">캐릭터 베스트</strong>
      <span className="screen_out">프렌즈 캐릭터 필터 탭</span>
      <div className="side_tab type_nav">
        <ul className="list_category">
          <li>
            <a href="/" className="link_tab">
              <span className="img_box">
                <img src="" alt="" />
              </span>
              <span className="screen_out">선택됨</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flicking-camera">
        <div className="panel">
            <a href="/" className="">
                <span className="wrap_thumb">
                    <img src="" alt="" className="thumb_g" />
                </span>
                <span className="info_produect">
                    <span className="screen_out">상품명</span>
                    <span className="tit_item">2in1무선충전거치대_베이커리 라&춘</span>
                    <span className="price_product">
                    <span className="screen_out">가격</span>
                    <span className="txt_price">
                        <em className="emph_num">49,000</em>
                    </span>
                    </span>
                </span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Charactetbest;
