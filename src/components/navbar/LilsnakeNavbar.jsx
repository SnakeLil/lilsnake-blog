
import { Link } from 'react-router-dom'
import './lilsnakeNavbar.scss'
import Dialog from '../dialog/Dialog'
import { useState } from 'react';
import Search from '../search/Search';
import Calendar from '../calendar/Calendar';
import MyCalendar from '@/components/MyCalendar/components/calendar/calendar.jsx'

export default function LilsnakeNavbar() {
    const [isSewarchOpen, setIsSewarchOpen] = useState(false);
    const [diaLogW, setDiaLogW] = useState('')
    const [diaLogH, setDiaLogH] = useState('')
    const [diaLogTop, setDiaLogTop] = useState('')
    const [diaLogTitle, setDiaLogTitle] = useState('')
    const [currentComponent, setCurrentComponent] = useState(null)
    const handleSearchOpen = () => {
        setIsSewarchOpen(true)
        setDiaLogW('600px')
        setDiaLogH('230px')
        setDiaLogTop('-350px')
        setDiaLogTitle('搜索')
        setCurrentComponent(<Search setIsSewarchOpen={setIsSewarchOpen} />)
    }
    const handleCalendarOpen = () => {
        setIsSewarchOpen(true)
        setDiaLogW('500px')
        setDiaLogH('450px')
        setDiaLogTop('0px')
        setDiaLogTitle('日历')
        setCurrentComponent(<Calendar />)
    }
    return (
        <div className="lilsnake-navbar">
            <div className="wraper">
            <Link to='/lilsnake' >
            <div className="logo">
                    <h2>lisnake</h2>
                </div>
            </Link>
                <div className='menu'>
                    <Link to='/lilsnake' className='itemlink'>
                        <div className='menu-item'>
                            个人⏱
                        </div>
                    </Link>
                    <Link to='/introduce' className='itemlink'>
                        <div className='menu-item'>
                            更多🏍
                        </div>
                    </Link>
                    <Link to='/about' className='itemlink'>
                        <div className='menu-item'>
                            关于🎡
                        </div>
                    </Link>
                    <Link to='/introduce' className='itemlink'>
                        <div className='menu-item'>
                            联系🌅
                        </div>
                    </Link>
                    <Link to='/timeline' className='itemlink'>
                        <div className='menu-item'>
                            日志📒
                        </div>
                    </Link>

                </div>
                <div className="featrue">
                    <div className='featrue-item'
                        onClick={handleSearchOpen}>
                        🔍
                    </div>
                    <div className='featrue-item'
                        onClick={handleCalendarOpen}>
                        📆
                    </div>
                    <div className='featrue-item'>
                        ⚙
                    </div>
                </div>
            </div>
            <Dialog
                title={diaLogTitle}
                setIsSewarchOpen={setIsSewarchOpen}
                visible={isSewarchOpen}
                setVisible={setIsSewarchOpen}
                top={diaLogTop}
                width={diaLogW}
                height={diaLogH}
                animalVisible={true}>
                <div className='dialog-body'>
                    {currentComponent}
                </div>
            </Dialog>
        </div>
    )
}
