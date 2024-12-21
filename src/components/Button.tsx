import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

interface ButtonProps {
  icon: LucideIcon;
  label: string;
  section: 'checklists' | 'laudos' | 'relatorios';
}

export function Button({ icon: Icon, label, section }: ButtonProps) {
  const { activeSection, setActiveSection } = useNavigation();
  const isActive = activeSection === section;

  return (
    <button
      className={`flex flex-col items-center justify-center p-6 border-2 rounded-lg transition-all duration-300 group ${
        isActive
          ? 'bg-gerdau-blue border-gerdau-yellow'
          : 'bg-gerdau-blue border-gerdau-blue-dark hover:bg-gerdau-blue-light'
      }`}
      onClick={() => setActiveSection(isActive ? null : section)}
    >
      <Icon 
        className={`w-12 h-12 mb-3 transition-all duration-300 ${
          isActive 
            ? 'text-gerdau-yellow scale-110' 
            : 'text-white group-hover:scale-110'
        }`} 
      />
      <span 
        className={`text-lg font-semibold transition-colors duration-300 ${
          isActive ? 'text-gerdau-yellow' : 'text-white'
        }`}
      >
        {label}
      </span>
    </button>
  );
}