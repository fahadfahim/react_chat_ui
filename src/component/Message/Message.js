import React from 'react'
import IncomingMessage from '../IncomingMessage/IncomingMessage'
import OutgoingMessage from '../OutgoingMessage/OutgoingMessage'
import jak from '../../asset/jak.jpg'
import fad from '../../asset/fad.jpg'

function Messages() {
    return (
        <div className="mesgs">
        <div className="msg_history">
        <IncomingMessage msg="hi how are you" time="11:01 AM" date="Nov 12" img={jak}/>
        <OutgoingMessage msg="i am fine what about you" time="11:02 AM" date="Nov 12" img={fad}/>
        <IncomingMessage msg="i am fine too what are you doing now ...??" time="11:03 AM" date="Nov 12" img={jak}/>
        <OutgoingMessage msg="nothing you ...??" time="11:02 AM" date="Nov 12" img={fad}/>
        <IncomingMessage msg="chating with you ;) :)...??" time="11:02 AM" date="Nov 12" img={jak}/>
        <OutgoingMessage msg="did you know about our exam when it's started" time="11:02 AM" date="Nov 12" img={fad}/>
        <IncomingMessage msg="no i don't know ;) :)...??" time="11:02 AM" date="Nov 12" img={jak}/>
        <OutgoingMessage msg="okay" time="11:02 AM" date="Nov 12" img={fad}/>
        <IncomingMessage msg="no i don't know ;) :)...??" time="11:02 AM" date="Nov 12" img={jak}/>
        <OutgoingMessage msg="okay" time="11:02 AM" date="Nov 12" img={fad}/>
        <IncomingMessage msg="no i don't know ;) :)...??" time="11:02 AM" date="Nov 12" img={jak}/>
        <OutgoingMessage msg="okay" time="11:02 AM" date="Nov 12" img={fad}/>
        <OutgoingMessage msg="hello" time="11:02 AM" date="Nov 12" img={fad}/>
        </div>
      </div>
    )
}

export default Messages
