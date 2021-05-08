import { getFrontmatters } from '@/lib/mdx';
import { normalize } from '@/lib/posts';

import { GetStaticProps } from 'next';
import { Post } from '@/types/content';
import { PostFrontmatter } from '@/types/frontmatter';

const collection = 'posts';

type Props = { posts: Post[] };

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
  // Sort desc by date.
  const sortedFrontmatters = frontmatters.sort(
    (a, b) => Number(b.date) - Number(a.date)
  );
  const posts = sortedFrontmatters.map((frontmatter) =>
    normalize(frontmatter, collection)
  );
  return { props: { posts } };
};
