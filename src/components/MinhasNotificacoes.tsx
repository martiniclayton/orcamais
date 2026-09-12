import { NotificacoesPush } from "../data/mockOrders"
import type { OrdemType } from "../types/OrdemType"
import { NotificacaoCard } from "./Notificação/NotificacaroCard"

interface MinhasNotificacoes {
    cliente: OrdemType
}


export const MinhasNotificacoes = ({cliente}: MinhasNotificacoes) =>{

    console.log(cliente.nome)

    const notificacoes = NotificacoesPush.filter(notificacao => notificacao.cliente === cliente.nome)
    return(
        <>
            {
                notificacoes.map(notificacao => (
                    <NotificacaoCard key={notificacao.id} titulo={notificacao.titulo} data={notificacao.data} cliente={notificacao.cliente} id={notificacao.id} placa={notificacao.placa} tipoServico={notificacao.tipoServico} status={notificacao.status}/>
                ))
            }
        </>
    )
}