import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { RegisterFlow } from "@/components/register-flow";

export const metadata: Metadata = { title: "Create Account" };
export default function RegisterPage() { return <AuthShell wide><RegisterFlow /></AuthShell>; }
