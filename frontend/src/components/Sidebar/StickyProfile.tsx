import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

import TypographyText from '../Text/TypographyText'
import UserAvatar from '../Image/UserAvatar'
import { useAppSelector } from '../../hooks/rtk.hooks'

const StickyProfile = () => {

  const auth: any  = useAppSelector(state => state?.auth);
  return (
    <StickyContainer>
      <UserAvatar width="60px" height="60px" src={auth?.user?.img || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt="User"/>     
      <Link to="/profile">
        <TypographyText line="underline" lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)" variant="subtitle1" text={`${auth?.user?.firstname} ${auth?.user?.lastname}`}/>
      </Link>
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