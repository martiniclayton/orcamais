import { useNavigate } from "react-router-dom"
import type { User } from "../../data/mockUsers"
import type { Tela } from "../../types/typeTela"

interface AsideProps {
    open: boolean
    fechar: (value: boolean) => void,
    tela: Tela,
    setTela: (value: Tela) => void,
    prestador: User,
    isOpen: boolean,
}
export const AsideDash = ({ open, fechar, tela, setTela, prestador, isOpen }: AsideProps) => {

    const navigation = useNavigate();

    const Sair = () =>{
        localStorage.removeItem("prestador");
        navigation("/")
    }

    const iniciaisEmpresa = prestador.empresa
    .split(" ")
    .map(nome => nome[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
    
    return (
        <>
            <aside id="aside" className={`
    fixed inset-y-0 left-0 z-50 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col justify-between p-4 border-r border-slate-800
  transition-transform duration-300 ease-in-out
  ${open ? 'translate-x-0' : '-translate-x-full'}
  md:relative md:translate-x-0 md:flex
`}>

                <div className="flex justify-between items-center md:hidden pb-2">
                    <span className="font-bold text-white">Menu</span>
                    <button onClick={() => fechar(false)} className="text-slate-400 p-1">
                        ✕
                    </button>


                </div>
                <div className="flex items-center gap-3 px-2 py-3 mb-5">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {iniciaisEmpresa}
                    </div>
                    <span className="text-white font-bold text-lg tracking-wide">{prestador.empresa}</span>
                </div>

                <nav className="flex flex-col gap-1 flex-1 justify-between">
                    <div>

                        <button type="button" className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg ${tela === "Dashboard" ? "text-white bg-slate-400 font-medium" : "hover:text-white hover:bg-slate-800/60"} transition-colors`} onClick={() => {setTela("Dashboard") ; fechar(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                            <span className="text-start">Dashboard</span>
                        </button>

                        <button type="button" className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${tela === "NovaOrdemServico" ? "bg-slate-400 font-medium text-white" : "hover:text-white hover:bg-slate-800/60"}`} onClick={() => {setTela("NovaOrdemServico") ; fechar(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="11" x2="12" y2="17"></line>
                                <line x1="9" y1="14" x2="15" y2="14"></line>
                            </svg>
                            <span className="text-start">Nova Ordem de Serviço</span>
                        </button>

                        <button type="button" className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg ${tela === "OrdensServicos" ? "text-white bg-slate-400 font-medium" : "hover:text-white hover:bg-slate-800/60"} transition-colors`} onClick={() => {setTela("OrdensServicos") ; fechar(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                            <span className="text-start">Ordens de Serviços</span>
                        </button>

                        <button type="button" className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg ${tela === "ServicosFinalizados" ? "text-white bg-slate-400 font-medium" : "hover:text-white hover:bg-slate-800/60"} transition-colors`} onClick={() => {setTela("ServicosFinalizados") ; fechar(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="text-start">Serviços Finalizados</span>
                        </button>

                        <button type="button" className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg ${tela === "Notificacoes" ? "text-white bg-slate-400 font-medium" : "hover:text-white hover:bg-slate-800/60"} transition-colors`} onClick={() => {setTela("Notificacoes") ; fechar(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span className="text-start">Notificações</span>
                        </button>

                        <button type="button" className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg ${tela === "Perfil" ? "text-white bg-slate-400 font-medium" : "hover:text-white hover:bg-slate-800/60"} transition-colors`} onClick={() => {setTela("Perfil") ; fechar(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span className="text-start">Perfil</span>
                        </button>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white text-sm">
                                    CM
                                </div>
                                <div className="flex flex-col text-xs">
                                    <span className="font-medium text-white">{prestador.nome}</span>
                                    <span className="text-slate-500">Prestador</span>
                                </div>
                            </div>
                            <div className="flex justify-end" >
                                <button className="btn flex items-center gap-2 cursor-pointer hover:text-red-400" onClick={Sair}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                    Sair</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}