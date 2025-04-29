import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#21392a', // sage green
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FFE8E0', // soft peach
        },
        background: {
            default: '#dbeafd', // light neutral background
        },
        text: {
            primary: '#21392a', // deep charcoal
            secondary: '#21392a', // muted gray
        },
    },
    typography: {
        fontFamily: `'Poppins', 'Lato', sans-serif`,
    },
});

export default theme;