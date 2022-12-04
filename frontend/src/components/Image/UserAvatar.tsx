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
    <Image cursor={props.cursor} src={props.src} alt={props.alt}  />
    </ImageContainer>
  )
}


const ImageContainer = styled('div')<Props>(({ cursor, width, margin, height })=>({
  width,
  height,
  margin,
  cursor,


}))


const Image = styled(Avatar)<{cursor?:string}>(({cursor, theme})=>({
    width: "100%",
    height: "100%",

  '&:hover': {
    border: cursor && theme.palette.mode === "light" ? "2px solid var(--maintext-light)" : "2px solid var(--maintext-dark)",
  }
}))

export default UserAvatar