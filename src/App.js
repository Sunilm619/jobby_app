import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import SIgnup from "./Components/SIgnup/SIgnup";
import Home from "./Components/Home/Home";
import Detailedjobs from "./Components/Detailedjobs/Detailedjobs";
import Sideabar from "./Components/Sideabar/Sideabar";
import Noroute from "./Components/Noroute/Noroute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SIgnup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Sidebar" element={<Sideabar />}></Route>
        <Route path="/details/:id" element={<Detailedjobs />}></Route>
        <Route path="*" element={<Noroute />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
