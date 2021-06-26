import H1 from '@/components/h1';
import Layout from '@/components/layout';
import Posts from '@/components/posts';
import SEO from '@/components/seo';
import { getCategories } from '@/lib/categories';
import { normalize as normalizeCategory } from '@/lib/categories';
import { getFrontmatters } from '@/lib/collections';
import { normalize as normalizeFrontmatters } from '@/lib/posts';

import type { PostFrontmatter } from '@/types/frontmatter';
import type { Category, PostPageMetadata } from '@/types/metadata';
import type { GetStaticPaths, GetStaticProps } from 'next';

const collection = 'posts';

type Props = { category: Category; posts: PostPageMetadata[] };

export default function CategoryPage({ category, posts }: Props) {
  return (
    <Layout>
      <SEO
        title={category.title}
        description={`My ${category.label} posts in reverse chronological order.`}
      />
      <H1>{category.title}</H1>
      <div className="mt-6 md:mt-12">
        <Posts posts={posts} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategories(collection);
  const paths = categories.map(({ key }) => {
    return {
      params: {
        category: key,
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.category) {
    throw new Error(`Expected params prop with category.`);
  }
  const category = params.category as string;

  const frontmatters = getFrontmatters(collection) as PostFrontmatter[];
  const frontmattersWithMatchingCategory = frontmatters.filter(
    (frontmatter) => {
      if (!frontmatter.category) return false;
      return frontmatter.category === category;
    }
  );

  const normalizedCategory = normalizeCategory(category);
  const posts = normalizeFrontmatters(
    frontmattersWithMatchingCategory,
    collection
  );

  return {
    props: {
      category: normalizedCategory,
      posts,
    },
  };
};
