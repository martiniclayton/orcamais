import { Col, Form, InputGroup, Row } from "react-bootstrap"
import { Header } from "./Header"
import { banco } from "../services/BancoLocal"
import { useState } from "react"

export const ServicosFinalizados = ({ mudarTelaFilho }: any) => {

    const bancoOrdens = banco.getData()

    const [pesquisa, setPesquisa] = useState("");
    const busca = pesquisa.toLowerCase()

    const bancoFinalizado = bancoOrdens.filter((ordem:any) => ordem.status === "Finalizado")


    const bancoFiltrarFinalizado = bancoFinalizado.filter((ordem: any) => {
        const nome = String(ordem.nome || "").toLowerCase()
        const id = String(ordem.id || "").toLowerCase()   
        const placa = String(ordem.placa || "").toLowerCase()
        return nome.includes(busca) || id.includes(busca) ||  placa.includes(busca)
    })


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
                            value={pesquisa}
                            onChange={(e)=> setPesquisa(e.target.value)}
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
                            bancoFiltrarFinalizado.map((ordem: any) => (
                                <tr className="text-start align-middle" key={ordem.id}>
                                    <td>{ordem.id}</td>
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