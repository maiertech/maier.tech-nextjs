import { DefaultSeo } from 'next-seo';
import 'tailwindcss/tailwind.css';

import { useAnalytics } from '@/lib/analytics';
import '@/styles/global.css';

import type { AppProps } from 'next/app';

import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
