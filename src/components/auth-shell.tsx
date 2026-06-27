import type { ReactNode } from "react";

export function AuthShell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return (
    <main className="grid min-h-dvh place-items-center bg-background px-4 py-10">
      <div className={`w-full overflow-hidden rounded-xl border-t-4 border-brand bg-white shadow-[0_10px_28px_rgba(0,0,0,0.14)] ${wide ? "max-w-5xl" : "max-w-[480px]"}`}>
        {children}
      </div>
    </main>
  );
}
