const AboutMe = () => {
  return (
    <section class="bg-primary mt-0 md:mt-12 text-white py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side: Image */}
      <div class="w-full md:w-5/12 flex justify-center h-full md:justify-end">
        <img
          src="/imgs/Yo.jpg"
          alt="About Me"
          class="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Text Content */}
      <div class="w-full md:w-7/12 text-center md:text-left relative">
        {/* Vertical Text */}
        <div class="absolute left-[40%] -top-6 md:-left-22  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
          <div class="flex items-center justify-center gap-2">
            <div class="w-26 h-[2px] bg-teal-400"></div>
            <p className="text-teal-400">Sobre mí</p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 class="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
          Ing. Sistemas <br /> Computacionales
        </h2>

        {/* Description */}
        <p class="text-gray-300 mb-6 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto md:mx-0">
          Soy un apasionado desarrollador Full-Stack con experiencia en Machine
          Learning, visión artificial y administración de bases de datos SQL. Me
          especializo en la optimización de sistemas seguros e innovadores,
          combinando tecnología y eficiencia para crear soluciones escalables. 
          <br /><br />Mi objetivo es desarrollar aplicaciones
          robustas, intuitivas y eficientes que impulsen el crecimiento
          tecnológico. Siempre estoy en busca de nuevos desafíos y oportunidades
          para seguir aprendiendo y mejorando.
        </p>

        {/* Buttons */}
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/"
            className="outline rounded-lg text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center hover:bg-teal-500 duration-300 hover:outline-teal-500"
          >
            Volver
          </a>
          {/* Telefono */}
          <p className="flex flex-row items-center gap-2 font-bold text-2xl text-teal-400 justify-center md:justify-start">
            <ion-icon name="logo-whatsapp"></ion-icon>
            427 - 289 - 5865
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default AboutMe;
