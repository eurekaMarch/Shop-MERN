import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { mongoDBApi } from "../../Utils/axios";
import moment from "moment-timezone";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
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
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

moment.tz.setDefault("Asia/Bangkok");

const initial = {
  order: [],
  loading: false,
  error: null,
};

function OrderPage(value) {
  window.scrollTo(0, 0);

  const { token } = value;
  const [ordertItem, setOrderItem] = useState(initial);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const style = { layout: "vertical" };

  const fetchOrder = async (id) => {
    setOrderItem((prev) => ({
      ...prev,
      loading: true,
    }));

    let orders;
    let fetchError;

    try {
      const orderResponse = await mongoDBApi.get(`orders/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      orders = await orderResponse?.data;
    } catch (error) {
      fetchError = error;
    }

    setOrderItem((prev) => ({
      ...prev,
      order: orders,
      loading: false,
      error: fetchError,
    }));
  };

  const createData = (name, price) => {
    return { name, price };
  };

  const rows = [
    createData("Products", "$" + ordertItem.order.itemsPrice.toFixed(2)),
    createData("Shipping", "$" + ordertItem.order.shippingPrice.toFixed(2)),
    createData("Tax", "$" + ordertItem.order.taxPrice.toFixed(2)),
    createData("Total", "$" + ordertItem.order.totalPrice.toFixed(2)),
  ];

  useEffect(() => {
    id && fetchOrder(id);
  }, [id]);

  return (
    <div>
      {ordertItem.loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "5rem" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box sx={{ mt: "1rem", mx: "6rem" }}>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            sx={{ bgcolor: "#f0f7e9", borderRadius: "0.6rem" }}
          >
            <Grid xs={12} sm={4} md={4}>
              <Box
                id="Order__orderDetail-container"
                sx={{
                  display: "flex",
                  my: "3rem",
                  mx: "2rem",
                }}
              >
                <Box
                  id="Order__orderDetail-icon"
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

                <Box id="Order__orderDetail-text" sx={{ mr: "2rem" }}>
                  <Typography
                    id="Order__orderDetail-textTitle"
                    sx={{ mb: "0.7rem", fontSize: "1.8rem", fontWeight: 600 }}
                  >
                    Customer
                  </Typography>
                  <Typography>{ordertItem.order.user?.username}</Typography>
                  <Typography>{ordertItem.order.user?.email}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} sm={4} md={4}>
              <Box
                id="Order__orderDetail-container"
                sx={{
                  display: "flex",
                  my: "3rem",
                  mx: "2rem",
                }}
              >
                <Box
                  id="Order__orderDetail-icon"
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

                <Box id="Order__orderDetail-text">
                  <Typography
                    id="Order__orderDetail-textTitle"
                    sx={{ mb: "0.7rem", fontSize: "1.8rem", fontWeight: 600 }}
                  >
                    Order info
                  </Typography>

                  <Typography>
                    Shipping: {ordertItem.order.shippingAddress?.country}
                  </Typography>

                  <Typography sx={{ wordWrap: "break-word" }}>
                    Order ID: {ordertItem.order._id}
                  </Typography>

                  {ordertItem.order.isPaid ? (
                    <Box
                      sx={{
                        p: "1rem",
                        mt: "1rem",
                        bgcolor: "#1CB803",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <Typography>
                        Paid on {moment(ordertItem.order.paidAt).calendar()}
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        p: "1rem",
                        mt: "1rem",
                        bgcolor: red[500],
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <Typography>Not Paid</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} sm={4} md={4}>
              <Box
                id="Order__orderDetail-container"
                sx={{
                  my: "3rem",
                  mx: "2rem",
                  display: "flex",
                  width: "100%",
                }}
              >
                <Box
                  id="Order__orderDetail-icon"
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
                  id="Order__orderDetail-text"
                  sx={{ mr: "2rem", width: "65%" }}
                >
                  <Typography
                    id="Order__orderDetail-textTitle"
                    sx={{ mb: "0.7rem", fontSize: "1.8rem", fontWeight: 600 }}
                  >
                    Deliver to
                  </Typography>

                  <Typography>
                    Address: {ordertItem.order.shippingAddress?.address},{" "}
                    {ordertItem.order.shippingAddress?.city},{" "}
                    {ordertItem.order.shippingAddress?.postalCode}
                  </Typography>

                  {ordertItem.order.isDelivered ? (
                    <Box
                      sx={{
                        p: "1rem",
                        mt: "1rem",
                        bgcolor: "#1CB803",
                        color: "white",
                        textAlign: "center",
                        width: "90%",
                      }}
                    >
                      <Typography>
                        Delivered on{" "}
                        {moment(ordertItem.order.deliveredAt).calendar()}
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        p: "1rem",
                        mt: "1rem",
                        bgcolor: red[500],
                        color: "white",
                        textAlign: "center",
                        width: "90%",
                      }}
                    >
                      <Typography>Not Delivered</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container xs={12} sm={12} md={12} sx={{ mt: "4rem" }}>
            {/* product detail */}

            {ordertItem.order.orderItems?.length === 0 ? (
              <Grid xs={12} sm={12} md={8}>
                <Box
                  sx={{
                    textAlign: "center",
                    bgcolor: "#CFF4FC",
                    py: "2rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: grey[600],
                    }}
                  >
                    Your order is empty
                  </Typography>
                </Box>
              </Grid>
            ) : (
              <Grid id="Order__product" xs={12} sm={12} md={8}>
                {ordertItem.order.orderItems?.map((order) => {
                  return (
                    <Box key={order._id}>
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
                              image={order.image}
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
                            <Link to={`/products?id=${order._id}`}>
                              <Typography
                                sx={{
                                  fontWeight: 500,
                                  px: "1rem",
                                  pb: "1rem",
                                  textAlign: "center",
                                }}
                              >
                                {order?.name}
                              </Typography>
                            </Link>
                          </Grid>

                          <Grid
                            id="Order__qty-price"
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
                              {order.qty}
                            </Typography>
                          </Grid>

                          <Grid
                            id="Order__qty-price"
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
                              ${(order.qty * order.price).toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Box>
                  );
                })}
              </Grid>
            )}

            {/* table */}
            <Grid xs={12} sm={12} md={4}>
              <Box id="Order__table" sx={{ ml: "8rem" }}>
                <TableContainer
                  component={Paper}
                  sx={{ bgcolor: grey[200], mb: "4rem" }}
                >
                  <Table aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
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

                <div style={{ minHeight: "200px" }}>
                  <PayPalScriptProvider
                    options={{
                      clientId: "test",
                      components: "buttons",
                      currency: "USD",
                    }}
                  >
                    <PayPalButtons
                      style={style}
                      disabled={false}
                      forceReRender={[style]}
                    />
                  </PayPalScriptProvider>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default OrderPage;
