import { useForm } from "react-hook-form";
import loginBanner from "../assets/others/authentication1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, setUser, loading, updateUserProfile } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      const userInfo = {
        name: name,
        email: email,
      };
      await createUser(email, password);
      const { data } = await axiosPublic.post("/users", userInfo);
      if (data.insertedId) {
        await updateUserProfile(name, data.photoURL || "Unknown");
        reset();
        navigate("/");
        alert(`User Created Successfully!`);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className=" bg-[url('/authentication.png')] md:min-h-screen flex felx-col justify-center items-center ">
      <div className="flex md:flex-row-reverse flex-col shadow-xl p-10 max-w-screen-xl mx-auto justify-center items-center">
        <div className="md:basis-[48%]">
          <img src={loginBanner} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:basis-[48%] p-5 space-y-3"
        >
          <div>
            <label className="block text-sm font-bold text-gray-500 ">
              Name
            </label>

            <input
              type="text"
              placeholder="Type Name"
              name="name"
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   dark:text-gray-300 dark:focus:border-blue-300"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600 text-xs font-medium">
                Feild is required
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-500 ">
              Email
            </label>

            <input
              type="email"
              placeholder="Type Email"
              name="email"
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   dark:text-gray-300 dark:focus:border-blue-300"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs font-medium">
                Feild is required
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-500 ">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Type Your Password"
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   dark:text-gray-300 dark:focus:border-blue-300"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 15,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
                  message:
                    "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character and be at least 8 characters long",
                },
              })}
            />
            {errors.password?.type == "required" && (
              <span className="text-red-600 text-xs font-medium">
                Feild is required
              </span>
            )}
            {errors.password?.type == "minLength" && (
              <span className="text-red-600 text-xs font-medium">
                Minimum password was 6 characters
              </span>
            )}
            {errors.password?.type == "maxLength" && (
              <span className="text-red-600 text-xs font-medium">
                Maximum password was 15 characters
              </span>
            )}
            {errors.password?.type == "pattern" && (
              <span className="text-red-600 text-xs font-medium">
                {errors.password.message}
              </span>
            )}
          </div>

          <button className="bg-[#D1A054B2] disabled:cursor-not-allowed btn text-white w-full cursor-pointer">
            Sign In
          </button>
          <div>
            <p className="text-[#D1A054] text-center md:py-4">
              New here?{" "}
              <Link to="/registration" className="font-bold">
                Create a New Account
              </Link>
            </p>
            <p className="text-center font-medium">Or sign in with</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
