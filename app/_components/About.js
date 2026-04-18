import Image from "next/image";

export default function About() {
  const coreFacts = [
    "Senior Computer Science student at Zagazig University.",
    "Specialized in React.js, Next.js, and the MERN stack.",
    "NTI Graduate with a focus on Full-Stack development.",
    "Passionate about UI/UX and user-centered design.",
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">01.</span>
            About Me
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello! I&apos;m{" "}
              <span className="text-white font-medium">Abdelrahman Khaled</span>
              , a frontend developer who enjoys creating things that live on the
              internet. My journey in web development started back in 2024, and
              since then, I&apos;ve focused on mastering modern technologies to
              build scalable applications.
            </p>

            <p>
              Currently, I am a{" "}
              <span className="text-cyan-400">
                Senior Computer Science student at Zagazig University
              </span>
              . Over the past year, I&apos;ve had the privilege of undergoing
              intensive training at the{" "}
              <span className="text-white">
                National Telecommunication Institute (NTI)
              </span>
              , where I honed my skills in the MEAN/MERN stack.
            </p>

            <p>
              I also completed a specialized{" "}
              <span className="text-white font-medium">
                UI/UX Design course at Creativa Innovation Hub
              </span>
              , which allows me to bridge the gap between design and code,
              ensuring that every application I build is not only functional but
              also visually compelling.
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

          {/* Decorative Stats/Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-bold font-mono text-cyan-400">
                  CS
                </span>
              </div>

              <h4 className="text-white font-bold text-xl mb-4">Education</h4>
              <p className="text-cyan-400 font-medium">
                Bachelor of Computer Science
              </p>
              <p className="text-gray-400 text-sm">Zagazig University </p>
              <p className="text-gray-500 text-xs mt-2 italic font-mono">
                2021 - Present
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
