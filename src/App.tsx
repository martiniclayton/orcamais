import { Login } from "./pages/Login"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/cadastro";
import { DashBoard } from "./pages/DashBoard";
import { useEffect } from "react";
import { bancoDados } from "./services/BancoLocal";

function App() {

  

  return (
    <>
    {/* <main className="vh-100 py-5" style={{boxSizing: 'border-box', border: '1px solid red'}}> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/DashBoard" element={<DashBoard/>}></Route>
      </Routes>
      </BrowserRouter>
    {/* </main> */}
    </>
  )
}

export default App
