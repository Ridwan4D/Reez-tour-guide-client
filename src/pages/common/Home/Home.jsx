import { Helmet } from "react-helmet";
import Slider from "./Shared/Slider";
import TravelGuideSection from "./Shared/TravelGuideSection";
import TouristStorySection from "./Shared/TouristStorySection";

const Home = () => {
  return (
    <div className="space-y-20">
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

      {/* Tourist Story Section */}
      <TouristStorySection />
      <hr className="border border-dashed border-[#10b981] mt-5" />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
