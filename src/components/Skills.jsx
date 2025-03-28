import { useEffect } from 'react';

const categories = [
  {
    title: "Lenguajes de programación",
    items: [
      { name: "Python", icon: "python.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "C++", icon: "c.svg" },
      { name: "PHP", icon: "Php-Dark.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "TypeScript.svg" },
    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "MySQL", icon: "mysql.svg" },
      { name: "MariaDB", icon: "mariaDB.svg" },
      { name: "SQL Server", icon: "SQL-Server.svg" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React.js", icon: "React-Dark.svg" },
      { name: "Vue.js", icon: "vuejs.svg" },
      { name: "Laravel", icon: "Laravel-Dark.svg" },
      { name: "TailwindCSS", icon: "TailwindCSS-Dark.svg" },
      { name: "Bootstrap", icon: "Bootstrap.svg" },
      { name: "Electron", icon: "electron.svg" },
    ],
  },
  {
    title: "Librerías y Otros",
    items: [
      { name: "TensorFlow", icon: "TensorFlow-Dark.svg" },
      { name: "OpenCV", icon: "OpenCV-Dark.svg" },
      { name: "Git", icon: "Git.svg" },
      { name: "HTML5", icon: "html.svg" },
      { name: "CSS3", icon: "css.svg" },
      { name: "Figma", icon: "figma.svg" },
    ],
  },
];

const Skills = ({ onHideSkills }) => {
  useEffect(() => {
    // Verifica si el dispositivo es móvil
    const isMobile = window.innerWidth <= 768; // Puedes ajustar el tamaño según sea necesario
    if (isMobile) {
      // Animación de desplazamiento suave hacia arriba
      window.scrollTo({
        top: 0,
      });
    }
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  return (
    <section className="w-full py-8 md:px-8 xl:px-12 bg-primary">
      <div className="container flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Lado Izquierdo (Icons Grid) */}
        <div className="w-full z-10">
          {categories.map((category, index) => (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-1" key={index}>
              <h1 className="col-span-3 md:col-span-6 text-xl font-bold text-center md:text-left animate-fadeInLeft">
                {category.title}
                <div className="mx-10 w-auto h-[3px] bg-teal-400 block md:hidden"></div>
              </h1>
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-2 mt-2 rounded-lg shadow-lg flex flex-col justify-center items-center scale-up-center"
                >
                  <img
                    src={`/assets/icons/${item.icon}`}
                    width="32"
                    height="32"
                    alt={item.name}
                  />
                  <div className="text-xs mt-2 text-center">{item.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Lado Derecho (Información adicional) */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20 text-right">
            {/* Vertical Text */}
            <div className="absolute right-[5%] -top-6 md:-right-30 lg:top-30 md:top-10 rotate-0 md:rotate-[-90deg] text-sm tracking-widest animate-fadeInRight">
              <div className="flex items-center justify-center gap-2 animate-pulse">
                <div className="w-30 h-[3px] bg-teal-400"></div>
                <p className="text-teal-400 text-[20px]">Habilidades</p>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="absolute right-5 top-2 md:relative bottom-9 md:-right-10 md:bottom-0 text-[26px] md:text-4xl xl:text-6xl font-bold leading-tight slide-bottom">
              Herramientas y tecnologias
            </h2>
          </div>

          <p className="absolute mt-2 right-5 md:relative w-full md:mt-0 md:w-5/6 md:-right-13 md:bottom-0 text-gray-400 text-[12px] md:text-[16px] text-right animate-fadeIn">
            Estas son algunas de las tecnologías que utilizo en mi día a día. Me
            mantengo actualizado y busco trabajar con las herramientas más
            modernas y eficientes
          </p>

          {/* Botón "Volver" igual al de AboutMe */}
          <div className="relative ml-30 mt-20 md:relative mt-5 md:mt-4 md:ml-90 md:bottom-0">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                onHideSkills();
              }}
              className="outline rounded-2xl outline-3 text-white font-semibold py-1 px-18 hover:bg-teal-500 hover:outline-none hover:scale-105 duration-300 shadow-teal-400/50 transition-all ease-in-out animate-glow"
            >
              Volver
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;