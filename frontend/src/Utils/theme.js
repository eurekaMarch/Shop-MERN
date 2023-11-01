import { grey, lightGreen, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    black: {
      main: grey[900],
      dark: grey[900],
      contrastText: "#fff",
    },
    lightGreen900: {
      main: lightGreen[900],
    },
    green: {
      main: "#1CB803",
      dark: "#19a502",
      contrastText: "#fff",
    },
    green2: {
      main: "#1CB803",
      contrastText: "#fff",
    },
    lightGreen600: {
      main: lightGreen[600],
      contrastText: "#fff",
    },
    red500: {
      main: red[500],
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.6rem",
  },
});

export default theme;
