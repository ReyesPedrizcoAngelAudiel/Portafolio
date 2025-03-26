import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Titulo from "./NavTop/Titulo";
import Mensaje from "./NavDown/footer";
import RedesSociales from "./RedSocial";
import Objeto3D from "./3DObject/3D";
import Cartas from "./Cartas/Cartas";
import AboutMe from "./AboutMe";  // Importamos AboutMe

function Home() {
  return (
    <div id="Contenedor" className="rounded-2xl">
      {/* Título */}
      <Titulo />

      {/* Contenedor Central */}
      <div id="ContainerCentral" className="static flex flex-col">
        {/* Objeto 3D */}
        <Objeto3D />

        {/* Cartas proyectos */}
        <div className="flex flex-col md:flex-row w-full">
          <Cartas />
        </div>

        {/* Redes Sociales */}
        <RedesSociales />
      </div>

      {/* Mensaje del footer */}
      <Mensaje />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;