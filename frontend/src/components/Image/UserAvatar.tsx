import { styled, Avatar} from "@mui/material";

type Props = {
    width: string;
    height: string;
    src: string;
    margin?: string;
    alt: string;
}

const UserAvatar = (props: Props)=> {
  return (
    <Image {...props} />
  )
}


const Image = styled(Avatar)<Props>(({ width, margin, height })=> ({
    width,
    height,
    margin,
}))

export default UserAvatar