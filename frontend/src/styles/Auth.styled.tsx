import { styled, TextField} from '@mui/material';

export const Form = styled('form')({
  display: "flex",
  flexDirection: "column",
  height: "auto",

})


export const Input = styled(TextField)(({ theme }) => ({

  width: "350px",
  margin: "var(--padding-xs) 0",

  [theme.breakpoints.down("md")]: {
    width: "320px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "290px",
  }
}))


export const Image = styled('img')(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "400px",
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


