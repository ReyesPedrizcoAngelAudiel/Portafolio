const BtnCV = () => {
  return (
    <div className="basis-2/7 rounded-bl-2xl p-2 md:p-3 bg-[#242424]">
      <div className="flex justify-center outline-2 rounded-2xl hover:scale-105 hover:text-sky-400 duration-300">
        <a
          className="text-[10px] md:text-[12px] lg:text-[20px]"
          href="#SendCV"
        >
          <p className="flex flex-row items-center m-1 md:m-0 md:gap-5">
            Descarga CV
            <p className="hidden md:flex md:p-1">
              <ion-icon name="cloud-download-outline" size="large"></ion-icon>
            </p>
          </p>
        </a>
      </div>
    </div>
  );
};

export default BtnCV;
