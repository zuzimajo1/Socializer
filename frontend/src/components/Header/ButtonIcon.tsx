import { IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';

interface Props {
  Icon :React.ElementType;
  title?: string;
  Click(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ButtonIcon = ({Icon, title, Click}: Props) => {
  return (
    <IconButton onClick={Click}>
        <Tooltip title={title} placement='bottom'>
        <Icon fontSize='medium'/>
        </Tooltip>
    </IconButton>
  )
}

export default ButtonIcon