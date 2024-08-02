import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/CM4vBg6/summer-offer.jpg" className="w-full max-h-[500px] h-[40vh] md:h-auto" />
        </div>
        <div>
          <img src="https://i.ibb.co/P6HjcKF/190807dipromobanner.jpg" className="w-full max-h-[500px] h-[40vh] md:h-auto" />
        </div>
        <div>
          <img src="https://i.ibb.co/YfrvXpk/images-3.jpg" className="w-full max-h-[500px] h-[40vh] md:h-auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
