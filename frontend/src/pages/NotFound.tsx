import React from 'react';
import { ButtonSubmit, Header, TypographyText } from '../components';
import { styled } from "@mui/material";
import { FullWidthCenterVerticalContainer, MainContainer } from '../styles/Containers.styled';

const NotFound = () => {
  return (
    <MainContainer>
      <Header login />
      <Error />
    </MainContainer>
  )
}

const Error = () => {
  return (
    <ErrorContainer>
      <FullWidthCenterVerticalContainer>
        <TypographyText variant="h2" fontweigth="600" lightcolor="var(--maintext-color-light)" darkcolor="var(--maintext-color-dark)"  text="404 Not Found"></TypographyText>
        <TypographyText variant="h6" fontweigth="400" lightcolor="var(--text-color-light)" darkcolor="var(--text-color-dark)"  text="You are trying to access an unknown page"></TypographyText>
        <ButtonSubmit variant="contained" title='Redirect to Home' />
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