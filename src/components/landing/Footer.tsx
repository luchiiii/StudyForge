import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold">StudyForge</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Study smarter with AI.
          </p>
        </div>

        <div className="flex gap-8">
          <Link href="#">Features</Link>
          <Link href="#">How it Works</Link>
          <Link href="#">FAQ</Link>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 StudyForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
