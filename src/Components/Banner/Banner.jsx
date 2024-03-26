const Banner = () => {
  return (
    <div className=" lg:px-16 xl:px-28 2xl:px-80 md:px-10 px-5 poppins-regular ">
      <div className=" md:flex items-center  mt-28  md:mb-16">
        <div>
          <h2 className=" lg:text-4xl md:text-3xl xl:text-4xl 2xl:text-6xl text-3xl font-bold text-center md:text-start md:leading-normal xl:leading-normal 2xl:leading-tight">
            Experience food <br />
            <span className=" text-[#f72d57]">Delivery</span> like no other
          </h2>
          <p className=" md:text-sm xl:text-lg 2xl:text-xl mt-8 lg:w-[500px] md:w-[300px] xl:w-[500px] 2xl:w-[700px]  w-[325px]  mx-auto md:text-start text-center">
            We deliver the food of your choice wherever, whenever. Select your
            food from only the top restaurants in the area, and get it in a
            flash. Download the app now to discover more.
          </p>
        </div>

        <img
          className=" lg:w-[57%] md:w-[58%]  xl:w-[60%] 2xl:w-[70%] w-[100%]"
          style={{
            transform: "rotate(60deg)",
          }}
          src="https://i.ibb.co/NnkP9tc/3e12cec40edb3a4670b7d04fc69a39e3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
