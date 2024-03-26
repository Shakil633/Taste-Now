const GetTo = () => {
  return (
    <div className=" ">
      <h2 className=" mt-32 md:text-4xl text-2xl xl:text-4xl 2xl:text-6xl font-semibold">
        Get to know <span className=" text-[#f72d57]">us</span>
      </h2>

      <div className=" md:flex flex-row items-center mt-10 gap-10">
        <div>
          <img
            className=" md:w-[1270px] xl:w-[1370px] 2xl:w-[1770px] rounded-md"
            src="https://i.ibb.co/VJCDk7C/563a7e9845c2cce97bd789c83c7a57cf.jpg"
            alt=""
          />
        </div>

        <div>
          <h2 className=" md:text-4xl xl:text-4xl 2xl:text-6xl mt-10 text-2xl font-semibold md:leading-snug leading-snug xl:leading-snug 2xl:leading-tight">
            <span className=" text-[#f72d57]">Teamwork </span>is the key to{" "}
            <br /> our sucess
          </h2>

          <p className=" md:text-sm xl:text-lg 2xl:text-lg mt-3 text-[#6d6d6d]">
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetTo;
