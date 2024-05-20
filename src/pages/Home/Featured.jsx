import SectionTitle from "../../components/SectionTitle";

const Featured = () => {
  return (
    <section className="mt-20 pt-7 text-white bg-fixed bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://i.ibb.co/HpXsFZz/featured.jpg')] bg-cover bg-center">
      <SectionTitle heading={"FEATURED ITEM"} subHeading={"Check it out"} />
      <div className="flex items-center space-x-10 md:py-20">
        <div>
          <img className="w-1/2 float-end" src="https://i.ibb.co/HpXsFZz/featured.jpg" alt="" />
        </div>
        <div>
          <p className="text-2xl">March 20, 2023</p>
          <p className="text-2xl">WHERE CAN I GET SOME?</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="px-5 border-b-2 hover:bg-white/30 border-white rounded-md">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
