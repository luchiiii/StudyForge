import { ReactNode } from "react";

interface StepCardProps {
  icon: ReactNode;
  step: string;
  title: string;
  description: string;
}

export default function StepCard({
  icon,
  step,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="rounded-3xl border p-8">
      <div className="mb-5 w-fit rounded-2xl bg-muted p-3">{icon}</div>

      <p className="mb-2 text-sm font-semibold text-primary">{step}</p>

      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
