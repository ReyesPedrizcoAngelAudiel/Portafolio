const Education = ({ onHideEducation }) => {
  return (
    <section className="w-full py-16 px-6 sm:px-12 md:px-16 xl:px-24 text-white bg-primary flex items-center scroll-snap-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Lado Izquierdo */}
        <div className="relative p-6 md:p-0 flex flex-col justify-between h-full">
          {/* Texto Vertical */}
          <div className="absolute -left-26 md:-left-32 xl:-left-32 top-38 md:top-36 xl:top-37 rotate-[-90deg] text-sm tracking-widest flex flex-row gap-1 animate-fadeInRight">
            <div className="w-32 h-[3px] bg-teal-400 mt-2 animate-pulse"></div>
            <p className="text-teal-400 animate-pulse">Campus TECNM</p>
          </div>

          {/* Título y Descripción */}
          <div>
            <div className="grid grid-cols-1 items-center ml-8 animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                Instituto Tecnológico de San Juan del Río
              </h2>
              <img
                src="/imgs/LogoTecNM.png"
                className="size-34 animate-fadeIn"
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mt-4 animate-fadeIn">
              Estudié Ingeniería en Sistemas Computacionales en este campus,
              desarrollando habilidades para crear soluciones tecnológicas
              eficientes y adaptativas.
            </p>

            {/* Periodo y Botón */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-lg md:text-[16px] text-teal-300 pulse-glow">
                Periodo: Enero 2020 - Actualidad
              </h1>

              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  onHideEducation();
                }}
                className="outline rounded-2xl outline-3 text-white font-semibold py-2 px-8 hover:bg-teal-500 hover:outline-none hover:scale-105 duration-300 shadow-teal-400/50 transition-all ease-in-out mt-4 sm:mt-0"
              >
                Volver
              </a>
            </div>
          </div>
        </div>

        {/* Lado Derecho (Imágenes en columna, del mismo tamaño) */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src="/imgs/Itsjr.png"
            alt="Logo ITSJR"
            className="w-full h-[200px] aspect-[4/3] rounded-xl shadow-lg shadow-teal-500/20 grayscale-0 transition-all duration-500 ease-in-out hover:scale-105 animate-fadeInRight"
          />
          <img
            src="/imgs/PrimerLugar-Pachuca2.jpeg"
            alt="Premio Pachuca"
            className="w-full h-[200px] aspect-[4/3] rounded-xl shadow-lg shadow-teal-500/20 transition-all duration-500 ease-in-out hover:scale-105 animate-fadeInRight"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
