import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "/shopping.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate(`/login`, { replace: true });
  };

  const handleRegister = () => {
    navigate(`/register`, { replace: true });
  };

  return (
    <div>
      <nav>
        <Header />
        {/* <Box className="Nav_PC"
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
                className="Nav_text-logo"
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
        </Box> */}

        {/* mobile */}
        <Box
          className="Nav_mobile"
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
              <img width={60} src={Logo} alt="logo" />
              <Typography
                className="Nav_text-logo"
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "5.5rem",
                  top: "2rem",
                }}
              >
                Shopeefy
              </Typography>
            </Link>
          </Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            variant="outlined"
            color="black"
            size="small"
            sx={{
              p: "0.6rem",
            }}
          >
            <i className="fa-solid fa-user"></i>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleRegister}>REGISTER</MenuItem>
            <MenuItem onClick={handleLogin}>LOGIN</MenuItem>
          </Menu>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mr: "1.6rem",
            ml: "1.6rem",
          }}
        >
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
        </Box>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Nav;

//  <Link to="/register">REGISTER</Link>
//   <Link to="/login">LOGIN</Link>
