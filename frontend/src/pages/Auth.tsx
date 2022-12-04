import { useState } from 'react';
import { Form, Image, Input, SwitchButton } from '../styles/Auth.styled';
import { ButtonSubmit, CheckPassword, Header, TypographyText } from '../components';
import {  FullPaddingContainer, FullWidthCenterVerticalContainer, MainContainer, FullWidthStartVertificalContainer, AutoVerticalContainer } from '../styles/Containers.styled';
import People from "../assets/People.svg";

const Auth = () => {
  return (
    <MainContainer>
      <Header login={false} />
      <AuthWrapper />
    </MainContainer>
  )
}

const AuthWrapper = () => {
  const [showRegisterForm, setshowRegisterForm] = useState<boolean>(false);
  return (
    <FullPaddingContainer>
      <FullWidthStartVertificalContainer alignItems="start">
        <TypographyText fontSize="clamp(2.7rem, 7vw, 3.5rem)" fontweigth="500" lightcolor="var(--maintext-light)" darkcolor="var(--maintext-dark)" variant="h2"  text="Socializer" />
        <TypographyText fontSize="clamp(1rem, 3vw, var(--font-size-2xl))" lightcolor="var(--subtext-light)" darkcolor="var(--subtext-dark)" fontweigth="400" variant="h2" text="Socializer"/>
        <Image src={People} alt="People"></Image>
      </FullWidthStartVertificalContainer>
      <FullWidthCenterVerticalContainer>
        {showRegisterForm ? <RegisterForm /> : <LoginForm />}
        <SwitchButton onClick={() => setshowRegisterForm((s) => !s)}>{showRegisterForm ? `Already have account? Login` : `Don't have account? Register`} </SwitchButton>
      </FullWidthCenterVerticalContainer>
    </FullPaddingContainer>
  )
}

const LoginForm = () => {
  const [check, setcheck] = useState<boolean>(false);
  return (
    <AutoVerticalContainer>
      <Form>
        <Input size='small' label='Email' name='email' />
        <Input size='small' label='Password' type={check ? 'text' : 'password'} name='password' />
        <CheckPassword Check={setcheck} />
        <ButtonSubmit variant="contained" title="Login" />
      </Form>
    </AutoVerticalContainer>
  )
}

const RegisterForm = () => {
  const [check, setcheck] = useState<boolean>(false);
  return (
    <AutoVerticalContainer>
      <Form>
        <Input size='small' label='Firstname' name='firstname' />
        <Input size='small' label='Lastname' name='lastname' />
        <Input size='small' label='Email' name='email' />
        <Input size='small' label='Password' type={check ? 'text' : 'password'} name='password' />
        <Input size='small' label='Confirm Password' type={check ? 'text' : 'password'} name='confirmpassword' />
        <CheckPassword Check={setcheck} />
        <ButtonSubmit variant="contained" title="Register" />
      </Form>
    </AutoVerticalContainer>
  )
}

export default Auth