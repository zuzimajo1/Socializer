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

const FormControl = styled(FormControlLabel)(({theme})=> ({
  fontFamily: "Poppins"

}))




export default CheckPassword