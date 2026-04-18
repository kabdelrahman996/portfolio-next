import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "The Wild Oasis",
    description:
      "A full-featured internal management application for a boutique hotel. Includes booking management, cabin details, and an interactive statistics dashboard.",
    tech: ["React", "Styled Components", "Supabase", "React Query", "Recharts"],
    link: "https://the-wild-oaisis-abb.netlify.app/", // ضيف اللينك لو متاح
    github: "https://github.com/kabdelrahman996/the-wild-oasis-react.git",
    image: "/wild-oasis.png", // تأكد من وجود الصور في public/
  },
  {
    title: "Tnafos Construction Group",
    description:
      "A professional corporate website optimized for performance and SEO using Next.js Server Components and advanced metadata configurations.",
    tech: ["Next.js", "Tailwind CSS", "Server Components"],
    link: "https://tnafos.vercel.app/",
    github: "https://github.com/kabdelrahman996",
    image: "/tnafos.png",
  },
  {
    title: "Fast React Pizza Co.",
    description:
      "A responsive single-page pizza ordering app with menu browsing, cart management, and real-time order tracking.",
    tech: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    link: "https://pizza-co-abb.netlify.app/",
    github: "https://github.com/kabdelrahman996/Fast-React-Pizza-Co..git",
    image: "/pizza-app.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">03.</span>
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Project Image */}
              <div className="flex-1 relative group overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-2xl">
                <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Project Content */}
              <div
                className={`flex-1 space-y-4 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
              >
                <p className="text-cyan-400 font-mono text-sm tracking-widest">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white hover:text-cyan-400 transition-colors cursor-default">
                  {project.title}
                </h3>

                <div
                  className={`p-6 rounded-lg bg-[#112240] text-gray-300 shadow-xl border border-white/5 relative z-20 ${
                    index % 2 === 0 ? "lg:-ml-12" : "lg:-mr-12"
                  }`}
                >
                  <p>{project.description}</p>
                </div>

                <ul
                  className={`flex flex-wrap gap-4 text-sm font-mono text-gray-400 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>

                <div
                  className={`flex gap-5 text-gray-200 text-xl ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
