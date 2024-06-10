import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGuides = () => {
    const axiosSecure = useAxiosSecure();
    const { data: guides = [] } = useQuery({
        queryKey: ["guides"],
        queryFn: async () => {
          const result = await axiosSecure.get(`/guides?role=guide`);
          return result.data;
        },
      });
    return [guides];
};

export default useGuides;