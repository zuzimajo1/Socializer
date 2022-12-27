import { styled } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonSubmit, Header, TypographyText } from '../components';
import { FullWidthCenterVerticalContainer, MainContainer } from '../styles/Containers.styled';
import { isLoggedIn } from "../utils/helpers";
import { useAppDispatch } from "../hooks/rtk.hooks";
import { refreshAll } from "../features/asyncThunk";


const NotFound = () => {
  const login = isLoggedIn();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAll());
  }, [dispatch])
  return (
    <MainContainer>
      <Header login={login} />
      <Error />
    </MainContainer>
  )
}

const Error = () => {
  const login = isLoggedIn();
  const navigate = useNavigate();
  const HandleClick = ()=>{
    login ? navigate("/") : navigate("/login")
  }


  return (
    <ErrorContainer>
      <FullWidthCenterVerticalContainer>
        <TypographyText variant="h2" fontweigth="600" lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)"  text="404 Not Found"></TypographyText>
        <TypographyText variant="h6" fontweigth="400" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)"  text="You are trying to access an unknown page"></TypographyText>
        <ButtonSubmit click={HandleClick}  variant="contained" title={`Redirect to ${login ? "Home" : "Login Page"}`} />
      </FullWidthCenterVerticalContainer>
    </ErrorContainer>
  )
}

const ErrorContainer = styled('div')({
  width: "100%",
  height: "100vh",
  display: "flex",
})

export default NotFound