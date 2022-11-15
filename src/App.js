import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/Pages/Home";
function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
