import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email Me",
      value: "abdlrahman.khalled@gmail.com",
      icon: <HiOutlineMail />,
      href: "mailto:abdlrahman.khalled@gmail.com",
      color: "group-hover:text-cyan-400",
      borderColor: "hover:border-cyan-500/30",
    },
    {
      title: "WhatsApp",
      value: "+20 155 8508 867",
      icon: <FaWhatsapp />,
      href: "https://wa.me/201558508867",
      color: "group-hover:text-green-500",
      borderColor: "hover:border-green-500/30",
    },
    {
      title: "LinkedIn",
      value: "Abdelrahman Khaled",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/abdlrhmankalled",
      color: "group-hover:text-blue-500",
      borderColor: "hover:border-blue-500/30",
    },
    {
      title: "GitHub",
      value: "kabdelrahman996",
      icon: <FaGithub />,
      href: "https://github.com/kabdelrahman996",
      color: "group-hover:text-white",
      borderColor: "hover:border-white/30",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#030712] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-mono tracking-widest uppercase text-sm">
            04. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Connect
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded"></div>
        </div>

        {/* Contact Grid - All Focused Now */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              className={`group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${method.borderColor} flex flex-col items-center text-center`}
            >
              <div
                className={`text-3xl mb-4 text-gray-400 transition-colors duration-300 ${method.color}`}
              >
                {method.icon}
              </div>
              <h4 className="text-white font-bold text-sm mb-1">
                {method.title}
              </h4>
              <p className="text-gray-500 text-xs truncate w-full">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Location & Summary */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <HiOutlineLocationMarker className="text-cyan-400" />
            <span className="text-sm font-mono">Zagazig, Sharqia, Egypt</span>
          </div>

          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
            I&apos;m currently looking for new opportunities and{" "}
            <span className="text-white">Internships</span>. My inbox is always
            open for interesting projects or just a tech chat!
          </p>

          <a
            href="mailto:abdlrahman.khalled@gmail.com"
            className="px-12 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all active:scale-95 shadow-lg shadow-cyan-500/5"
          >
            Start a Conversation
          </a>
        </div>

        {/* Simple Footer */}
        <footer className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
            Handcrafted by me with Next.js & Tailwind
          </p>
        </footer>
      </div>
    </section>
  );
}
