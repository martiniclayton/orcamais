import { useState } from "react"
import { Header } from ".././Header"
import type { OrdemType, StatusOS } from "../../types/OrdemType"
import type { Tela } from "../../types/typeTela"

interface TabelaPag{
    tela: string,
    descricao: string,
    tipoTabela: OrdemType[]
    mudarTela: (value: Tela) => void,
    setBancoMock: (value: OrdemType[]) => void
    bancoMock: OrdemType[]
}

export const TabelaServicos = ({tela, descricao, tipoTabela, mudarTela, bancoMock, setBancoMock}: TabelaPag) => {

    const [busca, setBusca] = useState("");

    const ordens = tipoTabela
    
    const filtrar = ordens.filter((ordem: OrdemType) => {
        const termoBusca = busca.toLowerCase()
        
        const nomeStr = String(ordem.nome || "").toLowerCase()
        const placaStr = String(ordem.placa || "").toLowerCase()
        const idStr = String(ordem.id || "").toLowerCase()
        
        return nomeStr.includes(termoBusca) || placaStr.includes(termoBusca) || idStr.includes(termoBusca)
    })

    const mudarStatus = (id: string) =>{

        const ordensAtualizadas = bancoMock.map((ordem: OrdemType) => {
            if(ordem.id === id){
                const novoStatus: StatusOS = ordem.status === "Em andamento" ? "Pronto para retirada":  "Finalizado";
                return{
                    ...ordem, status: novoStatus
                }
            }
            return ordem
        })
        
        setBancoMock(ordensAtualizadas);
    }

    return (
        <>
            <Header titulo={tela} descricao={descricao} mudarTela={mudarTela}></Header>

            <div className="relative w-full lg:max-w-2xl ">
                <input
                    className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Pesquise pro código, nome ou placa..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
                <div className="absolute right-0 inset-y-0 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>

                <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className="w-full p-5 border border-slate-300 overflow-x-auto">
                <table className="w-full table text-start" >
                    <thead className=" border-b border-slate-300">
                        <tr className="">
                            <th scope="col" className="text-start py-3 min-w-[50px] whitespace-nowrap">ID</th>
                            <th scope="col" className="text-start py-3 min-w-[130px] whitespace-nowrap">Cliente</th>
                            <th scope="col" className="text-start py-3 min-w-[130px] whitespace-nowrap">Tipo de Serviço</th>
                            <th scope="col" className="text-start py-3 min-w-[130px] whitespace-nowrap">PLaca</th>
                            <th scope="col" className="text-start py-3 min-w-[130px] whitespace-nowrap">Data</th>
                            <th scope="col" className="text-start py-3 min-w-[130px] whitespace-nowrap">Status</th>
                            <th scope="col" className="text-start py-3 min-w-[130px] whitespace-nowrap">Acções</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 ">
                        {
                            filtrar.map((ordem: OrdemType) => (
                                <tr className="hover:bg-slate-100 transition-colors h-16" key={ordem.id}>
                                    <td className="w-16 py-1 text-slate-600 align-middle">{ordem.id}</td>
                                    <td className="py-1 text-slate-600 align-middle">{ordem.nome}</td>
                                    <td><span className="py-1 text-slate-600 badge badge-soft badge-success text-xs align-middle ">{ordem.tipoServico}</span></td>
                                    <td className="py-1 text-slate-600 align-middle">{ordem.placa}</td>
                                    <td className="py-1 text-slate-600 align-middle">
                                        {ordem.dataCriacao.toLocaleString("pt-BR")}
                                    </td>
                                    <td className="py-1 text-slate-600 align-middle">
                                        {ordem.status}
                                    </td>
                                    <td className="py-1 text-slate-500 align-middle">
                                        <button onClick={()=> mudarStatus(ordem.id)} className={`border p-1 px-2 w-full border-slate-400 text-slate-400 cursor-pointer transiton-all duration-300 ease-in-out not-disabled:hover:bg-slate-700 not-disabled:hover:text-slate-100 ${ordem.status === "Finalizado" ? "disabled:bg-gray-400 disabled:cursor-not-allowed hidden" : ""}`}>{ordem.status === "Em andamento" ? "Retirada" : ordem.status === "Pronto para retirada" ? "Finalizar" : "Finalizado"}</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}