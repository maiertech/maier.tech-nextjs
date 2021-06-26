import path from 'path';

import allowedCategories from '@/content/categories';
import { getMdxFiles } from '@/lib/collections';

import type { Category } from '@/types/metadata';

/**
 * Retrieve all categories for given collection.
 *
 * @param collection The collection for which categories are retrieved.
 *
 * @returns Array of categories sorted asc.
 */
export function getCategories(collection: string): Category[] {
  const keys: Set<string> = new Set();
  const mdxFiles = getMdxFiles(collection);
  mdxFiles.forEach(({ frontmatter }) => {
    if (frontmatter.category) {
      keys.add(frontmatter.category);
    }
  });

  // Normalize categories.
  return Array.from(keys).map((key) => normalize(key));
}

/**
 * Augment a category.
 *
 * @param key Category key.
 *
 * @returns Normalized category, i.e. augmented with  label, category page title and path to category page.
 */
export function normalize(key: string): Category {
  const category = allowedCategories[key];
  if (!category) {
    throw new Error(`Invalid category: ${key}`);
  }
  return { key, path: path.join('/', key), ...category };
}
