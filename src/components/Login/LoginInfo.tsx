export const LoginInfo = () => {
    return (
        <>
            <div className="hidden lg:flex flex-col justify-between w-1/2 bg-[#172f47] text-white p-12 border-l border-gray-100">
                <div className="my-auto space-y-6">
                    <div>
                        <h2 className="text-3xl leading-tight font-bold  mb-3">Cadastre, acompanhe e finalize suas Ordens de Serviço.</h2>
                        <p className="text-gray-300 leading-relaxed">O prestador atualiza o status do serviço e o cliente acompanha em tempo real, sem precisar ligar para o estabelecimento.</p>
                    </div>

                    <div>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 font-medium">
                            <li>Em andamento</li>
                            <li>Pronto para retirada</li>
                            <li>Finalizado</li>
                        </ul>
                    </div>
                </div>

                <div className="text-sm text-gray-400">
                    Todos os direitos reservados
                </div>
            </div>
        </>
    )
}