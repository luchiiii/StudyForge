import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-bold text-slate-900">
        Confirmation link expired
      </h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        That link is invalid or has expired. Try signing up again to get a new
        one.
      </p>
      <Button className="mt-6 bg-brand-teal hover:bg-brand-teal/90" asChild>
        <Link href="/sign-up">Back to sign up</Link>
      </Button>
    </div>
  );
}
