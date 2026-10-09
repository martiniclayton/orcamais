import { useContext, useEffect, useState } from "react"
import { MeusServicos } from "../components/Cliente/MeusServicos"
import { MeuPerfil } from "../components/Cliente/MeuPerfil"
import { MinhasNotificacoes } from "../components/Cliente/MinhasNotificacoes"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export const Cliente = () => {

    const { logoutCliente } = useContext(AuthContext)
    const navigate = useNavigate();

    const token = localStorage.getItem("tokenClienteTrack")

    const [ ordens, setOrdens] = useState([])

    // useEffect(()=>{
    //     fetch(`${API_URL}/acesso/${code}`,{
    //         headers: {
    //             Authorization: `Barer ${token}`
    //         }
    //     })
    //     .then(resposta => resposta.json())
    //     .then(data =>{
    //         setOrdens(data.ordens)
    //         setClinte(data.cliente)
    //     })
    // },[])

    useEffect(()=>{
        !token && navigate("/");
    },[token])

    // const parametros = new URLSearchParams(window.location.search);
    // const codigo = parametros.get("codigo");

    const [aba, setAba] = useState("Meus Servicos")


    if(!ordens){
        return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-slate-600">
                Ordem de serviço não encontrada.
            </p>
        </div>
    );  
    }

    return (
        <>
            <main className="min-h-screen w-full max-w-4xl bg-slate-50 mx-auto px-5 py-5">
                <header>
                    <div className="w-full items-center flex justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 text-white p-2.5 rounded-xl flex items-center justify-center font-bold">
                                OT
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-slate-900 leading-tight">Ordem Track</h1>
                                <span className="text-sm text-slate-400">Acompanhe seu serviço</span>
                            </div>
                        </div>
                        <div className="">
                            <button className="w-20 border border-slate-400 cursor-pointer text-slate-400 hover:bg-slate-800 hover:text-slate-50 transition-all duration-300 ease-in-out " onClick={logoutCliente}>Sair</button>
                        </div>
                    </div>

                    <nav className="flex flex-wrap gap-2 py-3">
                        <button onClick={() => setAba("Meus Servicos")} className={`font-medium text-slate-400 p-2 px-3 text-sm rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-900 ${aba === "Meus Servicos" ? "bg-slate-100 text-slate-900" : ""}`}>Meus Serviços</button>
                        <button onClick={() => setAba("Minhas notificacoes")} className={`font-medium text-slate-400 p-2 px-3 text-sm rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-900 ${aba === "Minhas notificacoes" ? "bg-slate-100 text-slate-900" : ""}`}>Notificações</button>
                        <button onClick={() => setAba("Meu Perfil")} className={`font-medium text-slate-400 p-2 px-3 text-sm rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-900 ${aba === "Meu Perfil" ? "bg-slate-100 text-slate-900" : ""}`}>Perfil</button>
                    </nav>
                </header>

                {aba === "Meus Servicos" ? (<MeusServicos/>) : null}
                {aba === "Meu Perfil" ? (<MeuPerfil cliente={ordens[0]}/>) : null}
                {aba === "Minhas notificacoes" ? (<MinhasNotificacoes cliente={ordens[0]}/>) : null}
            </main>
        </>
    )
}