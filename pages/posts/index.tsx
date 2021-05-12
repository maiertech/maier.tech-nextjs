import { getFrontmatters } from '@/lib/collections';
import { normalize as normalizeFrontmatters } from '@/lib/posts';
import Layout from '@/components/layout';
import SEO from '@/components/seo';

import { GetStaticProps } from 'next';
import { PostPageMetadata } from '@/types/metadata';
import { PostFrontmatter } from '@/types/frontmatter';

const collection = 'posts';

type Props = { posts: PostPageMetadata[] };

export default function PostsPage({ posts }: Props) {
  return (
    <Layout>
      <SEO
        title="Posts"
        description="Posts about data visualization, Next.js and developer productivity."
      />
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const frontmatters = getFrontmatters(collection) as PostFrontmatter[];
  const posts = normalizeFrontmatters(frontmatters, collection);
  return { props: { posts } };
};
