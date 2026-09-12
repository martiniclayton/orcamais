import type { NotificacoesType } from "../../types/NotificacoesType";

export const NotificacaoCard = ({titulo, data, tipoServico, cliente, status, id, placa}: NotificacoesType) => {

    const dataFormatada = data instanceof Date 
        ? data.toLocaleString('pt-BR') 
        : String(data);
    return (
        <>
            <div className="mb-2">
                <div className="sm:max-w-[500px]">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="p-4">
                            <div className="mb-2">
                                <h6 className="text-base font-semibold text-gray-800">{titulo}</h6>
                            </div>
                            <div className="text-sm text-gray-600">
                                <p className="mb-1">{`Servico: ${tipoServico} para o cliente ${cliente}`}</p>
                                <p>{`Status: ${status}`}</p>
                                <p>{`Placa: ${placa}`}</p>
                                <p className="text-gray-400 mt-4">{dataFormatada}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}