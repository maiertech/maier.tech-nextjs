import { getFrontmatters } from '@/lib/collections';
import { normalize } from '@/lib/posts';

import { GetStaticProps } from 'next';
import { PostPageMetadata } from '@/types/metadata';
import { PostFrontmatter } from '@/types/frontmatter';

const collection = 'posts';

type Props = { posts: PostPageMetadata[] };

export default function PostsPage({ posts }: Props) {
  return (
    <>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const frontmatters = getFrontmatters(collection) as PostFrontmatter[];
  const posts = normalize(frontmatters, collection);
  return { props: { posts } };
};
