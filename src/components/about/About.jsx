import React from 'react'
import './about.scss'
import Footer from '../footer/Footer'
export default function About() {
  return (
    <div className='aboutme' >
      <div className="avatar">
        <img src="https://avatars.githubusercontent.com/u/143258708?v=4" alt="" />
        <h1>关于我</h1>
        <span>逝者如斯夫</span>
      </div>
      <div className='cards'>
        <div className='card first'>
          <div className="me">
            <span>你好，很高兴认识你👋abcABC</span>
            <h1>我叫 黄佳奇🥹</h1>
            <span>🥹🥹</span>
          </div>
          <div className="intro">
            <span>🥹🥹</span>
            <h1>前端开发</h1>
            <h1>一枚</h1>
          </div>
        </div>
        <div className='card second'>

        </div>
        <div className='card third'>
          <div className="me">
            <h1>🥹🥹🥹</h1>
          </div>
          <div className="intro">
            <span>🥹🥹</span>
          </div>
        </div>
        <div className='card second'>

        </div>
      </div>
      
    </div>
  )
}
