import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default Routess;
