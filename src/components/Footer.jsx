const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  // console.log(year);
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row row-gap-6">
          <div className="bg-[#1F2937] flex-1 flex flex-col md:justify-center md:items-center p-5">
            <h3 className="text-2xl font-medium tracking-wide text-white uppercase">
              Company
            </h3>

            <div className="mt-6 space-y-1 lg:max-w-sm text-white md:text-center">
             <p>Address: Wasa,LalKhan Bazar, Chattogram</p>
             <p>Contact: 01567885468</p>
             <p>Mon - Fri: 8:00 - 22:00</p>
             <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="bg-[#111827] flex-1 flex flex-col md:justify-center md:items-center p-5">
            <span className="text-3xl font-medium tracking-wide text-white">
              Social
            </span>
            <p className="mt-4 text-sm text-white">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="text-center bg-black py-8 lg:flex-row">
          <p className="text-sm md:text-xl text-white">
            © Copyright {year} The Reez Family. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
