import type { Tela } from "../../types/typeTela"
import { TabelaServicos } from "./TabelaServicos"
import { useEffect, useState } from "react"

interface ServicosFinalizadosProps {
    mudarTela: (value: Tela) => void,
}

export const ServicosFinalizados = ({ mudarTela }: ServicosFinalizadosProps) => {

    const [bancoFinalizado, setBancoFinalizado] = useState([])
    const token = localStorage.getItem('tokenTrack')

    useEffect(() => {
        fetch('https://orca-mais-backend.onrender.com/ordem?status=Finalizado', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setBancoFinalizado(data.ordens)
            })
            .catch(error => {
                console.error("Erro ao buscar ordens", error);
            })
    }, [])

    const quantidade = bancoFinalizado.length

    return (
        <>
            <TabelaServicos tela={"Serviços Finalizados"} descricao={`${quantidade} O.S ${quantidade > 1 ? "Finalizadas" : "Finalizada"}`} tipoTabela={bancoFinalizado} mudarTela={mudarTela}  ></TabelaServicos>
        </>
    )
}