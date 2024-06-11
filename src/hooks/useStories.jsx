import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStories = () => {
  const axiosPublic = useAxiosPublic();
  const { data: stories = [] } = useQuery({
    queryKey: ["storiesInHome"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allStories");
      return res.data;
    },
  });
  return [stories];
};

export default useStories;
