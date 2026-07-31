"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthPanel from "@/components/auth/auth-panel";
import BackLink from "@/components/ui/back-link";
// import { MailCheck } from "lucide-react"; // TODO: re-enable when email confirmation is back on

export default function SignUpPage() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [submitted, setSubmitted] = useState(false); // TODO: re-enable when email confirmation is back on

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

    // TEMP: email confirmation is disabled in Supabase right now, so the user
    // is already signed in immediately after signUp — go straight to dashboard.
    router.push("/dashboard");

    // TODO: when confirm email is turned back ON, remove the line above
    // and uncomment the block below instead:
    // setSubmitted(true);
  }

  // TODO: re-enable this whole block when email confirmation is back on
  // if (submitted) {
  //   return (
  //     <div className="flex min-h-screen">
  //       <AuthPanel />
  //       <div className="flex w-full flex-col items-center justify-center px-6 py-12 text-center md:w-1/2">
  //         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/10">
  //           <MailCheck className="h-7 w-7 text-brand-teal" />
  //         </div>
  //         <h1 className="mt-5 text-2xl font-bold text-slate-900">Check your email</h1>
  //         <p className="mt-2 max-w-sm text-sm text-slate-500">
  //           We sent a confirmation link to <span className="font-medium text-slate-700">{email}</span>.
  //           Click it to activate your account.
  //         </p>
  //         <Link href="/log-in" className="mt-6 text-sm font-medium text-brand-teal hover:underline">
  //           Back to log in
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex min-h-screen">
      <AuthPanel />

      <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-16">
        <div className="mx-auto w-full max-w-sm">
          <BackLink href="/" label="Back to home" />

          <h1 className="text-2xl font-bold text-slate-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Already have one?{" "}
            <Link
              href="/log-in"
              className="font-medium text-brand-teal hover:underline"
            >
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-teal hover:bg-brand-teal/90"
            >
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
