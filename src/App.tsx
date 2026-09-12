import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import type { OrdemType } from './types/OrdemType'
import { Login } from './pages/Login'
import { DashboardPage } from './pages/DashboardPage'
import { Cadastro } from './pages/Cadastro'
import { Cliente } from './pages/Cliente'

function App() {

  const [lista, setLista] = useState<OrdemType[]>([])


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Cadastro' element={<Cadastro/>}></Route>
      <Route path='/DashboardPage' element={<DashboardPage />} />
      <Route path='/Cliente' element={<Cliente />} />
    </Routes>
      {/* <OrderForm array={lista} setArrayState={setLista}></OrderForm>
      {
        lista.map(ordem =>(
          <OrderCard ordem={ordem}></OrderCard>
        ))
      } */}
    </BrowserRouter>
  )
}

export default App
