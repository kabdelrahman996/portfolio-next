import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "VibeCheck",
    category: "Full-Stack Commerce",
    description:
      "A polished fashion e-commerce storefront built with Next.js 16 and React 19, focused on a delightful browsing experience, secure authentication, and a smooth cart-to-checkout flow.",
    highlights: [
      "Structured the app with a scalable Next.js App Router architecture.",
      "Integrated Google OAuth and automated Supabase profile creation.",
      "Built reliable cart, order, and product data flows with real-time feedback.",
    ],
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Supabase", "NextAuth"],
    link: "http://vibe-check-abb.vercel.app",
    github: "",
    image: "/vibecheck.png",
  },
  {
    title: "The Wild Oasis",
    category: "Hotel Operations Dashboard",
    description:
      "A full-featured internal management app for a boutique hotel with booking workflows, cabin details, and a dynamic statistics dashboard.",
    highlights: [
      "Implemented advanced data fetching and caching with React Query.",
      "Delivered reusable compound UI components for tables, modals, and menus.",
      "Managed authentication and media storage through Supabase.",
    ],
    tech: ["React", "Styled Components", "Supabase", "React Query", "Recharts"],
    link: "https://the-wild-oaisis-abb.netlify.app/",
    github: "https://github.com/kabdelrahman996/the-wild-oasis-react.git",
    image: "/wild-oasis.png",
  },
  {
    title: "Tnafos Construction Group",
    category: "Corporate Website",
    description:
      "A professional corporate website optimized for performance and SEO using Next.js Server Components and metadata-driven content structure.",
    highlights: [
      "Crafted a premium, responsive experience based on Figma-led UI direction.",
      "Improved SEO and speed with server-rendered content and optimized metadata.",
      "Delivered a refined, brand-centered presentation for a modern client-facing site.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Server Components"],
    link: "https://tnafos.vercel.app/",
    github: "https://github.com/kabdelrahman996",
    image: "/tnafos.png",
  },
];

const highlights = [
  { title: "Modern stack", value: "React + Next.js" },
  { title: "Product range", value: "E-commerce & dashboards" },
  { title: "Focus", value: "Performance & UX" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.35em] text-cyan-400">
              03. Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Projects that balance strong UI, clean architecture, and real
              business value.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-400">
            I enjoy building products that look polished, feel intuitive, and
            are structured for long-term growth.
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <p className="text-sm font-mono uppercase tracking-[0.3em] text-cyan-400">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-gray-300">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(6,182,212,0.06)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-gray-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-mono uppercase tracking-[0.3em] text-cyan-400">
                    Featured Project
                  </p>
                  <div className="flex items-center gap-3 text-gray-300">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-cyan-400"
                        aria-label={`GitHub for ${project.title}`}
                      >
                        <FiGithub size={18} />
                      </a>
                    ) : null}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-cyan-400"
                      aria-label={`Live preview for ${project.title}`}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-gray-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-cyan-400">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#0f172a] px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
