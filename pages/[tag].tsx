import { DateTime } from 'luxon';
import Link from 'next/link';

import H1 from '@/components/h1';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import { getFrontmatters } from '@/lib/collections';
import { normalize as normalizeFrontmatters } from '@/lib/posts';
import { getTags } from '@/lib/tags';
import { normalize as normalizeTags } from '@/lib/tags';

import type { PostFrontmatter } from '@/types/frontmatter';
import type { PostPageMetadata, Tag } from '@/types/metadata';
import type { GetStaticPaths, GetStaticProps } from 'next';

const collection = 'posts';

type Props = { tag: Tag; posts: PostPageMetadata[] };

export default function TagPage({ tag, posts }: Props) {
  return (
    <Layout>
      <SEO
        title={tag.title}
        description={`Posts about ${tag.label} in reverse chronological order.`}
      />
      <H1>{tag.title}</H1>
      <div className="mt-6 md:mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post.title} className="flex flex-col space-y-3">
            <p className="text-sm text-text-lighter">
              <time dateTime={post.date}>
                {DateTime.fromISO(post.date, { setZone: true }).toFormat(
                  'MMM d, yyyy'
                )}
              </time>
            </p>
            <Link href={post.path}>
              <a className="flex-grow">
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  {post.title}
                </p>
                <p className="mt-3 text-base">{post.description}</p>
              </a>
            </Link>
            <Link href={post.path}>
              <a className="text-lg font-semibold text-primary-default hover:text-primary-lighter">
                Read post
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getTags(collection);
  const paths = tags.map(({ key }) => {
    return {
      params: {
        tag: key,
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.tag) {
    throw new Error(`Expected params prop with tag.`);
  }
  const tag = params.tag as string;

  const frontmatters = getFrontmatters(collection) as PostFrontmatter[];
  const frontmattersWithMatchingTag = frontmatters.filter((frontmatter) => {
    if (!frontmatter.tags) return false;
    return frontmatter.tags.includes(tag);
  });

  const normalizedTag = normalizeTags([tag]);
  if (normalizedTag.length === 0) {
    throw new Error(`Tag ${tag} is not an allowed tag.`);
  }

  const posts = normalizeFrontmatters(frontmattersWithMatchingTag, collection);

  return {
    props: {
      tag: normalizedTag[0],
      posts,
    },
  };
};
