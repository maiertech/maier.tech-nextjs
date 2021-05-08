import path from 'path';
import authors from '@/content/authors';
import allowedTags from '@/content/tags';
import { slugify } from '@/lib/helpers';

import { Post, Tags } from '@/types/content';
import { PostFrontmatter } from '@/types/frontmatter';

/**
 * Normalize frontmatter of a post.
 *
 * @param frontmatter Frontmatter of MDX post.
 * @param collection Collection ID.
 *
 * @returns Normalized frontmatter that can be rendered.
 */
export function normalize(
  frontmatter: PostFrontmatter,
  collection: string
): Post {
  const { title, author, date, description, slug, tags } = frontmatter;

  let post: Post = {
    title,
    author: authors[author].name,
    // Gray matter returns date prop as Date object in local system time. Convert to UTC ISO string.
    date: date.toUTCString(),
    description,
    // Default: no tags.
    tags: [],
    // Use frontmatter slug for path or slugify title.
    path: path.join('/', collection, slug ?? slugify(title)),
  };

  // Use allowed tags only.
  if (tags && tags.length > 0) {
    post.tags = tags.reduce((validTags, tag) => {
      const label = allowedTags[tag];
      if (label) {
        validTags.push({
          label,
          path: path.join('/tags', tag),
        });
      }
      return validTags;
    }, [] as Tags);
  }

  return post;
}
