import { Link } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle";
import StoryCard from "../../../../components/StoryCard";
import useStories from "../../../../hooks/useStories";

const TouristStorySection = () => {
  const [stories] = useStories();

  return (
    <div>
      <SectionTitle
        heading="Tourist Story Section"
        subHeading="Read The Story of Our Client"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 my-7">
        {stories.slice(0, 3).map((story, idx) => (
          <StoryCard key={idx} story={story} />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link
          to="/allStories"
          className="btn w-full md:btn-wide bg-slate-400 text-white font-bold btn-ghost"
        >
          All Stories
        </Link>
      </div>
    </div>
  );
};

export default TouristStorySection;
