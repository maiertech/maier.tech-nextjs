export interface Category {
  /** Category key used in frontmatter. */
  key: string;
  /** Label used when displaying a category. */
  label: string;
  /** Title for category page. */
  title: string;
  /** Path to category page. */
  path: string;
}

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

export interface SEOMetadata {
  /** Title is optional because next-seo.config.js defines a default title. */
  title?: string;
  description: string;
  canonicalUrl?: string;
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
  category: Category;
  tags: Tag[];
  links?: Link[];
}
