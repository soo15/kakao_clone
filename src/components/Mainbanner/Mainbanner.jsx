import React from 'react'
import './Mainbanner.scss'

function Mainbanner() {
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
                  slide 스토어 메인 배너
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Mainbanner