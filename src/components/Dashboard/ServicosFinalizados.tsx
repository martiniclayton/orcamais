import { AuthContext } from "../../Context/AuthContext"
import { apiFetch } from "../../services/apiFetch"
import type { Tela } from "../../types/typeTela"
import { TabelaServicos } from "./TabelaServicos"
import { useContext, useEffect, useState } from "react"

interface ServicosFinalizadosProps {
    mudarTela: (value: Tela) => void,
}

export const ServicosFinalizados = ({ mudarTela }: ServicosFinalizadosProps) => {

    const [bancoFinalizado, setBancoFinalizado] = useState([])
    // const token = localStorage.getItem('tokenTrack')

    const { logout } = useContext(AuthContext);

    useEffect(() => {

        const pegarOrdensFinalizadas = async () =>{
            const response = await apiFetch("/ordem?status=Finalizado");

            const data = await response.json();

            if(response.status === 401) {
                alert("Sessão expirada");
                logout()
            };

            if(!response.ok){
                throw new Error("Erro na requisição");
            };

            setBancoFinalizado(data.ordens);
        }
        pegarOrdensFinalizadas();

    }, [])

    const quantidade = bancoFinalizado.length

    return (
        <>
            <TabelaServicos tela={"Serviços Finalizados"} descricao={`${quantidade} O.S ${quantidade > 1 ? "Finalizadas" : "Finalizada"}`} tipoTabela={bancoFinalizado} mudarTela={mudarTela}  ></TabelaServicos>
        </>
    )
}