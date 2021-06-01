import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Topics from '@/components/topics';

export default function Homepage() {
  return (
    <Layout>
      <SEO
        title="Thilo Maier – Next.js and developer productivity"
        description="Learn, create, share. Repeat. I write about creating super fast websites with Next.js and about developer productivity."
      />
      <div className="text-center py-8 lg:py-12">
        <p className="font-extrabold text-4xl sm:text-5xl lg:text-6xl sm:tracking-tight">
          Learn, create, share. Repeat.
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-text-light">
          Hi, my name is Thilo. I am a developer based in Queens, NY. I work as
          Information Systems Officer at the world's largest non-profit. I write
          about creating super fast websites with Next.js and about developer
          productivity.
        </p>
      </div>
      <Topics />
    </Layout>
  );
}
