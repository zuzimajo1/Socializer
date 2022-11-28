import { Button, styled, TextField, Typography } from '@mui/material';

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  height: auto;
`

export const FormContainer = styled('div')(({ theme }) => `
  display: flex;
  height: auto;
  flex-direction: column;
  padding: var(--padding-lg) var(--padding-md);
  background-color: ${theme.palette.mode === 'light' ? '#e4f0ef' : '#535151'};
  border-radius: 0.5rem;

${theme.breakpoints.down('md')}{
  padding: var(--padding-md) var(--padding-xs);
}`)

export const Input = styled(TextField)`
  width: 350px;
  margin: var(--padding-xs) 0;

  ${props => props.theme.breakpoints.down('md')}{
  width: 320px;
}

  ${props => props.theme.breakpoints.down('sm')}{
  width: 290px;
}`

export const AuthContainer = styled('main')`
  width: 100vw;
  height: 100vh;

  
`
export const Division = styled('div')`
  width: 100%;
  padding: var(--padding-2xl) var(--padding-7xl);
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.down('md')}{
  padding: var(--padding-2xl) 0;
  justify-content: center;
  align-items: center;
  
}
`
export const Division2 = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   ${props => props.theme.breakpoints.down('md')}{
  padding: var(--padding-lg) 0;
}`

export const AuthWrapperContainer = styled('div')(({ theme }) => `
width: 100%;
height: 100%;
display: flex;
padding-top: 3rem;
background-color: ${theme.palette.mode === 'light' ? '#fff' : 'var(--background-color-dark)'};


${theme.breakpoints.down('md')}{
  flex-direction: column;
  height: auto;
}`)

export const Image = styled('img')`
  max-width: 100%;
  max-height: 400px;
`
export const Text = styled(Typography)(({ theme }) => `
  font-size: clamp(2.7rem , 7vw , 3.5rem);
  font-family: var(--font-family)
  font-weight: 500;
  color: ${theme.palette.mode === 'light' ? 'var(--maintext-light)' : 'var(--maintext-dark)'};
`)

export const Subtext = styled(Typography)(({ theme }) => `
  font-size: clamp(1rem, 4vw, var(--font-size-2xl));
  font-family: "Poppins"; 
  font-weight: 400;
  color: ${theme.palette.mode === 'light' ? 'var(--subtext-light)' : 'var(--subtext-dark)'};
`)

export const SwitchButton = styled('button')(({ theme }) => `
  font-size: 1rem;
  border: none;
  background-color: transparent;  
  color: ${theme.palette.mode === 'light' ? '#413d40112' : '#ccc5c5'};
  cursor: pointer;
  margin: 1rem 10rem 0 0;

  :hover{
    text-decoration: underline;
  }

   ${theme.breakpoints.down('md')}{
   margin: 1rem 6rem 0 0;
  }


  `)


