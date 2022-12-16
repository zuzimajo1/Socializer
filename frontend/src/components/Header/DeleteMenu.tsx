import React from 'react'
import { Menu, MenuItem } from "@mui/material";


type Props = {
    Close(event: React.MouseEvent<HTMLButtonElement>): void;
    AnchorEl: any;
    open: boolean;
    Click :( event: React.SyntheticEvent )=> void;
}


const DeleteMenu = ({Close , open , AnchorEl, Click}: Props) => {
  return (
      <Menu anchorEl={AnchorEl} open={open} onClose={Close}>
          <MenuItem onClick={Click}>Delete</MenuItem>
      </Menu>
  )
}

export default DeleteMenu