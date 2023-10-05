import { Link, Outlet } from "react-router-dom";
import Logo from "/shopping.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";

function Nav() {
  return (
    <div>
      <nav>
        <Header />
        <Link to="/">
          <img width={60} src={Logo} alt="" />
        </Link>

        <TextField
          id="filled-basic"
          placeholder="Search"
          InputLabelProps={{ style: { fontSize: 20 } }}
          inputProps={{ style: { fontSize: 16 } }}
        />

        <Button variant="contained" size="large" style={{ fontSize: "1.6rem" }}>
          Search
        </Button>

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
