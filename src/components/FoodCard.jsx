import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosCommon from "../hooks/useAxiosCommon";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosCommon = useAxiosCommon();

  const handleAddToCart = async (item) => {
    if (user && user.email) {
      try {
        const cartItem = {
          ...item,
          email: user?.email,
        };
        const { data } = await axiosCommon.post("/carts", cartItem);
        console.log(data);
       
        await alert("Added To Cart");
        await navigate('/cart')
      } catch (error) {
        alert(error.message);
      }
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure to?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            navigate("/login", { state: { from: location } });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    }
  };
  return (
    <div>
      <div className=" md:w-[350px] bg-[#F3F3F3] shadow">
        <figure className="relative">
          <img src={item?.image} alt="Shoes" />
          <p className="text-white bg-[#111827] w-[65px] top-2 right-2 absolute p-3">
            ${item?.price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold text-center">{item?.name}</h2>
          <p className="text-justify opacity-90">{item?.recipe}</p>
          <div className="card-actions mx-auto mt-4">
            <button
              onClick={() => handleAddToCart(item)}
              className=" px-4 py-2 bg-transparent border-b-[3px] border-[#BB8506] text-[#BB8506] rounded-lg uppercase pt-4 cursor-pointer hover:scale-95 duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
