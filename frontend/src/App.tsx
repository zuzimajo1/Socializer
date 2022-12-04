import { useState, useMemo, createContext } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, PaletteMode } from '@mui/material';
import "./App.css"
import { Auth, Home, NotFound, Profile } from './pages';
import { SnackbarProvider } from 'notistack';
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
    <SnackbarProvider maxSnack={3} preventDuplicate autoHideDuration={3000}>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Profile/>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </SnackbarProvider>
  )
}

export default App;

