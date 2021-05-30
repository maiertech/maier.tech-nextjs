import Link from 'next/link';
import Logo from '@/components/logo';
import Container from '@/components/container';

const navigation = [
  { name: 'Posts', href: '/posts' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  return (
    <header aria-label="Top">
      <Container>
        <nav className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <a className="text-primary-default hover:text-primary-lighter">
                <Logo className="h-8  sm:h-9 md:h-10 lg:h-12" />
              </a>
            </Link>
            <div className="text-xl">Thilo Maier</div>
          </div>
          <div className="space-x-5">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="text-base font-medium hover:text-text-lighter">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
