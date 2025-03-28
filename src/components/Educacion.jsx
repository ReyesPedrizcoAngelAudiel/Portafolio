const Education = ({ onHideEducation }) => {
  return (
    <section className="w-full py-10 px-6 sm:px-12 md:px-16 xl:px-24 text-white bg-primary flex items-center scroll-snap-center">
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
            <div className="grid grid-cols-1 items-center ml-8">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                Instituto Tecnológico de San Juan del Río
              </h2>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-23">
                <img
                  src="/imgs/LogoTecNM.png"
                  className="size-34 scale-up-center"
                />
                <p className="text-teal-400 text-2xl md:text-right pulse-glow">
                  Título en trámite
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mt-3 md:-mt-2 animate-fadeIn">
              Orgulloso de haber obtenido el <p className="inline text-sky-400">1er Lugar</p> en {""}
              <a class="text-sky-400 no-underline hover:underline after:content-['_↗']" href="https://surguanajuato.tecnm.mx/innovatecnm.html">
                InovaTecNM 2024
              </a>
              , celebrado en Pachuca, Hidalgo. Durante este evento de
              innovación, competimos contra otros tecnológicos, y logré superarme como programador.
            </p>

            {/* Periodo y Botón */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between animate-fadeInLeft">
              <p className="text-md text-center md:text-[16px] text-teal-300 animate-pulse">
                Periodo :
              </p>
              <h1 className="text-md text-center md:text-[16px] text-teal-300 animate-pulse">
                <p className="inline text-white">Enero 2020 - Actualidad</p>
              </h1>

              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  onHideEducation();
                }}
                className="outline text-center rounded-2xl outline-3 text-white font-semibold py-2 px-8 hover:bg-teal-500 hover:outline-none hover:scale-105 duration-300 shadow-teal-400/50 transition-all ease-in-out mt-4 sm:mt-0"
              >
                Volver
              </a>
            </div>
          </div>
        </div>

        {/* Lado Derecho (Imágenes en columna, del mismo tamaño) */}
        <div className="flex flex-col items-center space-y-3 -mt-10 md:mt-0">
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
