import React from 'react';
import './Message.sass';

const Message = React.memo(({message}) => {
  return (
    <div className="message">
      <div className="container message__container">
        <h2 className="message__message">{message}</h2>
      </div>
    </div>
  )
});

export default Message;
