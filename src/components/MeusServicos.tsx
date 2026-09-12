import React from 'react';
import type { OrdemType } from '../types/OrdemType';
import { NotificacoesPush, ordenServicos } from '../data/mockOrders';
import { OrderCard } from './OrderCard';
import { NotificacaoCard } from './Notificação/NotificacaroCard';

interface MeuServico {
    cliente: OrdemType
}

export const MeusServicos = ({cliente}: MeuServico) => {

    const ordemFinalizadas = ordenServicos.filter(ordem => {
        return ordem.status === "Finalizado"
    })

    const notificacaoUser = NotificacoesPush

    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="text-gray-500 text-sm font-medium">{`Olá, ${cliente.nome}`}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">Qual é o status do meu serviço?</h3>
            </div>

            <div>
                {notificacaoUser.slice(-1).toReversed().map((ordem, index) => (
                    <NotificacaoCard key={index} titulo={ordem.titulo} mensagem={ordem.mensagem} data={ordem.data} cliente={ordem.cliente} />
                ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-semibold text-gray-700">
                    {ordemFinalizadas[0].id}
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <div>
                        <h5 className="text-1xl font-bold text-gray-800">Revisão elétrica</h5>
                        { <p className="text-sm text-gray-500 mt-1">
                            {notificacaoUser[0] ? `Veículo: ${notificacaoUser[0].placa}` : ''}
                        </p> }
                    </div>

                    <div className={` ${ordemFinalizadas[0].status === "Em andamento" ? "bg-slate-300": ordemFinalizadas[0].status === "Pronto para retirada" ? "bg-green-50" : "" }bg-gray-50 border border-gray-100 p-6 rounded-lg`}>
                        <div className="text-3xl uppercase tracking-wider font-semibold text-gray-400 mb-1">
                            {ordemFinalizadas[0].status}
                        </div>
                        <h2 className="text-3xl font-extrabold text-blue-600">
                            {/* {ordens.length > 0 ? ordens.slice(-1)[0].status : "Aguardando"} */}
                        </h2>
                    </div>
                </div>
            </div>

            {/* Serviços Finalizados */}
            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-gray-800">Serviços finalizados</h4>
                <div className="grid grid-cols-1 gap-4">
                    {ordemFinalizadas.toReversed().map((ordem) => {
                        return (
                            <div key={ordem.id} className="w-full">
                                <OrderCard ordem={ordem}></OrderCard>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};