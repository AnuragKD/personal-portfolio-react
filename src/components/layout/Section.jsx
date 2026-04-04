export default function Section({ children, className = "", ...props }) {
  return (
    <section className={`py-4 sm:py-6 lg:py-8 relative ${className}`} {...props}>
      {children}
    </section>
  );
}
