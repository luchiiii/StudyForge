"use client";

import Link from "next/link";
import { useState } from "react";
import { MailCheck, AlertCircle, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "@/components/auth/password-input";
import AuthPanel from "@/components/auth/auth-panel";
import BackLink from "@/components/ui/back-link";
import Logo from "@/components/shared/logo";

export default function SignUpPage() {
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen bg-brand-cream">
        <AuthPanel />
        <div className="flex w-full flex-col items-center justify-center px-6 py-12 text-center md:w-1/2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mauve/10">
            <MailCheck className="h-7 w-7 text-brand-mauve" />
          </div>
          <h1 className="mt-5 text-2xl font-bold text-brand-dark">
            Check your email
          </h1>
          <p className="mt-2 max-w-sm text-sm text-brand-dark/60">
            We sent a confirmation link to{" "}
            <span className="font-medium text-brand-dark">{email}</span>. Click
            it to activate your account.
          </p>
          <Link
            href="/log-in"
            className="mt-6 text-sm font-medium text-brand-mauve hover:underline"
          >
            Back to log in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-brand-cream">
      <AuthPanel />

      <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:w-1/2 md:px-16">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 flex items-center justify-between md:hidden">
            <Logo />
          </div>

          <BackLink href="/" label="Back to home" />

          <h1 className="text-3xl font-bold text-brand-dark">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-brand-dark/60">
            Already have one?{" "}
            <Link
              href="/log-in"
              className="font-medium text-brand-mauve hover:underline"
            >
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-brand-dark/80">
                Full name
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

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
                placeholder="At least 6 characters"
                required
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Creating
                  account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
