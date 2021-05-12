import { getTags } from '@/lib/tags';
import { getFrontmatters } from '@/lib/collections';
import { normalize as normalizeFrontmatters } from '@/lib/posts';
import { normalize as normalizeTags } from '@/lib/tags';
import SEO from '@/components/seo';

import { GetStaticPaths, GetStaticProps } from 'next';
import { PostPageMetadata, Tag } from '@/types/metadata';
import { PostFrontmatter } from '@/types/frontmatter';

const collection = 'posts';

type Props = { tag: Tag; posts: PostPageMetadata[] };

export default function TagPage({ tag, posts }: Props) {
  const title = `Posts about ${tag.label}`;
  return (
    <>
      <SEO
        title={title}
        description={`Posts about ${tag.label} in reverse chronological order.`}
      />
      <h1>{title}</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
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
