import React from "react";
import { useNavigate } from "react-router-dom";
import AddNews from "../pages/addnews";

const AddNewsWrapper = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate hook
  return <AddNews navigate={navigate} />; // Truyền navigate như một prop cho AddNews
};

export default AddNewsWrapper;
