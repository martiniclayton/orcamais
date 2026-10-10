import { useEffect, useState } from "react"
import type { OrdemType } from "../../types/OrdemType"
import { NotificacaoCard } from ".././Notificação/NotificacaroCard"
import { API_URL } from "../../services/api"
import type { notificacaoData } from "../../types/NotificacoesType"

interface MinhasNotificacoes {
    cliente: OrdemType
}

export const MinhasNotificacoes = ({cliente}: MinhasNotificacoes) =>{


    const queryParans = new URLSearchParams(window.location.search)
    const cod  = queryParans.get("codigo")
    const [notificacoes, setNotificacoes] = useState<notificacaoData[]>([])
    const token = localStorage.getItem("tokenClienteTrack")

    console.log(cod)
    useEffect(()=>{
        if(!cod){
            return;
        }
        fetch(`${API_URL}/notification/cliente/${cod}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setNotificacoes(data.ordens)
        })
        .catch(err =>{
            console.error(err)
        })
    },[cod, token])
    // const notificacoes = getNotificacoes().filter(notificacao => notificacao.cpf === cliente.cpf)
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