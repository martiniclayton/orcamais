interface OrcaMais {
    login: boolean
}


export const orcaMaisLocal: OrcaMais = {
    login: false
}

export const getAllLocalStorage = (): string | null =>{
    return localStorage.getItem("orcaMais");
}

export const createLocalStorage = (object: OrcaMais): void =>{
    localStorage.setItem("orcaMais", JSON.stringify(object));
}

export const changeLocalStorage = (object: OrcaMais): void =>{
    localStorage.setItem("orcaMais", JSON.stringify(object))
}