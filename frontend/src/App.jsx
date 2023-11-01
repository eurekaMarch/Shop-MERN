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
import Cart from "./components/CartPage/Cart";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/theme";
import { productApi } from "../src/Utils/axios";
import Shipping from "./components/ShippingPage/Shipping";
import ProductToCart from "../src/Utils/ProductToCart";

const initial = {
  data: [],
  loading: false,
  error: null,
};

function App() {
  const [state, setState] = useState(initial);
  const [products, setProducts] = useState([]);
  const [amountItem, setAmountItem] = useState(1);

  const { addToCart, removeFromCart, cartProduct, increaseQty, decreaseQty } =
    ProductToCart(amountItem);

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
          element={
            <SingleProduct
              addToCart={addToCart}
              amountItem={amountItem}
              setAmountItem={setAmountItem}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartProduct={cartProduct}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
        <Route path="/shipping" element={<Shipping />} />
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
