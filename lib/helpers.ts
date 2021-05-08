import toSlug from '@sindresorhus/slugify';

/**
 * Slugify a title.
 *
 * @param title String to be slugified.
 * @returns A slug.
 */
export function slugify(title: string): string {
  return toSlug(title, { decamelize: false });
}
