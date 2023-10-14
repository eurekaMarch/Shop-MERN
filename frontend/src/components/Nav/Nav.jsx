import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../img/shopping.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Nav(value) {
  const { product, setFilterSearch } = value;

  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
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

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const filteredSearch = product.filter((element) => {
      return element.title.toLowerCase().includes(search);
    });
    setFilterSearch(filteredSearch);
  };

  return (
    <div>
      <nav>
        <Header />
        <div className="Nav__pc">
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

            <form onSubmit={handleSearchSubmit} className="Nav__input-pc">
              {/* <form className="Nav__input-pc"> */}
              <TextField
                id="filled-basic"
                placeholder="Search"
                size="normal"
                sx={{
                  width: "40rem",
                }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
              />

              <Button
                variant="contained"
                color="black"
                sx={{
                  color: "white",
                  fontSize: "1.6rem",
                  height: "5.5rem",
                }}
                type="submit"
              >
                Search
              </Button>
            </form>

            <form onSubmit={handleSearchSubmit} className="Nav__input-mobile">
              <TextField
                id="filled-basic"
                placeholder="Search"
                size="small"
                sx={{
                  width: "25rem",
                  fontSize: "1.2rem",
                }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />

              <Button
                variant="contained"
                color="black"
                size="normal"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                }}
                type="submit"
              >
                Search
              </Button>
            </form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "15rem",
              }}
            >
              <Link to="/register" id="Nav__register">
                REGISTER
              </Link>
              <Link to="/login" id="Nav__login">
                LOGIN
              </Link>
            </Box>
          </Box>
        </div>

        {/* mobile */}
        <div className="Nav__mobile">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "1rem",
              mr: "1.6rem",
              ml: "0.8rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                width: "14rem",
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
              sx={{
                fontSize: "1.4rem",
              }}
            >
              <MenuItem onClick={handleRegister}>REGISTER</MenuItem>
              <MenuItem onClick={handleLogin}>LOGIN</MenuItem>
            </Menu>
          </Box>

          <form onSubmit={handleSearchSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mx: "3rem",
              }}
            >
              <TextField
                id="filled-basic"
                placeholder="Search"
                size="small"
                sx={{
                  width: "40rem",
                  fontSize: "1.4rem",
                }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />

              <Button
                variant="contained"
                size="normal"
                color="black"
                sx={{
                  color: "white",
                  fontSize: "1.4rem",
                }}
                type="submit"
              >
                Search
              </Button>
            </Box>
          </form>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Nav;
