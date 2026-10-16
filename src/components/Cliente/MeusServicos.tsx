import { OrderCard } from '.././OrderCard';
import { NotificacaoCard } from '.././Notificação/NotificacaroCard';
import { useEffect, useState } from 'react';
import { API_URL } from '../../services/api';
import type { typeCliente } from '../../types/typeCliente';
import type { OrdemType } from '../../types/OrdemType';
import type { notificacaoData } from '../../types/NotificacoesType';
import { Spinner } from '../Spinner';

export const MeusServicos = () => {

    const clienteDefault: typeCliente = {
        id: 'Carregando',
        nome: 'Carregando',
        cpf: 'Carregando',
        telefone: 'Carregando',
        codAcesso: 'Carregando'
    }

    const [ordens, setOrdens] = useState<any[]>([]);
    const [cliente, setCliente] = useState<typeCliente>(clienteDefault);
    const [ordem, setOrdem] = useState<OrdemType | undefined>();
    const [notificacoes, setNotificacoes] = useState<notificacaoData[]>([])

    useEffect(() => {
        const pegarCliente = async () =>{
            await fetch(`${API_URL}/notification/cliente`, {
                credentials: "include"
            })
            .then(res => res.json())
            .then(data =>{
                setNotificacoes(data.notificacoes)
            })
        }

        const carregarCliente = async () => {
            fetch(`${API_URL}/cliente`, {
                credentials: "include"
            })
            .then(res => res.json())
            .then(data =>{
                setCliente(data.cliente)
            })

        }

        const carregarOrdens = async () => {
            fetch(`${API_URL}/cliente/ordens`, {
                credentials: "include"
            })
            .then(res => res.json())
            .then(data =>{
                setOrdens(data.ordens);

                if(data.ordens && data.ordens.length > 0){
                    setOrdem(data.ordens[0])
                }
            })
        };

        carregarOrdens();
        carregarCliente();
        pegarCliente();
    }, []);

    const ordensFinalizadas = ordens.filter(ordem => ordem.status === "Finalizado")

    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="text-gray-500 text-sm font-medium">{`Olá, ${cliente?.nome}`}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">Qual é o status do meu serviço?</h3>
            </div>

            
            {ordem ? (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-semibold text-gray-700">
                    {`#O.S ${ordem?.id}`}
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <div>
                        <h5 className="text-1xl font-bold text-gray-800">{ordem?.tipoServico}</h5>
                        <p className="text-sm text-gray-500 mt-1">
                            {`Veículo: ${ordem?.placa}`}
                        </p>
                    </div>

                    <div className={` ${ordem?.status === "Em andamento" ? "bg-slate-200" : ordem?.status === "Pronto para retirada" ? "bg-green-50" : ""} border border-gray-100 p-6 rounded-lg`}>
                        <div className="text-3xl uppercase tracking-wider font-semibold text-gray-400 mb-1">
                            {ordem?.status}
                        </div>
                        <h2 className="text-3xl font-extrabold text-blue-600">
                        </h2>
                    </div>
                </div>
            </div>
            ) : (
                <Spinner/>
            )}

            {notificacoes ? (
            <div>
                <h1 className='text-xl font-bold text-gray-800 mb-2'>Notificação Recente</h1>
                {notificacoes.slice(-1).toReversed().map((notificacao, index) => (
                    <NotificacaoCard key={index} titulo={notificacao.titulo} data={notificacao.data} cliente={notificacao.ordens.cliente.nome} id={notificacao.id} placa={notificacao.ordens.placa} tipoServico={notificacao.ordens.tipoServico} status={notificacao.status} cpf={notificacao.ordens.cliente.cpf} />
                ))}
            </div>
            ) : (
                <Spinner/>
            )}


            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold text-gray-800">Serviços finalizados</h4>
                <div className="grid grid-cols-1 gap-4">
                    {
                        ordensFinalizadas.length > 0 ? (
                            ordensFinalizadas.toReversed().map((ordem) => {
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