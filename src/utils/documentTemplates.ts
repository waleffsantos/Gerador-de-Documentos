import { DocumentSection } from '../types';

export interface DocumentTemplate {
  header: string;
  sections: string[];
}

export const templates: Record<DocumentSection, Record<string, DocumentTemplate>> = {
  checklists: {
    'checklist-1': {
      header: 'Checklist de Comissionamento SINAMICS G120',
      sections: [
        '1. Dados de Identificação',
        '2. Verificação de Hardware',
        '3. Parametrização Básica',
        '4. Testes de Funcionamento',
        '5. Aprovação Final'
      ]
    },
    // Add templates for other checklists...
  },
  laudos: {
    'laudo-1': {
      header: 'Laudo Técnico - Análise SINAMICS G120',
      sections: [
        '1. Informações Gerais',
        '2. Condições do Equipamento',
        '3. Testes Realizados',
        '4. Resultados e Análises',
        '5. Conclusões e Recomendações'
      ]
    },
    // Add templates for other laudos...
  },
  relatorios: {
    'relatorio-1': {
      header: 'Relatório de Performance - SINAMICS G120',
      sections: [
        '1. Resumo Executivo',
        '2. Dados Operacionais',
        '3. Análise de Desempenho',
        '4. Indicadores Chave',
        '5. Recomendações'
      ]
    },
    // Add templates for other relatórios...
  }
};