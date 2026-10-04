import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { solutionPortfolio } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Residential, SME, commercial, industrial and agricultural renewable-energy solutions from Helum Limited.",
};

export default function SolutionsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Portfolio"
        title="Solutions Designed Around Real Requirements"
        subtitle="Helum's portfolio addresses different energy needs rather than offering a one-size-fits-all product."
        image={images.energyTech}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {solutionPortfolio.map((s) => (
              <StaggerItem key={s.title}>
                <article className="h-full rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-8 transition hover:border-[#e8a317] hover:shadow-md">
                  <h2 className="mb-3 text-xl font-bold text-[#1a1f2e]">{s.title}</h2>
                  <p className="text-sm leading-relaxed text-[#5a6478]">{s.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-14 text-center">
            <Link href="/services" className="mr-4 inline-flex rounded-full border-2 border-[#e5e8ef] px-6 py-3 text-sm font-semibold text-[#1a1f2e]">
              Our services
            </Link>
            <Link href="/contact" className="inline-flex rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220]">
              Request a solution discussion
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
