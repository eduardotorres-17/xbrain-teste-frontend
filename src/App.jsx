import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout/Checkout";

const theme = createTheme({
  palette: {
    background: {
      default: "#F9F9F9",
    },
    primary: {
      main: "#2196f3", 
    },
    secondary: {
      main: "#f5a30b", 
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
