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
import { mongoDBApi } from "../src/Utils/axios";
import Shipping from "./components/ShippingPage/Shipping";
import CartAction from "./Utils/CartAction";
import Payment from "./components/Paymentpage/Payment";
import useToken from "./Utils/Token";

const initial = {
  data: [],
  loading: false,
  error: null,
};

function App() {
  const { token, user, clearToken } = useToken();
  const [state, setState] = useState(initial);
  const [products, setProducts] = useState([]);

  const {
    addToCart,
    removeFromCart,
    cartProduct,
    increaseQty,
    decreaseQty,
    shippingAddress,
    shipping,
  } = CartAction();

  const fetchProduct = async () => {
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    let products;
    let fetchError;

    try {
      const productResponse = await mongoDBApi.get("products");

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
            token={token}
            user={user}
            clearToken={clearToken}
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
        <Route
          path="/shipping"
          element={
            <Shipping shippingAddress={shippingAddress} shipping={shipping} />
          }
        />
        <Route path="/payment" element={<Payment shipping={shipping} />} />
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
