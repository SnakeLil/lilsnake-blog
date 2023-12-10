import { useEffect, useState } from 'react';
import { show_runtime } from '@/utils/time/showRunTime'
import './runTImeCard.scss'
export default function RunTImeCard() {
    const [time, setTime] = useState('') //time:运行时间

    useEffect(() => {
        setTime(show_runtime())
        const timer = setInterval(() => {
            setTime(show_runtime())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className='runTImeCard'>
            {time}
        </div>
    )
}
