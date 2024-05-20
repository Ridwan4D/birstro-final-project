import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import MenuItemCard from "../../components/MenuItemCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      const popularItems = res.data.filter(
        (item) => item.category === "popular"
      );
      console.log(popularItems);
      setMenu(popularItems);
    });
  }, []);
  return (
    <section>
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
        {menu.map((item, idx) => (
          <MenuItemCard key={idx} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="px-5 border-b-2 hover:bg-black/5 transition-all border-black rounded-md">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
