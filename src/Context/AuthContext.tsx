import { createContext, useEffect, useState } from "react";
import { type User } from "../data/mockUsers";
import { useNavigate } from "react-router-dom";
import { ordenServicos } from "../data/mockOrders";
import type { OrdemType } from "../types/OrdemType";
import { changeLocalStorage } from "../services/storage";

interface IAuthContext {
    user: User | null,
    login: (email: string, password: string) => Promise<boolean | undefined>,
    logout: () => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (value: boolean) => void
    ordem: OrdemType | undefined,
    cliente: (cod: string, cpf: string) => OrdemType | undefined,
    logoutCliente: () => void,
    carregarOrdens: () => void,
    banco: any[]
    // token: any
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

        const token = localStorage.getItem('tokenTrack')

        fetch('http://localhost:3000/ordem', {
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

        const response = await fetch('http://localhost:3000/login', {
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
            return
        }
        const { prestador, token } = data.resposta
        console.log(prestador)

        localStorage.setItem('tokenTrack', token);
        localStorage.setItem('userTrack', JSON.stringify(prestador));

        return true

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


    const cliente = (cod: string, cpf: string) => {
        const order: OrdemType | undefined = ordenServicos.find(ordem => ordem.codAcesso === cod && ordem.cpf === cpf)

        console.log(order);
        if (order) {
            setOrdem(order)
            setUser(null)
            console.log(`Setou a ordem ${order}`);
            return order
        } else {
            alert("Número do código inválido");
            return undefined
        }
    }

    const logoutCliente = () => {
        setOrdem(undefined);
        navigate("/");
    }


    return (
        <>
            <AuthContext.Provider value={{ user, login, logout, isLoggedIn, setIsLoggedIn, ordem, cliente, logoutCliente, carregarOrdens, banco }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}