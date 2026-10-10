import { OrderCard } from '.././OrderCard';
import { NotificacaoCard } from '.././Notificação/NotificacaroCard';
import { useEffect, useState } from 'react';
import { API_URL } from '../../services/api';
import type { typeCliente } from '../../types/typeCliente';
import type { OrdemType } from '../../types/OrdemType';
import type { notificacaoData } from '../../types/NotificacoesType';

export const MeusServicos = () => {
    const [ordens, setOrdens] = useState<any[]>([]);
    const [cliente, setCliente] = useState<typeCliente>();
    const queryParams = new URLSearchParams(window.location.search);
    const codigo = queryParams.get("codigo");
    const [ordem, setOrdem] = useState<OrdemType | undefined>();
    const [notificacoes, setNotificacoes] = useState<notificacaoData[]>([])

    useEffect(() => {
        const token = localStorage.getItem('tokenClienteTrack');

        fetch(`${API_URL}/notification/cliente/${codigo}`, {
            headers: {
                Authorization: `Baerer ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setNotificacoes(data.ordens)
        })

        const carregarOrdens = async () => {
            console.log("CarregarOrdens funcionado")
            console.log(codigo)
            if (!codigo) return;

            fetch(`${API_URL}/ordem/acesso/${codigo}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Erro na requisição")
                    }
                    return res.json();
                })

                .then(data => {
                    console.log(data)
                    setCliente(data.cliente)
                    localStorage.setItem("clienteTrack", JSON.stringify(data.cliente))
                    setOrdens(data.ordens)

                    if(data.ordens && data.ordens.length > 0) {
                        setOrdem(data.ordens[data.ordens.length -1])
                    }
                    console.log(ordem)
                })
                .catch(error => {
                    console.error("Erro ao buscar acesso:", error);
                });


            // if (!resposta.ok) return;
        };

        carregarOrdens();
    }, [codigo]);

    const ordensFinalizadas = ordens.filter(ordem => ordem.status === "Finalizado")


    // const notificacaoUser = getNotificacoes().filter(notificacao => notificacao.cpf === cliente.cpf)

    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="text-gray-500 text-sm font-medium">{`Olá, ${cliente?.nome}`}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">Qual é o status do meu serviço?</h3>
            </div>

            <div>
                {notificacoes.slice(-1).toReversed().map((ordem, index) => (
                    <NotificacaoCard key={index} titulo={ordem.titulo} data={ordem.data} cliente={ordem.ordens.cliente.nome} id={ordem.id} placa={ordem.ordens.placa} tipoServico={ordem.ordens.tipoServico} status={ordem.status} cpf={ordem.ordens.cliente.cpf} />
                ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-semibold text-gray-700">
                    {`#O.S ${cliente?.id}`}
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