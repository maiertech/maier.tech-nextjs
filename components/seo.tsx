import Head from 'next/head';
import { useRouter } from 'next/router';

function decorate(title: string, path: string) {
  if (path === '/') return title;
  return `${title} – Thilo Maier`;
}

type Props = {
  siteUrl?: string;
  pathname?: string;
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
};

export default function SEO({
  title,
  description,
  keywords,
  siteUrl = 'https://maier.tech',
  pathname,
  canonicalUrl,
}: Props) {
  const router = useRouter();
  const path = pathname ?? router.pathname;
  const url = canonicalUrl ? canonicalUrl : `${siteUrl}${path}`;
  const decoratedTitle = decorate(title, path);
  return (
    <Head>
      <title>{decoratedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={decoratedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={decoratedTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Head>
  );
}
