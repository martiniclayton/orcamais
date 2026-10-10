import { createContext, useEffect, useState } from "react";
import { type User } from "../data/mockUsers";
import { useNavigate } from "react-router-dom";
import type { OrdemType } from "../types/OrdemType";
import { changeLocalStorage } from "../services/storage";
import { API_URL } from "../services/api";

interface IAuthContext {
    user: User | null,
    login: (email: string, password: string) => Promise<boolean | undefined>,
    logout: () => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (value: boolean) => void
    ordem: OrdemType | undefined,
    clienteLogin: (cod: string, cpf: string) => Promise<OrdemType | undefined>,
    logoutCliente: () => void,
    carregarOrdens: () => void,
    banco: any[]
    // token: any,
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider = ({ children }: any) => {

    const [user, setUser] = useState<User | null>(null);
    const [ordem, setOrdem] = useState<OrdemType | undefined>(undefined);
    const navigate = useNavigate()
    // const isLoggedIn = user ? true : false
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [banco, setBanco] = useState([])
    // const [Loading, setLoading] = useState(false)
    // const [token, setToken] = useState(null)

    // const userTrack: any = localStorage.getItem('userTrack');
    // const user = JSON.parse(userTrack)

    useEffect(() => {
        const tokenTrack = localStorage.getItem('tokenTrack')
        if (tokenTrack) {
            setIsLoggedIn(true)
        }

    }, [])


    const carregarOrdens = () => {
        console.log("CARREGAR ORDENS CHAMADO")

        const token = localStorage.getItem('tokenTrack')

        fetch(`${API_URL}/ordem`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setBanco(data.Ordens)
            })
            .catch(error => {
                console.error("Erro ao buscar ordens", error);
            })

        const userTrack = localStorage.getItem('userTrack')
        if (userTrack) {
            const user = JSON.parse(userTrack)
            setUser(user)
        }


    }

    const login = async (email: string, password: string) => {

        return new Promise(async(resolve) => {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    senha: password
                })
            })

            const data = await response.json();
            console.log(response)

            if (!response.ok) {
                console.log(data.mensagem)
                alert(data.mensagem)
                resolve(undefined)
                return
            }
            const { prestador, token } = data.resposta
            console.log(prestador)

            localStorage.setItem('tokenTrack', token);
            localStorage.setItem('userTrack', JSON.stringify(prestador));

            resolve(true)

        })

        // const userMock = MockUsers.find(user => user.email === email && user.password === password);

        // if(userMock){
        //     setUser(userMock);
        //     setIsLoggedIn(true);
        //     setOrdem(undefined);
        //     return userMock
        // } else{
        //     alert("E-mail ou password inválidos")
        //     return null
        // }
    }

    // const storage = getAllLocalStorage()

    // useEffect(() => {
    //     if (storage) {
    //         const { login } = JSON.parse(storage);
    //         setIsLoggedIn(login)
    //     }
    // }, [])

    const logout = () => {
        setUser(null);
        changeLocalStorage({ login: false })
        localStorage.removeItem('tokenTrack')
        localStorage.removeItem('userTrack')
        navigate("/");
    }

    const clienteLogin = async (code: string, cpf: string): Promise<any> => {

        try {
            const resposta = await fetch(`${API_URL}/ordem/acesso`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: code,
                    cpf: cpf
                })
            }
            )
            const data = await resposta.json()

            if (!resposta.ok) {
                alert(data.mensagem)
                return false
            }

            localStorage.setItem('tokenClienteTrack', data.token)

            return true
        }
        catch {
            throw new Error("Erro")
        }

        // const resposta = await fetch(`${API_URL}/ordem/acesso`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify( {
        //         code: code,
        //         cpf: cpf
        //     })
        // });
        // const dados = await resposta.json()

        // if(!resposta.ok){
        //     alert(dados.mensagem)
        //     return false
        // }

        // localStorage.setItem("tokenClienteTrack", dados.token )

        // return true
    }


    const logoutCliente = () => {
        setOrdem(undefined);
        localStorage.removeItem("tokenClienteTrack")
        localStorage.removeItem("clienteTrack")
        navigate("/");
    }


    return (
        <>
            <AuthContext.Provider value={{ user, login, logout, isLoggedIn, setIsLoggedIn, ordem, clienteLogin, logoutCliente, carregarOrdens, banco }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}