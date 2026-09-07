import { Col, Container, Row } from "react-bootstrap"
import { Icon } from "../components/Icon"
import { Notificacao } from "../components/NotificacaoCard"
import { useState } from "react"
import { MeusServicos } from "../components/MeusServicos"
import { Link } from "react-router-dom"
import { notificacoesBanco } from "../services/BancoLocal"
import { MeuPerfil } from "../components/MeuPerfil"
import { userFicticio } from "../data/mockData"

export const Cliente = () =>{

    const testeUsuarioLogado = userFicticio

    const [telaUser, setTelaUser] = useState("MeusServicos")


    const puxarNotificacao = notificacoesBanco.getData()
    const notificacaoUser = puxarNotificacao.filter((noti: any) => noti.placa === "ADW9587")


    return(
        <>
            <Container>
                <Row className="py-5">
                    <Col>
                        <div className="headCliente d-flex justify-content-between align-items-baseline">
                            <Icon tela={false} empresa={"Orça Mais"} desc={"Acompanhe seu serviço"}></Icon>
                            <div>
                            <button>Sair</button>
                            </div>
                        </div>
                    </Col>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className={`nav-link ${telaUser === "MeusServicos" ? "active" : ""}`} to={""} onClick={() => setTelaUser("MeusServicos")}>Meus serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${telaUser === "Notificacoes" ? "active" : ""}`} onClick={() => setTelaUser("Notificacoes")} to={""}>Notificações</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${telaUser === "MeuPerfil" ? "active" : ""}`} onClick={() => setTelaUser("MeuPerfil")} to={""}>Perfil</Link>
                        </li>
                    </ul>
                </Row>
                <section>   
                    {telaUser === "MeusServicos" ? <MeusServicos cliente={testeUsuarioLogado}/>  : null}
                    {telaUser === "Notificacoes" ? notificacaoUser.toReversed().map((ordem: any) =>(
                        (<Notificacao titulo={ordem.titulo} mensagem={ordem.mensagem} data={ordem.data}/>)
                    ))  : null}
                    {telaUser === "MeuPerfil" ? <MeuPerfil nome={testeUsuarioLogado.nome} email={testeUsuarioLogado.email}/> : null}
                </section>
            </Container>
        </>
    )
}