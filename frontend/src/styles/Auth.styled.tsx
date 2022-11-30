import { Button, styled, TextField, Typography } from '@mui/material';

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  height: auto;
`

export const FormContainer = styled('div')(({ theme }) => ({

  display: "flex",
  height: "auto",
  flexDirection: "column",
  padding: "var(--padding-lg) var(--padding-md)",
  backgroundColor: theme.palette.mode === "light" ? "#e4f0ef" : "#535151",
  borderRadius: "0.5rem",

  [theme.breakpoints.down("md")]: {
    padding: "var(--padding-md) var(--padding-xs)",
  }


}))

export const Input = styled(TextField)(({ theme }) => ({

  width: "350px",
  margin: "var(--padding-xs) 0",

  [theme.breakpoints.down("md")]: {
    width: "320px",
  },

  [theme.breakpoints.down("sm")]: {
    widht: "290px",
  }
}))

export const AuthContainer = styled('main')({
  width: "100%",
  height: "auto",
  

})

export const Division = styled('div')(({ theme }) => ({

  width: "100%",
  padding: "var(--padding-2xl) var(--padding-7xl)",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    padding: "var(--padding-2xl) 0",
    justifyContent: "center",
    alignItems: "center",
  }

}))

export const Division2 = styled('div')(({ theme }) => ({

  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    padding: "var(--padding-lg) 0"
  }

}))

export const AuthWrapperContainer = styled('div')(({ theme }) => ({

  width: "100%",
  height: "100vh",
  display: "flex",
  paddingTop: "4.5rem",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "var(--background-color-dark)",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
  }

}))

export const Image = styled('img')(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "400px",
}))

export const Text = styled(Typography)(({ theme }) => ({

  fontSize: "clamp(2.7rem, 7vw, 3.5rem)",
  fontFamily: "var(--font-family)",
  fontWeight: "500",
  color: theme.palette.mode === "light" ? "var(--maintext-light)" : "var(--maintext-dark)",

}))

export const Subtext = styled(Typography)(({ theme }) => ({

  fontSize: "clamp(1rem, 4vw, var(--font-size-2xl))",
  fontFamily: "Poppins",
  fontWeight: "400",
  color: theme.palette.mode === "light" ? "var(--subtext-light)" : "var(--subtext-dark)",

}))

export const SwitchButton = styled('button')(({ theme }) => ({

  fontSize: "1rem",
  border: "none",
  backgroundColor: "transparent",
  color: theme.palette.mode === "light" ? "#413d40112" : "#ccc5c5",
  cursor: "pointer",
  margin: "1rem 10rem 0 0",

  '&:hover': {
    textDecoration: "underline",
  },

  [theme.breakpoints.down("md")]: {
    margin: "1rem 6rem 0 0",
  },

}))


