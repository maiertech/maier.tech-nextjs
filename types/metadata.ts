export interface Tag {
  /** Tag key used in frontmatter. */
  key: string;
  /** Label used when displaying a tag. */
  label: string;
  /** Title for tag page. */
  title: string;
  /** Path to tag page. */
  path: string;
}

export interface Link {
  title: string;
  href: string;
}

interface PageMetadata {
  title: string;
  path: string;
}

/**
 * This type is returned by getStaticProps and needs to be serializable so it can be sent to the client for hydration.
 */
export interface PostPageMetadata extends PageMetadata {
  author: string;
  date: string;
  description: string;
  tags: Tag[];
  links?: Link[];
}
