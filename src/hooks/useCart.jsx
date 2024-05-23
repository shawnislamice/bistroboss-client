import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get(`/carts?email=${user?.email}`);
        return data;
      } catch (error) {
        alert(error.message);
      }
    },
    queryKey: ["cartt", user?.email],
  });
  refetch();
  return [cart, refetch];
};

export default useCart;
