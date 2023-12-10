import React from 'react'
import './leftbar.scss'
export default function LeftBar({ setNoteId }) {
  const handleClick = (e) => {
    
    if(e.target.className === 'list-item') {
      console.log(e.target.dataset.key)
      setNoteId(e.target.dataset.key)
    }
  }
  return (
    <div className='leftbar'>
      <h2 className='leftbar-title'>Note</h2>
      <div className="list" onClick={handleClick}>
        <span className='list-item' data-key='1'>HTML</span>
        <span className='list-item' data-key='2'>CSS</span>
        <span className='list-item' data-key='3'>JavaScript</span>
        <span className='list-item' data-key='4'>npm</span>
        <span className='list-item' data-key='5'>git</span>
        <span className='list-item' data-key='6'>React</span>
        <span className='list-item' data-key='7'>Vue2/Vue3</span>
        <span className='list-item' data-key='8'>node.js</span>
        <span className='list-item' data-key='9'>TypeScript</span>
        <span className='list-item' data-key='10'>webpack</span>
        <span className='list-item' data-key='11'>vite</span>
      </div>
    </div>
  )
}
