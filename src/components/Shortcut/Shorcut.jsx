import React from 'react'

function Shorcut() {
  return (
    <div className='wrap_shortcut'>
            <strong>스토어 쇼컷</strong>
            <spna>스토어 메인 쇼컷</spna>
            <div className="flicking-camera">
                <div className="panel">
                    <a href="/" className="lik_item">
                        <span>신상품</span>
                        <span className="icon_dot"></span>
                    </a>
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
  )
}

export default Shorcut;