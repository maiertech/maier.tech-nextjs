import { DateTime } from 'luxon';
import Link from 'next/link';

import { PostPageMetadata } from '@/types/metadata';

type Props = { posts: PostPageMetadata[] };

export default function Posts({ posts }: Props) {
  return (
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
      {posts.map((post) => (
        <div key={post.title} className="flex flex-col space-y-3">
          <p className="text-sm text-text-lighter">
            <time dateTime={post.date}>
              {DateTime.fromISO(post.date, { setZone: true }).toFormat(
                'MMM d, yyyy'
              )}
            </time>
          </p>
          <Link href={post.path}>
            <a className="flex-grow">
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                {post.title}
              </p>
              <p className="mt-3 text-base">{post.description}</p>
            </a>
          </Link>
          <Link href={post.path}>
            <a className="text-lg font-semibold text-primary-default hover:text-primary-lighter">
              Read post
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
