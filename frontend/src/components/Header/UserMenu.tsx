import React, { useState } from 'react'
import { styled, useTheme, Button, Menu, MenuItem, ListItemIcon } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/rtk.hooks';
import UserAvatar from '../Image/UserAvatar';
import { authLogout } from '../../features/asyncThunk';


export const UserMenu = () => {
  const [AnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(AnchorEl);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth: any = useAppSelector(state => state.auth);

  const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const HandleClose = () => {
    setAnchorEl(null);
  }

  const HandleLogout = async ()=>{
    await dispatch(authLogout());
    navigate("/login")
  }



  const theme = useTheme();

  return (
    <MenuContainer>
      <MenuButton variant="text" onClick={HandleClick}>
        <UserAvatar width="40px" height="40px" margin="0 1rem 0 0.5rem" src={auth?.user?.img || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt="User" />
        <ArrowDropDownIcon fontSize='medium' sx={{ color: theme.palette.mode === 'light' ? 'var(--maintext-light)' : 'var(--maintext-dark)' }} />
      </MenuButton>
      <Menu sx={{ padding: "var(--padding-sm) var(--padding-md)" }} anchorEl={AnchorEl} open={open} onClose={HandleClose}>
        <MenuItem onClick={()=> navigate("/profile")}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemIcon>
            Profile
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={HandleLogout}>
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