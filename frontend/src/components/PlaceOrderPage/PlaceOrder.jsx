import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import truckPic from "../../assets/truck-solid.svg";
import userPic from "../../assets/user-solid.svg";
import locationPic from "../../assets/location-dot-solid.svg";

function PlaceOrder(value) {
  const { shipping, cartProduct, user } = value;

  return (
    <Box sx={{ mt: "2.5rem", mx: "6rem" }}>
      <Grid container xs={12} sm={12} md={12} sx={{ bgcolor: grey[300] }}>
        <Grid xs={12} sm={4} md={4}>
          <Box
            id="PlaceOrder__orderDetail-container"
            sx={{
              display: "flex",
              my: "3rem",
              mx: "2rem",
            }}
          >
            <Box
              id="PlaceOrder__orderDetail-icon"
              component="img"
              src={userPic}
              sx={{
                bgcolor: "white",
                height: "7rem",
                width: "7rem",
                borderRadius: "50%",
                p: "2rem",
                mr: "2rem",
                mb: "1rem",
              }}
            ></Box>

            <Box id="PlaceOrder__orderDetail-text" sx={{ mr: "2rem" }}>
              <Typography
                id="PlaceOrder__orderDetail-textTitle"
                sx={{ mb: "0.7rem", fontSize: "1.8rem", fontWeight: 600 }}
              >
                Customer
              </Typography>
              <Typography>{user.username}</Typography>
              <Typography>{user.email}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} sm={4} md={4}>
          <Box
            id="PlaceOrder__orderDetail-container"
            sx={{
              display: "flex",
              my: "3rem",
              mx: "2rem",
            }}
          >
            <Box
              id="PlaceOrder__orderDetail-icon"
              component="img"
              src={truckPic}
              sx={{
                bgcolor: "white",
                height: "7rem",
                width: "7rem",
                borderRadius: "50%",
                p: "2rem",
                mr: "2rem",
                mb: "1rem",
              }}
            ></Box>

            <Box id="PlaceOrder__orderDetail-text" sx={{ mr: "2rem" }}>
              <Typography
                id="PlaceOrder__orderDetail-textTitle"
                sx={{ mb: "0.7rem", fontSize: "1.8rem", fontWeight: 600 }}
              >
                Order info
              </Typography>
              <Typography>Shipping: {shipping.country}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} sm={4} md={4}>
          <Box
            id="PlaceOrder__orderDetail-container"
            sx={{
              my: "3rem",
              mx: "2rem",
              display: "flex",
              width: "100%",
            }}
          >
            <Box
              id="PlaceOrder__orderDetail-icon"
              component="img"
              src={locationPic}
              sx={{
                bgcolor: "white",
                height: "7rem",
                width: "7rem",
                borderRadius: "50%",
                p: "2rem",
                mr: "2rem",
                mb: "1rem",
              }}
            ></Box>

            <Box
              id="PlaceOrder__orderDetail-text"
              sx={{ mr: "2rem", width: "65%" }}
            >
              <Typography
                id="PlaceOrder__orderDetail-textTitle"
                sx={{ mb: "0.7rem", fontSize: "1.8rem", fontWeight: 600 }}
              >
                Deliver to
              </Typography>
              <Typography>
                Address: {shipping.address}, {shipping.city},{" "}
                {shipping.postalCode}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlaceOrder;
