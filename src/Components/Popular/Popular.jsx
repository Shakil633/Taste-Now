import { IoPizza } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { LiaHamburgerSolid } from "react-icons/lia";
import { TbSalad } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

import "swiper/css";

const Popular = () => {
  return (
    <div className=" ">
      <h2 className=" text-center md:text-4xl xl:text-4xl 2xl:text-6xl text-2xl font-semibold mt-5">
        Our Popular <span className=" text-[#f72d57]">Categories</span>
      </h2>
      <div className=" mt-16">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5">
          <div className=" flex items-center gap-1 justify-center bg-[#f72d57] px-6 py-4 text-white">
            <IoPizza className=" md:text-3xl text-3xl xl:text-4xl 2xl:text-6xl" />
            <h4 className="md:text-xl text-xl xl:text-xl 2xl:text-4xl">Pizzas</h4>
          </div>
          <div className=" flex items-center justify-center gap-1 bg-[#ffffff] text-[#f72d57] px-6 py-4">
            <LiaHamburgerSolid className="md:text-3xl text-3xl xl:text-5xl 2xl:text-6xl" />
            <h4 className="md:text-xl text-xl xl:text-xl 2xl:text-4xl">Burgers</h4>
          </div>
          <div className=" flex items-center gap-1 justify-center bg-[#ffffff] text-[#f72d57] px-6 py-4">
            <TbSalad className=" md:text-3xl text-3xl xl:text-5xl 2xl:text-6xl" />
            <h4 className="md:text-xl text-xl xl:text-xl 2xl:text-4xl">Salads</h4>
          </div>
          <div className=" flex items-center gap-1 justify-center bg-[#ffffff] text-[#f72d57] px-6 py-4">
            <img
              className="md:w-[30px] w-[30px] xl:w-[50px] 2xl:w-[60px]"
              src="https://i.ibb.co/6W8YBGY/Group-3169.png"
              alt=""
            />
            <h4 className="md:text-xl text-xl xl:text-xl 2xl:text-4xl">Combos</h4>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            325: {
              slidesPerView: 1,
            },
            424: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card bg-base-100 md:h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-xl rounded-md relative">
              <div className="flex flex-col h-full">
                <img
                  className="absolute top-0 right-0  md:w-[28px] xl:w-[40px] 2xl:w-[50px] md:h-[40px] xl:h-[50px] 2xl:h-[60px] mr-5 "
                  src="https://i.ibb.co/QNsbR1W/Group-3174-1.png"
                  alt=""
                />

                <figure className="px-10 pt-10">
                  <img
                    className="w-[260px] h-[90px]"
                    src="https://i.ibb.co/xMQspmf/78102a3fca073cdc5280ec40cd9d9b4a.png"
                    alt=""
                  />
                </figure>
                <div className="card-body flex-1">
                  <div className="text-center">
                    <h2 className="font-medium md:text-lg xl:text-2xl 2xl:text-2xl">Pepperoni Pizza</h2>
                    <p className="text-[#646464] py-2 md:text-lg xl:text-xl 2xl:text-2xl">Di napoles</p>
                    <p className="md:text-lg xl:text-xl 2xl:text-2xl">$11,99</p>
                  </div>
                  <div className="card-actions justify-center mt-5">
                    <button className="py-3 px-8 bg-[#f72d57] text-white rounded-md">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 md:h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-xl rounded-md">
              <img
                className="absolute top-0 right-0 md:w-[28px] xl:w-[40px] 2xl:w-[50px] md:h-[40px] xl:h-[50px] 2xl:h-[60px] mr-5 "
                src="https://i.ibb.co/QNsbR1W/Group-3174-1.png"
                alt=""
              />
              <figure className="px-10 pt-10">
                <img
                  className=" w-[260px] h-[90px] "
                  src="https://i.ibb.co/yV57JHm/d7d36b3913d52bd6fdb31e383231f954.png"
                  alt=""
                />
              </figure>
              <div className="card-body">
                <div className=" text-center">
                  <h2 className=" font-medium md:text-lg xl:text-2xl 2xl:text-2xl">Pepperoni Pizza</h2>
                  <p className=" text-[#646464] py-2 md:text-lg xl:text-xl 2xl:text-2xl">Di napoles</p>
                  <p className="md:text-lg xl:text-xl 2xl:text-2xl">$13,99</p>
                </div>

                <div className="card-actions justify-center mt-5">
                  <button className="py-3 px-8 bg-[#f72d57] text-white rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 md:h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-xl rounded-md">
              <img
                className="absolute top-0 right-0  md:w-[28px] xl:w-[40px] 2xl:w-[50px] md:h-[40px] xl:h-[50px] 2xl:h-[60px] mr-5 "
                src="https://i.ibb.co/HprLC3V/Group-3174-4.png"
                alt=""
              />
              <figure className="px-10 pt-10">
                <img
                  className="w-[200px] h-[90px]"
                  src="https://i.ibb.co/BVxfPdd/0cd81f28f3c60a16d38025fb3172c046.png"
                  alt=""
                />
              </figure>
              <div className="card-body">
                <div className=" text-center">
                  <h2 className=" font-medium md:text-lg xl:text-2xl 2xl:text-2xl">Vegetarian Pizza</h2>
                  <p className=" text-[#646464] py-2 md:text-lg xl:text-xl 2xl:text-2xl">Cosa di Mario</p>
                  <p className="md:text-lg xl:text-xl 2xl:text-2xl">$12,99</p>
                </div>

                <div className="card-actions justify-center mt-5">
                  <button className="py-3 px-8 bg-[#f72d57] text-white rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 md:h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-xl rounded-md">
              <img
                className="absolute top-0 right-0  md:w-[28px] xl:w-[40px] 2xl:w-[50px] md:h-[40px] xl:h-[50px] 2xl:h-[60px] mr-5 "
                src="https://i.ibb.co/0Xxdtg5/Group-3174-6.png"
                alt=""
              />
              <figure className="px-10 pt-10">
                <img
                  className="w-[200px] h-[90px]"
                  src="https://i.ibb.co/mF2wSZF/19053cd71d7c3be5d41cee45b5cd291e.png"
                  alt=""
                />
              </figure>
              <div className="card-body">
                <div className=" text-center">
                  <h2 className=" font-medium md:text-lg xl:text-2xl 2xl:text-2xl">Mediterranean Pizza</h2>
                  <p className=" text-[#646464] py-2 md:text-lg xl:text-xl 2xl:text-2xl">Milano</p>
                  <p className="md:text-lg xl:text-xl 2xl:text-2xl">$15,99</p>
                </div>

                <div className="card-actions justify-center mt-5">
                  <button className="py-3 px-8 bg-[#f72d57] text-white rounded-md">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" flex justify-center mt-10">
        <div className=" flex gap-4 items-center">
          <span>
            <FaChevronLeft className=" text-3xl text-[#f72d57]" />
          </span>
          <div className=" w-4 h-4 bg-[#f72d57] rounded-full"></div>
          <div className=" w-4 h-4 bg-[#d9d9d9] rounded-full"></div>
          <div className=" w-4 h-4 bg-[#d9d9d9] rounded-full"></div>
          <div className=" w-4 h-4 bg-[#d9d9d9] rounded-full"></div>
          <span>
            <FaChevronRight className=" text-3xl text-[#f72d57]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Popular;
