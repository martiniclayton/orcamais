import { Col, Form, InputGroup, Row } from "react-bootstrap"
import { Header } from "./Header"
import { banco, notificacoesBanco } from "../services/BancoLocal"
import { useState } from "react"


export const OrdemServico = ({ mudarTelaFilho }: any) => {

    let bancoPrincipal = banco.getData()
    let bancoOrdens = bancoPrincipal.filter((ordem: any) => ordem.status !== "Finalizado");

    const [buscar, setBuscar] = useState("");
    const termoBusca = buscar.toLowerCase();

    
    const [bancoEstado, setBancoEstado] = useState(bancoOrdens);
    
    const buscaFiltrada = bancoEstado.filter((ordem: any) => {
        
        const nome = String(ordem.nome || "").toLowerCase()
        const id = String(ordem.id || "").toLowerCase()
        const placa = String(ordem.placa || "").toLowerCase()
        
        return nome.includes(termoBusca) ||
        id.includes(termoBusca) ||
        placa.includes(termoBusca);
    })

    const mudarStatus = (id: number)=>{
        const ordem = bancoPrincipal.find((ordem: any) => ordem.id === id)
        console.log(ordem);

        const novoEstados = ordem.status === "Em andamento" ? "Pronto para retirada" : ordem.status === "Pronto para retirada" ? "Finalizado" : ""

        console.log(novoEstados === "Finalizado")

        bancoPrincipal = bancoPrincipal.map((ordem: any) => {
            if(ordem.id === id){
                return {...ordem, status: novoEstados}
            }
            return ordem;
        })

        console.log(bancoPrincipal)
        banco.updateData(bancoPrincipal);

        setBancoEstado(bancoPrincipal.filter((ordem: any) => ordem.status !== "Finalizado"))

        if(novoEstados === "Finalizado"){
            notificacoesBanco.setNotification({id: `${notificacoesBanco.getData().length}`, titulo: "ORDEM FINALIZADA", mensagem: `A O.S. #${id} do cliente ${ordem.nome} foi finalizada com sucesso!`, data: new Date()})
        } else{
            notificacoesBanco.setNotification({id: `${notificacoesBanco.getData().length}`, titulo: `MUDANÇA DE STATUS`, mensagem: `a O.S ${ordem.id} - ${ordem.tipoServico} do cliente ${ordem.nome} agora está ${novoEstados}`, data: new Date()})
        }
    }



    return (
        <>
            <Header pag={"Ordens de Serviço"} descricao={" O.S. ativas"} funcao={mudarTelaFilho}></Header>

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
                            value={buscar}
                            onChange={(e) => setBuscar(e.target.value)}
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
                            buscaFiltrada.map((ordem: any) => (
                                <tr className="text-start align-middle" key={ordem.id}>
                                    <td>{ordem.id}</td>
                                    <td>{ordem.nome}</td>
                                    <td>{ordem.tipoServico}</td>
                                    <td>{ordem.placa}</td>
                                    <td>{ordem.data}</td>
                                    <td>{ordem.status}</td>
                                    <td>
                                        <button onClick={()=> mudarStatus(ordem.id)} className={`btn btn-outline-dark ${ordem.status === "Finalizado" ? "disabled" : ""}`}>{ordem.status === "Em andamento" ? "Marcar como pronto" : ordem.status === "Pronto para retirada" ? "Marcar como finalizado" : ordem.status === "Finalizado" ? "Finalizado" : ""} </button>
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