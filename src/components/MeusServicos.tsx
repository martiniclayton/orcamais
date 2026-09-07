import { Col, Row } from "react-bootstrap"
import { Notificacao } from "./NotificacaoCard"
import { CardOS } from "./CardOS"
import { banco, notificacoesBanco } from "../services/BancoLocal"

export const MeusServicos = ({cliente}: any) => {


    const puxarBanco = banco.getData()
    console.log(puxarBanco)
    const ordens = puxarBanco.filter((ordem: any) => ordem.nome === cliente.nome && ordem.status === "Finalizado")
    
    const puxarNotificacao = notificacoesBanco.getData()
    const notificacaoUser = puxarNotificacao.filter((noti: any) => noti.placa === "QER1235")
    console.log(notificacaoUser)


    return (
        <>
            <Row className="w-100">
                <Col md={12}>
                    <p>{`Olá, ${cliente.nome}`}</p>
                    <h3>Qual é o status do meu serviço?</h3>
                </Col>
                <Col md={12}>
                    {notificacaoUser.slice(-1).toReversed().map((ordem: any) => ( 
                         <Notificacao titulo={ordem.titulo} mensagem={ordem.mensagem} data={ordem.data}></Notificacao> 
                    ))} 
                </Col>
            </Row>

            <Row>
                <div className="card">
                    <div className="card-header">teste</div>
                    <div className="card-body">
                        <div className="card-title">
                            <h5>Revisão elétrica</h5>
                        </div>
                        <div className="card-subtitle">
                            <p>{`Veículo: ${notificacaoUser[0].placa}`}</p>
                        </div>
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="card-subtitle">
                                    Status atual
                                </div>
                                <div className="card-title">
                                    <h2>{ordens.slice(-1).map((ordem: any) => (ordem.status))}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row className="py-5">
                <h4>Serviços finalizados</h4>
                {ordens.toReversed().map((ordem: any) => (
                    <Col md={12} className="mb-2">
                    <CardOS id={ordem.id} nomeCliente={ordem.nome} tipoServico={ordem.tipoServico} placa={ordem.placa} data={ordem.data} status={ordem.status}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}