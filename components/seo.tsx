import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import pkg from '../package.json';

type Props = {
  title?: string;
  description: string;
  canonicalUrl?: string;
};

export default function SEO({ title, description, canonicalUrl }: Props) {
  const router = useRouter();
  const path = router.asPath;
  const url = `${pkg.homepage}${path}`;
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonicalUrl ?? url}
      openGraph={{ url, title, description }}
    />
  );
}
