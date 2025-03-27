const NavBar = ({ onShowAbout, onShowSkills, onShowEducation }) => {
  // Función que se ejecuta al hacer clic en "Habilidades Técnicas"
  const IrHabilidades = (e) => {
    e.preventDefault();
    onShowSkills();
  };

  // Función que se ejecuta al hacer clic en "Acerca de mí"
  const IrAcercaDeMi = (e) => {
    e.preventDefault();
    onShowAbout();
  };

  // Función que se ejecuta al hacer clic en "Educacion"
  const IrEducacion = (e) => {
    e.preventDefault();
    onShowEducation();
  };

  return (
    <div className="basis-6/8">
      <div className="pt-4 flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:gap-4">
        <div className="w-full md:w-16 lg:w-36 lg:ml-3 text-center">
          <p className="text-xs md:text-sm lg:text-base font-bold">
            Conocimiento :
          </p>
        </div>

        {/* Enlaces que activa IrHabilidades */}
        <a
          id="BotonNav"
          href=""
          onClick={IrHabilidades}
          className="w-5/6 md:w-36 lg:w-55"
        >
          <p className="outline-2 rounded-2xl p-1 text-center">
            Habilidades Técnicas
          </p>
        </a>

        {/* Enlace que activa IrAcercaDeMi */}
        <a
          id="BotonNav"
          href=""
          onClick={IrAcercaDeMi}
          className="w-5/6 md:w-36 lg:w-40"
        >
          <p className="outline-2 rounded-2xl p-1 text-center">Acerca de mí</p>
        </a>

        {/* Enlace que activa IrEducacion */}
        <a
          id="BotonNav"
          href=""
          onClick={IrEducacion}
          className="pb-5 w-5/6 md:w-28 md:pb-0 lg:w-34"
        >
          <p className="outline-2 rounded-2xl p-1 text-center">Educación</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
