import Link from 'next/link';

const topics = [
  {
    title: 'Create super fast websites with Next.js',
    description:
      'Next.js is my favorite framework to create fast and scalable websites. I write about issues I ran into and how I solved them.',
    href: '/nextjs',
  },
  {
    title: 'Boost your developer productivity',
    description:
      'I write about how I boost my productivity as a developer. Mostly tooling but also how to not loose track of what is important and how to keep distractions at bay.',
    href: '/productivity',
  },
];

export default function Topics() {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => (
        <Link key={topic.href} href={topic.href}>
          <a className="flex flex-col space-y-5 rounded-lg bg-primary-lighter text-background px-6 py-5 shadow-md  hover:border-primary-lighter ">
            <dt className="text-3xl font-bold">{topic.title}</dt>
            <dd className="flex-grow">{topic.description}</dd>
            <div className="text-lg font-semibold">Check out posts</div>
          </a>
        </Link>
      ))}
    </dl>
  );
}
