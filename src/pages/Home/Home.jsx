import SectionTitle from "../../components/SectionTitle";
import Featured from "../Featured";
import Banner from "./Banner";
import MenuCategory from "./MenuCategory";
import PopularMenu from "./PopularMenu";

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
      {/* featured section */}
      <Featured/>
    </div>
  );
};

export default Home;
