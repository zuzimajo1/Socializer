import { Button, styled, TextField, Typography, Avatar, Modal } from '@mui/material';

export const HomeContainer = styled('div')`
  display: flex;
  padding-top: 4.5rem;
`
export const HomeDivision = styled('div')({
  flex: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "end",
})


export const HomeDivision2 = styled('div')`
    flex: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0 var(--padding-md);
`

export const HomeDivision3 = styled('div')({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: 'start',
})

export const Post = styled('div')(({ theme }) => `  
    width: 100%;
    height: 15vh;
    padding: 0 var(--padding-md);
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

export const UserAvatar2 = styled(Avatar)`
    width: 50px;
    height: 50px;
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


export const ModalContainer = styled('div')(({ theme }) => ({
  width: "500px",
  height: "auto",
  position: "absolute",
  top: "30%",
  left: "50%",
  padding: "var(--padding-xs) 0",
  borderRadius: "var(--border-radius-sm)",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.mode === "light" ? "var(--background-color-light)" : "var(--background-color-dark)",
}))


export const ModalText = styled(Typography)(({ theme }) => ({
  fontSize: "var(--font-size-md)",
  fontFamily: "Poppins",
  color: theme.palette.mode === "light" ? "var(--text-color-light)" : "var(--text-color-dark)",
}))

export const ModalWrapper = styled('div')({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 var(--padding-md)",
  borderBottom: "1px solid var(--border-color)",
})


export const ModalWrapper2 = styled('div')({
  width: "100%",
  height: "80%",
  padding: "var(--padding-xs) var(--padding-md)"
})

export const PostField = styled(TextField)({
  marginTop: "var(--padding-sm)",

})

export const ModalRow = styled('div')({
  display: "flex",
  width: "100%",
})


export const ModalColumn = styled('div')({
  width: "auto",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px"
})


export const ModalRow2 = styled('div')({
  border: "1px solid var(--border-color)",
  borderRadius: "var(--border-radius-sm)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
})


export const ModalRow3 = styled('div')({
  width: "100%",
  display: "flex",
  justifyContent: "end",
})

export const PostMain = styled('div')({
  width: "100%",
  marginTop: "var(--padding-md)",
})