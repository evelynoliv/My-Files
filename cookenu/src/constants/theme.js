import { createTheme } from '@mui/material/styles';
import {primaryColor, neutralColor} from "./colors";

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  
  palette: {
    primary: {
     
      main: primaryColor,
      contrastText: 'black',
     
    },
    text: {
        primary: neutralColor
        
    }
    
  },
});

export default theme;