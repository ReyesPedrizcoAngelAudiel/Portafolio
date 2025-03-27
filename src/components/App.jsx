import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/App.css";

// Componentes de Home
import Titulo from "./NavTop/Titulo";
import Mensaje from "./NavDown/footer";
import RedesSociales from "./RedSocial";
import Objeto3D from "./3DObject/3D";
import Cartas from "./Cartas/Cartas";

// Componente Acerca de mí
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Educacion";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  const handleShowAbout = () => setShowAbout(true);
  const handleHideAbout = () => setShowAbout(false);

  const handleShowSkills = () => setShowSkills(true);
  const handleHideSkills = () => setShowSkills(false);

  const handleShowEducation = () => setShowEducation(true);
  const handleHideEducation = () => setShowEducation(false);

  return (
    <>
      {/* Objeto 3D siempre montado, pero oculto */}
      <div
        style={{
          opacity: 0.45,
          visibility: showAbout ? "hidden" : "visible",
        }}
      >
        <Objeto3D />
      </div>

      <AnimatePresence mode="wait">
        {!showAbout && !showSkills && !showEducation && (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: -50,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            id="Contenedor"
            className="rounded-2xl"
          >
            <Titulo />
            <div id="ContainerCentral" className="static flex flex-col">
              <div className="flex flex-col md:flex-row w-full">
                <Cartas />
              </div>
              <RedesSociales />
            </div>
            <Mensaje
              onShowAbout={handleShowAbout}
              onShowSkills={handleShowSkills}
              onShowEducation={handleShowEducation}
            />
          </motion.div>
        )}

        {showAbout && (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: 50,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="pl-4 pr-4"
          >
            <AboutMe onHideAbout={handleHideAbout} />
          </motion.div>
        )}

        {showSkills && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: 50,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="pl-4 pr-4"
          >
            <Skills onHideSkills={handleHideSkills} />
          </motion.div>
        )}

        {showEducation && (
          <motion.div
            key="education"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: 50,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="pl-4 pr-4"
          >
            <Education onHideEducation={handleHideEducation} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
