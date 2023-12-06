import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/Shopeefy-1.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Badge as BaseBadge, badgeClasses } from "@mui/base/Badge";
import { styled } from "@mui/system";
import { red, grey } from "@mui/material/colors";
import MenuLogout from "./Menu/MenuLogout";
import MenuLogin from "./Menu/MenuLogin";

function Nav(value) {
  const { data, setProducts, cartProduct, token, user, clearToken } = value;

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const amountProduct = cartProduct.length === 0 ? 0 : cartProduct.length;

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const filteredSearch = data.filter((element) => {
      return element.name.toLowerCase().includes(search.toLowerCase());
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
            mt: "1.5rem",
          }}
          id="Nav__pc"
        >
          <Box
            sx={{
              ml: "1rem",
            }}
          >
            <Link to="/">
              <img width={200} src={Logo} alt="logo" id="Nav__logo" />
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
            {token ? (
              <MenuLogout user={user} clearToken={clearToken} />
            ) : (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Link to="/register" id="Nav__register">
                  <Typography sx={{ color: grey[900], mr: "3rem" }}>
                    REGISTER
                  </Typography>
                </Link>

                <Link to="/login" id="Nav__login">
                  <Typography sx={{ color: grey[900] }}>LOGIN</Typography>
                </Link>
              </Box>
            )}

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
                mb: "1rem",
                ml: "0.8rem",
              }}
            >
              <Link to="/">
                <img width={120} src={Logo} alt="logo" />
              </Link>
            </Box>

            <Box
              sx={{
                mr: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {token ? (
                <MenuLogout user={user} clearToken={clearToken} />
              ) : (
                <MenuLogin />
              )}

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
