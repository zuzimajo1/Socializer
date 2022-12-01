import React from 'react'
import { styled, Typography } from '@mui/material';

type Props = {
    text: string;
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
    
}

const TypographyText = ({ text, variant } : Props) => {
    return (
        <Text variant={variant} >{text}</Text>
    )}

const Text = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins",
    fontWeight: 400,
    color: theme.palette.mode === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)',
    textAlign: "justify",
}))


export default TypographyText