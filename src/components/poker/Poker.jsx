import React, { useEffect, useRef, useState } from 'react'
import './poker.scss'
import _ from 'lodash'
import {randomUtilEmoji} from '@/utils/randomEmoji/randomEmoji.js'
export default function Poker({
    imgArr = ['https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/85/wallhaven-85dwdk.jpg?w=2560&h=1440&fmt=webp',
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gp2qre.png?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/9d/wallhaven-9dgpxd.png?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gp2qre.png?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gp2qre.png?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/3l/wallhaven-3lrmm9.jpg?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/rr/wallhaven-rr6qkw.png?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/d6/wallhaven-d6wkwl.png?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/85/wallhaven-85joo1.png?w=2560&h=1440&fmt=webp',
        'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/gp/wallhaven-gp2qre.png?w=2560&h=1440&fmt=webp',],
}) {
    const [currentArr, setCurrentArr] = useState([])
    const rotateArray =(arr) => {
        const lastItem = arr.pop();  // 移除最后一个元素
        arr.unshift(lastItem);       // 将最后一个元素插入到数组开头
        return arr;
    }
    const [flag,setFlag] =useState(false)
    const [myImgArr,setMyImgArr] = useState(_.cloneDeep(imgArr))
    const ref = useRef()
    const handleClickMove = () => {
        setMyImgArr(rotateArray(myImgArr))
        setFlag((pre=>!pre))
        setCurrentArr(_.takeRight(myImgArr, 4))
        ref.current.className = 'container animate'
        setTimeout(() => {
            ref.current.className = 'container'
        }, 300);
    }

    useEffect(() => {
        setCurrentArr(_.takeRight(myImgArr, 4))
    }, [])

    return (
        <div>
            <div className="container" ref={ref}>
                {currentArr?.map((item, index) => {
                    return (
                        <div className={`poker poker${index + 1}`} key={index}>
                            <img src={item} />
                        </div>
                    )
                })}
                <div className="poker_top poker5" onClick={handleClickMove}>
                {randomUtilEmoji}
                <span style={{fontSize:'26px'}}>↪</span>
                </div>
            </div>
        </div>
    )
}
