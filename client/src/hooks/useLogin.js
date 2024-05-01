import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp, login } from "../slice/auth";

export default function useLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    name: "",
    password: "",
  });
  const onHandleFeilds = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const data = {...authData};
    if(isLogin){
        await dispatch(login(data))
    }else{
      await dispatch(SignUp(data));
    }
  };
  const changeForm = () => {
    setIsLogin(!isLogin);
  };
  return {
    isLogin,
    changeForm,
    onSubmit,
    onHandleFeilds,
  };
}
