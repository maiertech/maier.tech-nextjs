import { DateTime } from 'luxon';
import Link from 'next/link';

import { getFileBySlug, getFrontmatters } from '@/lib/collections';
import { slugify } from '@/lib/helpers';
import { normalize as normalizeFrontmatters } from '@/lib/posts';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import H1 from '@/components/h1';

import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PostFrontmatter } from '@/types/frontmatter';
import { PostPageMetadata } from '@/types/metadata';

const collection = 'posts';

type Props = {
  mdxSource: MDXRemoteSerializeResult;
  post: PostPageMetadata;
};

export default function PostPage({ mdxSource, post }: Props) {
  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <div className="flex flex-col mb-3 md:mb-6 space-y-3">
        <H1>{post.title}</H1>
        <div className="text-lg mb-3">
          {`${post.author} • `}
          <time dateTime={post.date}>
            {DateTime.fromISO(post.date, { setZone: true }).toFormat(
              'MMM d, yyyy'
            )}
          </time>
        </div>
        <div className="space-x-2">
          {post.tags.map((tag) => (
            <Link href={tag.path} key={tag.key}>
              <a className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-background bg-primary-lighter">
                {tag.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="prose md:prose-lg w-full">
        <MDXRemote {...mdxSource} />
      </div>
      {post.links && (
        <div className="prose md:prose-lg w-full border-t-4 border-primary-lighter mt-6 pt-4">
          <h2>Links</h2>
          <ul>
            {post.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const frontmatters = getFrontmatters('posts');
  const paths = frontmatters.map(({ slug, title }) => {
    return {
      params: {
        slug: slug ?? slugify(title),
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.slug) {
    throw new Error(`Expected params prop with slug.`);
  }
  const file = await getFileBySlug('posts', params.slug as string);
  if (!file) {
    throw new Error(
      `No MDX file found for slug ${params.slug} in posts collection.`
    );
  }
  const post = normalizeFrontmatters(
    [file.frontmatter as PostFrontmatter],
    collection
  )[0];
  return { props: { mdxSource: file.mdxSource, post } };
};
