import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
    const axiosPublic = useAxiosPublic();
  const { data: packages = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosPublic.get("/");
      return result.data;
    },
  });
  return [packages,refetch];
};

export default useUsers;