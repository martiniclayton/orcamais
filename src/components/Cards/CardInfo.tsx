import type { Tela } from "../../types/typeTela"

interface CardInfoProps {
    titulo: string,
    numeros: number,
}

export const CardInfo = ({titulo, numeros}: CardInfoProps) => {
    return (
        <>
            <div className="flex-1 min-w-[250px] p-4 bg-white border-card-line border border-gray-200 shadow-2xs rounded-xl">
                        <div className="card-body">
                            <h5 className="card-title mb-4 text-slate-500">{titulo}</h5>
                            <h6 className="text-2xl font-bold">{numeros}</h6>
                        </div>
                    </div>
        </>
    )
} 