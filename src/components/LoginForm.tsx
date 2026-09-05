import { Icon } from "./Icon";
import { Link } from "react-router-dom";
import { useState } from "react";


export const LoginForm = () => {

    type TypeUser = "Prestador" | "Cliente";


    const [typeUser, setTypeUser] = useState<TypeUser>("Prestador");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [code, setCode] = useState("");

    const enviarDados = (event: any, type: TypeUser) => {

        event.preventDefault()
        if (type === "Prestador") {
            if (!email || !password) {
                alert("Preencha os campos")
            } else {
                const dados = {
                    email: email,
                    password: password
                }
                // alert(JSON.stringify(dados))
            }
        } else if (type === "Cliente") {
            if (!code) {
                alert("Informe o código")
            } else {
                const codigoCliente = {
                    code: code
                }

                alert(JSON.stringify(codigoCliente))
            }
        }
    }

    return (
        <div className="caixa-componente-login-form">
            <Icon tela={true} empresa="Orça Mais" desc="Gestão de Ordens de Serviço" />
            <div>
                <h4>Entrar no sistema</h4>
                <p>Escolha seu perfil de acesso para continuar.</p>
            </div>

            <div id="btn-type-user" className="w-100 d-flex p-1 rounded-3">
                <button className={`w-100 rounded-3 ${typeUser === "Prestador" ? "clicado" : ""}`} onClick={() => setTypeUser("Prestador")}>Prestador</button>
                <button className={`w-100 rounded-3 ${typeUser === "Cliente" ? "clicado" : ""}`} onClick={() => setTypeUser("Cliente")}>Cliente</button>
            </div>

            <div className="d-flex mt-2">
                <form className="d-flex flex-column w-100" onSubmit={(e) => enviarDados(e, typeUser)} >
                    {typeUser === "Prestador" ? (
                        <>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" className="form-control" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)} value={email} />

                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </>

                    ) : (
                        <>
                            <label htmlFor="codigoServico">Código</label>
                            <input type="text" id="codigoServico" className="form-control" placeholder="Digite o código do serviço" onChange={(e) => setCode(e.target.value)} value={code} />
                        </>
                    )}
                    <button className="w-100 btn btn-dark mt-3">{typeUser === "Prestador" ? "Acessar painel" : "Acompanhar minha O.S"}</button>
                </form>
            </div>
            <div className="text-center mt-2">
                {typeUser === "Prestador" ? (<><span>Não tem conta?</span> <Link className="link" to="/Cadastro">Cadastre seu estabelecimento</Link></>) : "Verifique o status do seu serviço"}
            </div>
        </div>
    )
}

