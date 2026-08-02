"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/log-in");
    router.refresh();
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSignOut}
      className="rounded-full border-brand-dark/15 text-brand-dark hover:bg-brand-dark hover:text-brand-cream"
    >
      Sign out
    </Button>
  );
}
