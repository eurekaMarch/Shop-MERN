import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { grey, red } from "@mui/material/colors";
import truckPic from "../../assets/truck-solid.svg";
import userPic from "../../assets/user-solid.svg";
import locationPic from "../../assets/location-dot-solid.svg";

function PlaceOrder(value) {
  window.scrollTo(0, 100);
  const { shipping, cartProduct, user } = value;

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cartProduct.itemsPrice = addDecimals(
    cartProduct.reduce(
      (pre, cur) => pre + Number(cur.qty) * Number(cur.price),
      0
    )
  );
  cartProduct.shippingPrice = addDecimals(
    cartProduct.itemsPrice > 100 ? 0 : 100
  );

  cartProduct.taxPrice = addDecimals(
    Number((0.07 * cartProduct.itemsPrice).toFixed(2))
  );

  cartProduct.totalPrice = (
    Number(cartProduct.itemsPrice) +
    Number(cartProduct.shippingPrice) +
    Number(cartProduct.taxPrice)
  ).toFixed(2);

  const createData = (name, price) => {
    return { name, price };
  };

  const rows = [
    createData("Products", "$" + cartProduct.itemsPrice),
    createData("Shipping", "$" + cartProduct.shippingPrice),
    createData("Tax", "$" + cartProduct.taxPrice),
    createData("Total", "$" + cartProduct.totalPrice),
  ];

  return (
    <Box sx={{ mt: "1rem", mx: "6rem" }}>
      {/* order detail */}

      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        sx={{ bgcolor: "#f0f7e9", borderRadius: "0.6rem" }}
      >
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

      <Grid container xs={12} sm={12} md={12} sx={{ mt: "4rem" }}>
        {/* product detail */}

        <Grid id="PlaceOrder__product" xs={12} sm={12} md={8}>
          {cartProduct.map((product) => {
            return (
              <Box key={product._id}>
                <Card
                  sx={{
                    mb: "2rem",
                    py: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      xs={4}
                      sm={2}
                      md={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        px: "1rem",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={product.image}
                        sx={{ height: "12rem", objectFit: "contain" }}
                      />
                    </Grid>

                    <Grid
                      xs={8}
                      sm={4}
                      md={6}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Link to={`/products?id=${product._id}`}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            px: "1rem",
                            pb: "1rem",
                            textAlign: "center",
                          }}
                        >
                          {product.name}
                        </Typography>
                      </Link>
                    </Grid>

                    <Grid
                      id="PlaceOrder__qty-price"
                      xs={6}
                      sm={3}
                      md={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 400,
                          px: "1rem",
                          mb: "1rem",
                          textAlign: "center",
                        }}
                      >
                        QUANTITY
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 500,
                          px: "1rem",
                          textAlign: "center",
                        }}
                      >
                        {product.qty}
                      </Typography>
                    </Grid>

                    <Grid
                      id="PlaceOrder__qty-price"
                      xs={6}
                      sm={3}
                      md={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 400,
                          px: "1rem",
                          mb: "1rem",
                          textAlign: "center",
                        }}
                      >
                        SUBTOTAL
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 500,
                          px: "1rem",
                          textAlign: "center",
                          color: red[500],
                        }}
                      >
                        ${(product.qty * product.price).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            );
          })}
        </Grid>

        {/* table */}
        <Grid xs={12} sm={12} md={4}>
          <Box id="PlaceOrder__table" sx={{ ml: "8rem" }}>
            <TableContainer component={Paper} sx={{ bgcolor: grey[200] }}>
              <Table aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: red[500], fontWeight: 600 }}
                      >
                        {row.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "center", my: "4rem" }}>
              <Button
                id="PlaceOrder__button"
                variant="contained"
                color="green"
                sx={{
                  fontSize: "1.6rem",
                  height: "5rem",
                  width: "100%",
                  fontWeight: 500,
                }}
              >
                Place Order
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlaceOrder;
