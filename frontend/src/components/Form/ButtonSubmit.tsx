import React from 'react'
import { Button, styled } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


type Props = {
  title: string;
  variant: "text" | "contained" | "outlined";
  padding?: string;
  Loading?: boolean;
  Icon?: React.ElementType;
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonSubmit = ({ title, variant, padding, Loading, Icon, click }: Props) => {
  return (
    <ButtonComponent onClick={click} loading={Loading} loadingPosition={Icon && "start"} startIcon={Icon && <Icon />} padding={padding} variant={variant}>{title}</ButtonComponent>
  )
}

const ButtonComponent = styled(LoadingButton)<{padding?:string}>(({theme, padding})=> ({

  marginTop: "1rem",
  borderRadius: "1rem",
  fontFamily: "Poppins",
  padding

}))



export default ButtonSubmit