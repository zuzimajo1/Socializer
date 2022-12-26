import React from 'react'
import { Badge, Avatar, Button } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { useAppSelector } from '../../hooks/rtk.hooks';


type Props = {
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const UserChangeImage = ({ setAnchorEl }: Props) => {

  const auth: any = useAppSelector(state=>state.auth);
  return (
      <Button sx={{ borderRadius: "50%"}} onClick={(event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)}>
      <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
              <CameraAltIcon sx={{ width: "30px", height: "30px" }} />
            }>
        <Avatar sx={{ width: "100px", height: "100px" }} src={auth?.user?.img || "https://qph.cf2.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"} alt="User" />
      </Badge>
    </Button>
  )
}

export default UserChangeImage