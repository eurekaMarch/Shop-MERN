import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

function Products(value) {
  const { product } = value;

  return (
    <div>
      <CardActionArea>
        <Card sx={{ textAlign: "center", height: "40rem" }}>
          <Box sx={{ mt: "2rem" }}>
            <img
              src={product.image}
              alt=""
              width={"250rem"}
              height={"250rem"}
            />
          </Box>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography gutterBottom>{product.category}</Typography>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "1.41rem" }}
            >
              {product.title}
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              $ {product.price}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}

export default Products;
