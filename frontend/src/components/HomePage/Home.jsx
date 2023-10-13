import { useContext } from "react";
import Footer from "../Footer/Footer";
import { ProductContext } from "../../Contexts/ProductContext";
import Products from "./Products";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function Home() {
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          mt: "3rem",
          mx: "8rem",
          fontSize: "1.4rem",
        }}
      >
        <Grid container xs={12} sm={12} md={12} spacing={3}>
          {filterProducts.map((product) => {
            return (
              <Grid xs={12} sm={6} md={4} key={product.id}>
                <Products product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
