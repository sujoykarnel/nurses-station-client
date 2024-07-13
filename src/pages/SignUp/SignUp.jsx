import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import logoImg from "../../assets/logo/nurses-station-logo-2.png";
import useNotify from "../../hooks/useNotify";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser } = useAuth();

  const { notify } = useNotify();
  const onSubmit = (data) => {
    const { name, email, password, rePassword } = data;

    // verify re type password
    if (password !== rePassword) {
      notify({
        title: "Waring",
        message: "Password not matched!",
        type: "warning",
      });
      return;
    }

    // create new user
    createUser(email, password).then((result) => {
      if (result.user) {
        // @todo:  Update user Name
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>SignUp | Nurses Station</title>
      </Helmet>
      <div className="flex min-h-screen items-center justify-center">
        <div className=" md:w-1/2 lg:w-2/5 p-4 border-2 rounded-2xl bg-slate-300 bg-opacity-60">
          <div className="flex justify-center pb-4">
            <img className="w-1/4" src={logoImg} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-4"
          >
            <div className="grid md:grid-cols-2 justify-items-center gap-4 w-full ">
              <input
                className="input input-bordered w-full max-w-xs"
                type="name"
                placeholder="Name"
                name="name"
                required
                {...register("name")}
              />
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
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                required
                {...register("password")}
              />
              <input
                className="input input-bordered w-full max-w-xs"
                type="password"
                placeholder="Re-Password"
                name="rePassword"
                required
                {...register("rePassword")}
              />
            </div>
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="Sign Up"
            />
            <p>
              Have an account ?{" "}
              <span className="text-blue-500 hover:underline">
                <Link to="/login">Login</Link>
              </span>{" "}
              here.
            </p>
          </form>
          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default SignUp;
