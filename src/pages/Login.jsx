import { useContext, useEffect, useState } from "react";
import loginBanner from "../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signIn(email, password);
      await navigate(location?.state?.from?.pathname || "/");
      Swal.fire({
        title: "Login Successful",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="bg-[url('/authentication.png')] md:min-h-screen flex items-center">
      <div className='container flex md:flex-row flex-col justify-center items-center mx-auto max-w-6xl shadow-xl bg-[url("/authentication.png")] md:p-10 p-4'>
        <div className="md:basis-[48%]">
          <img src={loginBanner} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="md:basis-[48%] p-5 space-y-3">
          <div>
            <label className="block text-sm font-bold text-gray-500 ">
              Email
            </label>

            <input
              type="email"
              placeholder="Type Name"
              name="email"
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   dark:text-gray-300 dark:focus:border-blue-300"
            />
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
            />
          </div>
          <div className="">
            <LoadCanvasTemplate />
            <input
              type="text"
              placeholder="Type Captcha"
              onBlur={handleValidateCaptcha}
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>

          <button
            disabled={disabled}
            className="bg-[#D1A054B2] disabled:cursor-not-allowed btn text-white w-full cursor-pointer"
          >
            Sign In
          </button>
          <div>
            <p className="text-[#D1A054] text-center md:py-4">
              New here?{" "}
              <Link to="/registration" className="font-bold">
                Create a New Account
              </Link>
            </p>
            <div>
              <p className="text-center font-medium">Or sign in with</p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
