import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const handleOnSubmit = async (data) => {
    console.log(data);
    const a = await loginUser(data, dispatch, navigate);
    console.log(a);
  };

  return (
    <div className="page-container">
      <div className="flex gap-x-20">
        <div className=" mt-60">
          <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/293791365_649899559426320_6480368660795726920_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SOmawXs48fUAX-x6YmM&_nc_ht=scontent.fhan15-1.fna&oh=03_AVLyfep3y7oLGHJgkIxRQfPo3cR3LxOm1a4FnmlurJZgtg&oe=631F930B"></img>
        </div>
        <div className="flex flex-col items-center justify-center w-[900px]  h-screen select-none">
          <div className="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-cyan-600">
            <div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-cyan-600 shadow-2xl p-6 rounded-full text-white">
              Đăng Nhập
            </div>
            <div className="mt-10">
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="relative w-full mb-3">
                  <input
                    type="username"
                    className="border-0 p-4 transiton-all placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="User Name"
                    {...register("username")}
                  />
                  <small className="p-2 text-red-500">* User Name</small>
                </div>
                <div className="relative w-full mb-3">
                  <input
                    type="password"
                    className="border-0 p-4 transition-all placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <small className="p-2 text-red-500">* Password</small>
                </div>
                <div className="text-center mt-6">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    value="Đăng Nhập"
                    className="p-3 rounded-lg bg-cyan-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500"
                  />
                </div>
                <div className="flex flex-wrap mt-6"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
