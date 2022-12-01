import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Favorites from "./Pages/Favorites";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieDetails from "./Pages/MovieDetails";
function App() {
  return (
    <div className="w-full h-full bg-black/90">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<MovieDetails />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
