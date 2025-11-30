import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Footer from "./components/layout/Footer";
import { NavBar } from "./components/layout/NavBar/NavBar";
import MenuAll from "./components/layout/MenuAll";
import ScrollToTop from "./hooks/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/menu/categories" element={<MenuAll />} />
        <Route path="/menu/categories/:categoryId" element={<MenuAll />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
