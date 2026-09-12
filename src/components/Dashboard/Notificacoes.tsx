import { NotificacoesPush } from "../../data/mockOrders"
import type { Tela } from "../../types/typeTela"
import { Header } from "../Header"
import { NotificacaoCard } from "../Notificação/NotificacaroCard"

interface NotificacoesProps{
    mudarTela: (value: Tela) => void
}

export const Notificacoes = ({mudarTela}: NotificacoesProps) =>{

    const notificacoes = NotificacoesPush
    return(
        <>
            <Header titulo={"Notificações"} descricao={"Mensagens de atualização enviadas aos clientes"} mudarTela={mudarTela}></Header>

            {
                notificacoes.toReversed().map(notificacao => (
                    <NotificacaoCard key={notificacao.id} titulo={notificacao.titulo} data={notificacao.data} cliente={notificacao.cliente} id={notificacao.id} placa={notificacao.placa} tipoServico={notificacao.tipoServico} status={notificacao.status}/>
                ))
            }

        </>
    )
}