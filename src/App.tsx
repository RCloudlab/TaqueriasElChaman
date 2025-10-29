import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <BrowserRouter>
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {<Footer />}
    </BrowserRouter>
  );
}

export default App;
