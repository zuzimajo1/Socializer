import React from 'react'
import { FormControlLabel, Checkbox, styled } from "@mui/material"


interface Props {
    Check: React.Dispatch<React.SetStateAction<boolean>>;
    
}

const CheckPassword = ({Check}: Props) => {
  return (
    <FormControl control={<Checkbox onChange={()=> Check((c)=> !c)}  />} label="Show Password"/>
  )
}

const FormControl = styled(FormControlLabel)`
  font-family: 'Poppins'


`




export default CheckPassword