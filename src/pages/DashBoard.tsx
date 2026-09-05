import { Col, Container, Row } from "react-bootstrap"
import { DashBoardConteudo } from "../components/DashBoardConteudo"
import { useState } from "react"
import { Icon } from "../components/Icon"
import { Link } from "react-router-dom"
import { banco } from "../services/BancoLocal"

export const DashBoard = () => {

    const [bancoDeOrdens, setBancoDeOrdens] = useState(banco.getData);

    const [tela, setTela] = useState("DashBoardContent")
    
    const enviarPag = (props: string) =>{
        setTela(props);
    }
    return (
        <>
            <Container fluid className="h-100 py-5">
                <Row className="h-100">
                    <Col md={3} className="h-100">
                        <div className="h-100 d-flex flex-column justify-content-between">
                            <div className="bg-light p-3">
                                <Icon tela={false} empresa={"Orça Mais"} desc={"Gestão de O.S"}></Icon>
                                <div>
                                    <ul className="list-group">
                                        <li className={`list-group-item list-group-item-action ${tela === "DashBoardContent" ? "active": ""}`} onClick={() => enviarPag("DashBoardContent")}>Dashboard</li>
                                        <li className={`list-group-item list-group-item-action ${tela === "NovaOrdemServico" ? "active": ""}`} onClick={() => enviarPag("NovaOrdemServico")}>Nova O.S</li>
                                        <li className={`list-group-item list-group-item-action ${tela === "OrdemServico" ? "active": ""}`} onClick={() => enviarPag("OrdemServico")}>Ordens de Serviços</li>
                                        <li className={`list-group-item list-group-item-action ${tela === "ServicosFinalizados" ? "active": ""}`} onClick={() => enviarPag("ServicosFinalizados")}>Serviços Finalizados</li>
                                        <li className={`list-group-item list-group-item-action ${tela === "Notificacoes" ? "active": ""}`} onClick={() => enviarPag("Notificacoes")}>Notificações</li>
                                        <li className={`list-group-item list-group-item-action ${tela === "Perfil" ? "active": ""}`} onClick={() => enviarPag("Perfil")}>Perfil</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex flex-column p-3 radeos-5 m-1">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Nome</h5 >
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Nome empresa</h6>
                                        <Link to={'/'}>Sair</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={9} className="h-100">
                        <DashBoardConteudo tela={tela} mudarTelaPai={setTela}></DashBoardConteudo>
                    </Col>
                </Row>
            </Container>
        </>
    )
}