interface Content {
  title: string;
  path: string;
}

export interface Tag {
  label: string;
  path: string;
}

export type Tags = Tag[];

export interface Post extends Content {
  author: string;
  date: string;
  description: string;
  tags: Tags;
}
