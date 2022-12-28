import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { Form, Image, Input, SwitchButton } from '../styles/Auth.styled';
import { ButtonSubmit, CheckPassword, Header, TypographyText } from '../components';
import { FullPaddingContainer, FullWidthCenterVerticalContainer, MainContainer, FullWidthStartVertificalContainer, AutoVerticalContainer } from '../styles/Containers.styled';
import People from "../assets/People.svg";
import { isEmpty, isError, isLoggedIn, validateEmail } from '../utils/helpers';
import { useAppDispatch } from '../hooks/rtk.hooks';
import { APIResponse, IDispatchResponse, ILoginResponse, IUserLogin, IUserRegistration } from '../utils/types';
import { authLogin, authRegister } from '../features/asyncThunk';

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
        <TypographyText fontSize="clamp(1rem, 3vw, var(--font-size-2xl))" lightcolor="var(--subtext-light)" darkcolor="var(--subtext-dark)" fontweigth="400" variant="h2" text="Let your friends know what's on your mind." />
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
   
    try {

      if (isEmpty(email)) return enqueueSnackbar("Field email is required", { variant: "warning" });
      if (isEmpty(password)) return enqueueSnackbar("Field password is required", { variant: "warning" });
      if (validateEmail(email)) return enqueueSnackbar("Email is not valid", { variant: "warning" });
      if (password.length <= 4) return enqueueSnackbar("Password must be 5 characters or greater", { variant: "warning" });
      setloading(true);

      const data = {
        email: email.trim(),
        password: password.trim(),
      } as IUserLogin
      
      const res: IDispatchResponse = await dispatch(authLogin(data));
      setloading(false);
      res.payload ? enqueueSnackbar("Login Successfully!", { variant: "success" }) : enqueueSnackbar("Login failed!", { variant: "error" })
      navigate("/")

    } catch (error: any) {
      isError(error);
      setloading(false);
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
  const [data, setdata] = useState<IUserRegistration>({} as IUserRegistration);
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const RegisterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  const HandleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    const { firstname, lastname, email, password, confirmpassword } = data;

    try {
      if (isEmpty(firstname)) return enqueueSnackbar("Field firstname is required", { variant: "warning" });
      if (isEmpty(lastname)) return enqueueSnackbar("Field lastname is required", { variant: "warning" });
      if (isEmpty(email)) return enqueueSnackbar("Field email is required", { variant: "warning" });
      if (validateEmail(email)) return enqueueSnackbar("Email is not valid", { variant: "warning" });
      if (isEmpty(password)) return enqueueSnackbar("Field password is required", { variant: "warning" });
      if (password.length <= 4) return enqueueSnackbar("Password must be 5 characters or greater", { variant: "warning" })
      if (isEmpty(confirmpassword)) return enqueueSnackbar("Field confirm password is required", { variant: "warning" });
      if (password !== confirmpassword) return enqueueSnackbar("Password didn't match", { variant: "warning" })

      setloading(true);

      const data = {
        firstname: firstname.trim(),
        lastname: lastname.trim(),
        email: email.trim(),
        password: password.trim(),
        confirmpassword: confirmpassword.trim(),
      } as IUserRegistration

      const res: IDispatchResponse = await dispatch(authRegister(data));
      setloading(false);
      res.payload && enqueueSnackbar("Registered Successfully!", { variant: "success" });
      navigate("/");
    } catch (error: any) {
      console.log(isError(error));
      setloading(false);
    }

  }

  return (
    <AutoVerticalContainer>
      <Form>
        <Input size='small' label='Firstname' name='firstname' onChange={RegisterInput} />
        <Input size='small' label='Lastname' name='lastname' onChange={RegisterInput} />
        <Input size='small' label='Email' name='email' onChange={RegisterInput} />
        <Input size='small' label='Password' type={check ? 'text' : 'password'} name='password' onChange={RegisterInput} />
        <Input size='small' label='Confirm Password' type={check ? 'text' : 'password'} name='confirmpassword' onChange={RegisterInput} />
        <CheckPassword Check={setcheck} />
        <ButtonSubmit Loading={loading} variant="contained" title="Register" click={HandleRegister} />
      </Form>
    </AutoVerticalContainer>
  )
}

export default Auth