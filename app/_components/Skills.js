import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiMongodb,
  SiSupabase,
  SiJavascript,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "JavaScript (ES6+)",
        icon: <SiJavascript className="text-[#F7DF1E]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
      {
        name: "React Query",
        icon: <SiReactquery className="text-[#FF4154]" />,
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      {
        name: "Express.js",
        icon: <span className="text-white font-bold">Ex</span>,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      {
        name: "Supabase (PostgreSQL)",
        icon: <SiSupabase className="text-[#3ECF8E]" />,
      },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      {
        name: "Agile Workflow",
        icon: <span className="text-cyan-400 text-xs font-mono">AGILE</span>,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#030712] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-2xl">02.</span>
            Technical Proficiency
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-8 tracking-tight">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="text-2xl transition-transform group-hover/item:scale-110 duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 text-sm font-medium group-hover/item:text-gray-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full -z-0"></div>
    </section>
  );
}
