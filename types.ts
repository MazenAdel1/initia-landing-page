
export interface SchemaField {
  name: string;
  type: string;
  isPrimary?: boolean;
  isNullable?: boolean;
}

export interface SchemaTable {
  id: string;
  name: string;
  fields: SchemaField[];
  position: { x: number; y: number };
}

export interface SchemaRelation {
  fromTable: string;
  fromField: string;
  toTable: string;
  toField: string;
  type: 'one-to-one' | 'one-to-many' | 'many-to-many';
}

export interface AppSchema {
  tables: SchemaTable[];
  relations: SchemaRelation[];
}

export type TechStack = 'Next.js' | 'Remix' | 'Vite + Express';
export type DatabaseType = 'PostgreSQL' | 'MySQL' | 'MongoDB' | 'SQLite';
export type Language = 'TypeScript' | 'JavaScript';

export interface ProjectMetadata {
  name: string;
  type: 'Web App' | 'API' | 'SaaS';
  stack: TechStack;
  db: DatabaseType;
  language: Language;
}

export enum WizardStep {
  DESCRIPTION = 1,
  SCHEMA = 2,
  METADATA = 3,
  AUTH = 4,
  DOWNLOAD = 5
}
