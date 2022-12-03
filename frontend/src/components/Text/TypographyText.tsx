import { styled, Typography } from '@mui/material';

type Props = {
    text: string;
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
    fontweigth?:  "400" | "500" | "600";
    padding?: string;
    lightcolor?: string;
    darkcolor?: string;
    textTransform?: "capitalize" | "lowercase" | "uppercase",
    fontSize?: string;
}

const TypographyText = (props : Props) => {
 
    return (
        <Text {...props}>{props.text}</Text>
    )}

const Text = styled(Typography)<Props>(({ fontSize, theme, fontweigth, textTransform, padding, lightcolor, darkcolor }) => ({
    fontSize,
    padding,
    textTransform,
    fontWeigth: fontweigth,
    fontFamily: "Poppins",
    color: theme.palette.mode === 'light' ? lightcolor : darkcolor ,
    textAlign: "justify",
   
}))


export default TypographyText