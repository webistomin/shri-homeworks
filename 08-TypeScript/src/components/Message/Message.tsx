import React from 'react';
import './Message.sass';

export interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = (props) => {

    const { message } = props;

    return (
        <div className="message">
          <div className="container message__container">
            <h2 className="message__message">{message}</h2>
          </div>
        </div>
    )
};


export default Message;
