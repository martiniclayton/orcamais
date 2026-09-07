import { Col, Row } from "react-bootstrap"

interface Notificacao {
    titulo: string,
    mensagem: string,
    data: string
}

export const Notificacao = (props: Notificacao) =>{
    return(
        <>
            <Row className="mb-2">
                <Col md={6}>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h6>{props.titulo}</h6>
                            </div>
                            <div className="card-text">
                                <p>{props.mensagem}</p>
                                <p>{props.data}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}