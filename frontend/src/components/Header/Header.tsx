import { Container, styled, ToggleButton } from '@mui/material';
import React from 'react';
import ThemeToggler from './ThemeToggler';
import Logo from "../../assets/Logo.png";
import UserMenu from './UserMenu';
import ButtonIcon from './ButtonIcon';
import HomeIcon from '@mui/icons-material/Home';

export const Header = () => {
  const HandleClick = ()=> {
    console.log("Hello")
  }

  return (
    <HeaderContainer>
      <FirstDivision>
        <Image src={Logo} alt="Logo"></Image>
      </FirstDivision>
      <SecondDivision>
        <ButtonIcon Click={HandleClick} Icon={HomeIcon} title="Press to navigate/refresh" />
        <UserMenu/>
        <ThemeToggler />
      </SecondDivision>
    </HeaderContainer>
  )
}



const HeaderContainer = styled('header')(({theme})=> ({
  width: "100vw",
  height: "55px",
  zIndex: "99",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  padding: "0 var(--padding-lg)",
  backgroundColor: theme.palette.mode === "light" ? "var(--background-color-light)" : "var(--background-color-dark)",

  [theme.breakpoints.down('md')] : {
    padding: "0 var(--padding-md)",
  },

  [theme.breakpoints.down('sm')] : {
    padding: "0 var(--padding-xxs)",
  }
}))

const Image = styled('img')({
  width: "50px",
  height: "50px",
})
 
const FirstDivision = styled('div')({
  flex: "1",
  height: "100%",
  display: "flex",
  alignItems: "center",
})

const SecondDivision = styled('div')({
  flex: "1",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
})

export default Header