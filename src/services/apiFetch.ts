
import { API_URL } from "./api";

let aoExpirarSessao: (() => void) | null = null;

export const registrarExpiracaoSessao = (callback: () => void): void => {
    aoExpirarSessao = callback;
};

export const apiFetch = async (
    endpoint: string,
    options: RequestInit = {}
): Promise<Response> => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        credentials: "include",
    });

    const rotasDeAutenticacao = [
        "/login",
        "/cliente/acesso",
    ];

    const ehRotaDeAutenticacao = rotasDeAutenticacao.some(
        rota => endpoint.split("?")[0] === rota
    );

    if (response.status === 401 && !ehRotaDeAutenticacao) {
        aoExpirarSessao?.();
    }

    return response;
};
