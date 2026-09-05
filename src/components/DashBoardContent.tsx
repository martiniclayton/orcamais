import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardOS } from "./CardOS"
import { Header } from "./Header"


export const DashBoardContent = () =>{
    return(
        <>  
        <Header pag={"Dashboard"} descricao={"Olá, Carlos Mendes. Acompanhe suas Ordens de Serviço."}></Header>
        <hr />

        <section className="cards">
            <Row className="px-5">
               <Col md={4}>
                <div className="card">
                    <div className="card-body">
                        <p className="card-subtitle mb-3">Em andamento</p>
                        <h5 className="card-title">
                            titulo
                        </h5>

                    </div>
                </div>
               </Col> 
               <Col md={4}>
                <div className="card">
                    <div className="card-body">
                        <p className="card-subtitle mb-3">Prontas para retirada</p>
                        <h5 className="card-title">
                            titulo
                        </h5>
                    </div>
                </div>
               </Col> 
               <Col md={4}>
                <div className="card">
                    <div className="card-body">
                        <p className="card-subtitle mb-3">Finalizadas</p>
                        <h5 className="card-title">
                            titulo
                        </h5>
                    </div>
                </div>
               </Col> 
            </Row>

            <Row className="px-5 py-2">
                <Col md={4}>
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h6 className="card-title">Nova Ordem de Serviço</h6>
                            <p className="card-text text-body-light">Cadastrar serviço</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Nova Ordem de Serviço</h6>
                            <p className="card-text text-body-secondary">Cadastrar serviço</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Nova Ordem de Serviço</h6>
                            <p className="card-text text-body-secondary">Cadastrar serviço</p>
                        </div>
                    </div>
                </Col>
            </Row>
        <hr />

            <Row className="px-5 py-1">
                <div className="d-flex justify-content-between">
                <h6>Ordens recentes</h6>
                <Link to={""}>Ver todas</Link>
                </div>
            </Row>

            <Row className="px-5">
                <CardOS id={"#O.S 0001"} nomeCliente={"Clayton"} tipoServico={"Pneu"} placa={"FRU-5956"} data={undefined} status={"Finalizado"}/>
            </Row>
        </section>

        </>
    )
}