import BtnCV from "./botonCV";
import Subtitle from "./Subtitulo";

const Contenido = () => {
  return (
    <div className="relative w-full z-1 flex flex-row">
      {/* Contenedor principal */}
      <div className="basis-6/8 pl-5 h-[1px] relative">
        {/* Titulo */}
        <div className="relative">
          <a href="/" className="text-2xl md:text-4xl lg:text-6xl font-bold">
            <p className="animate-typing pt-2 md:pb-2">Angel Audiel</p>
          </a>
        </div>
          <Subtitle />
      </div>

      {/* Boton CV */}
      <BtnCV />
    </div>
  );
};

export default Contenido;
