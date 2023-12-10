import React, { useEffect, useRef, useState } from 'react'
import './timeLine.scss'
import '@/style/lilsnake.scss'
import request from '@/utils/request/request.js'
import showdown from 'showdown'

export default function Timeline() {
    const converter = new showdown.Converter({
        optionKey: 'lilsnake',
        tables: true,
        strikethrough: true,
        tasklists: true,
        ghCodeBlocks: true,
        smoothLivePreview: true,
        smartIndentationFix: true,
        disableForced4SpacesIndentedSublists: true,
        emoji: true
      })
      const ref = useRef()
    const [timelineData,setTimelineData] = useState('')
    const getTimeline = async()=>{
        let res = await request.get('timeline')
        console.log(res)
        setTimelineData(converter.makeHtml(res[0].log))
    }
    useEffect(()=>{
        getTimeline()
        ref.current.innerHTML = timelineData
    },[timelineData])
    return (
        <div className='timeline'>
           
            <div className="content markdown-body" ref={ref}>
                {timelineData}
            </div>
        </div>
    )
}
