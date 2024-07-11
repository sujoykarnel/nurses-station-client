import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { register } from "swiper/element";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="md:w-1/4 p-8 border-2 rounded-2xl bg-slate-300 bg-opacity-60">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            className="input input-bordered w-full max-w-xs"
            type="email"
            placeholder="Email"
            name="email"
            required
            {...register("email")}
          />
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="Password"
            name="password"
            required
            {...register("password")}
          />
          <input className="btn btn-primary" type="submit" value="Login" />
          <p>
            Are you new?{" "}
            <span className="text-blue-500">
              <Link to="/signUp">Click Here.</Link>
            </span>
          </p>
          <div className="divider">OR</div>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
