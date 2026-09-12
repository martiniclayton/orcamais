import { Link } from "react-router-dom";
import { Header } from ".././Header.js";
import { OrderCard } from ".././OrderCard.js";
import type { Tela } from "../../types/typeTela.js";
import { CardInfo } from "../Cards/CardInfo.js";
import type { OrdemType } from "../../types/OrdemType.js";
import type { User } from "../../data/mockUsers.js";

interface Dashboard {
    mudarTela: (value: Tela) => void,
    bancoMock: OrdemType[],
    prestador: User
}

export const Dashboard = ({mudarTela, bancoMock, prestador}: Dashboard) => {
    const ordens = bancoMock

    const emAndamento = ordens.filter(ordem => ordem.status === "Em andamento")
    const pronto = ordens.filter(ordem => ordem.status === "Pronto para retirada")
    const finalizados = ordens.filter(ordem => ordem.status === "Finalizado")


    return (
        <>
            {/* <section id="dashboard-pag" className="w-full flex flex-col overflow-y-auto ">
                <div className=" flex flex-col m-5 gap-5 bg-slate-50"> */}
            <Header titulo={"Dashboard"} descricao={`Olá, ${prestador.nome}. Acompanhe suas Ordens de Serviço.`} mudarTela={mudarTela}></Header>
            <div id="info" className="w-full flex flex-col gap-5 p-5 bg-card shadow-2xs rounded-xl">
                <div className="flex flex-wrap w-full gap-2">
                    <CardInfo titulo={"Em andamento"} numeros={emAndamento.length}/>
                    <CardInfo titulo={"Prontas para retirada"} numeros={pronto.length}/>
                    <CardInfo titulo={"Finalizadas"} numeros={finalizados.length}/>
                </div>

                <div className="flex flex-wrap w-full gap-2">
                    <div className="flex-1 min-w-[250px] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl cursor-pointer bg-slate-800 text-white card p-4 bg-card border-card-line border border-gray-200 shadow-2xs rounded-xl">
                        <div className="card-body" onClick={()=> mudarTela("NovaOrdemServico")}>
                            <h6 className="card-title font-bold">
                                Nova Ordem de Serviço
                            </h6>
                            <p className="">Cadastrar serviço</p>
                        </div>
                    </div>
                    <div className="flex-1 min-w-[250px] bg-white hover:bg-slate-100  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer card p-4 bg-card border-card-line border border-gray-200 shadow-2xs rounded-xl">
                        <div className="card-body" onClick={()=> mudarTela("OrdensServicos")}>
                            <h6 className="card-title font-bold">
                                Ordens de Serviço
                            </h6>
                            <p className="text-slate-500">Ver ordens de serviços</p>
                        </div>
                    </div>
                    <div className="flex-1 min-w-[250px] bg-white hover:bg-slate-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer card p-4 bg-card border-card-line border border-gray-200 shadow-2xs rounded-xl">
                        <div className="card-body" onClick={()=> mudarTela("ServicosFinalizados")}>
                            <h6 className="card-title font-bold">
                                Serviços Finalizados
                            </h6>
                            <p className="text-slate-500">Ver serviços finalizados</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between mb-5">
                        <h1 className="font-bold text-slate-600">Ordens Recentes</h1>
                        <Link to={""} className="hover:text-slate-400 transition-all duration-300 ease-in-out" onClick={()=> mudarTela("OrdensServicos")}>Ver ordens ativas</Link>
                    </div>

                    {
                        ordens.slice(-5).toReversed().map(ordem => (
                            <OrderCard key={ordem.id} ordem={ordem} />
                        ))
                    }
                </div>
            </div>
            {/* </div>
            </section> */}
        </>
    )
}