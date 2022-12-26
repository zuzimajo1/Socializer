import { useState, useMemo, createContext, useEffect } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, PaletteMode } from '@mui/material';
import "./App.css"
import { Auth, Home, NotFound, Profile } from './pages';
import { SnackbarProvider } from 'notistack';
import { RouterProvider, useNavigate } from 'react-router-dom';
import { router } from './utils/router';
import { useAppDispatch } from './hooks/rtk.hooks';
import { isLoggedIn } from './utils/helpers';

export const ColorModeContext = createContext({ toggleThemeMode: () => { } });

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');
 
  const colorMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
    </SnackbarProvider>
  )
}

export default App;

