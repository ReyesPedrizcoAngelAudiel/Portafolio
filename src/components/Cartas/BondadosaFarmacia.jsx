import { useState, useEffect } from "react";

const images = [
  "/imgs/Bondadosa/Cap-BondadosaFarmacia.jpg",
  "/imgs/Bondadosa/Principal.jpg",
  "/imgs/Bondadosa/Productos-Cat.jpg",
  "/imgs/Bondadosa/Factura.jpg",
  "/imgs/Bondadosa/Tiquet.jpg",
];

const iconos = [
  { src: "/assets/icons/SQL-Server.svg", alt: "Server" },
  { src: "/assets/icons/html.svg", alt: "HTML" },
  { src: "/assets/icons/css.svg", alt: "CSS" },
  { src: "/assets/icons/electron.svg", alt: "Electron" },
];


const BondaFarmacia = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Función para cambiar las imágenes
  const handleImageChange = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleImageChange, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="relative p-3">
      {/* Fondo Blur */}
      <div className="absolute inset-0 bg-black opacity-50 blur-md"></div>

      <div className="relative">
        <h1 className="text-[28px] md:text-[23px] text-center font-bold tracking-wider mb-2 animate-fadeIn">
          Bondadosa Farmacia
        </h1>

        {/* Imagen con transición suave */}
        <div className="relative overflow-hidden rounded-lg mb-2">
          <a href="/assets/pdf/Manual-Usuario_SistemaVentas-BondadosaFarmacia.pdf">
            <div className="relative group">
              {/* Imagen con blur */}
              <img
                src={images[currentImage]}
                className="w-full h-40 animate-slideInOut group-hover:blur-md transition-all duration-1000"
                alt="Bondadosa Farmacia"
              />
              {/* Texto que se muestra encima de la imagen */}
              <div className="absolute inset-0 p-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <span className="text-sky-400 text-4xl font-bold">Visualizar proyecto</span>
              </div>
            </div>
          </a>
        </div>

        {/* Tecnologías Utilizadas */}
        <div className="tech-title">
          <p className="scale-[1.7] pb-3">Tecnologías Utilizadas</p>

          {/* Contenedor de íconos */}
          <div className="grid-icons scale-[1.2] space-x-[-50px]">
            {iconos.map((icon, index) => (
              <div key={index} className="icon-container">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-12 h-10" // Tamaño de los iconos
                  style={
                    icon.alt === "Server"
                      ? {
                          background: "#242938",
                          borderRadius: "25%",
                          padding: "2px",
                        }
                      : {}
                  }
                />
                <p className="icon-name">{icon.alt}</p>{" "}
                {/* Nombre debajo del icono */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondaFarmacia;