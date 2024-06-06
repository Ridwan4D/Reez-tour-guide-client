import { Helmet } from "react-helmet";
import Slider from "./Shared/Slider";
import TravelGuideSection from "./Shared/TravelGuideSection";

const Home = () => {
    return (
        <div className="space-y-20">
            <Helmet>
                <title>Home | Reez Tour Guide</title>
            </Helmet>
            {/* Slider */}
            <Slider/>
            {/* Travel guide section */}
            <TravelGuideSection/>


            <br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Home;