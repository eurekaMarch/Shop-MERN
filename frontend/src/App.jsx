import { useState } from "react";
import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import Nav from "./components/Nav/Nav";
import Register from "./components/LoginPage/RegisterPage";
import Login from "./components/LoginPage/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/theme";
import { ProductContext } from "./Contexts/ProductContext";
import Data from "./Utils/Data";

function App() {
  const { products } = useContext(ProductContext);

  const [filterSearch, setFilterSearch] = useState(products);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Nav product={products} setFilterSearch={setFilterSearch} />}
      >
        <Route index element={<Home filterProducts={filterSearch} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
