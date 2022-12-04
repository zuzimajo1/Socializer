import { styled, useTheme, Button, Menu, MenuItem, ListItemIcon } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react'
import UserAvatar from '../Image/UserAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

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
        <UserAvatar width="40px" height="40px" margin="0 1rem 0 0.5rem" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
        <ArrowDropDownIcon fontSize='medium' sx={{ color: theme.palette.mode === 'light' ? 'var(--maintext-light)' : 'var(--maintext-dark)' }} />
      </MenuButton>
      <Menu sx={{ padding: "var(--padding-sm) var(--padding-md)" }} anchorEl={AnchorEl} open={open} onClose={HandleClose}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemIcon>
            Profile
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemIcon>
            Logout
          </ListItemIcon>
        </MenuItem>
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