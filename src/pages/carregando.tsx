import { Spinner } from "../components/Spinner"

export const Carregando = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center w-full lg:w-1/2 p-8 lg:p-12">
            <Spinner />
        </div>
    )
}