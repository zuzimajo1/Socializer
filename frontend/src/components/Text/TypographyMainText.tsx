import React from 'react';
import { Typography, styled } from '@mui/material';

type Props = {
    text: string;
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
    padding: string;
}

const TypographyMainText = ({ text, padding,  variant}: Props) => {
  return (
      <Text paddingBottom={padding} variant={variant}>{text}</Text>
  )
}


const Text = styled(Typography)<{ paddingBottom: string }>(({ theme, paddingBottom }) => ({
    fontFamily: "Poppins",
    fontWeight: 600,
    color: theme.palette.mode === 'light' ? 'var(--maintext-color-light)' : 'var(--maintext-color-dark)',
    paddingBottom,
    textTransform: "capitalize",
}))

export default TypographyMainText