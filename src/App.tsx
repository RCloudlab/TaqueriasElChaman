import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import deerLogo from "./assets/Images/deer-logo.svg";
import insta from "./assets/Images/Insta.jpg";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        {/* ESTE MAIN LO PUSE DE PRUEBA PARA MOSTRAR EL FIXED DEL HEADER */}
        <main className="py-[600px] bg-black/60 flex flex-col gap-40 font-bold">
          Main
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            voluptate eius dolor laboriosam illum quos illo exercitationem ea
            molestiae veritatis, sapiente sunt obcaecati fugiat adipisci eum,
            consequuntur accusantium, aliquam dolorum?
          </p>
          <img src={deerLogo} alt="Logo" />
          <img src={insta} alt="Logo" />
        </main>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {<Footer />}
    </BrowserRouter>
  );
}

export default App;
