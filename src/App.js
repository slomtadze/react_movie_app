import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Favorites from "./Pages/Favorites";
function App() {
  return (
    <div className="w-full h-full bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<SignUp />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
