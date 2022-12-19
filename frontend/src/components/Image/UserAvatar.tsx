import { styled, Avatar, Button} from "@mui/material";

type Props = {
    width: string;
    height: string;
    src: string;
    margin?: string;
    alt: string;
}

const UserAvatar = (props: Props)=> {
  return (
    <Image  {...props}  />
  )
}

const Image = styled(Avatar)<{  width: string, height: string, }>(({  width, height, theme})=>({
    width,
    height,

}))

export default UserAvatar