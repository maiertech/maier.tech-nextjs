import path from 'path';

import authors from '@/content/authors';
import { slugify } from '@/lib/helpers';
import { normalize as normalizeTags } from '@/lib/tags';

import { PostPageMetadata } from '@/types/metadata';
import { PostFrontmatter } from '@/types/frontmatter';

/**
 * Normalize an array of post frontmatters and sort desc by date and asc by title.
 *
 * @param frontmatters Array of frontmatters from MDX posts.
 * @param collection Collection ID.
 *
 * @returns Array of normalized post metadata that can be rendered.
 */
export function normalize(
  frontmatters: PostFrontmatter[],
  collection: string
): PostPageMetadata[] {
  // Sort frontmatters by date desc.
  const sortedFrontmatters = frontmatters.sort(
    (a, b) => Number(b.date) - Number(a.date)
  );

  // Normalize frontmatters.
  return sortedFrontmatters.map((frontmatter) => {
    const { title, author, date, description, slug, tags, links } = frontmatter;
    return {
      title,
      author: authors[author].name,
      // Gray matter returns date prop as Date object in local system time.
      // Convert into an ISO string with the timezone set to UTC.
      date: date.toISOString(),
      description,
      tags: tags ? normalizeTags(tags) : [],
      links: links ?? null,
      // Use frontmatter slug for path or slugify title.
      path: path.join('/', collection, slug ?? slugify(title)),
    };
  });
}
