import Layout from '@/components/layout';

import type { SEOMetadata } from '@/types/metadata';

type Props = {
  metadata: SEOMetadata;
  children: React.ReactNode;
};

export default function MdxPageLayout({ metadata, children }: Props) {
  return (
    <Layout>
      <article className="prose md:prose-lg w-full">{children}</article>
    </Layout>
  );
}
