import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import { NavBarV2 } from "./components/layout/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBarV2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
