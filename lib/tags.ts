import path from 'path';

import allowedTags from '@/content/tags';
import { getMdxFiles } from '@/lib/collections';

import type { Tag } from '@/types/metadata';

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
    const allowedTag = allowedTags[tag];
    if (allowedTag) {
      validTags.push({
        key: tag,
        label: allowedTag.label,
        title: allowedTag.title,
        path: path.join('/', tag),
      });
    }
    return validTags;
  }, [] as Tag[]);
  return normalizedTags;
}
