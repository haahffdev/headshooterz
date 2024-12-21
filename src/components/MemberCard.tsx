import React from 'react';
import { Target } from 'lucide-react';

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  specialty?: string;
}

const MemberCard = ({ name, role, image, specialty }: MemberCardProps) => {
  return (
    <div className="gang-card bg-black/80 rounded-lg shadow-lg shadow-purple-500/20 transform hover:scale-105 transition-all">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">{name}</h3>
              <p className="text-purple-400 text-xl">{role}</p>
              {specialty && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <Target size={14} />
                  {specialty}
                </p>
              )}
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <span className="text-purple-400 text-xs">HS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;