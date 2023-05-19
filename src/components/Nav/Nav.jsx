import React from 'react'
import './Nav.scss';

function Nav() {
  return (
    <div>
        <nav className='doc-gnb tab_main_1depth'>
            <h2 className='screen_out'>카카오프렌즈 메인메뉴</h2>
            <ul className='list_tab'>
                <li>
                    <a href="/"><span className="txt_tab">Home</span></a>
                </li>
                <li>
                    <a href="/"><span className="txt_tab">베스트</span></a>
                </li>
                <li>
                    <a href="/"><span className="txt_tab">콘텐츠</span></a>
                </li>
                <li>
                    <a href="/"><span className="txt_tab">마이</span></a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav