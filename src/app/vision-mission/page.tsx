import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { vision, visionExtended, mission, missionCommitments, about } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: vision,
};

export default function VisionMissionPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Purpose"
        title="Vision & Mission"
        subtitle="What we are building toward—and how we get there."
        dark
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[800px] space-y-16 px-5 sm:px-6">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Our Vision</p>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#1a1f2e] sm:text-4xl">{vision}</h2>
            <p className="leading-relaxed text-[#5a6478]">{visionExtended}</p>
          </Reveal>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Our Mission</p>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#1a1f2e] sm:text-4xl">{mission}</h2>
            <p className="mb-6 leading-relaxed text-[#5a6478]">Our mission is built around five commitments:</p>
            <div className="flex flex-wrap gap-3">
              {missionCommitments.map((c) => (
                <span key={c} className="rounded-full border border-[#e5e8ef] bg-[#f7f8fa] px-4 py-2 text-sm font-semibold text-[#1a1f2e]">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Corporate Philosophy</p>
            <p className="leading-relaxed text-[#5a6478]">{about.philosophy}</p>
          </Reveal>
          <Reveal>
            <Link href="/values" className="inline-flex rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220]">
              Explore our values
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
