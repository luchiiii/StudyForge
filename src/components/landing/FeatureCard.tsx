import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border bg-background p-6 transition hover:shadow-lg">
      <div className="mb-5 w-fit rounded-2xl bg-muted p-3">{icon}</div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
