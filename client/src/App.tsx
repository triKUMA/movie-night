import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Room from "./pages/room/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/*" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
