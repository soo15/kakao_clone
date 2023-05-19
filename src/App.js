import "./App.css";
import "./Styles/common.scss";
import "./Styles/reset.scss";

function App() {
  return (
    <div className="App">
      {/* 중간로고 */}
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
      {/* end */}
      {/* 메뉴 장바구니 */}
      <div>
        <button type="button">
          <span>메뉴</span>
        </button>
        <button>
          <span>장바구니</span>
        </button>
      </div>
      {/* end */}
      {/* 검색 */}
      <div>
        <button>
          <span>검색</span>
        </button>
      </div>
      {/* 검색 */}
      {/* menu bar */}
      <div>
        <ul>
          <li>
            <a href="/home">
              <span> 홈</span>
            </a>
          </li>
          <li>
            <a>
              <span> 베스트</span>
            </a>
          </li>
          <li>
            <a href="/today">
              <span>
                콘텐츠 <span>new</span>
              </span>
            </a>
          </li>
          <li>
            <a href="/mypage">
            <span>1</span>
            </a>
          </li>
        </ul>
      </div>
      {/* end */}
      <div>
        <a>
          <span>1</span>
          <span>춘식이와 신나는 생일파</span>
          <span>
            생일을 맞은 친구에게
            특별한 하루를 선물해보세요
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
