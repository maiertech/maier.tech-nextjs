import Header from '@/components//header';
import Footer from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 mb-6">
        <Header />
      </div>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {children}
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}
