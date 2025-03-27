import BtnCV from "./botonCV";
import Subtitle from "./Subtitulo";

const Contenido = () => {
  return (
    <div className="relative w-full z-1 flex flex-row">
      {/* Contenedor principal */}
      <div className="basis-6/8 pl-3  md:pl-3 h-[1px] relative">
        {/* Titulo */}
        <div className="relative">
          <a href="/" className="text-2xl md:text-4xl lg:text-5xl px-1 font-bold">
            <p className="animate-typing pt-5 md:pb-3">Angel Audiel Reyes <br /> Pedrizco</p>
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
