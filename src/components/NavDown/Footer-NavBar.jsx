const NavBar = () => {
  return (
    <div className="basis-6/8">
      <div className="pt-4 flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:gap-4">
        <div className="w-full md:w-16 lg:w-36 lg:ml-3 text-center">
          <p className="text-xs md:text-sm lg:text-base font-bold">
            Conocimiento :
          </p>
        </div>
        
        <a id="BotonNav" href="" className="w-5/6 md:w-36 lg:w-55">
          <p className="outline-2 rounded-2xl p-1 text-center">
            Habilidades Técnicas
          </p>
        </a>
        <a id="BotonNav" href="" className="w-5/6 md:w-28 lg:w-34">
          <p className="outline-2 rounded-2xl p-1 text-center">Educación</p>
        </a>
        <a id="BotonNav" href="" className="pb-5 w-5/6 md:w-36 md:pb-0 lg:w-40">
          <p className="outline-2 rounded-2xl p-1 text-center">Acerca de mí</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;