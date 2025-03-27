// App.js
import { useState } from "react";
import "../styles/App.css";

// ! Componentes de Home
import Titulo from "./NavTop/Titulo";
import Mensaje from "./NavDown/footer";
import RedesSociales from "./RedSocial";
import Objeto3D from "./3DObject/3D";
import Cartas from "./Cartas/Cartas";

// ! Componente Acerca de mí
import AboutMe from "./AboutMe";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  // Función para mostrar AboutMe (y ocultar Home)
  const handleShowAbout = () => {
    setShowAbout(true);
  };

  // Función para ocultar AboutMe (y mostrar Home)
  const handleHideAbout = () => {
    setShowAbout(false);
  };

  return (
    <>
      {/* Renderiza Home solo si showAbout es false */}
      {!showAbout && (
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

          {/* Mensaje del footer que recibe la función para mostrar AboutMe */}
          <Mensaje onShowAbout={handleShowAbout} />
        </div>
      )}

      {/* Renderiza AboutMe solo si showAbout es true */}
      {showAbout && (
        <div className="pl-4 pr-4">
          <AboutMe onHideAbout={handleHideAbout} />
        </div>
      )}
    </>
  );
}

export default App;