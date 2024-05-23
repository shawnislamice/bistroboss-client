import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const axiosSecure = useAxiosSecure();
  const { data: myItems=[] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["my-data"],
  });
  const getData = async () => {
    const { data } = axiosSecure.get("/menus");
    return data;
  };
  
  return {myItems};
};

export default useMenu;
