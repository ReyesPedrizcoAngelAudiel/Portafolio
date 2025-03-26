const RedesSociales = () => {
  return (
    <div id="RedesSociales" className="flex flex-row pl-3">
      <div className="relative">
        <div className="flex row w-75 p-1">
            <a href="https://www.linkedin.com/in/angelaudielreyespedrizco/" className="mr-4"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://github.com/ReyesPedrizcoAngelAudiel" className="mr-4"><ion-icon name="logo-github"></ion-icon></a>
            <a href="https://www.instagram.com/angel_audiel_reyes/" className=""><ion-icon name="logo-instagram"></ion-icon></a>
            <p className="ml-1"><ion-icon name="remove" className="rotate-90"></ion-icon></p>
            <p className="text-[10px] m-1">Sígueme en mis redes sociales</p>
        </div>
      </div>
    </div>
  );
};

export default RedesSociales;
