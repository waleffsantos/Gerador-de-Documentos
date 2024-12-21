import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { Document } from '../types';
import { DocumentEditor } from './DocumentEditor';

interface DocumentListItemProps {
  document: Document;
}

export function DocumentListItem({ document }: DocumentListItemProps) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsEditorOpen(true)}
        className="w-full bg-white border-2 border-gerdau-blue rounded-lg p-4 hover:bg-gerdau-blue hover:border-gerdau-yellow hover:text-white transition-all duration-300 group text-left"
      >
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-gerdau-blue group-hover:text-gerdau-yellow" />
          <div>
            <h3 className="font-semibold text-gerdau-blue group-hover:text-white">
              {document.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-200">
              {document.description}
            </p>
          </div>
        </div>
      </button>

      {isEditorOpen && (
        <DocumentEditor
          document={document}
          onClose={() => setIsEditorOpen(false)}
        />
      )}
    </>
  );
}