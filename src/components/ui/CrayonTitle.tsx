import { cn } from "@/lib/utils";

type CrayonTitleProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
};

export function CrayonTitle({
  as: Tag = "h2",
  children,
  className,
  highlightClassName,
}: CrayonTitleProps) {
  return (
    <Tag className={cn("display-title", className)}>
      <span className={highlightClassName}>
        {children}
      </span>
    </Tag>
  );
}
