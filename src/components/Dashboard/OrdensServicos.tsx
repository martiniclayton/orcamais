import { useEffect, useState } from "react"
import type { Tela } from "../../types/typeTela"
import { TabelaServicos } from "./TabelaServicos"
import { API_URL } from "../../services/api";

interface OrdensServicosProps {
    mudartela: (value: Tela) => void,
}

export const OrdensServicos = ({ mudartela }: OrdensServicosProps) => {

    const [bancoAtivos, setbancoAtivos] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem('tokenTrack')

    const carregarOrdensAtivas = () => {
        fetch(`${API_URL}/ordem?status=Ativos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setbancoAtivos(data.ordens);
                setLoading(false)
            })
            .catch(error => {
                console.error("Erro ao buscar ordens", error);
            })
    }

    useEffect(() => {
        carregarOrdensAtivas()
    }, [])


    const quantidades = bancoAtivos.length

    if (loading) {
        return <p className="p-5 text-zinc-500">Carregando ordens...</p>;
    }
    return (
        <>
            <TabelaServicos tela={"Ordens de Serviço"} descricao={`${quantidades} O.S Ativas`} tipoTabela={bancoAtivos} mudarTela={mudartela} renderizarOrdensAtivas={carregarOrdensAtivas}></TabelaServicos>
        </>
    )
}