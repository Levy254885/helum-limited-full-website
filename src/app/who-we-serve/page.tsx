import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { markets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Renewable-energy solutions for residential, SME, commercial, agricultural, institutional, industrial, rural markets and dealers across Kenya and East Africa.",
};

export default function WhoWeServePage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Markets"
        title="Solutions Across Multiple Segments"
        subtitle="Helum's market strategy is designed around the energy needs of homes, businesses, farms, institutions and channel partners."
        dark
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((m) => (
              <StaggerItem key={m.slug}>
                <article className="h-full rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6 transition hover:border-[#e8a317] hover:shadow-md">
                  <h2 className="mb-2 text-lg font-bold text-[#1a1f2e]">{m.title}</h2>
                  <p className="text-sm text-[#5a6478]">{m.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 text-center">
            <Link href="/contact" className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]">
              Discuss your sector needs
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
