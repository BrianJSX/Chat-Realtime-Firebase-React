import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import './style.scss';

const Message = ({text, displayName, createAt, photoURL}) => {
    return (
        <div className="message">
           <div className="message__header">
                <div className="message__header__avatar">
                    <Avatar>A</Avatar>
                </div>
                <div className="message__header__name">
                    Test
                </div>
                <div className="message__header__createAt">
                    20/12/1222
                </div>
           </div>
           <div className="message__content">
                sadasdsadsadsa
           </div>
        </div>
    );
}

export default Message;
