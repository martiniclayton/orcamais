import { notificacoesBanco } from "../services/BancoLocal"
import { Header } from "./Header"
import { Notificacao } from "./NotificacaoCard"

export const Notificacoes = ({mudarTelaFilho}: any) =>{

    const notificacoes = notificacoesBanco.getData()

    return(
        <>
            <Header pag={"Notificações"} descricao={"Mensagens de atualização enviadas aos clientes"} funcao={mudarTelaFilho}></Header>

            <hr />

            {notificacoes.toReversed().map((notificacao: any) => (
                <Notificacao key={notificacao.id} titulo={notificacao.titulo} mensagem={notificacao.mensagem} data={notificacao.data}/>
            ))}

        </>
    )
}