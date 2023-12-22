import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MenuLogout(value) {
  const { user, clearToken } = value;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const profileHandle = () => {
    window.location.replace(`/profile`);
    navigate(`/profile`);
  };

  const logoutHandle = () => {
    clearToken();
    window.location.replace(`/`);
  };

  return (
    <Box sx={{ ml: "1rem" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        variant="outlined"
        color="black"
        size="normal"
        sx={{
          p: "1rem",
          textTransform: "none",
        }}
      >
        <Typography> Hi, {user.username}</Typography>
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
        <MenuItem onClick={profileHandle}>PROFILE</MenuItem>
        <MenuItem onClick={logoutHandle}>LOGOUT</MenuItem>
      </Menu>
    </Box>
  );
}

export default MenuLogout;
