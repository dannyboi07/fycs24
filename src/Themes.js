import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({ 
    palette: {
      primary: { 
        main: '#263238'//'#373D20'
    },
    background: {
        default: '#BBDBB4'
    },
    mode: 'light',
    },
    typography: {
      fontFamily: "Outfit, sans-serif",
      fontSize: 16,
    },   
});

export const darkTheme = createTheme({
    palette: {
        primary: { 
            main: '#E4FDE1',
        },
        secondary: {
            main: '#262626',
        },
        background: {
            default: '#262626'
        },
        mode: 'dark',
    },
    typography: {
        fontFamily: "Outfit, sans-serif",
        fontSize: 16,
    },
});