import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const Chats = () => {
  return(
        <ListItem>
        <ListItemAvatar>
          <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <div className="p-chat__bubble">
    ダミーテキスト
        </div>
      </ListItem>
  );
}

export default Chats;