import { useState } from "react";
import { AsideDash } from "../components/Dashboard/AsideDash"
import { Dashboard } from "../components/Dashboard/Dashboard"
import { NovaOrdemServico } from "../components/Dashboard/NovaOrdemServico";
import { OrdensServicos } from "../components/Dashboard/OrdensServicos";
import { ServicosFinalizados } from "../components/Dashboard/ServicosFinalizados";
import { Notificacoes } from "../components/Dashboard/Notificacoes";
import { Perfil } from "../components/Dashboard/Perfil";
import type { Tela } from "../types/typeTela";
import { ordenServicos } from "../data/mockOrders";

export const DashboardPage = () => {

    const userSalvo = localStorage.getItem("prestador");

    const prestador = userSalvo ? JSON.parse(userSalvo) : null

    const [bancoMock, setbancoMock] = useState(ordenServicos);

    const [isOpen, setIsOpen] = useState(false);

    const [tela, setTela] = useState<Tela>("Dashboard")

    return (
        <>
            <div className="flex md:hidden items-center justify-between p-4 bg-slate-900 text-white">
                <div className="font-bold">OrderTrack</div>

                <button id="buttonToggle"
                    onClick={() => setIsOpen(isOpen === true ? false : true)}
                    className="p-2 rounded-lg hover:bg-slate-800"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <main className="w-full flex bg-slate-50 gap-5  h-[calc(100vh-72px)] md:h-screen overflow-hidden">
                <AsideDash open={isOpen} fechar={setIsOpen} tela={tela} setTela={setTela} prestador={prestador} isOpen={isOpen}></AsideDash>
                <section className={`w-full flex flex-col  ${isOpen ? "overflow-hidden" :  "overflow-y-auto" }`}>
                    <div className=" flex flex-col m-5 gap-5 bg-slate-50">
                        {tela === "Dashboard" ? (<Dashboard mudarTela={setTela} bancoMock={bancoMock} prestador={prestador} />) : null}
                        {tela === "NovaOrdemServico" ? (<NovaOrdemServico mudartela={setTela} />) : null}
                        {tela === "OrdensServicos" ? (<OrdensServicos mudartela={setTela} bancoMock={bancoMock} setBancoMock={setbancoMock} />) : null}
                        {tela === "ServicosFinalizados" ? (<ServicosFinalizados mudarTela={setTela} bancoMock={bancoMock} setBancoMock={setbancoMock} />) : null}
                        {tela === "Notificacoes" ? (<Notificacoes mudarTela={setTela} />) : null}
                        {tela === "Perfil" ? (<Perfil mudarTela={setTela} bancoMock={bancoMock} prestador={prestador} />) : null}
                    </div>
                </section>
            </main>
        </>
    )
}