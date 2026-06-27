"use client";

import Link from "next/link";
import { AlertCircle, Check, ChevronDown, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { InteractiveMap, type MapPosition } from "@/components/map/interactive-map";
import { Button } from "@/components/ui/button";

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  notes: string;
}

const initialData: RegistrationData = {
  name: "Juan Dela Paz",
  email: "juan@email.com",
  phone: "+63 917 000 0000",
  address: "CvSU Dormitory Building 3, Near Main Gate",
  landmark: "CvSU Dormitory Building 3",
  notes: "",
};

const DEFAULT_MAP_POSITION: MapPosition = [14.195484, 120.88143];
const inputClass = "h-11 rounded-lg border border-border bg-background px-4 font-normal shadow-sm transition focus:border-brand-blush focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10";
const labelClass = "grid gap-1.5 text-sm font-semibold";
const formatPosition = (position: MapPosition) => `Lat: ${position[0].toFixed(6)}, Lon: ${position[1].toFixed(6)}`;

export function RegisterFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);
  const [mapPosition, setMapPosition] = useState<MapPosition>(DEFAULT_MAP_POSITION);

  const update = (field: keyof RegistrationData, value: string) => setData((current) => ({ ...current, [field]: value }));
  const labels = ["Sign Up", "Pin Location", "Review"];

  if (step === 4) {
    return (
      <div className="auth-card-enter mx-auto max-w-lg p-10 text-center">
        <div className="mx-auto grid size-20 place-items-center rounded-full border-8 border-success/15 bg-success text-white shadow-[0_12px_28px_rgba(45,189,98,0.20)]"><Check className="size-9" /></div>
        <h1 className="mt-6 text-3xl font-bold">Account Created!</h1>
        <p className="mt-1 font-semibold">Welcome to Kuya Kok&apos;s, Juan!</p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">Your account is ready. Browse our menu and place your first order — hot, fast, affordable.</p>
        <div className="mt-7 flex items-center justify-between rounded-xl border border-success/15 bg-success/5 p-4 text-left text-sm"><div><strong className="block">{data.email}</strong><p className="text-muted">{data.phone}</p></div><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">✓ Active</span></div>
        <div className="mt-5 grid gap-3"><Link href="/menu" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand font-semibold text-white shadow-lg hover:bg-brand-deep">Start Ordering Now</Link><Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand font-semibold text-brand hover:bg-brand-tint">Go to Home</Link></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand/70">New customer setup</p>
        <h1 className="mt-1 text-2xl font-bold">Create Account</h1>
      </div>
      <ol className="mx-auto mt-5 grid max-w-lg grid-cols-3" aria-label="Registration progress">
        {labels.map((label, index) => {
          const number = index + 1;
          const done = step > number;
          const active = step === number;
          return <li key={label} className="relative flex flex-col items-center gap-2 text-center"><span className={`relative z-10 grid size-10 place-items-center rounded-full font-bold transition-all duration-200 ${done ? "bg-success text-white shadow-[0_8px_18px_rgba(45,189,98,0.18)]" : active ? "status-pulse bg-gold-warm text-white shadow-[0_8px_18px_rgba(245,166,35,0.22)]" : "bg-border text-muted"}`}>{done ? <Check className="size-5" /> : number}</span>{index < 2 && <span className={`absolute left-1/2 top-5 h-1 w-full transition-colors ${done ? "bg-success" : "bg-border"}`} />}<span className={`text-xs ${active ? "font-semibold text-gold-warm" : done ? "font-semibold text-success" : "text-muted"}`}>{label}</span></li>;
        })}
      </ol>

      {step === 1 && <form key="step-1" noValidate className="auth-card-enter mx-auto mt-6 max-w-2xl" onSubmit={(event) => { event.preventDefault(); setStep(2); }}>
        <div className="grid grid-cols-2 gap-4">
          <label className={labelClass}>Full Name<input value={data.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" className={inputClass} /></label>
          <label className={labelClass}>Email Address<input type="email" value={data.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" className={inputClass} /></label>
          <label className={`${labelClass} col-span-2`}>Mobile Number<input type="tel" value={data.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" className={inputClass} /></label>
          <label className={labelClass}>Password<span className="relative"><input type={showPassword ? "text" : "password"} placeholder="Create a strong password" autoComplete="new-password" className={`${inputClass} w-full pr-12`} /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-1 top-0 grid size-11 place-items-center rounded-lg text-muted hover:bg-brand-tint hover:text-brand" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}</button></span></label>
          <label className={labelClass}>Confirm Password<input type="password" placeholder="Re-enter password" autoComplete="new-password" className={inputClass} /></label>
        </div>
        <label className="mt-5 flex items-start gap-3 rounded-xl border border-border bg-background p-3 text-xs text-copy"><input type="checkbox" className="mt-0.5 size-4 accent-brand" />I agree to the Terms &amp; Conditions and Privacy Policy.</label>
        <Button type="submit" className="mt-5 w-full">Continue to Step 2 →</Button>
        <p className="mt-4 text-center text-xs text-muted">Already have an account? <Link href="/login" className="font-semibold text-brand hover:text-brand-deep">Log In</Link></p>
      </form>}

      {step === 2 && <div key="step-2" className="auth-card-enter mt-7 grid grid-cols-2 gap-6">
        <InteractiveMap value={mapPosition} onChange={setMapPosition} popupTitle="Selected delivery location" className="min-h-[440px] rounded-2xl border-[12px] border-[#e7ede5] shadow-[0_12px_30px_rgba(0,0,0,0.10)]" />
        <form noValidate className="grid content-start gap-4" onSubmit={(event) => { event.preventDefault(); setStep(3); }}><div><h2 className="text-xl font-bold">Delivery Location Details</h2><p className="mt-1 text-sm text-muted">Choose the map location, then add a clear landmark.</p></div>
          <label className={labelClass}>Selected Coordinates<input readOnly value={formatPosition(mapPosition)} className={inputClass} /></label>
          <label className={labelClass}>Building / Street Name / Block &amp; Lot<input value={data.address} onChange={(event) => update("address", event.target.value)} className={inputClass} /></label>
          <label className="relative grid gap-1.5 text-sm font-semibold">Select Dorm / Landmark<select value={data.landmark} onChange={(event) => update("landmark", event.target.value)} className={`${inputClass} appearance-none pr-10`}><option>CvSU Dormitory Building 3</option><option>Main Gate</option></select><ChevronDown className="absolute bottom-3.5 right-4 size-4 text-muted" /></label>
          <label className={labelClass}>Delivery Notes (Optional)<textarea value={data.notes} onChange={(event) => update("notes", event.target.value)} rows={2} className="resize-none rounded-lg border border-border bg-background p-4 font-normal shadow-sm transition focus:border-brand-blush focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10" /></label>
          <p className="flex gap-2 rounded-lg border border-brand-blush bg-brand-tint p-3 text-xs font-medium text-brand"><AlertCircle className="size-4 shrink-0" />The coordinate field updates when you choose a new map location.</p>
          <div className="grid grid-cols-2 gap-3"><Button type="button" variant="ghost" onClick={() => setStep(1)}>← Back to Step 1</Button><Button type="submit">Continue to Step 3 →</Button></div>
        </form>
      </div>}

      {step === 3 && <div key="step-3" className="auth-card-enter mx-auto mt-7 max-w-xl"><h2 className="text-xl font-bold">Review Your Information</h2><p className="mt-1 text-sm text-muted">Please confirm your details before creating your account.</p>
        <section className="surface-card mt-5 overflow-hidden rounded-xl"><div className="flex justify-between bg-background px-4 py-3 text-xs font-semibold"><span>PERSONAL INFORMATION</span><button onClick={() => setStep(1)} className="text-brand hover:text-brand-deep">Edit</button></div><dl className="divide-y divide-border px-4 text-sm"><div className="py-3"><dt className="text-muted">Full Name</dt><dd className="font-semibold">{data.name}</dd></div><div className="py-3"><dt className="text-muted">Email Address</dt><dd className="font-semibold">{data.email}</dd></div><div className="py-3"><dt className="text-muted">Mobile Number</dt><dd className="font-semibold">{data.phone}</dd></div></dl></section>
        <section className="surface-card mt-5 overflow-hidden rounded-xl"><div className="flex justify-between bg-background px-4 py-3 text-xs font-semibold"><span>DEFAULT DELIVERY LOCATION</span><button onClick={() => setStep(2)} className="text-brand hover:text-brand-deep">Edit</button></div><dl className="divide-y divide-border px-4 text-sm"><div className="py-3"><dt className="text-muted">Selected Coordinates</dt><dd className="font-semibold">{formatPosition(mapPosition)}</dd></div><div className="py-3"><dt className="text-muted">Building / Landmark</dt><dd className="font-semibold">{data.address}</dd></div><div className="py-3"><dt className="text-muted">Dorm / Reference</dt><dd className="font-semibold">{data.landmark}</dd></div></dl></section>
        <label className="mt-5 flex gap-3 rounded-lg bg-background p-3 text-xs text-copy"><input type="checkbox" defaultChecked className="size-4 accent-brand" />By creating an account, you agree to the Terms &amp; Conditions and Privacy Policy.</label><Button className="mt-5 w-full" onClick={() => setStep(4)}>Create My Account</Button><button className="mx-auto mt-3 block min-h-11 text-sm text-muted hover:text-brand" onClick={() => setStep(2)}>← Back to Step 2</button>
      </div>}
    </div>
  );
}
