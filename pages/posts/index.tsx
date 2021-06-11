import H1 from '@/components/h1';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Topics from '@/components/topics';

export default function PostsPage() {
  return (
    <Layout>
      <SEO
        title="Posts"
        description="Posts about data visualization, Next.js and developer productivity."
      />
      <div className="space-y-6">
        <H1>Posts</H1>
        <Topics />
      </div>
    </Layout>
  );
}
