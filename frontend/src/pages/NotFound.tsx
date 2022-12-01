import React from 'react';
import { ButtonSubmit, Header, TypographyMainText, TypographyText } from '../components';
import { AuthContainer, AuthWrapperContainer, Division2 } from '../styles/Auth.styled';
import { styled } from "@mui/material";

const NotFound = () => {
  return (
    <AuthContainer>
      <Header login />
      <Error/>
    </AuthContainer>
  )
}

const Error = ()=>{
  return(
    <ErrorContainer>
      <Division2>
        <TypographyMainText variant="h2" padding="0" text="404 Page"></TypographyMainText>
        <TypographyText variant="h6" text="You are trying to access an unknown page"></TypographyText>
        <ButtonSubmit title='Redirect to Home' />
      </Division2>
    </ErrorContainer>
  )
}

const ErrorContainer = styled('div')({
  width: "100%",
  height: "100vh",
  display: "flex",
})

export default NotFound