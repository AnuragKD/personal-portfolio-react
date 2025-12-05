
export default function SectionBorder({ className = "" }) {
  return (
    <div className={`section-border absolute inset-0 px-5 ${className}`}>
      <div className='container-border w-full h-full max-w-7xl mx-auto'></div>
    </div>
  );
}
