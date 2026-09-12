import React from 'react';
import type { OrdemType } from '../types/OrdemType';
interface MeuPerfil {
    cliente: OrdemType
}
export const MeuPerfil = ({cliente}: MeuPerfil) => {
    return (
        <div className="w-full max-w-2xl">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex justify-center items-center font-medium text-gray-500">
                            Foto
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-gray-800">{cliente.nome}</h4>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h6 className="text-xs uppercase tracking-wider font-semibold text-gray-400">E-mail</h6>
                            <p className="text-gray-700 font-medium mt-1">{"cliente.email"}</p>
                        </div>
                        <div>
                            <h6 className="text-xs uppercase tracking-wider font-semibold text-gray-400">Perfil</h6>
                            <p className="text-gray-700 font-medium mt-1">Cliente</p>
                        </div>
                        <div>
                            <h6 className="text-xs uppercase tracking-wider font-semibold text-gray-400">O.S. ativas</h6>
                            <p className="text-gray-700 font-medium mt-1">0</p>
                        </div>
                        <div>
                            <h6 className="text-xs uppercase tracking-wider font-semibold text-gray-400">Serviços finalizados</h6>
                            <p className="text-gray-700 font-medium mt-1">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};