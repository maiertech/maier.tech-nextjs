interface ContainerProps {
  children: React.ReactNode;
}

/**
 * Page container with horizontal padding but no vertical padding.
 */
export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
}
