export type Frontmatter = { [key: string]: any };

export interface PostFrontmatter {
  title: string;
  author: string;
  /** Date in local system time. */
  date: Date;
  description: string;
  slug?: string;
  tags?: string[];
}
