import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          StudyForge
        </Link>

        {/* Navigation */}
        <div className="flex gap-8">
          <Link href="#">Features</Link>
          <Link href="#">How it Works</Link>
          <Link href="#">FAQ</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">Sign In</Button>

          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
