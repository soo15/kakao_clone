import React from "react";

function Widevideo() {
  return (
    <div className="wrap_movie">
      <div className="area_tit">
        <strong className="tit_g">귀여운 숏클립</strong>
      </div>
      <div className="flicking-viewport slide_movie"></div>
      <div className="flicking-camera">
        <div className="panel">
          <div className="item_movie">
            <a href="/" className="link_video">
              <div className="area_video">
                <video src=""></video>
              </div>
            </a>
            <a href="/" className="link_video">
              <div className="warp_thumb">
                <img src="" alt="" />
              </div>
              <div className="info_proudct">
                <span className="screen_out">상품명</span>
                <strong className="tit_item">
                  케이크 오르골 브릭피규어_라&춘
                </strong>
                <span className="screen_out">상품 설명</span>
                <span className="desc_product">춘식이 파티템과 찰떡</span>
                <span className="price_product">
                  <span className="screen_out">가격</span>
                  <span className="txt_price">
                    <em className="emhp_num">4,900</em>
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widevideo;
