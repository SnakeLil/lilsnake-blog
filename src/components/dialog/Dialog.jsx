import  { Children, useEffect, useState } from 'react'
import _ from 'lodash'
import './dialog.scss'

export default function Dialog({
    animalVisible = true,
    title = '标题',
    children,
    visible = false,
    setVisible,
    width = '500px',
    height = '300px',
    top = '0px',
    bgColor = 'white',

}) {
    const animalEmojiArray = [
        "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
        "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🐒", "🦍", "🐔",
        "🐧", "🐦", "🐤", "🦆", "🦢", "🦉", "🦚", "🦜", "🐺", "🐗",
        "🐴", "🐎", "🦄", "🐖", "🐘", "🦏", "🦛", "🐪", "🐫", "🦒",
        "🦘", "🐨", "🐼", "🦝", "🐾", "🦔", "🐕", "🦓", "🦙", "🦛",
        "🦢", "🦚", "🦜", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕",
        "🦖", "🦦", "🦥", "🦨", "🦩", "🦮", "🐩", "🐕", "🐈", "🦓",
        "🦔", "🐇", "🐀", "🦘", "🦡", "🦫", "🐁", "🐭", "🐿️", "🐀",
        "🦣", "🐂", "🐃", "🐄", "🐮", "🐄", "🐆", "🦓", "🦒", "🐘",
        "🦏", "🐂", "🦌", "🐫", "🐐", "🦝", "🦙", "🦛", "🐖", "🐏",
        "🐑", "🐕", "🐩", "🦮", "🦺", "🐈‍⬛", "🐓", "🦃", "🦚", "🦜",
        "🦢", "🦩", "🦔", "🦑", "🐙", "🦐", "🦀", "🐚", "🐠", "🐟",
        "🐬", "🐳", "🐋", "🦈", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉",
      ];
    const [animal,setAnimal] = useState(_.sample(animalEmojiArray))
    const handleClickClose = ()=>{
        setVisible(false)
    }
    useEffect(()=>{
        setAnimal(_.sample(animalEmojiArray))
        
    },[visible])
    return (
        <div className="mask" style={{
            display: visible ? 'block' : 'none',
        }} onClick={()=>{
            setVisible(false)
            
        }}>
            <div className='dialog' style={{
                width: width ? width : '500px',
                height: height ? height : '300px',
                top: top ? top : '0',
                backgroundColor: bgColor ? bgColor : 'white',
                
            }}
            onClick={(event)=>{
                event.stopPropagation()
                // 阻止冒泡
            }}>
                <div className='title'>
                    <span>{animalVisible?animal:''} {title}</span>
                </div>
                
                {children}
                <button className='close'>
                    <i onClick={handleClickClose}>
                    
                    </i>
                </button>
            </div>
        </div>
    )
}
