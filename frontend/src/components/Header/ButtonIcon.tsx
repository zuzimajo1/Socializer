import React from 'react';
import { IconButton, Tooltip } from '@mui/material';

interface Props {
  Icon :React.ElementType;
  title?: string;
  Click(event: React.MouseEvent<HTMLButtonElement>): void;
  fontSize: string;
}

const ButtonIcon = ({ Icon, fontSize, title, Click}: Props) => {
  return (
    <IconButton onClick={Click}>
        <Tooltip title={title} placement='bottom'>
        <Icon fontSize={fontSize}/>
        </Tooltip>
    </IconButton>
  )
}






export default ButtonIcon