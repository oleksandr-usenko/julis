import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d97757", // sage green
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFE8E0", // soft peach
    },
    background: {
      default: "#fefaf7", // light neutral background
    },
    text: {
      primary: "#d97757", // deep charcoal
      secondary: "#3a2419", // muted gray
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Lato', sans-serif`,
  },
});

export default theme;
