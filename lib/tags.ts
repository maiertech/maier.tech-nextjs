import path from 'path';
import { getMdxFiles } from '@/lib/collections';
import allowedTags from '@/content/tags';

import { Tag } from '@/types/metadata';

/**
 * Retrieve all tags for given collections.
 *
 * @param collection The collection for which tags are retrieved.
 *
 * @returns Array of tags sorted asc.
 */
export function getTags(collection: string): Tag[] {
  const keys: Set<string> = new Set();
  const mdxFiles = getMdxFiles(collection);
  mdxFiles.forEach(({ frontmatter }) => {
    frontmatter?.tags.forEach((tag: string) => {
      keys.add(tag);
    });
  });

  // Normalize tags.
  return normalize(Array.from(keys));
}

/**
 * Filter out tags that are not allowed and lookup labels.
 *
 * @param tags Raw tags (keys).
 *
 * @returns Normalized tags, i.e. only allowed tags augmented with label and path to tag page.
 */
export function normalize(tags: string[]): Tag[] {
  if (tags.length === 0) return [];
  const normalizedTags = tags.reduce((validTags, tag) => {
    const label = allowedTags[tag]?.label;
    if (label) {
      validTags.push({
        key: tag,
        label,
        path: path.join('/tags', tag),
      });
    }
    return validTags;
  }, [] as Tag[]);
  return normalizedTags;
}
