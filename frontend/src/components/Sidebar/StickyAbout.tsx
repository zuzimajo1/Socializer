import React from 'react';
import { styled } from "@mui/material";
import Logo from "../../assets/Logo.png";
import TypographyText from '../Text/TypographyText';
import TypographyMainText from '../Text/TypographyMainText';

const StickyAbout = () => {
    const year = new Date().getFullYear();
  return (
    <StickyContainer>
          <Wrapper>
            <LogoImage src={Logo} alt="Logo"/>
            <TypographyMainText padding="0" variant="h6" text="Socializer" />
          </Wrapper>
          <Wrapper>
             <TypographyText variant="subtitle2" text={`All Right Reserved ${year}`}></TypographyText>   
          </Wrapper>
    </StickyContainer>
  )
}

const StickyContainer = styled('div')(({ theme }) => ({
    width: "250px",
    height: "100px",
    position: "sticky",
    top: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.mode === "light" ? "var(--background-color-light)" : "var(--background-color-dark)",
    borderRadius: "var(--border-radius-sm)",

  [theme.breakpoints.down("lg")]: {
    width: "100%",
    padding: "0 var(--padding-md)",
    position: "none",
    top: "0",

    
  }
}))

const Wrapper = styled('div')({
    display: "flex",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
   
   
})


const LogoImage = styled('img')({
    width: "50px",
    height: "50px",
})







export default StickyAbout