import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Prestador } from '../types/typePrestador';




export const Cadastro = () => {


    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [estabelecimento, setEstabelecimento] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const navigate = useNavigate()

    const enviarCadastro = async (e: any) => {
        e.preventDefault()

        const user: Prestador = {
            nome: nome,
            cpf: cpf,
            estabelecimento: estabelecimento,
            email: email,
            telefone: telefone,
            senha: senha,
            confirmarSenha: confirmarSenha
        }
        const todosPreenchidos = Object.values(user).every(valor => Boolean(valor));
        
        if(!todosPreenchidos){
            alert("Preencha os campos necessários")
            return
        }
        if (senha !== confirmarSenha) {
            alert("Senhas não coincidem")
            return
        }

        const resposta = await fetch('http://localhost:3000/prestadores', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        const dados = await resposta.json()

        if(resposta.ok){
            console.log(dados.mensagem)
        }else{
            console.log("Erro", dados.mensagem)
        }
        if(dados.mensagem === "Prestador já existe"){
            alert("CPF já cadastrado")
        }
        navigate('/')

    }
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 p-4">
            <div className="w-full max-w-lg">
                <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-md">

                    <div className="flex flex-col gap-3 mb-6">
                        <Link className="text-blue-600 hover:underline text-sm font-medium" to="/">
                            &larr; Voltar para o login
                        </Link>
                    </div>

                    <div className="py-2 mb-4">
                        <h4 className="text-2xl font-bold text-gray-800">Criar conta</h4>
                        <p className="text-sm text-gray-500">Cadastre seu estabelecimento para começar a registrar Ordens de Serviço.</p>
                    </div>

                    <div className="flex flex-col">
                        <form onSubmit={(e) => enviarCadastro(e)} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome do responsável</label>
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    type="text"
                                    name="nome"
                                    placeholder="Carlos Mendes"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="nome" className="text-sm font-medium text-gray-700">CPF</label>
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    type="text"
                                    name="nome"
                                    placeholder="000.000.000-00"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="nomeEstabelecimento" className="text-sm font-medium text-gray-700">Nome do estabelecimento</label>
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    type="text"
                                    name="nomeEstabelecimento"
                                    placeholder="Oficina Mendes"
                                    value={estabelecimento}
                                    onChange={(e) => setEstabelecimento(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    type="text"
                                    name="email"
                                    placeholder="contato@ficina.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone</label>
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    type="tel"
                                    name="telefone"
                                    placeholder="(11) 91234-4567"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="Senha" className="text-sm font-medium text-gray-700">Senha</label>
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    type="password"
                                    name="Senha"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="confirmarSenha" className="text-sm font-medium text-gray-700">Confirmar senha</label>
                                <input
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    type="password"
                                    name="confirmarSenha"
                                    placeholder="Confirmar senha"
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                />
                            </div>
                            <div className="flex w-full mt-6">
                                <button
                                    type="submit"
                                    className="w-full py-2.5 text-white bg-gray-900 font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                                >
                                    Criar conta e acessar painel
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};