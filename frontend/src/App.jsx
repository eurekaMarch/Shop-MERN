import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import Nav from "./components/Nav/Nav";
import Register from "./components/LoginPage/Register";
import Login from "./components/LoginPage/Login";
import SingleProduct from "./components/SingleProductPage/SingleProduct";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/theme";
import { productApi } from "../src/Utils/axios";

const initial = {
  data: [],
  loading: false,
  error: null,
};

function App() {
  const [state, setState] = useState(initial);
  const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  const fetchProduct = async () => {
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    let products;
    let fetchError;

    try {
      const productResponse = await productApi.get("products");

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

    setProducts(products);
  };

  const addToCart = (product) => {
    const productExit = cartProduct.find((item) => item.id === product.id);

    if (productExit) {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === product.id ? { ...productExit } : item
        )
      );
    } else {
      setCartProduct([...cartProduct, product]);
    }

    console.log(cartProduct);
  };

  // const addToCart = (product) => {
  //   setCartProduct([...cartProduct, product]);
  // };

  // const removeFromCart = (product) => {
  //   const newProduct = cartProduct.filter(
  //     (addedItem) => addedItem.id !== product.id
  //   );
  //   setCartProduct(newProduct);
  // };

  useEffect(() => {
    fetchProduct();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Nav
            data={state.data}
            setProducts={setProducts}
            cartProduct={cartProduct}
          />
        }
      >
        <Route
          index
          element={<Home products={products} loading={state.loading} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={<SingleProduct addToCart={addToCart} />}
        />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
