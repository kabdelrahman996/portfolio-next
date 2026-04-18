import Image from "next/image"; // استيراد مكون الصورة من Next.js لضمان أفضل أداء
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] py-20"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Content Side */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-sm font-mono tracking-widest text-cyan-400 uppercase">
              Abdelrahman Khaled Elsayed
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Scalable
              </span>{" "}
              <br />
              Enterprise Apps.
            </h2>
          </div>

          <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-gray-400 leading-relaxed">
            React.js & Next.js Developer specializing in high-performance
            applications. Expertise in{" "}
            <span className="text-gray-200">MERN stack</span>,{" "}
            <span className="text-gray-200">Supabase</span>, and advanced state
            management.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 items-center">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3.5 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all active:scale-95"
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-all"
            >
              Download CV <HiDownload />
            </a>

            <div className="flex gap-4 lg:ml-2">
              {[
                { icon: FaGithub, href: "https://github.com/kabdelrahman996" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/abdlrhmankalled",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-3 bg-white/5 text-gray-400 rounded-full border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative flex-shrink-0">
          {/* Decorative Rings around the photo */}
          <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-2xl rotate-6 -z-10 animate-pulse"></div>
          <div className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl -rotate-3 -z-10"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/10 bg-gray-900 shadow-2xl shadow-cyan-500/10">
            <Image
              src="/photo.png"
              alt="Abdelrahman Khaled"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority // يعطي أولوية لتحميل الصورة لأنها في الـ Hero
            />
          </div>

          {/* Experience Badge (Optional UI Touch) */}
          <div className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block">
            <p className="text-cyan-400 font-bold text-xl leading-none">
              Senior
            </p>
            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
              CS Student{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
