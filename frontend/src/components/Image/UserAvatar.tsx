import { styled, Avatar} from "@mui/material";

type Props = {
    width: string;
    height: string;
    src: string;
    margin?: string;
    alt: string;
    click?: (event: React.MouseEvent<HTMLDivElement>)=> void;
    cursor?: string;
}

const UserAvatar = (props: Props)=> {
  return (
    <ImageContainer onClick={props.click} {...props}>
    <Image width={props.width} height={props.height} cursor={props.cursor} src={props.src} alt={props.alt}  />
    </ImageContainer>
  )
}


const ImageContainer = styled('div')<Props>(({ cursor, margin })=>({
  margin,
  cursor,
  width: "auto",
  height: "auto",


}))


const Image = styled(Avatar)<{ cursor?: string, width: string, height: string, }>(({ cursor, width, height, theme})=>({
    width,
    height,


  '&:hover': {
    border: cursor && theme.palette.mode === "light" ? "2px solid var(--maintext-light)" : "2px solid var(--maintext-dark)",
  }
}))

export default UserAvatar