import 'tailwindcss/tailwind.css';

import { useAnalytics } from '@/lib/analytics';
import '@/styles/global.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();
  return <Component {...pageProps} />;
}

export default MyApp;
