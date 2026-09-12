import type { User } from "../../data/mockUsers"
import type { OrdemType } from "../../types/OrdemType"
import type { Tela } from "../../types/typeTela"
import { Header } from ".././Header"

interface PerfilProps {
    mudarTela: (value: Tela) => void,
    prestador: User,
    bancoMock: OrdemType[]
}

export const Perfil = ({mudarTela, prestador, bancoMock}: PerfilProps) => {

    const ordensAtivas = bancoMock.filter(ordem => ordem.status !== "Finalizado")
    const ordensFinalizadas = bancoMock.filter(ordem => ordem.status === "Finalizado")

    const iniciaisEmpresa = prestador.empresa
    .split(" ")
    .map(nome => nome[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
    return (
        <>
            <Header titulo={"Perfil"} descricao={"Dados da sua conta"} mudarTela={mudarTela}></Header>

            <div>
                <div className="w-full">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="p-4 bg-white border-b border-gray-200 rounded-t-lg">
                            <div className="flex gap-3">
                                <div className="flex items-center justify-center">
                                    <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white text-sm">{iniciaisEmpresa}</div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-xl font-bold text-gray-800">{prestador.nome}</h4>
                                    <p className="text-gray-500">{prestador.empresa}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h6 className="font-semibold text-gray-700">E-mail</h6>
                                        <p className="text-gray-600">{prestador.email}</p>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold text-gray-700">Perfil</h6>
                                        <p className="text-gray-600">{prestador.type}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h6 className="font-semibold text-gray-700">O.S. ativas</h6>
                                        <p className="text-gray-600">{ordensAtivas.length}</p>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold text-gray-700">Serviços finalizados</h6>
                                        <p className="text-gray-600">{ordensFinalizadas.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}