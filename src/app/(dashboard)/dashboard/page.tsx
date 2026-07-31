import Link from "next/link";
import { FileText, Plus, UploadCloud } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: documents } = await supabase
    .from("documents")
    .select("id, title, status, created_at")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Your documents</h1>
          <p className="mt-1 text-sm text-slate-500">
            Upload lecture notes and generate summaries, quizzes, and
            flashcards.
          </p>
        </div>
        <Button className="bg-brand-teal hover:bg-brand-teal/90" asChild>
          <Link href="/upload">
            <Plus className="h-4 w-4" /> Upload document
          </Link>
        </Button>
      </div>

      {!documents || documents.length === 0 ? (
        <div className="mt-16 flex flex-col items-center rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-20 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/10">
            <UploadCloud className="h-7 w-7 text-brand-teal" />
          </div>
          <h2 className="mt-5 text-lg font-semibold text-slate-900">
            No documents yet
          </h2>
          <p className="mt-1 max-w-sm text-sm text-slate-500">
            Upload your first PDF to generate a summary or quiz from your own
            notes.
          </p>
          <Button className="mt-6 bg-brand-teal hover:bg-brand-teal/90" asChild>
            <Link href="/upload">Upload your first document</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <Link
              key={doc.id}
              href={`/workspace/${doc.id}`}
              className="rounded-2xl bg-white p-5 ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal/10">
                <FileText className="h-5 w-5 text-brand-teal" />
              </div>
              <h3 className="mt-4 line-clamp-1 font-semibold text-slate-900">
                {doc.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {new Date(doc.created_at).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
