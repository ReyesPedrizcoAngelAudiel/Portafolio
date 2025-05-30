import NavBar from "./Footer-NavBar";

const Footer = ({ onShowAbout, onShowSkills, onShowEducation }) => {
  return (
    <div className="relative flex flex-row">
      <div className="basis-2/8 rounded-tr-2xl bg-[#242424] p-3 pl-5">
        <a
          href="mailto:angelaudiel@gmail.com"
          id="Email"
          className="flex flex-col items-center md:flex-row md:items-center"
        >
          <span className="text-[12px] md:text-[14px] lg:text-[16px]">
            Correo Electrónico
          </span>
          <ion-icon name="mail-outline" size="large"></ion-icon>
        </a>
      </div>

      {/* Barra de Navegación del footer */}
      <NavBar onShowAbout={onShowAbout} onShowSkills={onShowSkills} onShowEducation={onShowEducation} />
    </div>
  );
};

export default Footer;