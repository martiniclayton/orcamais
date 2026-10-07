import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Cadastro } from "./pages/Cadastro"
import { DashboardPage } from "./pages/DashboardPage"
import { Cliente } from "./pages/Cliente"
import { NotFound } from "./components/NotFound/NotFoundPage"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"

export const MainRoutes = () => {

    const { isLoggedIn, ordem } = useContext(AuthContext)

    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Cadastro' element={<Cadastro />}></Route>
                <Route path='/DashboardPage' element={isLoggedIn ? <DashboardPage /> : <NotFound /> } />
                <Route path='/Cliente' element={ ordem ? <Cliente /> : <NotFound /> } />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}