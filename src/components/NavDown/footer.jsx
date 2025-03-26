import NavBar from "./Footer-NavBar";

const Footer = () => {
  return (
    <div className="relative flex flex-row">
      <div className="basis-2/8 rounded-tr-2xl bg-[#242424] p-4">
        <a href="#SendMessage" id="Email" className="flex flex-col items-center md:flex-row md:items-center">
          <span className="text-[12px] md:text-[14px] lg:text-[16px]">Mándame mensaje</span>
          <ion-icon name="mail-outline" className="text-2xl mt-1 md:ml-3 md:mt-0"></ion-icon>
        </a>
      </div>

      {/* Barra de Navegación del footer */}
      <NavBar />
    </div>
  );
};

export default Footer;