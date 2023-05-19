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
      <hr/>
      <div>
        <button type="button">
          <span>메뉴</span>
        </button>
        <button>
          <span>장바구니</span>
        </button>
      </div>
      <hr/>
      <div>
        <button>
          <span>검색</span>
        </button>
      </div>
      <hr/>
      <div>
        <a href="/promotions/1521">
          <span>11</span>
          <span>
            <strong>고구마 키우기에 도전한 춘식이</strong>
            <span>춘식이네 농장으로 놀러오라냥!</span>
          </span>
        </a>
      </div>
      <hr/>
      <divs>
        <a href="/category/new-product">
          <span>신상품</span> 신상품 <span>NEW</span>
        </a>
      </divs>
      <hr/>
      <div>
        <button>
          <span>이전</span>
        </button>
        <span>현재</span>
        <span>전체 개수</span>
        <button>
          <span>다음</span>
        </button>
      </div>

      <hr/>
      <strong>새로 나왔어요</strong>
      <a>더보기<span></span></a>

      <hr/>
      <div>
        <div>
          <a href="/feed/5035">
            <span>
              이런 굿즈 만들어주세요!<em>굿즈 오디션 응모하러가기</em>
            </span>
            <span>
              <img src="#" />
            </span>
          </a>
        </div>

      <hr/>
        <div>
          <span>
            COOL하게 여름나기!<em class="emph_txt">하와이안 라춘과 더위탈출</em>
          </span>
        </div>

      <hr/>
        <div>
          <a href="/promotions/1418">
            <span>
              무직타이거X카카오프렌즈<em>콜라보 굿즈 세일</em>
            </span>
            <span>
              <img />
            </span>
          </a>
        </div>
        <hr/>
        <div>
          <ul>
            <li>
              <div><a href="/products/8721">
                <img src="https://img1.kakaocdn.net/thumb/R68x68@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20220718180445425_8809814926276_AW_00.jpg" alt="차량용 방향제_바람개비 리틀라이언" />
            
              <span>상품 순위</span><span>1</span><div>상품명</div>
              <span>차량용 방향제_바람개비 리틀라이언</span><span>가격</span><span><em>17,000</em>원</span>
              </a></div>
          </li>
          <li>
            <div><a href="/products/9869">
            <div>
                <img src="https://img1.kakaocdn.net/thumb/R68x68@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20230518100550957_8809943000199_8809943000199_AW_00.jpg" alt="와다다곰 인형키링 유치원모자"/>
            </div>
            <span>상품 순위</span><span>2</span>
            <div>
              <span>
                <span>와다다곰 인형키링 유치원모자</span>
                <span>가격</span>
                <span><em>15,000</em>원</span>
              </span>
            </div></a>
            </div>
          </li>
          <li>
            <a href="/products/9581">
                  <img src="https://img1.kakaocdn.net/thumb/R68x68@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20230310154556253_8809922501532_AW_00.jpg" alt="바람개비 방향제_춘식이" />
                 
                  <span>상품 순위</span>
                  <span>3</span>
                  <div>상품명</div>
                  <span>바람개비 방향제_춘식이</span>
                  <span>가격</span>
                  <span class="txt_price ng-star-inserted"><em>17,000</em>원</span>
                  </a></li></ul></div>
      <hr/>
      </div>
      </div>
  )
};

export default App;