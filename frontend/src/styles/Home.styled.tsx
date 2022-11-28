import { Button, styled, TextField, Typography, Avatar, Modal } from '@mui/material';

export const HomeContainer = styled('div')`
  display: flex;
  padding-top: 4.5rem;
`
export const HomeDivision = styled('div')`
    flex: 1;
    height: auto;
`

export const HomeDivision2 = styled('div')`
    flex: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0 var(--padding-lg);
`

export const Post = styled('div')(({ theme }) => `
    width: 100%;
    height: 15vh;
    background-color: ${theme.palette.mode === 'light' ? 'var(--background-color-light)' : 'var(--background-color-dark)'};
    border-radius: var(--border-radius-sm);
    display: flex;
    justify-content: center;
    align-items: center;
`)

export const UserAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: var(--spacing-2xl);
`

export const ModalButton = styled(Button)(({ theme }) => `
  width: 540px;
  height: 50px;
  border-radius: var(--border-radius-lg);
  font-family: "Poppins";
  text-transform: none;
  text-align: left;
  color: ${theme.palette.mode === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)'};
  border: 1px solid var(--border-color);
`)

export const ModalContainer = styled('div')(({ theme }) => `
  width: 500px;
  height: 300px;
  position: absolute;
  top: 30%;
  left: 50%;
  border-radius: var(--border-radius-sm);
  transform: translate(-50%,-50%);
  background-color: ${theme.palette.mode === 'light' ? 'var(--background-color-light)' : 'var(--background-color-dark)'};
`)

export const ModalText = styled(Typography)(({ theme }) => `
  font-size: var(--font-size-md);
  font-family: "Poppins";
  color: ${theme.palette.mode === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)'};
`)

export const ModalWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding-xs) var(--padding-md);
  border-bottom: 1px solid var(--border-color); 
`
