import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Sell from "./pages/Sell.js";
import Car from "./pages/Car.js";

function App() {
  return (
    <div>
      <Router>
        <div className="bg-[#fff] border-b-2 h-[34px] relative border-[#e8e8e8]">
          <nav className="m-auto flex flex-row justify-between width[1200px] relative">
            <ul className="list-image-none flex w-full m-0 p-0">
              <li className="grow shrink-0">
                <Link
                  to="/"
                  className="justify-center align-center flex text-xl"
                >
                  Home
                </Link>
              </li>
              <li className="grow shrink-0">
                <Link
                  to="/sell"
                  className="justify-center align-center flex text-xl"
                >
                  Create a Car
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/car/:id" element={<Car />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
