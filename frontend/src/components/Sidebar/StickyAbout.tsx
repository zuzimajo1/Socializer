import { styled } from "@mui/material";
import Logo from "../../assets/Logo.png";
import UserAvatar from "../Image/UserAvatar";
import TypographyText from '../Text/TypographyText';


const StickyAbout = () => {
    const year = new Date().getFullYear();
  return (
    <StickyContainer>
          <Wrapper>
            <UserAvatar width="50px" height="50px" src={Logo} alt="Logo"/>
           <TypographyText lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="h6" text="Socializer" />
          </Wrapper>
          <Wrapper>
             <TypographyText lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)" variant="subtitle2" text={`All Rights Reserved ${year}`}></TypographyText>   
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