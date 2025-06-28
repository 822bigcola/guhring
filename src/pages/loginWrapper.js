import React from "react";
import { useNavigate } from "react-router-dom";
import Loginpage from "./login";

const LoginWrapper = (props) => {
  const navigate = useNavigate(); // Sử dụng useNavigate hook
  return (
    <Loginpage navigate={navigate} updateUsername={props.updateUsername} />
  );
};
export default LoginWrapper;
