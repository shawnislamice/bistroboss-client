import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const handleSocialLogin = async () => {
    try {
      await signInWithGoogle().then();
      alert("Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="my-3">
      <button onClick={handleSocialLogin} className="block btn mx-auto">
        <FaGoogle size={30}></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
