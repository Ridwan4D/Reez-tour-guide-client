import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [],refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const result = await axiosSecure.get("/users");
        return result.data;
      },
    });
    return [users,refetch];
};

export default useUser;