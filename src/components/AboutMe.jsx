// AboutMe.jsx
const AboutMe = ({ onHideAbout }) => {
  return (
    <section className="bg-primary mt-0 md:mt-12 text-white py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side: Image */}
      <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end animate-fadeInRightFoto">
        <img
          src="/imgs/Yo.jpg"
          alt="About Me"
          className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-teal-400/50"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-7/12 text-center md:text-left relative">
        {/* Vertical Text */}
        <div className="absolute left-[40%] -top-6 md:-left-22 lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest animate-fadeInRight">
          <div className="flex items-center justify-center gap-2 animate-pulse">
            <div className="w-26 h-[2px] bg-teal-400"></div>
            <p className="text-teal-400">Sobre mí</p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10 text-glow animate-typing">
          Ing. Sistemas <br /> Computacionales
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fadeInRight">
          Soy un apasionado desarrollador Full-Stack con experiencia en Machine
          Learning, visión artificial y administración de bases de datos SQL. Me
          especializo en la optimización de sistemas seguros e innovadores,
          combinando tecnología y eficiencia para crear soluciones escalables.
          <br />
          <br />
          Mi objetivo es desarrollar aplicaciones robustas, intuitivas y
          eficientes que impulsen el crecimiento tecnológico. Siempre estoy en
          busca de nuevos desafíos y oportunidades para seguir aprendiendo y
          mejorando.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-between sm:justify-start animate-fadeIn">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              onHideAbout();
            }}
            className="outline rounded-2xl outline-3 text-white font-semibold py-1 px-8 hover:bg-teal-500 hover:outline-none hover:scale-105 duration-300 shadow-teal-400/50 transition-all ease-in-out animate-glow"
          >
            Volver
          </a>
          {/* Teléfono */}
          <p className="flex flex-row items-center gap-6 font-bold text-2xl text-teal-600 justify-center sm:justify-end sm:ml-55 pulse-glow">
            427 - 289 - 5865
            <ion-icon name="logo-whatsapp" size="large"></ion-icon>
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;