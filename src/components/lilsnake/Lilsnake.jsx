import { useEffect, useRef, useState } from 'react';
import './lilsnake.scss'
import { useParams, useRoutes } from 'react-router-dom';
import RunTImeCard from '../runTImeCard/RunTImeCard';
import LeftBar from '../leftbar/LeftBar';
import request from '@/utils/request/request.js'
import showdown from 'showdown'
// import '@/style/geekBlack.scss'
// import '@/style/pink.scss'
import '@/style/lilsnake.scss'
import Poker from '@/components/poker/Poker'
export default function Lilsnake() {
  const [te, setTe] = useState('')
  const [noteId, setNoteId] = useState(1)
  showdown.setOption('optionKey', 'lilsnake');

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
  const getinfo = () => {
    request.get(`note/find/${noteId}`).then(res => {
      setTe(converter.makeHtml(res[0].content))
    })
  }

  const ref = useRef()



  useEffect(() => {
    ref.current.innerHTML = te.toString()
    getinfo()
  }, [te, noteId])

  return (
    <div className='lil'>
      <div className="poker-body">
        {/* <Poker/> */}
      </div>
      <div className='text'>
        test
      </div>
      <div className='card'>
        <div className="left">
          <div className="lefttop">

          </div>
          <div className="leftbtm">
            
          </div>
        </div>
        <div className="right">

        </div>
      </div>
      <div className='md'>
        <div className="lilLeft markdown-body" ref={ref}>

        </div>
        <div className="lilRight">
          {/* <RunTImeCard /> */}
          <LeftBar setNoteId={setNoteId} />
        </div>
      </div>



    </div>
  )
}
