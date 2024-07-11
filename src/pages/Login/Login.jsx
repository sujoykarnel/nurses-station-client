import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { register } from "swiper/element";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import logoImg from "../../assets/logo/nurses-station-logo-2.png";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Login | Nurses Station</title>
      </Helmet>

      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="md:w-1/4 p-8 border-2 rounded-2xl bg-slate-300 bg-opacity-60">
          <div className="flex justify-center pb-4">
            <img className="w-1/2" src={logoImg} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-4"
          >
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
            
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Login"
            />
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
    </>
  );
};

export default Login;
