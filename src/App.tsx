import React, { useState } from 'react';
import { ClipboardCheck, FileText, FileSpreadsheet } from 'lucide-react';
import { Button } from './components/Button';
import { Window } from './components/Window';
import { DocumentList } from './components/DocumentList';
import { MinimizedHeader } from './components/MinimizedHeader';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { DocumentSection } from './types';

function AppContent() {
  const { activeSection, setActiveSection } = useNavigation();
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => setIsMinimized(true);
  const handleMaximize = () => setIsMinimized(false);

  return (
    <>
      {isMinimized && (
        <MinimizedHeader
          onMaximize={handleMaximize}
          activeSection={activeSection}
        />
      )}
      
      <Window
        title="Documentação de Drive"
        isMinimized={isMinimized}
        onMinimize={handleMinimize}
        activeSection={activeSection}
      >
        {activeSection ? (
          <DocumentList section={activeSection} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              icon={ClipboardCheck}
              label="Checklist's"
              section="checklists"
            />
            <Button
              icon={FileText}
              label="Laudos"
              section="laudos"
            />
            <Button
              icon={FileSpreadsheet}
              label="Relatórios"
              section="relatorios"
            />
          </div>
        )}
      </Window>
    </>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;