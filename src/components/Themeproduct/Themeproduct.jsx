import React from "react";

function Themeproduct() {
  return (
    <div className="wrap_theme">
      <div className="area_tit">
        <stron className="tit_g"></stron>
      </div>
      <div>
        <strong className="screen_out">테마 상품 목록</strong>
        <div>
          <a>
            <div className="intro_theme">
              <div className="area_video"></div>
              <div className="box_txt">
                <span className="screen_out">영상 타이틀</span>
                <strong className="tit_theme">일상에 포인트를 더하다</strong>
                <span className="screen_out">영상 설명</span>
                <span className="desc_theme">
                  시선을 사로잡는 체커보드 인테리어
                </span>
              </div>
            </div>
          </a>
          <ul className="list_theme">
            <li>
              <a href="/" className="link_item">
                <span className="wrap_thumb">
                  <img src="" alt="" className="thumb_g" />
                </span>
                <span className="info_product">
                  <span className="screen_out">상품명</span>
                  <span className="tit_item">
                    EveryYay 납작 필로우_체커보드라이언
                  </span>
                  <span className="screen_out">가격</span>
                  <span className="price_product ng-star-inserted">
                    <span className="screen_out">가격</span>
                    <span className="txt_price">
                      <em className="emph_num">29,000</em>원
                    </span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <div className="">
            <a href="/" className="link_them">
              기획전 보러가기
            </a>
            <a href="/" className="btn_them">
              <span className="icon_friends icon_refresh">새로고침</span>"다른 기획전 보기 1/2"
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Themeproduct;
