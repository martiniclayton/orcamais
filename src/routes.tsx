import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Cadastro } from "./pages/Cadastro"
import { DashboardPage } from "./pages/DashboardPage"
import { Cliente } from "./pages/Cliente"
import { NotFound } from "./components/NotFound/NotFoundPage"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
import { Carregando } from "./pages/carregando"

export const MainRoutes = () => {

    const { isLoggedIn, clienteLogged, verificandoSessao } = useContext(AuthContext)

    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Cadastro' element={<Cadastro />}></Route>
                <Route path='/DashboardPage' element={ verificandoSessao ? <Carregando/> : (isLoggedIn ? <DashboardPage/> : <NotFound />) } />
                <Route path='/Cliente' element={ verificandoSessao ? <Carregando/> : (clienteLogged ? <Cliente /> : <NotFound />) } />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}