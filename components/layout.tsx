import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 mb-3 md:mb-6">
        <Header />
      </div>
      <main id="skip" className="flex-1 mb-8 md:mb-12">
        <Container>{children}</Container>
      </main>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}
