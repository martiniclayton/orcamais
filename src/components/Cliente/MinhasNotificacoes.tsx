import { useContext, useEffect, useState } from "react"
import { NotificacaoCard } from ".././Notificação/NotificacaroCard"
import type { notificacaoData } from "../../types/NotificacoesType"
import { apiFetch } from "../../services/apiFetch"
import { AuthContext } from "../../Context/AuthContext"


export const MinhasNotificacoes = () => {


    const queryParans = new URLSearchParams(window.location.search)
    const cod = queryParans.get("codigo")
    const [notificacoes, setNotificacoes] = useState<notificacaoData[]>([]);

    const { logoutCliente } = useContext(AuthContext);

    useEffect(() => {

        const pegarNotificacoesCliente = async () =>{
            const response = await apiFetch("/notification/cliente");
    
            const data = await response.json();
    
            if (response.status === 401) {
                alert("Sessão expirada")
                logoutCliente();
            }
    
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }
    
            setNotificacoes(data.notificacoes);
        };

        pegarNotificacoesCliente();

    }, [cod])
    return (
        <>{
            notificacoes!.length > 0 ?
                (
                    notificacoes?.toReversed().map(notificacao => (
                        <NotificacaoCard key={notificacao.id} titulo={notificacao.titulo} data={notificacao.data} cliente={notificacao.ordens.cliente.nome} id={notificacao.id} placa={notificacao.ordens.placa} tipoServico={notificacao.ordens.tipoServico} status={notificacao.status} cpf={""} />
                    ))
                ) : (
                    <p className="text-gray-500">        Você não possui notificações.
                    </p>
                )
        }
        </>
    )
}