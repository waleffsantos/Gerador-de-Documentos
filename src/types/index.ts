export type DocumentSection = 'checklists' | 'laudos' | 'relatorios' | null;

export interface Document {
  id: string;
  title: string;
  description: string;
}