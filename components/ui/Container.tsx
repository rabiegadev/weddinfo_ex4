import type { ReactNode } from "react";
import { spacing } from "@/styles/spacing";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: keyof typeof spacing.container;
}

const sizeClasses: Record<keyof typeof spacing.container, string> = {
  narrow: spacing.container.narrow,
  default: spacing.container.default,
  wide: spacing.container.wide,
  full: spacing.container.full,
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-5 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
