import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { Form, Image, Input, SwitchButton } from '../styles/Auth.styled';
import { ButtonSubmit, CheckPassword, Header, TypographyText } from '../components';
import { FullPaddingContainer, FullWidthCenterVerticalContainer, MainContainer, FullWidthStartVertificalContainer, AutoVerticalContainer } from '../styles/Containers.styled';
import People from "../assets/People.svg";
import { isEmpty, isError, isLoggedIn, validateEmail } from '../utils/helpers';
import { useAppDispatch } from '../hooks/rtk.hooks';
import { APIResponse, IDispatchResponse, ILoginResponse, IUserLogin } from '../utils/types';
import { authLogin } from '../features/asyncThunk';

const Auth = () => {
  const login = isLoggedIn();
  
  return ( 
    <MainContainer>
      <Header login={login} />
      <AuthWrapper />
    </MainContainer>
  )
}

const AuthWrapper = () => {
  const [showRegisterForm, setshowRegisterForm] = useState<boolean>(false);
  return (
    <FullPaddingContainer>
      <FullWidthStartVertificalContainer alignItems="start">
        <TypographyText fontSize="clamp(2.7rem, 7vw, 3.5rem)" fontweigth="500" lightcolor="var(--maintext-light)" darkcolor="var(--maintext-dark)" variant="h2" text="Socializer" />
        <TypographyText fontSize="clamp(1rem, 3vw, var(--font-size-2xl))" lightcolor="var(--subtext-light)" darkcolor="var(--subtext-dark)" fontweigth="400" variant="h2" text="Socializer" />
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
  const [data, setdata] = useState<IUserLogin>({} as IUserLogin)
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();


  const LoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  }


  const HandleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = data;
    setloading(true);
    try {

      if (isEmpty(email)) return enqueueSnackbar("Field email is required", { variant: "warning" });
      if (isEmpty(password)) return enqueueSnackbar("Field password is required", { variant: "warning" });
      if (validateEmail(email)) return enqueueSnackbar("Email is not valid", { variant: "warning" });
      if(password.length <= 4) return enqueueSnackbar("Password must be 5 characters or greater", {variant: "warning"})

      const data = {
        email : email.trim(),
        password: password.trim(),
      } as IUserLogin

      await dispatch(authLogin(data));
      navigate("/")
      setloading(false);
      
    } catch (error: any) {
      isError(error);
    }
  }

  return (
    <AutoVerticalContainer>
      <Form >
        <Input size='small' label='Email' name='email' onChange={LoginInput} />
        <Input size='small' label='Password' onChange={LoginInput} type={check ? 'text' : 'password'} name='password' />
        <CheckPassword Check={setcheck} />
        <ButtonSubmit Loading={loading} variant="contained" title="Login" click={HandleLogin} />
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