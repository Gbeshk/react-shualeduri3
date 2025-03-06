import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loginschema } from "../../__atoms/loginSchema/loginSchema";
import movie from "../../../assets/images/Movie.png";
function Login({ setLoginVisible, setSignUpVisible }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Loginschema) });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      setLoginVisible(false);
    } else {
      alert("Incorrect email or password");
    }
    reset();
  };
  return (
    <>
      <div className="flex justify-evenly items-center min-h-screen flex-col">
        <img src={movie} alt="" />
        <div className="max-w-[400px] w-full bg-[#161D2F] h-[373px] rounded-[20px] p-6">
          <h1 className="text-white font-[outfit] text-2xl  leading-none tracking-[-0.5px]">
            Login
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Email address"
                className="text-white w-auto focus:outline-none font-[outfit] text-sm font-normal leading-normal !mt-[40px] !ml-[16px]"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-[#FC4747] !mt-[40px] !mr-[30px] font-[outfit] text-xs font-normal leading-normal !ml-auto">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="max-w-[336px] w-full h-[1px] bg-[#5A698F] !mt-[17px]"></div>
            <div className="flex items-center">
              <input
                type="password"
                placeholder="Password"
                className="text-white focus:outline-none font-[outfit] text-sm font-normal leading-normal !mt-[24px] !ml-[16px]"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-[#FC4747] !mt-[40px] !mr-[30px] font-[outfit] text-xs font-normal leading-normal !ml-auto">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="max-w-[336px] w-full h-[1px] bg-[#5A698F] !mt-[17px]"></div>

            <button
              type="submit"
              className="max-w-[336px] !mt-[40px] cursor-pointer h-[48px] w-full text-[white] text-center font-[outfit] text-[15px] font-normal leading-normal flex-shrink-0 rounded-[6px] bg-[#FC4747]"
            >
              Login to your account
            </button>
          </form>
          <div className="flex justify-center">
            <p className=" !mt-[24px] text-white font-[outfit] text-[15px] font-normal leading-normal">
              Don’t have an account?
              <span
                onClick={() => {
                  setLoginVisible(false);
                  setSignUpVisible(true);
                }}
                className="!ml-[9px] cursor-pointer text-[#FC4747] font-outfit text-[15px] font-normal leading-normal"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
