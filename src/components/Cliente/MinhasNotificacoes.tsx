import { NotificacoesPush } from "../../data/mockOrders"
import type { OrdemType } from "../../types/OrdemType"
import { NotificacaoCard } from ".././Notificação/NotificacaroCard"

interface MinhasNotificacoes {
    cliente: OrdemType
}


export const MinhasNotificacoes = ({cliente}: MinhasNotificacoes) =>{


    const notificacoes = NotificacoesPush.filter(notificacao => notificacao.cpf === cliente.cpf)
    return(
        <>{
            notificacoes.length > 0 ? 
            (
                notificacoes.map(notificacao => (
                    <NotificacaoCard key={notificacao.id} titulo={notificacao.titulo} data={notificacao.data} cliente={notificacao.cliente} id={notificacao.id} placa={notificacao.placa} tipoServico={notificacao.tipoServico} status={notificacao.status} cpf={""}/>
                ))
     ) : (
        <p className="text-gray-500">        Você não possui notificações.
</p>
     )
        }
        </>
    )
}