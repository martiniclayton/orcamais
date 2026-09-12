import type { User } from "../data/mockUsers"
import type { Tela } from "../types/typeTela"

interface Header{
    titulo: string,
    descricao: string,
    mudarTela: (value: Tela) => void,
}

export const Header = ({titulo, descricao, mudarTela}: Header) => {
    return (
        <>
            <div id="header" className="w-full items-center flex flex-wrap gap-5 justify-between p-5 bg-card border border-card-line border border-gray-200 shadow-2xs rounded-xl">
                <div>
                    <h1 className="font-bold text-4xl">{titulo}</h1>
                    <p className="text-slate-400">{descricao}</p>
                </div>
                <div className="flex gap-2">
                    <button type="button" className="cursor-pointer text-slate-500 bg-neutral-secondary-medium box-border border border-gray-400 hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none hover:bg-slate-800 hover:text-white trabsition-all duration-200 ease-in-out" onClick={()=>mudarTela("NovaOrdemServico")} >Nova O.S</button>
                </div>
            </div>
        </>
    )
}