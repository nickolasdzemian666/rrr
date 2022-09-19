import React, { useState } from 'react';
import { useEffect } from 'react';
import { MessageList } from './Components/MessageList/MessageList.js';
import { Form } from './Components/Form/Form.js';
import { Message,Messages } from 'src/types'

import './App.css';
import { AUTHOR } from './constans.js';

export const App = () => {
  const [messages, setMessages] = useState<Messages>([]);

  const addMessage = (newMessages: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessages]);
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Iam Bot',
        });
      }, 1000);
    }
  }, [messages]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </div>
  );
};
