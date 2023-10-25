import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { productApi } from "../../Utils/axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const initial = {
  data: [],
  loading: false,
  error: null,
};

function SingleProduct() {
  const [state, setState] = useState(initial);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchProduct = async (id) => {
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    let products;
    let fetchError;

    try {
      const productResponse = await productApi.get(`products/${id}`);

      products = await productResponse?.data;
    } catch (error) {
      fetchError = error;
    }

    setState((prev) => ({
      ...prev,
      data: products,
      loading: false,
      error: fetchError,
    }));
  };

  useEffect(() => {
    id && fetchProduct(id);
  }, [id]);

  return (
    <div>
      {state.loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "5rem" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <img src={state.data.image}></img>
      )}
    </div>
  );
}

export default SingleProduct;
