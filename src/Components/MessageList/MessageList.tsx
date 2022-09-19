import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Messages } from 'src/types'

interface Message {
  author: string,
  text: string
}

interface MassageListProps {
  messages:Messages;
}

export const MessageList: FC<MassageListProps> = ({ messages }) => {
  return (
    <List>
      {messages.map((el, idx) => (
        <ListItem key={idx}>
          {el.author}: {el.text}
        </ListItem>
      ))}
    </List>
  );
};
