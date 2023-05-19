import React from 'react'
import './Main.scss'

function Main() {
  return (
    <div>
        <h2 className='screen_out'>스토어 메인 배너</h2>
        <div className="section_storetab">
          <div className="wrap_mainbanner">
            <strong className="screen_out">
              스토어 메인 배너
            </strong>
            <div className="slide_mainbanner">
              <div className="flicking-camera">
                <div>
                  slide
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main