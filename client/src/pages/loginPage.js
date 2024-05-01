import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React from "react";
import useLogin from "../hooks/useLogin";

function LoginPage() {
  const { isLogin, changeForm,onSubmit,onHandleFeilds } = useLogin();
  return (
    <div className=" bg-white w-full h-screen flex justify-center items-center">
      <div className="flex flex-col flex-wrap bg-white rounded p-5 min-w-64 w-1/2 ">
        <div className="md:w-full lg:w-1/4 p-3 min-w-64">
          <label className="mb-3 block"> Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter Name"
            name="name"
            onChange={onHandleFeilds}
          />
        </div>
        <div className="md:w-full lg:w-1/4 p-3 min-w-64">
          <label className="mb-3 block">Password</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter Password"
            name="password"
            onChange={onHandleFeilds}

          />
        </div>

        <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
          <button className="bg-purple-500 text-white py-2 px-4 w-full rounded" onClick={onSubmit}>
          {isLogin?"Login":"Register"}
          </button>
        </div>
        <span>{isLogin?<p>don't have an account..?</p>:<p>Already have an account..?</p>}</span>
        <button className=" bg-gray-600 text-white py-2 px-4 w-40 rounded" onClick={changeForm}>
          {isLogin?"Register":"Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
