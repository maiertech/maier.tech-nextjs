import { getFileBySlug, getFrontmatters } from '@/lib/mdx';
import { slugify } from '@/lib/helpers';
import { normalize } from '@/lib/posts';

import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PostFrontmatter } from '@/types/frontmatter';
import { Post } from '@/types/content';

const collection = 'posts';

type Props = {
  mdxSource: MDXRemoteSerializeResult;
  metadata: Post;
};

export default function PostPage({ mdxSource, metadata }: Props) {
  return (
    <>
      <h1>Post</h1>
      <h2>Metadata</h2>
      <pre>{JSON.stringify(metadata, null, 2)}</pre>
      <h2>Content</h2>
      <MDXRemote {...mdxSource} />
    </>
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
  const { mdxSource, frontmatter } = await getFileBySlug(
    'posts',
    params!.slug as string
  );
  const metadata = normalize(frontmatter as PostFrontmatter, collection);
  return { props: { mdxSource, metadata } };
};
