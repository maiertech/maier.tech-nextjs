import Container from '../components/container';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
