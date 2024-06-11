import { Helmet } from "react-helmet";
import SocialLogin from "../../components/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const {loginUser} = useAuth();
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.email,data.password)

    loginUser(data.email,data.password)
    .then(() => {
      // console.log(result.user);
      toast.success("Logged In");
      setTimeout(() => {
        navigate(location?.state ? location.state : "/");
      }, 1000);
    })
    .catch((error) => {
      // console.log(error.message);
      if (error.message == "Firebase: Error (auth/invalid-credential).") {
        setLoginErr("Invalid User or Password");
      }
    })
  };
  return (
    <div>
      <Helmet>
        <title>Login | Reez Tour Guide</title>
      </Helmet>
      {/* <!-- component --> */}
      <div className="flex h-screen">
        {/* <!-- Left Pane --> */}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <img src="https://i.ibb.co/Bz0ZbM8/login.jpg" alt="" />
          </div>
        </div>
        {/* <!-- Right Pane --> */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-4xl font-semibold mb-6 text-black text-center">
              Login Here
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              Welcome Back To Your Place
              {/* Join to Our Community with all time access and free{" "} */}
            </h1>
            {/* .......................... social login component is here   ................................*/}
            <SocialLogin />
            {/* .......................... social login component is here   ................................*/}
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>or with email</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* <!-- Your form elements go here --> */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("email", { required: true })}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                {errors.email && <span className="text-sm text-red-600 font-semibold">Email is required</span>}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: true })}
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                {errors.password && <span className="text-sm text-red-600 font-semibold">Password is required</span>}
              </div>
              {loginErr && <p className="text-sm text-red-600">{loginErr}</p>}
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                No Account Yet?{" "}
                <Link to="/register" className="text-black hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
