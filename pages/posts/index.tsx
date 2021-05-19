import path from 'path';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import tags from '@/content/tags';
import Link from 'next/link';

import { GetStaticProps } from 'next';

type Topic = {
  label: string;
  title: string;
  description: string;
  href: string;
};

type Props = { topics: Topic[] };

export default function PostsPage({ topics }: Props) {
  return (
    <Layout>
      <SEO
        title="Posts"
        description="Posts about data visualization, Next.js and developer productivity."
      />
      <div className="divide-y-4 divide-primary-lighter">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-default">
            Posts
          </h1>
          <p className="text-xl text-text-lighter">
            I write posts about the following topics.
          </p>
        </div>
        <div className="grid gap-16 lg:grid-cols-3 pt-8 mt-8">
          {topics.map(({ label, title, description, href }) => (
            <Link href={href}>
              <a>
                <div key={title}>
                  <span className="text-sm bg-primary-default text-background rounded-full font-medium px-3 py-0.5">
                    {label}
                  </span>
                  <p className="text-xl text-text-default leading-tight font-semibold mt-3">
                    {title}
                  </p>
                  <p className="text-text-lighter mt-3">{description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const topics = Object.getOwnPropertyNames(tags).map((tag) => ({
    ...tags[tag],
    href: path.join('/', 'tags', tag),
  }));
  return { props: { topics } };
};
