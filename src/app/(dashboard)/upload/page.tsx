"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud, FileText, X, AlertCircle, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import BackLink from "@/components/ui/back-link";

const MAX_SIZE = 20 * 1024 * 1024; // 20MB

export default function UploadPage() {
  const router = useRouter();
  const supabase = createClient();
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validateAndSetFile(f: File | undefined) {
    setError(null);
    if (!f) return;
    if (f.type !== "application/pdf") {
      setError("Only PDF files are supported right now.");
      return;
    }
    if (f.size > MAX_SIZE) {
      setError("File is too large. Max size is 20MB.");
      return;
    }
    setFile(f);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(false);
    validateAndSetFile(e.dataTransfer.files?.[0]);
  }

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    setError(null);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("You must be logged in.");
      setUploading(false);
      return;
    }

    const path = `${user.id}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(path, file);

    if (uploadError) {
      setError(uploadError.message);
      setUploading(false);
      return;
    }

    const { data: doc, error: dbError } = await supabase
      .from("documents")
      .insert({
        user_id: user.id,
        title: file.name.replace(/\.pdf$/i, ""),
        storage_path: path,
        file_size: file.size,
        status: "ready",
      })
      .select()
      .single();

    setUploading(false);

    if (dbError || !doc) {
      setError(
        dbError?.message ?? "Something went wrong saving your document.",
      );
      return;
    }

    router.push(`/workspace/${doc.id}`);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-6 sm:px-0">
      <BackLink href="/dashboard" label="Back to dashboard" />

      <h1 className="text-3xl font-bold text-brand-dark">Upload a document</h1>
      <p className="mt-1.5 text-sm text-brand-dark/60">
        Upload your lecture notes as a PDF to get started.
      </p>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => !uploading && inputRef.current?.click()}
        className={`mt-8 flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 py-14 text-center transition-all ${
          dragActive
            ? "scale-[1.01] border-brand-mauve bg-brand-mauve/5"
            : "border-brand-dark/15 bg-white hover:border-brand-mauve/40"
        } ${uploading ? "pointer-events-none opacity-60" : ""}`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => validateAndSetFile(e.target.files?.[0])}
        />

        {file ? (
          <>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mauve/10">
              <FileText className="h-7 w-7 text-brand-mauve" />
            </div>
            <p className="mt-4 max-w-xs truncate text-sm font-medium text-brand-dark">
              {file.name}
            </p>
            <p className="mt-0.5 text-xs text-brand-dark/50">
              {(file.size / 1024 / 1024).toFixed(1)} MB
            </p>
            {!uploading && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                }}
                className="mt-4 inline-flex items-center gap-1 rounded-full border border-brand-dark/10 px-3 py-1.5 text-xs font-medium text-brand-dark/60 transition hover:border-brand-dark/20 hover:text-brand-dark"
              >
                <X className="h-3.5 w-3.5" /> Remove
              </button>
            )}
          </>
        ) : (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-mauve/10">
              <UploadCloud className="h-8 w-8 text-brand-mauve" />
            </div>
            <p className="mt-5 text-sm font-semibold text-brand-dark">
              Drag and drop your PDF here
            </p>
            <p className="mt-1 text-xs text-brand-dark/50">
              or click to browse — max 20MB
            </p>
          </>
        )}
      </div>

      {uploading && (
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-brand-dark/10">
          <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-brand-mauve" />
        </div>
      )}

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button
        onClick={handleUpload}
        disabled={!file || uploading}
        size="lg"
        className="mt-6 w-full"
      >
        {uploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Uploading...
          </>
        ) : (
          "Upload document"
        )}
      </Button>
    </div>
  );
}
