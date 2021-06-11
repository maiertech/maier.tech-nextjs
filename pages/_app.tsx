import 'tailwindcss/tailwind.css';
import { DefaultSeo } from 'next-seo';

import '@/styles/global.css';
import { useAnalytics } from '@/lib/analytics';

import SEO from '../next-seo.config';

import type { AppProps } from 'next/app';

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
