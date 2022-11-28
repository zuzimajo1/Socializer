import { Tab, Tabs, styled, useTheme, Button, Menu, Avatar, MenuItem } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react'



export const UserMenu = () => {

  const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(AnchorEl);

  const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const HandleClose = () => {
    setAnchorEl(null);
  }

  const theme = useTheme();

  return (
    <MenuContainer>
      <MenuButton variant="text" onClick={HandleClick}>
        <Avatar sx={{ marginRight: '1rem' }} alt="User" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" />
        <ArrowDropDownIcon fontSize='medium' sx={{ color: theme.palette.mode === 'light' ? 'var(--maintext-light)' : 'var(--maintext-dark)' }} />
      </MenuButton>
      <Menu anchorEl={AnchorEl} open={open} onClose={HandleClose}>
        <MenuItem>Change Password</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </MenuContainer>
  )
}

const MenuContainer = styled('div')({
  padding: "0 var(--padding-md)",
})

const MenuButton = styled(Button)(({theme})=> ({
  backgroundColor: theme.palette.mode === "light" ? "#e2eaee" : "#9aa5a7211",
  border: "1px solid gray",
  borderRadius: "0.8rem",
  padding: "0 var(--padding-xxs)",
}))






export default UserMenu