import { Card, CardBody, CardHeader } from "./Card";

export function DetailPanel({
  title,
  badge,
  children,
  className,
}: {
  title: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader title={title} action={badge} />
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export function Avatar({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700 ${sizes[size]}`}
    >
      {initials}
    </div>
  );
}
