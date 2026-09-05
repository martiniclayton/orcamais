import { Col, Row } from "react-bootstrap"
import { Header } from "./Header"
import { useState } from "react"
import { banco } from "../services/BancoLocal"

export const NovaOrdemServico = ({mudarTelaFilho}: any) => {


    const [nomeCliente, setNomeCliente] = useState("")
    const [cpfCliente, setCpfCliente] = useState("")
    const [telefone, setTelefone] = useState("")
    const [placa, setPlaca] = useState("")
    const [tipoServico, setTipoServico] = useState("")
    const [descricao, setDescricao] = useState("")

    const setInputs = [setNomeCliente, setCpfCliente, setTelefone, setPlaca, setTipoServico, setDescricao ]

    console.log(nomeCliente)

    const cancelarForm = ()=>{
        limparForm();
        mudarTelaFilho("DashBoardContent")
    }

    const limparForm =() =>{
        setInputs.forEach(element => {
            element("");
        });
    }   

    const enviarForm = (e: any)=>{
        e.preventDefault()
        if(!nomeCliente || !cpfCliente || !telefone || !placa || !tipoServico){
            alert("preencha os campos")
        }else{
            const ordemDeServicoDados = {
                id: "#O.S 0000",
                nomeCliente: nomeCliente,
                cpfCliente,
                telefone,
                placa,
                tipoServico,
                data: new Date(),
                status: "Em andamento",
                descricao
            }

            banco.setData(ordemDeServicoDados)

            alert("Dados cadastrados")
            console.log(ordemDeServicoDados);
            limparForm();
        }
    }

    return (
        <>
            <Header pag={"Nova Ordem de Serviço"} descricao={"Preencha os dados do cliente e do serviço."} funcao={mudarTelaFilho}></Header>
            <form onSubmit={enviarForm}>

                <div className="d-flex flex-column gap-2 w-50">
                    <hr />
                    <div className="card p-4">
                        <Row>
                            <h6>Dados do Cliente</h6>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="cliente">Cliente</label>
                                <input className="form-control" type="text" value={nomeCliente} id="cliente" placeholder="Nome Completo" onChange={(e) => setNomeCliente(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="cpf">CPF do cliente</label>
                                <input className="form-control" value={cpfCliente} onChange={(e) => setCpfCliente(e.target.value)} type="text" id="cpf" placeholder="000.000.000-00" />
                            </Col>
                            <Col>
                                <label htmlFor="tel">Telefone</label>
                                <input className="form-control" value={telefone} onChange={(e) => setTelefone(e.target.value)} type="tel" id="tel" placeholder="(00) 00000-0000" />
                            </Col>
                        </Row>
                    </div>

                    <div className="card p-4">
                        <Row>
                            <h6>Dados do serviço</h6>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="placa">Placa do veículo</label>
                                <input className="form-control" value={placa} onChange={(e) => setPlaca(e.target.value)} type="text" id="placa" placeholder="AAA-0000" />
                            </Col>
                            <Col>
                                <label htmlFor="tipoServico">Tipo de serviço</label>
                                <select id="tipoServico" className="form-select" value={tipoServico} onChange={(e) => setTipoServico(e.target.value)}>
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
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Descrição (opcional)</label>
                                <textarea className="form-control" id="desc" rows={3} placeholder="Ex.: Manutenção no sistema de freios e troca de pastilhas" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                            </div>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            <button type="submit" className="btn btn-primary">Cadastrar Ordem de Serviço</button>
                        </Col>
                        <Col>
                            <button type="button" className="btn btn-outline-primary" onClick={()=>cancelarForm()}>Cancelar</button>
                        </Col>
                    </Row>
                </div>
            </form>

        </>
    )
}