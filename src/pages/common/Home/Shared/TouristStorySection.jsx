import { Link } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle";
import StoryCard from "../../../../components/StoryCard";
import useStories from "../../../../hooks/useStories";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../utils/varient";

const TouristStorySection = () => {
  const [stories] = useStories();
  // console.log(stories);
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <SectionTitle
        heading="Tourist Story Section"
        subHeading="Read The Story of Our Client"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 my-7">
        {stories.slice(0, 3).map((story, idx) => (
          <StoryCard key={idx} story={story}></StoryCard>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link
          to="/allStories"
          className="btn btn-wide bg-[#10b981] text-white font-bold btn-ghost"
        >
          All Stories
        </Link>
      </div>
    </motion.div>
  );
};

export default TouristStorySection;
