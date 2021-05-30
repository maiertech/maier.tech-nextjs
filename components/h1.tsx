type Props = {
  children: React.ReactNode;
};

/**
 * This component is a formatted `h1` for pages.
 * For spacing use https://tailwindcss.com/docs/space.
 *
 * @param children Heading text.
 * @returns Formatted heading.
 */
export default function H1({ children }: Props) {
  return (
    <h1 className="font-extrabold text-3xl md:text-5xl leading-snug">
      {children}
    </h1>
  );
}
