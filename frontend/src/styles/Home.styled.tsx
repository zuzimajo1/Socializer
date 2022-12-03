import { Button, styled, TextField, Typography, Avatar, Modal } from '@mui/material';

export const HomeContainer = styled('div')(({theme})=>({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  paddingTop: "4.5rem",

  [theme.breakpoints.down("lg")] :{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  
  }

}))





export const HomeDivision = styled('div')(({theme})=>({

  flex: "1",
  height: "auto",
  display: "flex",
  justifyContent: "end",
 
  
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    width: "700px",
    padding: "var(--padding-sm) var(--padding-md)",
  },

  [theme.breakpoints.down("md")]: {
    width: "650px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  }
}))



export const HomeDivision2 = styled('div')(({theme})=>({
  flex: "2",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  padding: "0 var(--padding-md)",

  
  [theme.breakpoints.down("lg")] : {
    width: "700px",
    
  },

  [theme.breakpoints.down("md")]: {
    width: "650px",
  },

  [theme.breakpoints.down("sm")]: {
     width: "100%",
  }
}))



export const HomeDivision3 = styled('div')(({theme})=>({

  flex: "1",
  height: "auto",
  display: "flex",
  justifyContent: 'start',
  

  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    width: "700px",
    padding: "0 var(--padding-md)",
  },

  [theme.breakpoints.down("md")]: {
    width: "650px",

  },


  [theme.breakpoints.down("sm")]: {
  width: "100%",
  }
  
}))

export const Post = styled('div')(({ theme }) => ({

  width: "100%",
  height: "15vh",
  padding: "0 var(--padding-md)",
  backgroundColor: theme.palette.mode === "light" ? "var(--background-color-light)" : "var(--background-color-dark)",
  borderRadius: "var(--border-radius-sm)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

}))


export const ModalButton = styled(Button)(({ theme }) =>  ({

  width: "540px",
  height: "50px",
  borderRadius: "var(--border-radius-lg)",
  fontFamily: "Poppins",
  textTransform: "none",
  textAlign: "left",
  color: theme.palette.mode === "light" ? "var(--text-color-light)" : "var(--text-color-dark)",
  border: "1px solid var(--border-color)",

}))

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

export const PostField = styled(TextField)({
  marginTop: "var(--padding-sm)",

})

