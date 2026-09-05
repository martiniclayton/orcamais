import { Col, Form, InputGroup, Row } from "react-bootstrap"
import { Header } from "./Header"
import { banco } from "../services/BancoLocal"

export const ServicosFinalizados = ({ mudarTelaFilho }: any) => {

    const bancoOrdens = banco.getData()

    const bancoFinalizado = bancoOrdens.filter((ordem:any) => ordem.status === "Finalizada")


    return (
        <>
            <Header pag={"Serviços Finalizados"} descricao={`${bancoFinalizado.length} O.S. Finalizadas`} funcao={mudarTelaFilho}></Header>

            <hr />

            <Row>
                <Col md={6}>
                    <Form.Label htmlFor="search">Buscar</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="search-addon">🔍</InputGroup.Text>
                        <Form.Control
                            type="search"
                            id="search"
                            placeholder="Busque por código, cliente ou placa"
                            aria-label="Pesquisar"
                            aria-describedby="search-addon"
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Tipo de serviço</th>
                            <th scope="col">Placa</th>
                            <th scope="col">Data</th>
                            <th scope="col">Status</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bancoFinalizado.map((ordem: any, index: number) => (
                                <tr className="text-start align-middle">
                                    <td>{index}</td>
                                    <td>{ordem.nome}</td>
                                    <td>{ordem.tipoServico}</td>
                                    <td>{ordem.placa}</td>
                                    <td>{ordem.data}</td>
                                    <td>{ordem.status}</td>
                                    <td>
                                        <button className="btn btn-dark disabled">Finalizado</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Row>
        </>
    )
}