import { useContext } from 'react'
import {  styled, useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { IconButton, Tooltip } from '@mui/material';
import { amber } from '@mui/material/colors';

import { ColorModeContext } from '../../App';

export const ThemeToggler = () => {
    const theme = useTheme();

    const colorMode = useContext(ColorModeContext)
    return (
        <ThemeButton color="inherit" onClick={colorMode.toggleThemeMode}>
            {theme.palette.mode === "dark" ? (
                <Tooltip title="Switch to light mode" placement="bottom">
                    <LightModeIcon fontSize='medium' sx={{ color: amber[500] }} />
                </Tooltip>
            ) : (
                <Tooltip title="Switch to dark mode" placement="bottom">
                    <NightsStayIcon fontSize='medium' />
                </Tooltip>
            )}
        </ThemeButton>
    )
}

const ThemeButton = styled(IconButton)(({theme})=> ({

    '&:hover': {
        transform: theme.palette.mode === "light" ? "scale(0.8) rotate(25deg)" : "scale(0.9) rotate(90deg)",
        transition: "ease-in-out 250ms",
    }
}))














export default ThemeToggler