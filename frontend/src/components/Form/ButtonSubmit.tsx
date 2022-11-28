import { Button, styled } from '@mui/material'
import React from 'react'

type Props = {
  title: string;
}

const ButtonSubmit = ({title}: Props) => {
  return (
    <ButtonComponent variant='contained'>{title}</ButtonComponent>
  )
}

const ButtonComponent = styled(Button)(({theme})=> ({

  marginTop: "1rem",
  borderRadius: "1rem",
  fontFamily: "Poppins",

}))



export default ButtonSubmit