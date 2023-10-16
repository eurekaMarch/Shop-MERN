import { grey, lightGreen } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    black: {
      main: grey[900],
      dark: grey[900],
      contrastText: "#fff",
    },
    lightGreen: {
      main: lightGreen[900],
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.6rem",
  },
});

export default theme;
