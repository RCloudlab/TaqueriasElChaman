import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import Menu from "./components/layout/Menu";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="tracking-widest flex justify-center items-center text-[100px]  h-[400px] bg-white text-black ">
        <p>platillos</p>
      </div>
      <Menu />
      {<Footer />}
    </BrowserRouter>
  );
}

export default App;
