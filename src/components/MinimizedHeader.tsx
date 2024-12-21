import React from 'react';
import { Maximize2 } from 'lucide-react';
import { DocumentSection } from '../types';

interface MinimizedHeaderProps {
  onMaximize: () => void;
  activeSection: DocumentSection;
}

export function MinimizedHeader({ onMaximize, activeSection }: MinimizedHeaderProps) {
  const getSectionTitle = () => {
    switch (activeSection) {
      case 'checklists':
        return "Checklist's de Drives";
      case 'laudos':
        return 'Laudos Técnicos';
      case 'relatorios':
        return 'Relatórios de Desempenho';
      default:
        return 'Documentação de Drive';
    }
  };

  return (
    <div className="bg-white border-t-4 border-gerdau-blue rounded-t-xl shadow-lg p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-gerdau-blue">
        {getSectionTitle()}
      </h2>
      <button
        onClick={onMaximize}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        title="Maximizar"
      >
        <Maximize2 className="w-5 h-5 text-gerdau-blue" />
      </button>
    </div>
  );
}