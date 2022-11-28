import { useState, useMemo, createContext } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, PaletteMode } from '@mui/material';
import ThemeToggler from './components/Header/ThemeToggler';
import "./App.css"
import { Auth, Home } from './pages';
export const ColorModeContext = createContext({ toggleThemeMode: () => { } });

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode : PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;

