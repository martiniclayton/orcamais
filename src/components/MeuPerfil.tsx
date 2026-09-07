import { Col, Row } from "react-bootstrap"

interface PerfilCliente {
    nome: string,
    email: string
}


export const MeuPerfil = (cliente: PerfilCliente) => {
    return (
            <>
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
                                        <h4>{cliente.nome}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <Col>
                                    <Row>
                                        <Col md={6}>
                                            <h6>E-mail</h6>
                                            <p>`{cliente.email}</p>
                                        </Col>
                                        <Col md={6}>
                                            <h6>Perfil</h6>
                                            <p>Cliente</p>
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