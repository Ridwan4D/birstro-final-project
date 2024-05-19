import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  // https://i.ibb.co/wgRtMJs/01.jpg
  // https://i.ibb.co/rM3Pkrh/02.jpg
  // https://i.ibb.co/CsXPdMM/03.png
  // https://i.ibb.co/LkCzXfx/04.jpg
  // https://i.ibb.co/Px2D71M/05.png
  // https://i.ibb.co/93p3cqg/06.png
  return (
    <Carousel>
      <div>
        <img src="https://i.ibb.co/wgRtMJs/01.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/rM3Pkrh/02.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/CsXPdMM/03.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/LkCzXfx/04.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/Px2D71M/05.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/93p3cqg/06.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
