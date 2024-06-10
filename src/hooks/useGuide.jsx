import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGuide = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isGuide, isPending: isGuideLoading } = useQuery({
    queryKey: [user?.email, "isGuide"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/guide/${user.email}`);
    //   console.log(result.data);
      return result.data?.guide;
    },
  });
  return [isGuide, isGuideLoading];
};

export default useGuide;