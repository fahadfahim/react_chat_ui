import { Avatar } from '@material-ui/core'
import React from 'react'
// import IncomingMessages from '../IncomingMessages.json'
import './IncomingMessage.css'
function IncomingMessage({msg,time,date,img}) {
    return (
         <div className='income_area'>
        <div className="incoming_msg">
            <div className="incoming_msg_img">
            <Avatar src={img} className='inc_img'/>
            </div>
            <div className="received_msg">
              <div className="received_withd_msg">
                <p>{msg}</p>
                <span className="time_date"> {time}    |    {date}</span></div>
            </div>
            </div>
          </div>
    )
}

export default IncomingMessage
