import { useEffect } from "react";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Products from "./Products";
import usePagination from "./usePagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Home(values) {
  const { products, loading } = values;

  const filterProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  const { pageProducts, page, maxPage, jumpPage } = usePagination(
    filterProduct,
    6
  );

  const handleChange = (event, value) => {
    jumpPage(value);
  };

  useEffect(() => {
    if (products) jumpPage(1);
  }, [products, jumpPage]);

  return (
    <div>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "5rem" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            mt: "3rem",
            ml: "6rem",
            mr: "3rem",
          }}
        >
          <Grid container xs={12} sm={12} md={12} spacing={3}>
            {pageProducts().map((product) => {
              return (
                <Grid xs={12} sm={6} md={4} key={product.id}>
                  <Products product={product} />
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
            <Stack spacing={2}>
              <Pagination
                count={maxPage}
                page={page}
                onChange={handleChange}
                size="large"
                color="black"
              />
            </Stack>
          </Box>
        </Box>
      )}

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
