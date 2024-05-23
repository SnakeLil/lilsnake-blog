import React from 'react'
import './search.scss'
import { Link } from 'react-router-dom'
export default function Search({setIsSewarchOpen}) {
    const handleClickItem = ()=>{
        // 解决点击跳转，但弹窗不关闭
        setIsSewarchOpen(false)
    }
  return (
    <div className='search'>
        <hr />
        <div className='main'>
            <input type="text" className='searchbar' placeholder='🔍搜索文章'/>
            <span className='line'></span>
            <div className='result'>
                <div className="search-item1" onClick={handleClickItem}>
                    <Link to=''>
                    <h3>title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur reiciendis numquam dolores corporis. Natus dolor, hic beatae consequuntur culpa ad, iste ullam quod sequi modi quae maxime, repellat odio.</p>
                    </Link>
                </div>
                <div className="search-item1">
                    <Link to=''>
                    <h3>title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur reiciendis numquam dolores corporis. Natus dolor, hic beatae consequuntur culpa ad, iste ullam quod sequi modi quae maxime, repellat odio.</p>
                    </Link>
                </div>
                <div className="search-item1">
                    <Link to=''>
                    <h3>再次在浏览器中打开 dist/index.html，应该看到 Hello web</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur reiciendis numquam dolores corporis. Natus dolor, hic beatae consequuntur culpa ad, iste ullam quod sequi modi quae maxime, repellat odio.</p>
                    </Link>
                </div>
                <div className="search-item1"></div>
                <div className="search-item1"></div>
            </div>
        </div>
    </div>
  )
}
