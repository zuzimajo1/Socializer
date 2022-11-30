import React from 'react'
import { Menu, MenuItem } from "@mui/material";


type Props = {
    Close(event: React.MouseEvent<HTMLButtonElement>): void;
    AnchorEl: any;
    open: boolean;
}


const DeleteMenu = ({Close , open , AnchorEl}: Props) => {
  return (
      <Menu anchorEl={AnchorEl} open={open} onClose={Close}>
          <MenuItem onClick={()=> console.log("Delete")}>Delete</MenuItem>
      </Menu>
  )
}

export default DeleteMenu