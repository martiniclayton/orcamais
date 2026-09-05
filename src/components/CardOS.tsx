import { Col } from "react-bootstrap"

type status = "Em andamento" | "Pronto para Retirada" | "Finalizado"
interface Card {
    id: string,
    nomeCliente: string,
    tipoServico: string,
    placa: string,
    data: Date | any,
    status: status
}
export const CardOS = (cardInfo: Card) => {
    return (
        <>
            <Col>
                <div className="card">
                    <div className="card-header">{cardInfo.id}</div>
                    <div className="card-body">
                        <h6 className="card-title">{cardInfo.nomeCliente}</h6>
                        <p className="card-text text-body-secondary">{cardInfo.tipoServico} · {cardInfo.placa}</p>
                        <div className="d-flex justify-content-between">
                            <div><span>{cardInfo.data}</span></div>
                            <div className="d-flex gap-1">
                                <button className="btn btn-outline-dark">Detalhes</button>
                                <button className={`btn btn-dark ${cardInfo.status === "Finalizado" ? "disabled" : ""}`}>{cardInfo.status === "Em andamento" ? "Em andamento" : cardInfo.status === "Pronto para Retirada" ? "Pronto para Retirada" : "Finalizado"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

        </>
    )
}