import { useState, useEffect } from "react";

const images = [
  "/imgs/IA-SmartP/Cap-IA_SmartParking.jpg",
  "/imgs/IA-SmartP/Cap-IA_SmartParking-Auth.jpg",
  "/imgs/IA-SmartP/Cap-IA_SmartParking-Mapa2.jpg",
  "/imgs/IA-SmartP/Cap-IA_SmartParking-Estacionamiento.jpg",
];

const iconos = [
  { src: "/assets/icons/mysql.svg", alt: "MySQL" },
  { src: "/assets/icons/express.svg", alt: "Express" },
  { src: "/assets/icons/react.svg", alt: "React" },
  { src: "/assets/icons/nodejs.svg", alt: "Node.js" },
];

const Carta_IASmartP = () => {
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
        <h1 className="text-[28px] text-center font-bold tracking-wider mb-2 animate-fadeIn">
          IA - SmartParking
        </h1>

        {/* Imagen con transición suave */}
        <div className="relative overflow-hidden rounded-lg mb-2">
          <a href="https://ia-smartparking-v3.vercel.app/">
            <div className="relative group">
              {/* Imagen con blur */}
              <img
                src={images[currentImage]}
                className="w-full h-40 animate-slideInOut group-hover:blur-md transition-all duration-1000"
                alt="IA-SmartParking"
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
                  className="w-12 h-12" // Tamaño de los iconos
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

export default Carta_IASmartP;