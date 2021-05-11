import { getFileBySlug, getFrontmatters } from '@/lib/collections';
import { slugify } from '@/lib/helpers';
import { normalize as normalizeFrontmatters } from '@/lib/posts';

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
    <>
      <h1>Post</h1>
      <h2>Metadata</h2>
      <pre>{JSON.stringify(post, null, 2)}</pre>
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
