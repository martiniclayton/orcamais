import type { OrdemType } from "../types/OrdemType"

interface OrderCardProps  {
    ordem: OrdemType
}

export const OrderCard = ({ ordem }: OrderCardProps ) => {


    return (
        <>
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg text-gray-800">{ordem.nome}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                        {ordem.status}
                    </span>
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Serviço:</strong> {ordem.tipoServico}</p>
                    <p><strong>Placa:</strong> {ordem.placa}</p>
                    <p><strong>Telefone:</strong> {ordem.telefone}</p>
                </div>
            </div>        </>
    )
}