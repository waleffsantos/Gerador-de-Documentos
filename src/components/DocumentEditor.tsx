import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Document } from '../types';
import { templates } from '../utils/documentTemplates';
import { useNavigation } from '../contexts/NavigationContext';

interface DocumentEditorProps {
  document: Document;
  onClose: () => void;
}

export function DocumentEditor({ document, onClose }: DocumentEditorProps) {
  const { activeSection } = useNavigation();
  const template = activeSection ? templates[activeSection][document.id] : null;

  const handleDownload = () => {
    // In a real application, this would generate a DOCX file
    // For now, we'll just show an alert
    alert('Em um ambiente de produção, isso geraria um arquivo DOCX com o template da Gerdau.');
  };

  if (!template) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="bg-gerdau-blue p-4 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">{template.header}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="bg-gerdau-yellow text-gerdau-blue px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Baixar DOCX</span>
            </button>
            <button
              onClick={onClose}
              className="text-white hover:text-gerdau-yellow transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Logo and Header */}
            <div className="text-center border-b-2 border-gerdau-blue pb-6">
              <img
                src="https://www.gerdau.com/img/logo-gerdau.svg"
                alt="Gerdau"
                className="h-12 mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-gerdau-blue">{document.title}</h1>
              <p className="text-gerdau-gray mt-2">{document.description}</p>
            </div>

            {/* Document Sections */}
            {template.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-gerdau-blue">{section}</h3>
                <textarea
                  className="w-full h-32 p-3 border-2 border-gray-200 rounded-lg focus:border-gerdau-blue focus:ring focus:ring-gerdau-blue focus:ring-opacity-50 resize-none"
                  placeholder="Digite o conteúdo desta seção..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}