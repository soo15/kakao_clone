import React from "react";

function Recommanditem() {
  return (
    <div className="wrap_recommand">
      <div className="area_tit">
        <strong className="tit_g">이건 사야해! 프렌즈 pick</strong>
      </div>
      <strong className="screen_out">추천 아이템</strong>
      <a href="/" className="Link_item">
        <div className="bnr_recomm">
          <img src="" alt="" className="img_g" />
        </div>
        <div className="txt_recomm">
          축하해
          <br />
          축하해
        </div>
        <div className="area_product">
          <div className="wrap_tumb">
            <img src="" alt="" className="thum_g" />
          </div>
          <div className="info_product">
            <span className="screen_out">상품명</span>
            <span className="tit_item">러브러브 메가 춘식이</span>
            <span className="price_products"></span>
            <em className="screen_out">할인가</em>
            <em>
              <span className="txt_num">59,000</span>
            </em>
            <span className="screen_out">정가</span>
            <span className="txt_fixed">79,000원</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Recommanditem;
