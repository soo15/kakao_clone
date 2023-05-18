import "./App.css";
import "./Styles/common.scss";
import "./Styles/reset.scss";

function App() {
  return (
    <div className="App">
      <header>
        <h1>KAKAO FRIENDS</h1>
        <a href="/">
          <img
            alt="KAKAO FRIENDS"
            src="https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20230517/085616/assets/images/m960/logo_kakaofriends.gif"
            srcset=""
          />
        </a>
      </header>
      <div>
        <button type="button">
          <span>메뉴</span>
        </button>
        <button>
          <span>장바구니</span>
        </button>
      </div>
      시작!!
    </div>
  );
}

export default App;
