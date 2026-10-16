import { useEffect, useState } from "react"
import { NotificacaoCard } from ".././Notificação/NotificacaroCard"
import { API_URL } from "../../services/api"
import type { notificacaoData } from "../../types/NotificacoesType"


export const MinhasNotificacoes = () =>{


    const queryParans = new URLSearchParams(window.location.search)
    const cod  = queryParans.get("codigo")
    const [notificacoes, setNotificacoes] = useState<notificacaoData[]>([])

    useEffect(()=>{
        fetch(`${API_URL}/notification/cliente`, {
            credentials: "include"
        })
        .then(res => res.json())
        .then(data =>{
            setNotificacoes(data.notificacoes)
        })
        .catch(err =>{
            console.error(err)
        })
    },[cod])
    return(
        <>{
            notificacoes!.length > 0 ? 
            (
                notificacoes?.toReversed().map(notificacao => (
                    <NotificacaoCard key={notificacao.id} titulo={notificacao.titulo} data={notificacao.data} cliente={notificacao.ordens.cliente.nome} id={notificacao.id} placa={notificacao.ordens.placa} tipoServico={notificacao.ordens.tipoServico} status={notificacao.status} cpf={""}/>
                ))
     ) : (
        <p className="text-gray-500">        Você não possui notificações.
</p>
     )
        }
        </>
    )
}