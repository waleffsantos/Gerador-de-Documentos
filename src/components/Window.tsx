import React, { ReactNode } from 'react';
import { Minimize2 } from 'lucide-react';
import { DocumentSection } from '../types';

interface WindowProps {
  title: string;
  children: ReactNode;
  isMinimized: boolean;
  onMinimize: () => void;
  activeSection: DocumentSection;
}

export function Window({ title, children, isMinimized, onMinimize, activeSection }: WindowProps) {
  const containerClasses = isMinimized
    ? 'fixed top-0 left-0 right-0'
    : 'min-h-screen flex items-center justify-center p-4';

  const windowClasses = isMinimized
    ? 'w-full max-w-2xl mx-auto transition-all duration-500 transform'
    : 'bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl border-t-4 border-gerdau-blue transition-all duration-500';

  return (
    <div className={`bg-gradient-to-br from-white to-gray-100 ${containerClasses}`}>
      <div className={windowClasses}>
        {!isMinimized && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gerdau-blue">{title}</h1>
              {activeSection && (
                <button
                  onClick={onMinimize}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Minimizar"
                >
                  <Minimize2 className="w-5 h-5 text-gerdau-blue" />
                </button>
              )}
            </div>
            {children}
          </>
        )}
      </div>
    </div>
  );
}