import "./App.css";

import Mainpage from "./pages/mainpage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Mainpage />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
