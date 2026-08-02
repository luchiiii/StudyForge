export default function BrowserFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-brand-dark/10">
      <div className="flex items-center gap-1.5 border-b border-brand-dark/5 bg-brand-cream/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-mauve/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-mauve/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-mauve/30" />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
