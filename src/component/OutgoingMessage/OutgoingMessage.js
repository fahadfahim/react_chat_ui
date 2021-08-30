import { Avatar } from '@material-ui/core'
import React from 'react'
import './OutgoingMessage.css'
function OutgoingMessage({msg,time,date,img}) {
    return (
        <div className='outgoing_area'>
        <div className="outgoing_msg">
            <div className='outgoing_img'>
                <Avatar src={img} className='out_img'/>
            </div>
        <div className="sent_msg">
          <p>{msg}</p>
          <span className="time_dates">{time}   |    {date}</span> </div>
      </div>
      </div>
    )
}

export default OutgoingMessage