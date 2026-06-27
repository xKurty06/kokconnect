import type { ReactNode } from "react";

export function AuthShell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return (
    <main className="auth-shell-bg grid min-h-dvh place-items-center px-4 py-10">
      <div className="pointer-events-none fixed left-12 top-14 size-24 rounded-full bg-gold-warm/20 blur-2xl" />
      <div className="pointer-events-none fixed bottom-10 right-16 size-28 rounded-full bg-brand/15 blur-2xl" />
      <div
        className={`auth-card-enter relative w-full overflow-hidden rounded-2xl border border-border border-t-4 border-t-brand bg-white shadow-[0_24px_70px_rgba(17,17,17,0.18)] ring-1 ring-black/[0.04] ${
          wide ? "max-w-[860px]" : "max-w-[480px]"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-tint/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-warm/80 to-transparent" />
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
}
