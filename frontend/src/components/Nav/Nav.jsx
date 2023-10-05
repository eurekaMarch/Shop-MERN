import { Link, Outlet } from "react-router-dom";
import Logo from "/shopping.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

function Nav() {
  return (
    <div>
      <nav>
        <Header />
        <div>
          <Link to="/">
            <img width={60} src={Logo} alt="" />
          </Link>
          <span>Shopeefy</span>
        </div>

        <TextField
          id="filled-basic"
          placeholder="Search"
          InputLabelProps={{ style: { fontSize: 20 } }}
          inputProps={{ style: { fontSize: 16 } }}
        />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            size="large"
            style={{ fontSize: "1.6rem" }}
            color="primary"
          >
            Search
          </Button>
        </ThemeProvider>

        <Link to="/register">REGISTER</Link>
        <Link to="/login">LOGIN</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Nav;

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});
