import { Col, Row } from "react-bootstrap"
import { Header } from "./Header"

export const NovaOrdemServico = () =>{
    return(
        <>
            <Header pag={"Nova Ordem de Serviço"} descricao={"Preencha os dados do cliente e do serviço."}></Header>
            <div className="d-flex flex-column gap-2 w-50">
                <hr />
            <div className="card p-4">
            <Row>
                <h6>Dados do Cliente</h6>
            </Row>
            <Row>
                <Col>
                <label htmlFor="cliente">Cliente</label>
                <input className="form-control" type="text" id="cliente" placeholder="Nome Completo"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <label htmlFor="cpf">CPF do cliente</label>
                <input className="form-control" type="text" id="cpf" placeholder="000.000.000-00"/>
                </Col>
                <Col>
                <label htmlFor="tel">Telefone</label>
                <input className="form-control" type="tel" id="cpf" placeholder="(00) 00000-0000"/>
                </Col>
            </Row>
            </div>

            <div className="card p-4">
            <Row>
                <h6>Dados do serviço</h6>
            </Row>
            <Row>
                <Col>
                <label htmlFor="placa">Placa do veículo (quando aplicável)</label>
                <input className="form-control" type="text" id="placa" placeholder="AAA-0000"/>
                </Col>
                <Col>
                <label htmlFor="tipoServico">Tipo de serviço</label>
                <select id="tipoServico" className="form-select">
                    <option value="">Selecione o tipo</option>
                    <option value="Troca de oleo">Troca de oleo</option>
                    <option value="Revisão elétrica">Revisão elétrica</option>
                    <option value="Alinhamento e balanceamento">Alinhamento e balanceamento</option>
                    <option value="Assistência técnica">Assistência técnica</option>
                    <option value="Diagóstico">Diagóstico</option>
                </select>
                </Col>
            </Row>
            <Row>
                <Col>
                <label htmlFor="date">Data de cadastro</label>
                <input className="form-control" type="date" id="date"/>
                </Col>
            </Row>
            <Row>
                <div className="mb-3">
                <label htmlFor="desc" className="form-label">Descrição (opcional)</label>
                <textarea className="form-control" id="desc" rows={3} placeholder="Ex.: Manutenção no sistema de freios e troca de pastilhas"></textarea>
                </div>
            </Row>
            </div>
            <Row>
                <Col>
                <button className="btn btn-primary">Cadastrar Ordem de Serviço</button>
                </Col>
                <Col>
                <button className="btn btn-outline-primary">Cancelar</button>
                </Col>
            </Row>
            </div>

        </>
    )
}