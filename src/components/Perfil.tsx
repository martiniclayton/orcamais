import { Col, Row } from "react-bootstrap"
import { Header } from "./Header"

export const Perfil = ({ mudarTelaFilho }: any) => {
    return (
        <>
            <Header pag={"Perfil"} descricao={"Dados da sua conta"} funcao={mudarTelaFilho}></Header>

            <hr />

            <Row>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header bg-white">
                                <div className="d-flex gap-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        Imagem
                                    </div>
                                    <div className="d-flex flex-column justify-content-center ">
                                        <h4>Nome</h4>
                                        <p className="text-body-secondary">empresa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <Col>
                                    <Row>
                                        <Col md={6}>
                                            <h6>E-mail</h6>
                                            <p>sadasdas@asdas</p>
                                        </Col>
                                        <Col md={6}>
                                            <h6>Perfil</h6>
                                            <p>Prestador de serviço</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <h6>O.S. ativas</h6>
                                            <p>0</p></Col>
                                        <Col md={6}>
                                            <h6>Serviços finalizados</h6>
                                            <p>0</p></Col>
                                    </Row>
                                </Col>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}