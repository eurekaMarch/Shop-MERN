import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import Nav from "./components/Nav/Nav";
import Register from "./components/Nav/Register";
import Login from "./components/Nav/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ThemeMUI/theme";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
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
