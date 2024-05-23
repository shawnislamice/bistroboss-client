import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin,isPending:isAdminLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/admin/${user?.email}`);
      return data?.admin;
    },
    queryKey: ["userverifyadmin", user?.email],
  });
  return [isAdmin,isAdminLoading];
};

export default useAdmin;
