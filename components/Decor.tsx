export default function Decor({ className }: { className: string; }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-12 bg-primary-light"></div>
      <div className="w-2 h-2 rounded-full bg-primary-light"></div>
      <div className="h-px w-12 bg-primary-light"></div>
    </div>
  );
}