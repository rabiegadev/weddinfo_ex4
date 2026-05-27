"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { typography } from "@/styles/typography";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
  label?: string;
  className?: string;
  variant?: "default" | "hero";
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "dni" },
  { key: "hours", label: "godz." },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sek" },
];

export function Countdown({
  targetDate,
  label,
  className = "",
  variant = "default",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);
  const isHero = variant === "hero";

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div
        className={`flex justify-center ${isHero ? "gap-0" : "gap-3 md:gap-5"} ${className}`}
        aria-hidden="true"
      >
        {units.map((unit) => (
          <div key={unit.key} className={isHero ? "flex items-center" : ""}>
            <div
              className={
                isHero
                  ? "flex min-w-[3.25rem] flex-col items-center px-3 py-1 md:min-w-[4rem] md:px-4"
                  : "flex min-w-[3.5rem] flex-col items-center gap-2.5 rounded-sm bg-cream/80 px-3 py-3 shadow-soft backdrop-blur-sm md:min-w-[4.5rem] md:gap-3 md:px-4 md:py-4"
              }
            >
              <span
                className={
                  isHero
                    ? "font-[family-name:var(--font-display)] text-2xl font-light text-gold-soft md:text-3xl"
                    : "type-display text-2xl font-medium text-ink md:text-3xl"
                }
              >
                —
              </span>
              <span
                className={`${typography.caption} font-medium ${isHero ? "!text-cream/80" : "!text-ink"}`}
              >
                {unit.label}
              </span>
            </div>
            {isHero && unit.key !== "seconds" ? (
              <span className="h-8 w-px bg-cream/35" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <p
        className={`${typography.script} text-center ${isHero ? "text-cream" : "text-rose-deep"} ${className}`}
      >
        Dziś jest nasz dzień!
      </p>
    );
  }

  return (
    <motion.div className={className}>
      {label ? (
        <p className={`${typography.caption} mb-4 text-center text-cream/90`}>{label}</p>
      ) : null}
      <div className={`flex justify-center ${isHero ? "gap-0" : "gap-3 md:gap-5"}`}>
        {units.map((unit, index) => (
          <div key={unit.key} className={isHero ? "flex items-center" : ""}>
            <motion.div
              className={
                isHero
                  ? "flex min-w-[3.25rem] flex-col items-center px-3 py-1 md:min-w-[4rem] md:px-4"
                  : "flex min-w-[3.5rem] flex-col items-center gap-2.5 rounded-sm border border-cream-dark/60 bg-cream/85 px-3 py-3 shadow-soft backdrop-blur-sm md:min-w-[4.5rem] md:gap-3 md:px-4 md:py-4"
              }
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <span
                className={
                  isHero
                    ? "font-[family-name:var(--font-display)] text-2xl font-light tabular-nums text-gold-soft md:text-3xl lg:text-4xl"
                    : "type-display text-2xl font-medium !text-ink md:text-3xl lg:text-4xl"
                }
              >
                {String(timeLeft[unit.key]).padStart(2, "0")}
              </span>
              <span
                className={`${typography.caption} font-medium uppercase ${isHero ? "!text-cream/75 !tracking-[0.16em]" : "!text-ink"}`}
              >
                {unit.label}
              </span>
            </motion.div>
            {isHero && unit.key !== "seconds" ? (
              <span className="h-9 w-px bg-cream/35 md:h-10" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
