import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const TestiMonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("reviews.json").then((res) => {
      console.log(res.data);
      setReviews(res.data);
    });
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="text-center space-y-6 text-[#444444]">
              <Rating style={{ maxWidth: 180 }} value={3} readOnly className="mx-auto" />
              <p className="md:px-20">{review.details}</p>
              <p className="text-[#CD9003] text-3xl">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestiMonials;