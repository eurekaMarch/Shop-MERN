import { Link, Outlet } from "react-router-dom";
import Logo from "/shopping.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Nav() {
  return (
    <div>
      <nav>
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              width: "21rem",
            }}
          >
            <Link to="/">
              <img width={70} src={Logo} alt="logo" />
              <Typography
                sx={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "6rem",
                  top: "1.5rem",
                }}
              >
                Shopeefy
              </Typography>
            </Link>
          </Box>

          <div>
            <TextField
              id="filled-basic"
              placeholder="Search"
              size="small"
              sx={{
                width: "40rem",
              }}
            />

            <Button
              variant="contained"
              size="Normal"
              color="black"
              sx={{
                color: "white",
                fontSize: "1.6rem",
              }}
            >
              Search
            </Button>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "15rem",
            }}
          >
            <Link to="/register">REGISTER</Link>
            <Link to="/login">LOGIN</Link>
          </Box>
        </Box>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Nav;
