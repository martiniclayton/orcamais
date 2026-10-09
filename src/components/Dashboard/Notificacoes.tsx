import { useEffect, useState } from "react"
import type { Tela } from "../../types/typeTela"
import { Header } from "../Header"
import { NotificacaoCard } from "../Notificação/NotificacaroCard"
import { API_URL } from "../../services/api"
import type { notificacaoData } from "../../types/NotificacoesType"

interface NotificacoesProps{
    mudarTela: (value: Tela) => void
}

export const Notificacoes = ({mudarTela}: NotificacoesProps) =>{

    const [notificacoes, setNotificacoes] = useState<notificacaoData[]>([]);
    const token = localStorage.getItem('tokenTrack');

    useEffect(()=>{
        fetch(`${API_URL}/notification`, {
            headers: {
                Authorizarion: `Barer ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setNotificacoes(data.resposta)
            console.log(data.resposta)
        })
    },[])
    return(
        <>
            <Header titulo={"Notificações"} descricao={"Mensagens de atualização enviadas aos clientes"} mudarTela={mudarTela}></Header>

            {
                notificacoes.toReversed().map(notificacao => (
                    <NotificacaoCard key={notificacao.id} titulo={notificacao.titulo} data={notificacao.data} cliente={notificacao.ordens.cliente.nome} id={notificacao.id} placa={notificacao.ordens.placa} tipoServico={notificacao.ordens.tipoServico} status={notificacao.status} cpf={""}/>
                ))
            }

        </>
    )
}