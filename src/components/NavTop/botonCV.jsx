const BtnCV = () => {
  return (
    <div className="basis-2/7 rounded-bl-2xl p-3 bg-[#242424]">
      <div className="flex justify-center outline-2 rounded-2xl hover:text-sky-400 duration-300">
        <a
          className="text-[10px] md:text-[12px] lg:text-[20px]"
          href="#SendCV"
        >
          <p className="flex flex-row items-center md:gap-5">
            Descarga CV
            <ion-icon name="download-outline"></ion-icon>
          </p>
        </a>
      </div>
    </div>
  );
};

export default BtnCV;
