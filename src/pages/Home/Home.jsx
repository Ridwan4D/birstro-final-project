import SectionTitle from "../../components/SectionTitle";
import Featured from "./Featured";
import Banner from "./Banner";
import MenuCategory from "./MenuCategory";
import PopularMenu from "./PopularMenu";
import TestiMonials from "./TestiMonials";
import ChefRecomends from "./ChefRecomends";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <Banner />
      {/* menu swiper */}
      <div className="mb-20">
        <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}/>
        <MenuCategory />
      </div>
      {/* Popular menu section */}
      <PopularMenu/>
      {/* phone number */}
      <div className="flex items-center justify-center py-10 bg-black text-white mt-20">
        <h3 className="font-raleway text-5xl font-semibold">Call Us: 01567885468</h3>
      </div>
      {/* CHEF RECOMMENDS */}
      <ChefRecomends/>
      {/* featured section */}
      <Featured/>
      {/* TESTIMONIALS section */}
      <TestiMonials/>
    </div>
  );
};

export default Home;
