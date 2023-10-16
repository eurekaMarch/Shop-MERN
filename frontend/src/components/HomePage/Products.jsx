import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import CardMedia from "@mui/material/CardMedia";

function Products(value) {
  const { product } = value;

  return (
    <div>
      <CardActionArea>
        <Card sx={{ textAlign: "center", height: "32rem" }}>
          <CardMedia
            component="img"
            image={product.image}
            sx={{
              height: "20rem",
              pt: "2rem",
              m: "auto",
              objectFit: "contain",
            }}
          />
          <CardContent sx={{ textAlign: "left" }}>
            <Typography gutterBottom>{product.category}</Typography>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {product.title}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              $ {product.price}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}

export default Products;
