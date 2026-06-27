"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-9">
      <div className="flex items-center gap-3">
        <Image src="/assets/kuya-kok-logo.png" alt="Kuya Kok's logo" width={76} height={76} className="size-[76px] object-contain" />
        <div><h1 className="text-3xl font-bold">Welcome Back!</h1><p className="mt-1 text-sm text-muted">Log in to your Kuya Kok&apos;s account.</p></div>
      </div>
      <form className="mt-8 grid gap-5" onSubmit={(event) => event.preventDefault()}>
        <label className="grid gap-2 text-sm font-semibold">Email Address<input type="email" autoComplete="email" placeholder="your.account@email.com" className="h-12 rounded-lg border-0 bg-background px-4 font-normal placeholder:text-muted" /></label>
        <label className="grid gap-2 text-sm font-semibold">Password<span className="relative"><input type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="••••••••" className="h-12 w-full rounded-lg border-0 bg-background px-4 pr-12 font-normal placeholder:text-muted" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-1 top-0 grid size-12 cursor-pointer place-items-center text-muted" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}</button></span><Link href="/login" className="justify-self-end text-xs font-semibold text-brand">Forgot password?</Link></label>
        <Button type="submit" className="w-full">Log In</Button>
      </form>
      <div className="my-5 flex items-center gap-3 text-xs text-muted"><span className="h-px flex-1 bg-border" /><span>or continue with</span><span className="h-px flex-1 bg-border" /></div>
      <button type="button" className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-border bg-white text-sm font-semibold hover:bg-background"><span className="font-bold text-brand">G</span>Continue with Google</button>
      <p className="mt-6 text-center text-sm text-muted">Don&apos;t have an account? <Link href="/register" className="font-semibold text-brand">Sign Up</Link></p>
    </div>
  );
}
