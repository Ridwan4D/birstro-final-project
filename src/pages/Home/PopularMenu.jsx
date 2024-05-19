import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";
import MenuItemCard from "../../components/MenuItemCard";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        axios.get('menu.json')
        .then(res => {
            const popularItems = res.data.filter(item => item.category === 'popular')
            console.log(popularItems);
            setMenu(popularItems)
        })
    },[])
  return (
    <section>
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
            {
                menu.map((item,idx)=> <MenuItemCard key={idx} item={item}/>)
            }
        </div>
    </section>
  );
};

export default PopularMenu;
