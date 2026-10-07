import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { DashboardPage } from './pages/DashboardPage'
import { Cadastro } from './pages/Cadastro'
import { Cliente } from './pages/Cliente'
import { NotFound } from './components/NotFound/NotFoundPage'
import { AuthContextProvider } from './Context/AuthContext'
import { MainRoutes } from './routes'
import { getAllLocalStorage, createLocalStorage, orcaMaisLocal } from './services/storage'

function App() {

  !getAllLocalStorage() && createLocalStorage(orcaMaisLocal);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MainRoutes/>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
