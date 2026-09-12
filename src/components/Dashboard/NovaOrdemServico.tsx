import { useState } from "react"
import { Header } from ".././Header"
import type { OrdemType } from "../../types/OrdemType"
import type { Tela } from "../../types/typeTela"
import { ordenServicos } from "../../data/mockOrders"
interface NovaOrdemServicoProps {
    mudartela: (value: Tela) => void
}

export const NovaOrdemServico = ({mudartela}: NovaOrdemServicoProps) => {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [placa, setPlaca] = useState("")
    const [servico, setServico] = useState("")
    const [descricao, setDescricao] = useState("")

    const inputs = [setNome, setCpf, setTelefone, setPlaca, setServico, setDescricao]

    const limparInputs =() =>{
        inputs.forEach(element => {
            element("")
        });
    }

    const enviarForm =(e: React.FormEvent<HTMLFormElement>) =>{
        
        e.preventDefault()
        if(!nome || !cpf || !telefone || !placa || !servico){
            alert("Preencha os campos necessários")
        } else{
            const ordem: OrdemType = {
                id: String(ordenServicos.length),
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                placa: placa,
                dataCriacao: new Date(),
                tipoServico: servico,
                status: "Em andamento",
                descricao: descricao
            }
            
            ordenServicos.push(ordem)
            limparInputs();
        }

    }


    return (
        <>
            <section className="w-full">
                <Header titulo={"Nova Ordem de Serviço"} descricao={"Preencha os dados do cliente e do serviço."} mudarTela={mudartela}></Header>

                <div className="max-w-2xl p-5 bg-card shadow-2xs rounded-xl">
                    <form action="" className="flex flex-col gap-5" onSubmit={(e)=>enviarForm(e)}>
                        <div className="card bg-slate-50 border border-slate-300 p-4">
                            <h3 className="card-title">
                                Dados do Cliente
                            </h3>
                            <div className="card-body grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="" className="block text-sm font-medium mb-1">Cliente</label>
                                    <input type="text" id="cliente" name="cliente" placeholder="Nome completo" className="w-full px-3 py-2 border bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all shadow-sm" value={nome} onChange={(e)=> setNome(e.target.value)} />
                                </div>
                                <div className="">
                                    <label htmlFor="cpf" className="block text-sm font-medium mb-1">CPF do Cliente</label>
                                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" className="w-full px-3 py-2 border bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all shadow-sm " value={cpf} onChange={(e)=> setCpf(e.target.value)} />
                                </div>
                                <div className="">
                                    <label htmlFor="telefone" className="block text-sm font-medium mb-1">Telefone</label>
                                    <input type="text" id="telefone" name="telefone" placeholder="(00) 99999-9999" className="w-full px-3 py-2 border bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all shadow-sm "  value={telefone} onChange={(e)=> setTelefone(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-slate-50 border border-slate-300 p-4">
                            <h3 className="card-title">
                                Dados do Serviço
                            </h3>
                            <div className="card-body grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="placa" className="block text-sm font-medium mb-1">Placa do veículo</label>
                                    <input type="text" id="placa" name="placa" placeholder="ABC-4545" className="w-full px-3 py-2 border bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all shadow-sm " value={placa} onChange={(e)=> setPlaca(e.target.value)} />
                                </div>
                                <div className="">
                                    <label htmlFor="servico" className="block text-sm font-medium mb-1">CPF do Cliente</label>
                                    <select name="servico" id="servico" className="w-full px-3 py-2 border bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all shadow-sm" value={servico} onChange={(e)=> setServico(e.target.value)}>
                                        <option value="">Selecione o tipo</option>
                                        <option value="Troca de oleo">Troca de oleo</option>
                                        <option value="Revisão elétrica">Revisão elétrica</option>
                                        <option value="Alinhamento e balanceamento">Alinhamento e balanceamento</option>
                                        <option value="Assistência técnica">Assistência técnica</option>
                                        <option value="Diagóstico">Diagóstico</option>
                                    </select>
                                </div>
                                

                                <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="telefone" className="block text-sm font-medium mb-1">Descrição</label>
                                    <textarea id="descricao" name="descricao" placeholder="Ex.: Manutenção no sistema de freios e troca de pastilhas" className="w-full px-3 py-2 border bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all shadow-sm " value={descricao} onChange={(e)=> setDescricao(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center flex-wrap justify-between">
                            <button type="submit" className="px-5 py-2 rounded-lg border border-slate-300 text-slate-200 bg-slate-700 hover:bg-slate-50 hover:text-slate-700 hover:border-slate-700 transition-all duration-300 ease0-in-out cursor-pointer">Cadastrar Nova Ordem</button>
                            <button type="button" className="px-5 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-700 hover:text-slate-200 cursor-pointer transition-all duration-300 ease-in-out">Cancelar</button>
                        </div> 
                    </form>

                </div>
            </section>
        </>
    )
}