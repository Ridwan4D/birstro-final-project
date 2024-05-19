import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MenuCategory = () => {
  // https://i.ibb.co/bRkkG8f/slide1.jpg
  // https://i.ibb.co/g6FyqMX/slide2.jpg
  // https://i.ibb.co/pnPTXm7/slide3.jpg
  // https://i.ibb.co/zV20SJk/slide4.jpg
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://i.ibb.co/bRkkG8f/slide1.jpg" alt="" />
        <h3 className="text-4xl text-center -mt-10 text-white uppercase">
          Salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/g6FyqMX/slide2.jpg" alt="" />
        <h3 className="text-4xl text-center -mt-10 text-white uppercase">
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/pnPTXm7/slide3.jpg" alt="" />
        <h3 className="text-4xl text-center -mt-10 text-white uppercase">
          soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/zV20SJk/slide4.jpg" alt="" />
        <h3 className="text-4xl text-center -mt-10 text-white uppercase">
          desserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/bRkkG8f/slide1.jpg" alt="" />
        <h3 className="text-4xl text-center -mt-10 text-white uppercase">
          Salads
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default MenuCategory;
