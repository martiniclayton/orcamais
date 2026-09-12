import { useState } from "react"
import { Header } from "../components/Header"
import { ordenServicos } from "../data/mockOrders"
import { NotificacaoCard } from "../components/Notificação/NotificacaroCard"
import { MeusServicos } from "../components/MeusServicos"
import { MeuPerfil } from "../components/MeuPerfil"
import { MinhasNotificacoes } from "../components/MinhasNotificacoes"

export const Cliente = () => {

    const cliente = ordenServicos[0]

    const [aba, setAba] = useState("Meus Servicos")
    return (
        <>
            <main className="max-w-4xl bg-slate-50 mx-auto px-5 py-5">
                <header>
                    <div className="w-full items-center flex justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-teal-600 text-white p-2.5 rounded-xl">
                                Logo
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-slate-900 leading-tight">Ordem Track</h1>
                                <span className="text-sm text-slate-400">Acompanhe seu serviço</span>
                            </div>
                        </div>
                        <div className="">
                            <button className="w-20 border border-slate-400 cursor-pointer text-slate-400 hover:bg-slate-800 hover:text-slate-50 transition-all duration-300 ease-in-out ">Sair</button>
                        </div>
                    </div>

                    <nav className="flex flex-wrap gap-2 py-3">
                        <button onClick={() => setAba("Meus Servicos")} className={`font-medium text-slate-400 p-2 px-3 text-sm rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-900 ${aba === "Meus Servicos" ? "bg-slate-100 text-slate-900" : ""}`}>Meus Serviços</button>
                        <button onClick={() => setAba("Minhas notificacoes")} className={`font-medium text-slate-400 p-2 px-3 text-sm rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-900 ${aba === "Notificacoes" ? "bg-slate-100 text-slate-900" : ""}`}>Notificações</button>
                        <button onClick={() => setAba("Meu Perfil")} className={`font-medium text-slate-400 p-2 px-3 text-sm rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:text-slate-900 ${aba === "Meu Perfil" ? "bg-slate-100 text-slate-900" : ""}`}>Perfil</button>
                    </nav>
                </header>

                {aba === "Meus Servicos" ? (<MeusServicos cliente={cliente}/>) : null}
                {aba === "Meu Perfil" ? (<MeuPerfil cliente={cliente}/>) : null}
                {aba === "Minhas notificacoes" ? (<MinhasNotificacoes cliente={cliente}/>) : null}
                <div>

                </div>

                <div>

                </div>
            </main>
        </>
    )
}