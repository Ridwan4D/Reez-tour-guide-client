import { useQuery } from "@tanstack/react-query";
import AddStoryForm from "../../components/AddStoryForm";
import StoryCard from "../../components/StoryCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const IfRoleUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stories = [], refetch } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stories?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      {
        <div className="p-1">
          <h3 className="text-xl md:text-3xl font-semibold text-black">
            Add New Story
          </h3>
          <AddStoryForm refetch={refetch} />
          <hr className="border border-dashed border-[#10b981]" />
          <h3 className="text-xl md:text-3xl font-semibold text-black">
            Story You have added
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 my-7">
            {stories.map((story, idx) => (
              <StoryCard key={idx} story={story}></StoryCard>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default IfRoleUser;
