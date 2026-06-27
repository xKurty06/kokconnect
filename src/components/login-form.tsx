"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-9">
      <div className="flex items-center gap-3">
        <div className="grid size-[82px] place-items-center rounded-2xl bg-brand-tint ring-1 ring-brand/10">
          <Image
            src="/assets/kuya-kok-logo.png"
            alt="Kuya Kok's logo"
            width={76}
            height={76}
            className="size-[76px] object-contain"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">
            KokConnect
          </p>
          <h1 className="mt-1 text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-1 text-sm text-muted">
            Log in to your Kuya Kok&apos;s account.
          </p>
        </div>
      </div>

      <div className="mt-7 grid gap-5">
        <label className="grid gap-2 text-sm font-semibold">
          Email Address
          <input
            type="email"
            autoComplete="email"
            placeholder="your.account@email.com"
            className="form-field h-12 rounded-lg px-4 font-normal placeholder:text-muted"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold">
          Password
          <span className="relative">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              className="form-field h-12 w-full rounded-lg px-4 pr-12 font-normal placeholder:text-muted"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-1 top-0 grid size-12 cursor-pointer place-items-center rounded-lg text-muted hover:bg-brand-tint hover:text-brand"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </span>

          <Link
            href="/login"
            className="justify-self-end text-xs font-semibold text-brand hover:text-brand-deep"
          >
            Forgot password?
          </Link>
        </label>

        <Link
          href="/menu"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-xl"
        >
          Log In
        </Link>
      </div>

      <div className="my-5 flex items-center gap-3 text-xs text-muted">
        <span className="h-px flex-1 bg-border" />
        <span>or continue with</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <Link
        href="/menu"
        className="group flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-border bg-white text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-background hover:shadow-md"
      >
        <span className="grid size-6 place-items-center rounded-full bg-brand-tint font-bold text-brand transition group-hover:scale-105">
          G
        </span>
        Continue with Google
      </Link>

      <p className="mt-6 text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-brand hover:text-brand-deep">
          Sign Up
        </Link>
      </p>
    </div>
  );
}