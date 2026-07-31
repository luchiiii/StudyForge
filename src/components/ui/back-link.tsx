import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-900"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
