import type { Tela } from "../types/typeTela"

interface Header {
    titulo: string,
    descricao: string,
    mudarTela: (value: Tela) => void,
}

export const Header = ({ titulo, descricao, mudarTela }: Header) => {
    return (
        <>
            <div id="header" className="w-full items-center flex flex-wrap gap-5 justify-between p-5 bg-card border border-card-line border border-gray-200 shadow-2xs rounded-xl">
                <div>
                    <h1 className="font-bold text-4xl">{titulo}</h1>
                    <p className="text-slate-400">{descricao}</p>
                </div>
                <div className="flex gap-2">
                    <button type="button" className="px-4 py-2 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg bg-primaryb border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none hover:bg-slate-800 hover:text-white trabsition-all duration-200 ease-in-out cursor-pointer" onClick={() => mudarTela("NovaOrdemServico")}>
                        Nova O.S
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>

                    </button>
                </div>
            </div>
        </>
    )
}