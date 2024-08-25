import { Link } from "react-router-dom";
import { Button } from "../components";

const Login = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-24 flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col gap-5 max-sm:gap-3 items-center justify-center max-sm:px-5">
        <h2 className="text-5xl text-center mb-5 font-thin max-md:text-4xl max-sm:text-3xl max-[450px]:text-xl max-[450px]:font-normal">
          Welcome Back! Login here:
        </h2>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Your email</label>
            <input
              type="email"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter email address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Your password</label>
            <input
              type="password"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter password"
            />
          </div>
        </div>
        <Button text="Login" mode="brown" />
        <Link
          to="/register"
          className="text-xl max-md:text-lg max-[450px]:text-sm"
        >
          Don’t have an account? <span className="text-secondaryBrown">Register now</span>.
        </Link>
      </div>
    </div>
  );
};
export default Login;
