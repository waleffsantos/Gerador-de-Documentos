import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export function BackButton() {
  const { setActiveSection } = useNavigation();

  return (
    <button
      onClick={() => setActiveSection(null)}
      className="flex items-center gap-2 text-gerdau-blue hover:text-gerdau-blue-dark transition-colors duration-300 mb-4"
      title="Voltar"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">Voltar</span>
    </button>
  );
}