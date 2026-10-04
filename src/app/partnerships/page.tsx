import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Manufacturer & Technology Partnerships",
  description:
    "Helum builds strategic relationships with reputable international manufacturers and technology providers—serving as a bridge between global clean-energy technology and African market needs.",
};

export default function PartnershipsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Collaboration"
        title="Manufacturer & Technology Partnerships"
        subtitle="Helum aims to serve as a bridge between global clean-energy technology and African market needs."
        image={images.partnerships}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6">
          <Reveal>
            <p className="mb-6 text-lg leading-relaxed text-[#5a6478]">
              Helum intends to build strategic relationships with reputable international manufacturers and
              technology providers. Our partnership model is designed around product quality, technical support,
              product availability, training, warranty support, product innovation, market development, joint
              marketing and local technical capability.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-[#5a6478]">
              We believe manufacturers benefit from strong local partners who understand the market, while
              customers benefit from access to established technologies supported locally.
            </p>
          </Reveal>
          <Stagger className="mb-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Manufacturers",
                body: "Access to quality energy products adapted for African operating conditions, with local technical support.",
              },
              {
                title: "Technology Providers",
                body: "Collaboration on solar modules, inverters, storage systems, monitoring platforms and energy-efficient equipment.",
              },
              {
                title: "Dealers & Installers",
                body: "Product access, training, marketing support, warranty coordination and commercial opportunities.",
              },
              {
                title: "Financing Partners",
                body: "Subject to partnerships, solutions around asset financing, PAYGO, instalment purchasing and SME financing.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6">
                  <h2 className="mb-2 font-bold text-[#1a1f2e]">{item.title}</h2>
                  <p className="text-sm text-[#5a6478]">{item.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">Channel structure</p>
            <p className="mb-10 text-[#5a6478] leading-relaxed">
              Manufacturer / Technology Partner → Helum Limited → Authorized Distributors → Dealers / Installers → End Customers.
              This structure allows Helum to expand market reach while maintaining control over product quality,
              technical standards and customer experience.
            </p>
          </Reveal>
          <Reveal className="text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
            >
              Partner With Helum
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
