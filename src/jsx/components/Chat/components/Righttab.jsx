import React from 'react'
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';

const Righttab = (props) => {

    return (
        <div className="col-9" id="chat">
            <ChatHeader isCollapsed={props.isCollapsed} toggleMenu={props.toggleMenu}></ChatHeader>
            <ChatBox></ChatBox>
        </div>
    )
}

export default Righttab