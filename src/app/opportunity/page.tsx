import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { investment, growthFramework, closing } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Growth & Opportunity",
  description: investment.intro,
};

export default function OpportunityPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Opportunity"
        title="Kenya as Our Foundation. East Africa as Our Horizon."
        subtitle={investment.intro}
        image={images.opportunity}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6">
          <Reveal>
            <h2 className="mb-4 text-2xl font-extrabold text-[#1a1f2e]">Regional ambition</h2>
            <p className="mb-6 leading-relaxed text-[#5a6478]">{investment.opportunity}</p>
            <p className="mb-12 leading-relaxed text-[#5a6478]">{investment.platform}</p>
          </Reveal>

          <Reveal>
            <h2 className="mb-6 text-2xl font-extrabold text-[#1a1f2e]">Growth framework</h2>
          </Reveal>
          <Stagger className="mb-12 space-y-4">
            {growthFramework.map((g, i) => (
              <StaggerItem key={g.title}>
                <article className="flex gap-4 rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6">
                  <span className="text-sm font-bold text-[#e8a317]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="mb-1 font-bold text-[#1a1f2e]">{g.title}</h3>
                    <p className="text-sm text-[#5a6478]">{g.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <div className="rounded-2xl bg-[#0b1220] p-8 text-white sm:p-12">
              {closing.lines.map((line) => (
                <p key={line} className="mb-2 text-lg font-semibold tracking-wide sm:text-xl">
                  {line}
                </p>
              ))}
              <p className="mt-6 leading-relaxed text-white/75">{closing.commitment}</p>
              <p className="mt-6 text-2xl font-extrabold text-[#e8a317]">{closing.objective}</p>
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <Link href="/contact" className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]">
              Talk to Helum
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
