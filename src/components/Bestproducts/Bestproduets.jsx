import React from "react";

function Bestproduets() {
  return (
    <div className="wrap_storebest">
      <div className="best_item">
        <are className="ara_tit">
          <strong className="tit_g">제일 잘 나가요</strong>
          <a href="/" className="link_moer">
            더보기
          </a>
          <span className="icon_friends"></span>
        </are>
      </div>
      <div>
        <div className="flicking-camera">
          <div className="panel">
            <ul className="list_storebest">
              <li>
                <div className="product_contents">
                  <a href="/" className="link-item">
                    <div className="wrap_thumb">
                      <img src="" alt="" />
                    </div>
                    <span className="screen_out">상품순위</span>
                    <span className="number_lanking">1</span>
                    <div className="info_product">
                      <span className="screen_out"></span>
                      <span className="tit_info"></span>
                      <span className="price_product">
                        <sapn className="screen_out">가격</sapn>
                        <sapn className="txt_price">
                          <em className="emph_num">3200</em>"원"
                        </sapn>
                      </span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav_pagenation">
        <button className="btn_cmslide btn_prev">
          <span>이전</span>
        </button>
        <span className="num_pagenation">
          <span>현재</span>
          <span>전체 개수</span>
        </span>
        <button className="btn_cmslide btn_next">
          <span>다음</span>
        </button>
      </div>
    </div>
  );
}

export default Bestproduets;
