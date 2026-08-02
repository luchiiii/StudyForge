"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "@/components/auth/password-input";
import AuthPanel from "@/components/auth/auth-panel";
import BackLink from "@/components/ui/back-link";
import Logo from "@/components/shared/logo";

function LogInForm() {
  const router = useRouter();
  const supabase = createClient();
  const searchParams = useSearchParams();
  const justSignedUp = searchParams.get("justSignedUp") === "true";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="mb-8 flex items-center justify-between md:hidden">
        <Logo />
      </div>

      <BackLink href="/" label="Back to home" />

      <h1 className="text-3xl font-bold text-brand-dark">Welcome back</h1>
      <p className="mt-2 text-sm text-brand-dark/60">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-brand-mauve hover:underline"
        >
          Sign up
        </Link>
      </p>

      {justSignedUp && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-mauve/10 px-3.5 py-3 text-sm text-brand-mauve">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>Account created, log in to continue.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-brand-dark/80">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-brand-dark/80">
            Password
          </Label>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />
        </div>

        {error && (
          <div className="flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <Button type="submit" disabled={loading} size="lg" className="w-full">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Logging in...
            </>
          ) : (
            "Log in"
          )}
        </Button>
      </form>
    </div>
  );
}

export default function LogInPage() {
  return (
    <div className="flex min-h-screen bg-brand-cream">
      <AuthPanel />
      <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:w-1/2 md:px-16">
        <Suspense fallback={null}>
          <LogInForm />
        </Suspense>
      </div>
    </div>
  );
}
