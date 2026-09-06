import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardOS } from "./CardOS"
import { Header } from "./Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { banco } from "../services/BancoLocal";


export const DashBoardContent = ({mudarTelaFilho}: any) =>{
    

    const bancoOrdens = banco.getData()

    const OrdemEmAndamento = bancoOrdens.filter((ordem: any) => ordem.status === "Em andamento");
    const ProntoParaRetirada = bancoOrdens.filter((ordem: any) => ordem.status === "Pronto para retirada");
    const Finalizadas = bancoOrdens.filter((ordem: any) => ordem.status === "Finalizado");
    

    return(
        <>  
        <Header pag={"Dashboard"} descricao={"Olá, Carlos Mendes. Acompanhe suas Ordens de Serviço."} funcao={mudarTelaFilho}></Header>
        <hr />

        <section className="cards">
            <Row className="px-5">
               <Col md={4}>
                <div className="card">
                    <div className="card-body">
                        <p className="card-subtitle mb-3">Em andamento</p>
                        <h5 className="card-title">
                            {OrdemEmAndamento.length}
                        </h5>
                    </div>
                </div>
               </Col> 
               <Col md={4}>
                <div className="card">
                    <div className="card-body">
                        <p className="card-subtitle mb-3">Prontas para retirada</p>
                        <h5 className="card-title">
                            {ProntoParaRetirada.length}
                        </h5>
                    </div>
                </div>
               </Col> 
               <Col md={4}>
                <div className="card">
                    <div className="card-body">
                        <p className="card-subtitle mb-3">Finalizadas</p>
                        <h5 className="card-title">
                            {Finalizadas.length}
                        </h5>
                    </div>
                </div>
               </Col> 
            </Row>

            <Row className="px-5 py-2">
                <Col md={4}>
                    <div id="card-tag-adc-os" className="card bg-dark text-light card-animation" onClick={()=> mudarTelaFilho("NovaOrdemServico")} >
                        <div className="card-body d-flex gap-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div>
                            <h6 className="card-title">Nova Ordem de Serviço</h6>
                            <p className="card-text text-body-light">Cadastrar serviço</p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="card card-servicos card-animation" onClick={()=> mudarTelaFilho("OrdemServico")}>
                        <div className="card-body">
                            <h6 className="card-title">Ordens de Serviço</h6>
                            <p className="card-text text-body-secondary">
                                {bancoOrdens.length}
                            </p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="card card-servicos card-animation" onClick={()=> mudarTelaFilho("ServicosFinalizados")}>
                        <div className="card-body">
                            <h6 className="card-title">Serviços Finalizados</h6>
                            <p className="card-text text-body-secondary">{Finalizadas.length}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        <hr />

            <Row className="px-5 py-1">
                <div className="d-flex justify-content-between">
                <h6>Ordens recentes</h6>
                <p onClick={() => mudarTelaFilho("OrdemServico")} >Ver ordem ativas</p>
                </div>
            </Row>

            <Row className="px-5" id="boxCard">
                {
                bancoOrdens.slice(-5).toReversed().map((ordem:any) =>
                    (<Col key={ordem.id} className="mb-2" md={12}><CardOS id={ordem.id} nomeCliente={ordem.nome} tipoServico={ordem.tipoServico} placa={ordem.placa} data={ordem.data} status={ordem.status} descricao={ordem.descricao}></CardOS></Col>)
                )}

            </Row>
        </section>

        </>
    )
}