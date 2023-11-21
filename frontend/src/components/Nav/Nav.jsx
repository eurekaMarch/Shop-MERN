import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/shopping.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Badge as BaseBadge, badgeClasses } from "@mui/base/Badge";
import { styled } from "@mui/system";
import { red, grey } from "@mui/material/colors";

function Nav(value) {
  const { data, setProducts, cartProduct } = value;

  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const amountProduct = cartProduct.length === 0 ? 0 : cartProduct.length;

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

    const filteredSearch = data.filter((element) => {
      return element.name.toLowerCase().includes(search);
    });
    setProducts(filteredSearch);
    navigate(`/`);
  };

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
          id="Nav__pc"
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
                  color: "#5f8e3e",
                }}
              >
                Shopeefy
              </Typography>
            </Link>
          </Box>

          <form onSubmit={handleSearchSubmit} className="Nav__input-pc">
            <TextField
              placeholder="Search"
              size="normal"
              sx={{
                width: "35rem",
              }}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
            />

            <Button
              variant="contained"
              color="black"
              sx={{
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
                fontSize: "1.2rem",
                width: "4rem",
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
              alignItems: "center",
              width: "20rem",
              mr: "3rem",
            }}
          >
            <Link to="/register" id="Nav__register">
              <Typography sx={{ color: grey[900] }}>REGISTER</Typography>
            </Link>
            <Link to="/login" id="Nav__login">
              <Typography sx={{ color: grey[900] }}>LOGIN</Typography>
            </Link>

            <Link to="/cart">
              <Badge badgeContent={amountProduct} showZero>
                <i
                  className="fa-solid fa-cart-shopping fa-lg "
                  id="Nav__cart"
                ></i>
              </Badge>
            </Link>
          </Box>
        </Box>

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
            id="Nav__mobile"
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
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    position: "absolute",
                    left: "5.5rem",
                    top: "2rem",
                    color: "#5f8e3e",
                  }}
                >
                  Shopeefy
                </Typography>
              </Link>
            </Box>

            <Box sx={{ mr: "2rem" }}>
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

              <Link to="/cart">
                <Badge
                  badgeContent={amountProduct}
                  showZero
                  sx={{ ml: "1rem" }}
                >
                  <i
                    className="fa-solid fa-cart-shopping fa-lg "
                    id="Nav__cart"
                  ></i>
                </Badge>
              </Link>
            </Box>
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

const Badge = styled(BaseBadge)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: -13px;
    right: -13px;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 10px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${red[500]};
    box-shadow: 0px 2px 24px ${
      theme.palette.mode === "dark" ? red[900] : red[100]
    };
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `
);
