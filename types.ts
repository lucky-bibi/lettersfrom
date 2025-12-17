export enum Relationship {
  TEACHER = '은사',
  FRIEND = '친구',
  FAMILY = '가족',
  LOVER = '연인',
  COLLEAGUE = '동료',
  STAR = '스타'
}

export enum FolderType {
  SENT = '보낸 편지',
  RECEIVED = '받은 편지'
}

export interface Letter {
  id: string;
  type: FolderType;
  relationship: Relationship;
  sender: string;
  receiver: string;
  date: string; // ISO format YYYY-MM-DD
  place: string;
  content: string; // Full content
  excerpt: string; // Key sentence for typography
  designImage: string; // URL for the typo/design thumbnail
  scanImage: string; // URL for the actual letter scan
}

export type ViewMode = 'THUMBNAIL' | 'TIMELINE';
