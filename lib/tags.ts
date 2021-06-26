import path from 'path';

import allowedTags from '@/content/tags';
import { getMdxFiles } from '@/lib/collections';

import type { Tag } from '@/types/metadata';

/**
 * Retrieve all tags for a given collection.
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
  return Array.from(keys).map((key) => normalize(key));
}

/**
 * Augment a tag.
 *
 * @param key Tag key.
 *
 * @returns Normalized tag, i.e. augmented with label, tag page title and path to tag page.
 */
export function normalize(key: string): Tag {
  const tag = allowedTags[key];
  if (!tag) {
    throw new Error(`Invalid tag: ${key}`);
  }
  return { key, path: path.join('/tags', key), ...tag };
}
