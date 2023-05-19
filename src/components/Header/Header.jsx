import React from "react";
import "./Header.scss";
import logo from "../../assets/images/Logo/logo_kakaofriends.gif";
import Nav from "components/Nav/Nav";

function Header() {
  return (
    <header className="doc-header">
      <h1 className="screen_out">KAKAO FRIENDS</h1>
      <h2 className="doc-title">
        <a href="/" className="link_logo_theme">
          <img alt="KAKAO FRIENDS" className="img_g" src={logo} srcset="" />
        </a>
      </h2>
      <div className="group_util util_left">
        <button className="btn_util">
          <span className="ico_friends ico_cart">장바구니</span>
        </button>
        <button className="btn_util">
          <span className="ico_friends ico_gnb_menu">메뉴</span>
        </button>
      </div>
      <div className="group_util util_right">
        <button>
          <span className="ico_friends ico_search">검색</span>
        </button>
      </div>
      <Nav />
    </header>
  );
}
export default Header;
