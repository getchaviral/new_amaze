import Link from "next/link";
import { BoothElevation } from "@/components/art/booth";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="shell flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <p className="eyebrow text-brand">404</p>
        <h1 className="m-0 max-w-2xl text-[2.25rem] leading-[1.08] font-extrabold tracking-tight sm:text-[3rem]">
          This booth isn’t on the floor plan
        </h1>
        <p className="m-0 max-w-xl text-lg leading-relaxed text-ink-soft">
          The page you asked for isn’t here. Try one of these instead.
        </p>
        <div className="flex w-full max-w-3xl flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
          <Link href="/services" className="btn btn-outline">
            Our services
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact us
          </Link>
        </div>
        <div className="mt-4 w-full max-w-2xl overflow-hidden rounded-panel border border-line bg-white p-4">
          <BoothElevation variant="wire" className="w-full" />
        </div>
      </div>
    </section>
  );
}
