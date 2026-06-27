import type { ReactNode } from "react";

export function AuthShell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return (
    <main className="auth-shell-bg grid min-h-dvh place-items-center px-4 py-10">
      <div className="pointer-events-none fixed left-12 top-14 size-24 rounded-full bg-gold-warm/20 blur-2xl" />
      <div className="pointer-events-none fixed bottom-10 right-16 size-28 rounded-full bg-brand/15 blur-2xl" />
      <div className={`auth-card-enter surface-card relative w-full overflow-hidden rounded-2xl border-t-4 border-brand ${wide ? "max-w-5xl" : "max-w-[480px]"}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-warm/70 to-transparent" />
        {children}
      </div>
    </main>
  );
}
