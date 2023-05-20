import React from "react";

function Newproducts() {
  return (
    <div className="wrap_newfriends">
      <div className="area_tit">
        <strong>새로 나왔어요</strong>
        <a href="/" className="link_more">
          더보기
        </a>
        <span className="icon_friends"></span>
      </div>
      <div className="flicking-viewprot slide_newfriend">
        <div className="flicking-camera">
          <div className="panel">
            <div className="item_newfriends">
              <a href="/" className="link_item">
                <span className="wrap_thumb">
                  <img src="" alt="" className="thub_g" />
                </span>
                <span className="info_produect">
                  <span className="screen_out">상품명</span>
                  <span className="tit_item">탁상전자시계</span>
                  <span className="price_produect">
                    <span className="sceen_out">가격</span>
                    <span className="txt_price">
                      <em className="emph_num">39,000</em>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newproducts;
