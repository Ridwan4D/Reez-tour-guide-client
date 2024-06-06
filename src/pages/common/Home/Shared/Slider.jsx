import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/7kYVCQg/japan.webp" />
        </div>
        <div>
          <img src="https://i.ibb.co/P6HjcKF/190807dipromobanner.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/YfrvXpk/images-3.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
