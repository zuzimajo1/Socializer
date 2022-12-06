import { styled } from '@mui/material'

import TypographyText from '../Text/TypographyText'
import UserAvatar from '../Image/UserAvatar'


const StickyProfile = () => {
  return (
    <StickyContainer>
      <UserAvatar width="60px" height="60px" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User"/>     
      <TypographyText lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="subtitle1" text="Zuzim Ajo"/>
    </StickyContainer>
  )
}

const StickyContainer = styled('div')(({theme})=>({
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
    position: "none",
    top: "0",
    padding: "0 var(--padding-md)",
  }

}))


export default StickyProfile