import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Outlet } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setNavigator } from "./utilities/navigation";
import { setHTTPAuth } from "./services/api.ts";

function App() {
  const navigate = useNavigate();
  if (localStorage.getItem("accessToken") !== null) {
    setHTTPAuth(localStorage.getItem("accessToken") || "");
  }

  useEffect(() => {
    console.log("init");
    setNavigator(navigate);
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
