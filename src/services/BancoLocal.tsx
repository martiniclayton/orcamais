interface OrdemServico {
    nomeCliente: string,
    cpfCliente: string,
    telefone: string,
    placa: string,
    tipoServico: string,
    data: Date,
    status: string,
    descricao?: string
}

export class bancoDados {
    nomeBanco: string
    constructor(nomeBanco: string) {
        this.nomeBanco = nomeBanco
    }

    getData = (): any => {
        const banco = localStorage.getItem(this.nomeBanco);
        return banco ? JSON.parse(banco) : [];
    }

    setData = ({ nomeCliente, cpfCliente, telefone, placa, tipoServico, data, status, descricao }: OrdemServico) => {
        const banco = this.getData();
        banco.push({ nome: nomeCliente, CPF: cpfCliente, telefone: telefone, placa: placa, tipoServico: tipoServico, data: data, status: status, descricao: descricao })
        localStorage.setItem(this.nomeBanco, JSON.stringify(banco))
    }
}

export const banco = new bancoDados("OrdensDeServicos");
