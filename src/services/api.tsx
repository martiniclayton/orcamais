import { ordenServicos } from "../data/mockOrders";

const ordens = ordenServicos


export const API = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(ordens)
    }, 3000)
})