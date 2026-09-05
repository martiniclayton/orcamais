import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"
import { Icon } from "./Icon"

export const LoginInfo = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-between h-100 ">
                <Icon tela={false} empresa="Orça Mais" desc="Gestão de Ordens de Serviço"/>
                <div>
                    <div>
                        <h2>Cadastre, acompanhe e finalize suas Ordens de Serviço.</h2>
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