export default function About() {
  const coreFacts = [
    "Computer Science & Mathematics graduate from Zagazig University (2026).",
    "Specialized in React.js, Next.js 16, and the MERN stack.",
    "Experience building full-stack products with Supabase, NextAuth, and modern state tools.",
    "Focused on UI/UX, performance, and scalable app architecture.",
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">01.</span>
            About Me
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello! I&apos;m{" "}
              <span className="text-white font-medium">Abdelrahman Khaled</span>
              , a frontend developer and recent Computer Science & Mathematics
              graduate with a strong focus on building polished digital
              experiences.
            </p>

            <p>
              My work centers on modern React and Next.js applications, from
              full-stack e-commerce storefronts to internal dashboards and
              corporate websites. I&apos;ve built products using{" "}
              <span className="text-cyan-400">Next.js 16</span>,{" "}
              <span className="text-white">React 19</span>, Supabase, and
              advanced state management tools such as React Query and Redux
              Toolkit.
            </p>

            <p>
              I also completed intensive training at the{" "}
              <span className="text-white">
                National Telecommunication Institute (NTI)
              </span>{" "}
              and a UI/UX Design course at Creativa Innovation Hub, which helps
              me combine visual design thinking with strong engineering
              execution.
            </p>

            <p>Here are a few highlights of my background:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-mono">
              {coreFacts.map((fact, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span> {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-bold font-mono text-cyan-400">
                  CS
                </span>
              </div>

              <h4 className="text-white font-bold text-xl mb-4">Education</h4>
              <p className="text-cyan-400 font-medium">
                Computer Science & Mathematics
              </p>
              <p className="text-gray-400 text-sm">Zagazig University</p>
              <p className="text-gray-500 text-xs mt-2 italic font-mono">
                Graduated 2026
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-widest">
                  Top Certs
                </h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] rounded border border-cyan-500/20">
                    NTI MEAN STACK
                  </span>
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] rounded border border-cyan-500/20">
                    UI/UX DESIGN
                  </span>
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] rounded border border-cyan-500/20">
                    UDEMY REACT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
