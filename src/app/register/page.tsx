import type { Metadata } from "next";
import { RegisterFlow } from "@/components/register-flow";

export const metadata: Metadata = { title: "Create Account" };

export default function RegisterPage() {
  return <RegisterFlow />;
}
