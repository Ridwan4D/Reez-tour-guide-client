import { Helmet } from "react-helmet";
import Slider from "./Shared/Slider";
import TravelGuideSection from "./Shared/TravelGuideSection";
import TouristStorySection from "./Shared/TouristStorySection";
import TourTypeSection from "./TourTypeSection";

const Home = () => {
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Home | Reez Tour Guide</title>
      </Helmet>
      {/* Slider */}
      <Slider />
      <hr className="border border-dashed border-[#10b981] mt-5" />
      {/* Travel guide section */}
      <TravelGuideSection />
      <hr className="border border-dashed border-[#10b981] mt-5" />
      {/* tour type section */}
      <TourTypeSection />
      {/* Tourist Story Section */}
      <TouristStorySection />
    </div>
  );
};

export default Home;
