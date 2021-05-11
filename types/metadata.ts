export interface Tag {
  /** Tag key used in frontmatter. */
  key: string;
  /** Label used when displaying a tag. */
  label: string;
  /** Path to tag page. */
  path: string;
}

interface PageMetadata {
  title: string;
  path: string;
}

export interface PostPageMetadata extends PageMetadata {
  author: string;
  date: string;
  description: string;
  tags: Tag[];
}
