import { styled, Avatar } from '@mui/material';
import React from 'react'

type Props = {
 
   style:{
    width: any,
    height: any,
   }
}


const UserImage = ({style}: Props ) => {
  
    const styles1 = {style} as const;
  return (
      <Avatar sx={styles1} alt="User" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" />
  )
}

export default UserImage