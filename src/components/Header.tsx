interface Header {
    pag: string,
    descricao: string,
    funcao: any
}

export const Header = (props: Header) => {
    return (
        <>
            <header className="d-flex justify-content-between align-items-center px-5">
                <div>
                    <h4>{props.pag}</h4>
                    <p className="text-body-secondary">{props.descricao}</p>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={()=> props.funcao("NovaOrdemServico")}>Nova O.S</button>
                </div>
            </header>
        </>
    )
}