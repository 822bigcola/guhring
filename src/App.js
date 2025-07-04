import "./App.css";

import Mainpage from "./pages/mainpage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterGuhring from "./views/footerGuhring.js";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Mainpage />
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
      <FooterGuhring />
    </div>
  );
}

export default App;
