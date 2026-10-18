import { useContext, useEffect, useState } from "react"
import type { Tela } from "../../types/typeTela"
import { Header } from "../Header"
import { NotificacaoCard } from "../Notificação/NotificacaroCard"
import type { notificacaoData } from "../../types/NotificacoesType"
import { apiFetch } from "../../services/apiFetch"
import { AuthContext } from "../../Context/AuthContext"

interface NotificacoesProps{
    mudarTela: (value: Tela) => void
}

export const Notificacoes = ({mudarTela}: NotificacoesProps) =>{

    const [notificacoes, setNotificacoes] = useState<notificacaoData[]>([]);
    // const token = localStorage.getItem('tokenTrack');

    const {logout} = useContext(AuthContext)

    useEffect(()=>{

        const buscarNotificacoes = async () =>{
            try{
                const response = await apiFetch("/notification");
    
                const data = await response.json()

                if(response.status === 401){
                    alert("Sessão expirada");
                    logout();
                }
    
                if(!response.ok){
                    console.log("Erro na requisição das notificações", data.mensagem)
                    return
                };

                setNotificacoes(data.resposta ?? [])

            } catch (error) {
                alert(error || "Erro na requisição")
            }
        };

        buscarNotificacoes();
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