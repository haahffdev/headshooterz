import React from 'react';
import { Server, Users, Globe } from 'lucide-react';

const ServerInfo = () => {
  return (
    <div className="bg-black/80 p-8 rounded-lg shadow-lg shadow-purple-500/20 border border-purple-500/20">
      <div className="flex items-center gap-4 mb-8">
        <Server className="text-red-500 w-10 h-10" />
        <h2 className="text-3xl font-text text-white">Info del Servidor</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="text-purple-400 w-6 h-6" />
            <div>
              <p className="text-purple-400">Nombre del Servidor:</p>
              <p className="text-white text-2xl font-text">AlphaZone RP</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="text-purple-400 w-6 h-6" />
            <div>
              <p className="text-purple-400">Promedio de Jugadores:</p>
              <p className="text-white text-2xl font-text">70 - 120</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
          <p className="text-purple-400 mb-2">IP del Servidor:</p>
          <p className="text-white text-2xl font-text tracking-wider bg-black/50 p-3 rounded">
          s1.az-rp.com:7777
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;