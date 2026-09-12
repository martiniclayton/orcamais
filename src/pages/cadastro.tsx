import React from 'react';
import { Link } from 'react-router-dom';

export const Cadastro = () => {
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
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome do responsável</label>
                                <input 
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                                    type="text" 
                                    name="nome" 
                                    placeholder="Carlos Mendes" 
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="nomeEstabelecimento" className="text-sm font-medium text-gray-700">Nome do estabelecimento</label>
                                <input 
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                                    type="text" 
                                    name="nomeEstabelecimento" 
                                    placeholder="Oficina Mendes" 
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                                <input 
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                                    type="text" 
                                    name="email" 
                                    placeholder="contato@ficina.com" 
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone</label>
                                <input 
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                                    type="tel" 
                                    name="telefone" 
                                    placeholder="(11) 91234-4567" 
                                />
                            </div>
                        </form>

                        <div className="flex w-100 mt-6">
                            <button 
                                type="submit"
                                className="w-full py-2.5 text-white bg-gray-900 font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                                Criar conta e acessar painel
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};