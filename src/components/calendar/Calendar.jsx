import React from 'react'
import  './calendar.scss'
import MyCalendar from '@/components/MyCalendar/components/calendar/calendar.jsx'
export default function Calendar() {
  return (
    <div className='calendar'>
        <hr />
        <MyCalendar/>
    </div>
  )
}
