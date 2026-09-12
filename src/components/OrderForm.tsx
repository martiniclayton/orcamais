import { useState, type SubmitEvent } from "react";
import type { OrdemType } from "../types/OrdemType";


interface addOrdem {
  array: OrdemType[],
  setArrayState: any
}

export const OrderForm = ({array, setArrayState}: addOrdem) => {

    const [nome, setnome] = useState("")
    const [cpf, setcpf] = useState("")
    const [telefone, settelefone] = useState("")
    const [placa, setplaca] = useState("")
    const [tipoServico, settipoServico] = useState("")
    const [data, setdata] = useState("")
    const [descricao, setdescricao] = useState("")

    const inputs  = [setnome, setcpf, settelefone, setplaca, settipoServico, setdata, setdescricao] 

    const limparInputs = () =>{
        inputs.forEach(input =>{
            input("")
        })
    }

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if(!nome || !cpf || !telefone || !placa || !tipoServico || !data ){
          alert("Preencha os campos")
          return
        } else{
          const novaOrdem = {
            id: 0,
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            placa: placa,
            dataCriacao: new Date(),
            tipoServico: tipoServico,
            status: "Em andamento"
          }
          console.log(`Inserindo dados no array`)

          setArrayState([...array, novaOrdem])

          console.log("Dados setados")
        }
        limparInputs()
    }


    return (
    <div className="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 min-h-screen relative isolate antialiased dark:text-neutral-100">
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0" />
        <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-fuchsia-300 via-orange-300 to-rose-200 opacity-40 blur-3xl dark:opacity-0" />
        <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-orange-300 via-amber-200 to-rose-100 opacity-60 blur-3xl dark:from-orange-600 dark:via-amber-500 dark:to-rose-400 dark:opacity-64" />
      </div>

      {/* Cabeçalho */}
      <header className="w-full bg-white/80 dark:bg-neutral-900/80 sticky top-0 z-20 backdrop-blur-md border-b border-zinc-200/60 dark:border-white/8">
        <div className="mx-auto px-6 py-3 items-center max-w-3xl flex gap-3">
          <button
            aria-label="Abrir menu"
            type="button"
            className="inline-flex gap-2.5 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-150 items-center rounded-md px-3 py-2 text-neutral-600"
          >
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-sm font-medium tracking-wide">Abrir menu</span>
          </button>
          <span className="h-4 w-px bg-zinc-200 dark:bg-white/10 ml-1" />
          <span className="text-xs font-medium tracking-widest text-neutral-400 sm:block uppercase dark:text-neutral-500 hidden">
            Sistema de O.S.
          </span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="mx-auto px-6 py-10 md:py-14 max-w-3xl">
        <div className="mb-9">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
            Nova Ordem de Serviço
          </h1>
          <p className="mt-2 text-base text-neutral-500 leading-relaxed dark:text-neutral-400">
            Preencha os dados do cliente e do serviço.
          </p>
        </div>

        <form noValidate  className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
          {/* Dados do Cliente */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-zinc-200/70 dark:border-white/10 overflow-hidden">
            <div className="px-6 py-4 items-center border-b border-zinc-100 dark:border-white/6 flex gap-3">
              <span className="w-0.5 h-4 rounded-full bg-neutral-900 dark:bg-indigo-400 shrink-0" />
              <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase dark:text-neutral-500">
                Dados do cliente
              </h2>
            </div>
            <div className="px-6 py-6 space-y-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cliente"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Cliente
                </label>
                <input
                  name="cliente"
                  autoComplete="name"
                  type="text"
                  placeholder="Nome completo"
                  className="border border-zinc-300/70 dark:border-white/15 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 hover:border-zinc-400 dark:hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 w-full rounded-lg bg-white dark:bg-neutral-800/50 px-4 py-2.5 text-sm text-neutral-900"
                  id="cliente"
                  value={nome} onChange={(e) => setnome(e.target.value)}
                />
              </div>
              <div className="sm:grid-cols-2 grid grid-cols-1 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cpf"
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    CPF do cliente
                  </label>
                  <input
                    name="cpf"
                    inputMode="numeric"
                    maxLength={14}
                    type="text"
                    placeholder="000.000.000-00"
                    className="border border-zinc-300/70 dark:border-white/15 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 hover:border-zinc-400 dark:hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 w-full rounded-lg bg-white dark:bg-neutral-800/50 px-4 py-2.5 text-sm text-neutral-900"
                    id="cpf"
                    value={cpf} onChange={(e) => setcpf(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="telefone"
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Telefone
                  </label>
                  <input
                    name="telefone"
                    autoComplete="tel"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="border border-zinc-300/70 dark:border-white/15 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 hover:border-zinc-400 dark:hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 w-full rounded-lg bg-white dark:bg-neutral-800/50 px-4 py-2.5 text-sm text-neutral-900"
                    id="telefone"
                    value={telefone} onChange={(e) => settelefone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dados do Serviço */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-zinc-200/70 dark:border-white/10 overflow-hidden">
            <div className="px-6 py-4 items-center border-b border-zinc-100 dark:border-white/6 flex gap-3">
              <span className="w-0.5 h-4 rounded-full bg-neutral-900 dark:bg-indigo-400 shrink-0" />
              <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase dark:text-neutral-500">
                Dados do serviço
              </h2>
            </div>
            <div className="px-6 py-6 space-y-5">
              <div className="sm:grid-cols-2 grid grid-cols-1 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="placa"
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    <span>Placa do veículo</span>{' '}
                    <span className="font-normal text-neutral-400 dark:text-neutral-500">
                      (quando aplicável)
                    </span>
                  </label>
                  <input
                    name="placa"
                    maxLength={7}
                    type="text"
                    placeholder="ABC1D23"
                    className="border border-zinc-300/70 dark:border-white/15 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 uppercase hover:border-zinc-400 dark:hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 w-full rounded-lg bg-white dark:bg-neutral-800/50 px-4 py-2.5 text-sm text-neutral-900 tracking-widest"
                    id="placa"
                    value={placa} onChange={(e) => setplaca(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="tipo-servico"
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Tipo de serviço
                  </label>
                  <div className="relative">
                    <select
                      name="tipo-servico"
                      defaultValue=""
                      className="appearance-none border border-zinc-300/70 dark:border-white/15 dark:text-neutral-100 hover:border-zinc-400 dark:hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 cursor-pointer w-full rounded-lg bg-white dark:bg-neutral-800/50 px-4 py-2.5 pr-10 text-sm text-neutral-900"
                      id="tipo-servico"
                      value={tipoServico} onChange={(e) => settipoServico(e.target.value)}
                    >
                      <option value="" className="dark:text-neutral-600 text-neutral-400">
                        Selecione o tipo
                      </option>
                      <option value="manutencao-preventiva">Manutenção preventiva</option>
                      <option value="manutencao-corretiva">Manutenção corretiva</option>
                      <option value="troca-oleo">Troca de óleo</option>
                      <option value="alinhamento-balanceamento">Alinhamento e balanceamento</option>
                      <option value="revisao-freios">Revisão do sistema de freios</option>
                      <option value="diagnostico-eletrico">Diagnóstico elétrico</option>
                      <option value="funilaria-pintura">Funilaria e pintura</option>
                      <option value="outros">Outros</option>
                    </select>
                    <span className="items-center pointer-events-none absolute inset-y-0 right-3 flex">
                      <svg
                        className="w-4 h-4 text-neutral-400 dark:text-neutral-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="data-cadastro"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Data de cadastro
                </label>
                <input
                  name="data-cadastro"
                  defaultValue="07/09/2026"
                  type="date"
                  className="border border-zinc-300/70 dark:border-white/15 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 hover:border-zinc-400 dark:hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 w-full sm:w-44 rounded-lg bg-white dark:bg-neutral-800/50 px-4 py-2.5 text-sm text-neutral-900"
                  id="data-cadastro"
                  value={data} onChange={(e) => setdata(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="descricao"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <span>Descrição</span>{' '}
                  <span className="font-normal text-neutral-400 dark:text-neutral-500">
                    (opcional)
                  </span>
                </label>
                <textarea
                  name="descricao"
                  rows={4}
                  defaultValue="Ex.: Manutenção no sistema de freios e troca das pastilhas."
                  className="w-full rounded-lg bg-white dark:bg-neutral-800/50 px-4 py-2.5 text-sm text-neutral-900 leading-relaxed border border-zinc-300/70 dark:border-white/15 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 hover:border-zinc-400 dark:hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 resize-none"
                  id="descricao"
                  value={descricao} onChange={(e) => setdescricao(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Ações e Alerta do Rodapé */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm px-6 py-5 border border-zinc-200/70 dark:border-white/10">
            <div className="mb-5 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 flex gap-3 p-4 border border-zinc-100 dark:border-white/6">
              <svg
                className="w-4 h-4 text-neutral-400 mt-0.5 dark:text-neutral-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-neutral-500 leading-relaxed dark:text-neutral-400">
                <span>A O.S. será criada automaticamente com o status </span>
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  Em andamento
                </span>
                <span>. O status pode ser alterado depois, na lista de Ordens de Serviço.</span>
              </p>
            </div>
            <div className="sm:flex-row sm:items-center items-stretch flex flex-col gap-3">
              <button
                type="submit"
                className="inline-flex gap-2 border border-transparent hover:bg-neutral-700 dark:hover:bg-indigo-500 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-150 items-center justify-center rounded-lg bg-neutral-900 dark:bg-indigo-600 px-6 py-2.5 text-sm font-medium text-neutral-100"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Cadastrar Ordem de Serviço</span>
              </button>
              <button
                type="button"
                className="inline-flex border border-zinc-300/70 dark:border-white/20 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-150 items-center justify-center rounded-lg bg-white/70 dark:bg-white/5 px-6 py-2.5 text-sm font-medium text-neutral-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}