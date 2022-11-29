import React, { useState } from 'react';
import { Button, Container, styled, Typography, FormControlLabel, Checkbox, TextField } from '@mui/material';
import { AuthContainer, AuthWrapperContainer, Division, Division2, Form, FormContainer, Image, Input, Subtext, SwitchButton, Text } from '../styles/Auth.styled';
import { ButtonSubmit, CheckPassword, Header } from '../components';
import People from "../assets/People.svg";

const Auth = () => {
  return (
    <AuthContainer>
      <Header />
      <AuthWrapper />
    </AuthContainer>
  )
}

const AuthWrapper = () => {
  const [showRegisterForm, setshowRegisterForm] = useState<boolean>(false);
  return (
    <AuthWrapperContainer>
      <Division>
        <Text variant='h2'>Socializer</Text>
        <Subtext variant='h4'>Let your friends know what's on your mind.</Subtext>
        <Image src={People} alt="People"></Image>
      </Division>
      <Division2>
        {showRegisterForm ? <RegisterForm /> : <LoginForm />}
        <SwitchButton onClick={() => setshowRegisterForm((s) => !s)}>{showRegisterForm ? `Already have account? Login` : `Don't have account? Register`} </SwitchButton>
      </Division2>
    </AuthWrapperContainer>
  )
}

const LoginForm = () => {
  const [check, setcheck] = useState<boolean>(false);
  return (
    <FormContainer>
      <Form>
        <Input size='small' label='Email' name='email' />
        <Input size='small' label='Password' type={check ? 'text' : 'password'} name='password' />
        <CheckPassword Check={setcheck} />
        <ButtonSubmit title="Login" />
      </Form>
      <Typography></Typography>
    </FormContainer>
  )
}

const RegisterForm = () => {
  const [check, setcheck] = useState<boolean>(false);
  return (
    <FormContainer>
      <Form>
        <Input size='small' label='Firstname' name='firstname' />
        <Input size='small' label='Lastname' name='lastname' />
        <Input size='small' label='Email' name='email' />
        <Input size='small' label='Password' type={check ? 'text' : 'password'} name='password' />
        <Input size='small' label='Confirm Password' type={check ? 'text' : 'password'} name='confirmpassword' />
        <CheckPassword Check={setcheck} />
        <ButtonSubmit title="Register" />
      </Form>
    </FormContainer>
  )
}

export default Auth