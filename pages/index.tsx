import {
  ChartBarIcon,
  LightningBoltIcon,
  LightBulbIcon,
} from '@heroicons/react/solid';
import Layout from '../components/layout';
import Head from 'next/head';

const areas = [
  {
    name: 'Data visualization',
    description:
      'I learn data visualization with React libraries that are built with D3. ',
    icon: ChartBarIcon,
  },
  {
    name: 'Next.js',
    description:
      'I learn how to build super fast websites with Next.js, the leading React framework.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Developer productivity',
    description:
      'I keep improving my developer workflows to be more productive in my everyday work.',
    icon: LightBulbIcon,
  },
];

export default function Homepage() {
  return (
    <Layout>
      <Head>
        <title>Thilo Maier – Learn with me.</title>
      </Head>
      <div className="text-center py-12 lg:py-20">
        <p className="font-extrabold text-4xl sm:text-5xl lg:text-6xl sm:tracking-tight">
          Learn with me.
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-text-light">
          Hi, my name is Thilo. I am a developer based in Queens, NY. I learn
          new things and share what I have learned.
        </p>
      </div>
      <dl className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mb-8">
        {areas.map((area) => (
          <div key={area.name}>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-default text-background-default mb-3">
                <area.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-2xl leading-relaxed font-medium">
                {area.name}
              </p>
            </dt>
            <dd className="ext-base text-text-light">{area.description}</dd>
          </div>
        ))}
      </dl>
    </Layout>
  );
}
