"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { ButtonLink } from "@/components/ui/button";

interface HomeBagContextValue {
  bagCount: number;
  incrementBag: () => void;
}

const HomeBagContext = createContext<HomeBagContextValue | null>(null);

export function HomeBagProvider({
  children,
  initialCount,
}: {
  children: ReactNode;
  initialCount: number;
}) {
  const [bagCount, setBagCount] = useState(initialCount);

  return (
    <HomeBagContext.Provider
      value={{ bagCount, incrementBag: () => setBagCount((count) => count + 1) }}
    >
      {children}
    </HomeBagContext.Provider>
  );
}

export function useHomeBag() {
  const context = useContext(HomeBagContext);

  if (!context) {
    throw new Error("useHomeBag must be used within HomeBagProvider");
  }

  return context;
}

export function HomeBagLink() {
  const { bagCount } = useHomeBag();

  return (
    <ButtonLink
      href="/cart"
      variant="outline"
      className="min-w-40 border-gold-warm text-gold-warm hover:bg-brand-deep"
    >
      View My Bag ({bagCount})
    </ButtonLink>
  );
}
