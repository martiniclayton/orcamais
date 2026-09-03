import { Col, Container, Row } from "react-bootstrap"

export const LoginInfo = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-between vh-100 ">
                <div>
                    <div>Icone</div>
                    <div>
                        <span>Orça Mais</span>
                        <p>Gestão de Ordens de Serviço</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Cadastre, acompanhe e finalize suas Ordens de Serviço.</h1>
                        <p>O prestador atualiza o status do serviço e o cliente acompanha em tempo real, sem precisar ligar para o estabelecimento.</p>
                    </div>

                    <div>
                        <ul>
                            <li>Em andamento</li>
                            <li>Pronto para retirada</li>
                            <li>Finalizado</li>
                        </ul>
                    </div>
                </div>

                <div>
                    Todos os direitos reservados
                </div>
            </div>
        </>
    )
}