import SectionTitle from "../../../../components/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomePackages from "./HomePackages";
import HomeGuides from "./HomeGuides";

const TravelGuideSection = () => {
  return (
    <div>
      <SectionTitle
        heading={"Tourism and Travel Guide Section"}
        subHeading={"Explore Our Site"}
      />
      <Tabs defaultIndex={1} onSelect={() => {}}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>
        <TabPanel>
          <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Discover Your Next Adventure with{" "}
                  <span className="text-[#10b981]">Reez Tour Guide</span>
                </h2>
                <p className="mb-4">
                  At{" "}
                  <span className="text-[#10b981] font-semibold">
                    Reez Tour Guide
                  </span>
                  , we specialize in crafting unforgettable tour experiences
                  that cater to every type of traveler. Whether you are seeking
                  thrilling adventures, cultural immersion, or serene escapes,
                  our expert guides and carefully curated itineraries ensure you
                  have a journey like no other.
                </p>
                <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Why Choose Us?
                </h2>
                <ul className="text-base list-disc">
                  <li>
                    <span className="font-medium">
                      Personalized Experiences:
                    </span>{" "}
                    We tailor each tour to match your interests and preferences,
                    ensuring a unique and memorable adventure.
                  </li>
                  <li>
                    <span className="font-medium">Expert Guides:</span> Our
                    knowledgeable and friendly guides are passionate about
                    sharing the hidden gems and rich history of each
                    destination.
                  </li>
                  <li>
                    <span className="font-medium">Unique Destinations:</span>
                    From well-known landmarks to off-the-beaten-path treasures,
                    our tours offer something for everyone.
                  </li>
                </ul>
                <p className="text-black font-medium md:my-6">
                  Join us to explore breathtaking landscapes, vibrant cultures,
                  and everything in between. Let{" "}
                  <span className="text-[#10b981]">Reez Tour Guide</span> be
                  your trusted companion on your next travel adventure.{" "}
                </p>
                <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Ready to Start Your Journey?
                </h2>
                <ul className="text-base list-disc font-semibold text-blue-500">
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">See Our Blogs</a>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg"
                  src="https://i.ibb.co/QkY75gC/free-city-tour-nw-lp.png"
                  alt="offer content 1"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="https://i.ibb.co/JrGdc9G/europamundo-offer-2.jpg"
                  alt="offer content 2"
                />
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <HomePackages/>
        </TabPanel>
        <TabPanel>
          <HomeGuides/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TravelGuideSection;
