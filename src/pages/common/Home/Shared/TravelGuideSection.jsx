import SectionTitle from "../../../../components/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomePackages from "./HomePackages";
import HomeGuides from "./HomeGuides";
import HomeOverview from "./HomeOverview";

const TravelGuideSection = () => {
  return (
    <div className="pb-5"
    >
      <SectionTitle
        heading={"Tourism and Travel Guide Section"}
        subHeading={"Explore Our Site"}
      />
      <Tabs defaultIndex={0} onSelect={() => { }}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>
        <TabPanel>
          <HomeOverview />
        </TabPanel>
        <TabPanel>
          <HomePackages />
        </TabPanel>
        <TabPanel>
          <HomeGuides />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TravelGuideSection;
