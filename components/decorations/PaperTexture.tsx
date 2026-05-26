interface PaperTextureProps {
  className?: string;
  variant?: "cream" | "parchment";
}

export function PaperTexture({ className = "", variant = "cream" }: PaperTextureProps) {
  return (
    <div
      className={`composition-layer ${variant === "parchment" ? "surface-paper" : "surface-cream"} ${className}`}
      aria-hidden="true"
    />
  );
}
