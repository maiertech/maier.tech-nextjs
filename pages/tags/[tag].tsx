import H1 from '@/components/h1';
import Layout from '@/components/layout';
import Posts from '@/components/posts';
import SEO from '@/components/seo';
import { getFrontmatters } from '@/lib/collections';
import { normalize as normalizeFrontmatters } from '@/lib/posts';
import { getTags } from '@/lib/tags';
import { normalize as normalizeTag } from '@/lib/tags';

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
      <div className="mt-6 md:mt-12">
        <Posts posts={posts} />
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

  const normalizedTag = normalizeTag(tag);
  const posts = normalizeFrontmatters(frontmattersWithMatchingTag, collection);

  return {
    props: {
      tag: normalizedTag,
      posts,
    },
  };
};
