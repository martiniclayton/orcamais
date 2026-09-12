import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { typeUser } from "../../types/typeUser";
import { MockUsers } from "../../data/mockUsers";
import { ordenServicos } from "../../data/mockOrders";

export const LoginForm = () => {

    const [typeUser, setTypeUser] = useState<typeUser>("Prestador");
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");

    const enviarDados = (e: React.FormEvent<HTMLFormElement>, tipo: typeUser) => {
        e.preventDefault();

        if(tipo === "Prestador"){
            if(!email || !password){
                alert("Preencha os campos necessários");
            } else{
                const user = MockUsers.find(user => user.email === email && user.password === password);

                if(user){
                    alert(`Seja bem vindo ${user.nome}`)
                    localStorage.setItem("prestador", JSON.stringify(user))
                    navigate("/DashboardPage")
                } else{
                    alert("E-mail ou senha inválidos")
                }
            }
        } else if(tipo === "Cliente"){
            if(!code){
                alert("Informe o código da ordem de serviço")
            } else{
                const order = ordenServicos.find(ordem => ordem.id === code) 

                if(order){
                    alert(`Sua ordem está em ${order?.status}`)
                    navigate(`/Cliente?${order.id}`)
                } else{
                    alert("Número do código inválido");
                }
            }
        }
    };

    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 lg:p-12">
                <div className="w-full max-w-md">

                    <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-800 mt-4">Entrar no sistema</h4>
                        <p className="text-sm text-gray-500">Escolha seu perfil de acesso para continuar.</p>
                    </div>

                    <div className="flex w-full p-1 bg-gray-100 rounded-lg mb-6">
                        <button
                            type="button"
                            className={`w-full py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${typeUser === "Prestador"
                                ? "bg-white text-gray-800 shadow-sm"
                                : "text-gray-500 hover:text-gray-800"
                                }`}
                            onClick={() => setTypeUser("Prestador")}
                        >
                            Prestador
                        </button>
                        <button
                            type="button"
                            className={`w-full py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${typeUser === "Cliente"
                                ? "bg-white text-gray-800 shadow-sm"
                                : "text-gray-500 hover:text-gray-800"
                                }`}
                            onClick={() => setTypeUser("Cliente")}
                        >
                            Cliente
                        </button>
                    </div>

                    <form className="flex flex-col w-full gap-4" onSubmit={(e) => enviarDados(e, typeUser)}>
                        {typeUser === "Prestador" ? (
                            <>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        placeholder="seu@email.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="senha" className="text-sm font-medium text-gray-700">Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col gap-1">
                                <label htmlFor="codigoServico" className="text-sm font-medium text-gray-700">Código</label>
                                <input
                                    type="text"
                                    id="codigoServico"
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Digite o código do serviço"
                                    onChange={(e) => setCode(e.target.value)}
                                    value={code}
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-2.5 mt-2 text-white bg-gray-900 font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                            {typeUser === "Prestador" ? "Acessar painel" : "Acompanhar minha O.S"}
                        </button>
                    </form>

                    <div className="text-center mt-6 text-sm text-gray-600">
                        {typeUser === "Prestador" ? (
                            <>
                                <span>Não tem conta? </span>
                                <Link className="text-blue-600 hover:underline font-medium" to="/Cadastro">Cadastre seu estabelecimento</Link>
                            </>
                        ) : (
                            <span>Verifique o status do seu serviço</span>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}