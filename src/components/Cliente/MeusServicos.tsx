import React from 'react';
import type { OrdemType } from '../../types/OrdemType';
import { NotificacoesPush, ordenServicos } from '../../data/mockOrders';
import { OrderCard } from '.././OrderCard';
import { NotificacaoCard } from '.././Notificação/NotificacaroCard';

interface MeuServicoProps {
    cliente: OrdemType
}

export const MeusServicos = ({cliente}: MeuServicoProps) => {

    const ordemFinalizadas = ordenServicos.filter(ordem => {
        return ordem.status === "Finalizado" && ordem.cpf === cliente.cpf
    })

    const notificacaoUser = NotificacoesPush.filter(notificacao => notificacao.cpf === cliente.cpf)

    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="text-gray-500 text-sm font-medium">{`Olá, ${cliente.nome}`}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">Qual é o status do meu serviço?</h3>
            </div>

            <div>
                {notificacaoUser.slice(-1).toReversed().map((ordem, index) => (
                    <NotificacaoCard key={index} titulo={ordem.titulo} data={ordem.data} cliente={ordem.cliente} id={ordem.id} placa={ordem.placa} tipoServico={ordem.tipoServico} status={ordem.status} cpf={ordem.cpf} />
                ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-semibold text-gray-700">
                    {`#O.S ${cliente.id}`}
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <div>
                        <h5 className="text-1xl font-bold text-gray-800">{cliente.tipoServico}</h5>
                        <p className="text-sm text-gray-500 mt-1">
                            {`Veículo: ${cliente.placa}`}
                        </p>
                    </div>

                    <div className={` ${cliente.status === "Em andamento" ? "bg-slate-200": cliente.status === "Pronto para retirada" ? "bg-green-50" : "" } border border-gray-100 p-6 rounded-lg`}>
                        <div className="text-3xl uppercase tracking-wider font-semibold text-gray-400 mb-1">
                            {cliente.status}
                        </div>
                        <h2 className="text-3xl font-extrabold text-blue-600">
                        </h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-gray-800">Serviços finalizados</h4>
                <div className="grid grid-cols-1 gap-4">
                    {
                        ordemFinalizadas.length > 0 ? (
                            ordemFinalizadas.toReversed().map((ordem) => {
                                return (
                                    <div key={ordem.id} className="w-full">
                                        <OrderCard ordem={ordem}></OrderCard>
                                    </div>
                                );
                            })
                            
                        ) : (
                            <p className="text-gray-500">        Você não possui serviços finalizados.
</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};