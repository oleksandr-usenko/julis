import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Outlet} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Outlet />
    </ThemeProvider>
  )
}

export default App
