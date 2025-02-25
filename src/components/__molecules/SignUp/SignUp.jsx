import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../__atoms/SignUpSchema/SighUpSchema";
function SignUp({ setLoginVisible, setSignUpVisible }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });

  const onSubmit = (data) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    alert("SUCCES");
    reset();
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[400px] bg-[#161D2F] h-[418px] rounded-[20px] p-6">
          <h1 className="text-white font-[outfit] text-2xl font-normal leading-none tracking-[-0.5px]">
            Sign Up
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

            <div className="flex items-center">
              <input
                type="password"
                placeholder="Repeat password"
                className="text-white focus:outline-none font-[outfit] text-sm font-normal leading-normal !mt-[24px] !ml-[16px]"
                {...register("repeatPassword")}
              />
              {errors.repeatPassword && (
                <span className="text-[#FC4747] !mt-[40px] !mr-[30px] font-[outfit] text-xs font-normal leading-normal !ml-auto">
                  {errors.repeatPassword.message}
                </span>
              )}
            </div>

            <div className="max-w-[336px] w-full h-[1px] bg-[#5A698F] !mt-[17px]"></div>

            <button
              type="submit"
              className="max-w-[336px] !mt-[40px] cursor-pointer h-[48px] w-full text-[white] text-center font-[outfit] text-[15px] font-normal leading-normal flex-shrink-0 rounded-[6px] bg-[#FC4747]"
            >
              Register
            </button>
          </form>

          <p className="!ml-[60px] !mt-[24px] text-white font-[outfit] text-[15px] font-normal leading-normal">
            Already have an account?
            <span
              onClick={() => {
                setLoginVisible(true);
                setSignUpVisible(false);
              }}
              className="!ml-[9px] cursor-pointer text-[#FC4747] font-outfit text-[15px] font-normal leading-normal"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
