import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./sign-up";
import Login from "./Log-in";
import Forget from "./Forget";
import Reset from "./Reset";


export default function Routing() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forget" element={<Forget/>} />
        <Route path="/reset" element={<Reset/>} />
    </Routes>
    </BrowserRouter>
  )
}
