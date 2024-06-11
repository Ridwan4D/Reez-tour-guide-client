import StoryCard from "../../components/StoryCard";
import useStories from "../../hooks/useStories";

const AllStoriesPage = () => {
    const [stories] = useStories();
    return (
        <div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center border-b-2 border-[#10b981] pb-2">
        All Story of{" "}
        <span className="text-[#10b981]">Reez Tour Guide Clients</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:mb-20">
        {
            stories.map((story,idx)=> <StoryCard key={idx} story={story}></StoryCard>)
        }
      </div>
    </div>
    );
};

export default AllStoriesPage;