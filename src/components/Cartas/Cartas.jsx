import IA_SmartP from "./IA-SmartP";
import Cetech from "./Cetech";
import BondaFarmacia from "./BondadosaFarmacia";

const Cartas = () => {
  return (
    <>
      <div className="basis-6/7"></div>
      <div id="Cartas" className="relative basis-7/7 scale-[0.63] origin-top">
        {/* Contenedor responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 animate-fadeInRight">
          <h1 id="Proyectos" className="titulo-vertical">PROYECTOS</h1>

          <div id="Punto" className="w-5 h-5 rounded-full bg-white"/>
          <div id="Palito" className="w-1 md:h-169 h-24/25 rounded-full bg-white"/>

          {/* IA-SmartParking - Ocupa el ancho completo en dispositivos medianos y grandes */}
          <div className="md:col-span-2 outline-2 rounded-2xl">
            <IA_SmartP />
          </div>

          {/* Cetech */}
          <div className="outline-2 rounded-2xl">
            <Cetech />
          </div>

          {/* BondaFarmacia */}
          <div className="outline-2 rounded-2xl">
            <BondaFarmacia />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartas;
