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

const ButtonComponent = styled(Button)(({ theme }) => `
  margin-top: 1rem;
  border-radius: 1rem;
  font-family: "Poppins";  
`)



export default ButtonSubmit