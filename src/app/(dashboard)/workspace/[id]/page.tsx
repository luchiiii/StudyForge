import { notFound } from "next/navigation";
import { FileText, ListChecks, Sparkles, Clock } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import BackLink from "@/components/ui/back-link";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: Sparkles,
    title: "Generate Summary",
    description:
      "Get a clear, condensed summary of this document's key points.",
  },
  {
    icon: ListChecks,
    title: "Generate Quiz",
    description: "Test yourself with quiz questions pulled from this document.",
  },
];

function formatSize(bytes: number | null) {
  if (!bytes) return "";
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default async function DocumentWorkspacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: document } = await supabase
    .from("documents")
    .select("id, title, file_size, created_at")
    .eq("id", id)
    .eq("user_id", user!.id)
    .single();

  if (!document) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-0">
      <BackLink href="/dashboard" label="Back to dashboard" />

      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-mauve/10">
          <FileText className="h-7 w-7 text-brand-mauve" />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold text-brand-dark sm:text-3xl">
            {document.title}
          </h1>
          <p className="mt-1 text-sm text-brand-dark/50">
            Uploaded {new Date(document.created_at).toLocaleDateString()}
            {document.file_size ? ` · ${formatSize(document.file_size)}` : ""}
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-brand-dark/50">
        What would you like to do?
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {actions.map((a) => (
          <div
            key={a.title}
            className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-brand-dark/5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mauve/10">
              <a.icon className="h-5 w-5 text-brand-mauve" />
            </div>
            <h3 className="mt-4 font-bold text-brand-dark">{a.title}</h3>
            <p className="mt-1.5 flex-1 text-sm text-brand-dark/60">
              {a.description}
            </p>
            <Button disabled size="lg" className="mt-5 w-full opacity-50">
              Generate
            </Button>
            <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-brand-mauve/10 px-3 py-1.5">
              <Clock className="h-3 w-3 text-brand-mauve" />
              <span className="text-xs font-medium text-brand-mauve">
                Coming once AI integration is added
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
