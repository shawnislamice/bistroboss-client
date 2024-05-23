import Swal from "sweetalert2";
import useAxiosCommon from "../hooks/useAxiosCommon";
import useCart from "../hooks/useCart";
import SharedTitleOfSection from "../shared/SharedTitleOfSection";

const Carts = () => {
  const [cart] = useCart();
  const axiosCommon = useAxiosCommon();
  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const { data } = await axiosCommon.delete(`/carts/${id}`);
            console.log(data);
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } catch (error) {
            alert(error.message);
          }
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
  };
  return (
    <div className="b">
      <SharedTitleOfSection
        heading={"--My Cart--"}
        SubHeading={"wanna Add more?"}
      ></SharedTitleOfSection>
      <div className="my-5 md:my-10 container mx-auto max-w-3xl bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold font-cinzel text-3xl uppercase">
            {" "}
            Total Items: {cart.length}
          </h2>
          <h2 className="font-bold font-cinzel text-2xl uppercase">
            {" "}
            Total Price: ${totalPrice}
          </h2>
          <button className="btn btn-secondary">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Index</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cart.map((cartItem, index) => (
                <tr key={cartItem?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center  gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cartItem?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{cartItem?.name}</td>
                  <td className="font-semibold">${cartItem?.price}</td>
                  <th className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleDelete(cartItem?._id)}
                      className="btn btn-secondary btn-xs"
                    >
                      Delete
                    </button>
                    <button className="btn btn-primary btn-xs">Update</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Carts;
