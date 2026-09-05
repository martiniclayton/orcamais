import { Col, Form, InputGroup, Row } from "react-bootstrap"
import { Header } from "./Header"

type status = "Em andamento" | "Pronto" | "Finalizado"
interface Os {
    id: string,
    cliente: string,
    data: Date | any
    tipoServico: string,
    placa: string,
    status: status
}

const dadoExemplo: Os = {
    id: "ASDD55",
    cliente: "Clayton",
    data: "15/4/2000",
    tipoServico: "Troca de oléo",
    placa: "FRU-5958",
    status: "Pronto"

}

export const OrdemServico = ()=>{
    return(
        <>
            <Header pag={"Ordens de Serviço"} descricao={" O.S. ativas"}></Header>

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
            <tr>
                <td>{dadoExemplo.id}</td>
                <td>{dadoExemplo.cliente}</td>
                <td>{dadoExemplo.tipoServico}</td>
                <td>{dadoExemplo.placa}</td>
                <td>{dadoExemplo.data}</td>
                <td>{dadoExemplo.status}</td>
                <td>
                <button>Detalhes</button>
                <button>Status</button>
                </td>
            </tr>
        </tbody>
    </table>
</Row>
        </>
    )
}