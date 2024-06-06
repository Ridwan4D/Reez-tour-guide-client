import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePackage = () => {
  const axiosPublic = useAxiosPublic();
  const { data: packages = [],refetch } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const result = await axiosPublic.get("/packages");
      return result.data;
    },
  });
  return [packages,refetch];
};

export default usePackage;
