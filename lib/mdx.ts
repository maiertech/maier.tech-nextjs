import path from 'path';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { slugify } from './helpers';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

import { Frontmatter } from '@/types/frontmatter';

const contentPath = path.join(process.cwd(), 'content');

/**
 * Get all paths of a collection of MDX files.
 *
 * @param collection Collection ID, e.g. `posts`.
 *
 * @returns Array with paths.
 */
function getPaths(collection: string): string[] {
  return glob.sync(`${path.join(contentPath, collection)}/**/*.mdx`);
}

/**
 * Get all frontmatters for a collection.
 *
 * @param collection Collection ID, e.g. `posts`.
 *
 * @returns Array of objects with parsed frontmatter.
 */
export function getFrontmatters(collection: string): Frontmatter[] {
  const paths = getPaths(collection);
  return paths.map((filePath) => {
    const source = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(source);
    return { ...data };
  });
}

/**
 * Get MDX file by slug.
 * This function is called by `getStaticProps` for those paths that are returned by `getStaticPaths`.
 * Therefor, a page corresponding to `slug` exists.
 *
 * @param collection Collection ID, e.g. `posts`.
 * @param slug Retrieve MDX file that matches this slug.
 *
 * @returns Processed MDX and frontmatter.
 */
export async function getFileBySlug(collection: string, slug: string) {
  let data: Frontmatter = {};
  let content: string = '';
  const paths = getPaths(collection);

  // Compare provided slug with frontmatter slug (if it exists) or slugified title.
  paths.every((filePath) => {
    const source = fs.readFileSync(filePath, 'utf-8');
    ({ data, content } = matter(source));
    if (data.slug) {
      if (data.slug === slug) {
        return false;
      }
      return true;
    }
    if (slugify(data.title) === slug) {
      return false;
    }
    return true;
  });

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontmatter: {
      ...data,
    },
  };
}
