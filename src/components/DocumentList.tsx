import React from 'react';
import { FileText } from 'lucide-react';
import { documents } from '../data/documents';
import { DocumentSection } from '../types';
import { BackButton } from './BackButton';
import { DocumentListItem } from './DocumentListItem';

interface DocumentListProps {
  section: DocumentSection;
}

export function DocumentList({ section }: DocumentListProps) {
  if (!section) return null;

  const sectionDocuments = documents[section];

  return (
    <div>
      <BackButton />
      <div className="space-y-3">
        {sectionDocuments.map((doc) => (
          <DocumentListItem key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  );
}