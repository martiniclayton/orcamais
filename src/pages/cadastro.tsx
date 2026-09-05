import { Col, Container, Row } from "react-bootstrap"
import { Icon } from "../components/Icon"
import { Link } from "react-router-dom"

export const Cadastro = () => {
    return (
        <>
            <Container className="h-100 d-flex justify-content-center align-items-center ">
                <Row className="d-flex  align-items-center ">
                    <Col md={6}>
                        <div className="p-4 caixa-componente-login-form">
                            <div className="d-flex flex-column gap-3">
                                <Link className="link" to={"/"}>Voltar para o login</Link>
                                <Icon tela={false} empresa="Orça Mais" desc="Gestão de Ordens de Serviço" />
                            </div>
                            <div className="py-2">
                                <h4>Criar conta</h4>
                                <p>Cadastre seu estabelecimento para começar a registrar Ordens de Serviço.</p>
                            </div>
                            <div className="d-flex flex-column">
                                <form action="" className="d-flex flex-column gap-1">
                                    <label htmlFor="nome">Nome do responsável</label>
                                    <input className="form-control" type="text" name="nome" placeholder="Carlos Mendes" />

                                    <label htmlFor="nomeEstabelecimento">Nome do estabelecimento</label>
                                    <input className="form-control" type="text" name="nomeEstabelecimento" placeholder="Oficina Mendes" />

                                    <label htmlFor="email">E-mail</label>
                                    <input className="form-control" type="text" name="email" placeholder="contato@ficina.com" />

                                    <label htmlFor="telefone">Telefone</label>
                                    <input className="form-control" type="tel" name="telefone" placeholder="(11) 91234-4567" />
                                </form>

                                <div className="d-flex w-100 mt-4">
                                    <button className="w-100 btn btn-dark">Criar conta e acessar painel</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}