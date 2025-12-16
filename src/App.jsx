import { useState, useEffect, useRef } from 'react';
import { Particles } from './components/magicui/Particles';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import portf2 from './assets/portf2.jpg';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from 'framer-motion';
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Marquee } from "@/components/magicui/marquee";


const skills = [
  { icon: "react", name: "React" },
  { icon: "nextjs", name: "Next.js" },
  { icon: "javascript", name: "JavaScript" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "python", name: "Python" },
  { icon: "nodejs", name: "Node.js" },
  { icon: "django", name: "Django" },
  { icon: "mongodb", name: "MongoDB" },
  { icon: "postgresql", name: "PostgreSQL" },
  { icon: "git", name: "Git" },
  { icon: "tailwindcss", name: "Tailwind CSS" },
  { icon: "docker", name: "Docker" },
];

const projectsData = [
  {
    id: 1,
    title: "Monexis (Active Development)",
    description: "A full-stack finance tracker app (React Native + Express.js) for tracking transactions and investments.",
    link: "https://monexis-app.vercel.app/",
    tags: [
      { name: "Backend Refactor", color: "bg-red-400/20" },
      { name: "MERN", color: "bg-blue-500/20" },
      { name: "Plaid", color: "bg-purple-500/20" },
      { name: "MongoDB", color: "bg-green-500/20" }
    ]
  },
  {
    id: 2,
    title: "Fileflow",
    description: "FileFlow is your all-in-one file management solution — upload, manage, and collaborate securely.",
    link: "https://file-management-system-lime.vercel.app/",
    tags: [
      { name: "React.js", color: "bg-blue-500/20" },
      { name: "Fat-32", color: "bg-purple-500/20" },
      { name: "Group Project", color: "bg-yellow-500/20" }
    ]
  },
  {
    id: 3,
    title: "Hand gesture Volume Control",
    description: "A Python app using mediapipe and OpenCV to adjust system volume via hand gestures.",
    link: "https://drive.google.com/file/d/1c4Tyo8vsDY-p_GcS_rMHkX38fU4kSsru/view?usp=sharing",
    tags: [
      { name: "Python", color: "bg-blue-500/20" },
      { name: "mediapipe", color: "bg-red-500/20" }
    ]
  },
  {
    id: 4,
    title: "BlogLife",
    description: "A full-featured blog using Django and React.js to create and manage content securely.",
    link: "https://bloglife-8mqb.onrender.com/",
    tags: [
      { name: "Django", color: "bg-blue-500/20" },
      { name: "React.js", color: "bg-orange-500/20" },
      { name: "Auth", color: "bg-teal-500/20" }
    ]
  },
   {
    id: 5,
    title: "PolaroidCam",
    description: "A modern, interactive Polaroid-style camera web application that lets users capture moments, customize layouts, and download their photos as a single polished image",
    link: "https://polaroid-cam-omega.vercel.app/",
    tags: [
      { name: "React + TypeScript", color: "bg-orange-500/20" },
      { name: "html2canvas", color: "bg-pink-500/20" }
    ]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sections = useRef([]);
  const navItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = 0; i < sections.current.length; i++) {
        const section = sections.current[i];
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full text-white bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Particles />
      </div>

     
      <div className="fixed left-0 top-0 h-full w-[35%] flex items-center justify-center z-10 hidden md:flex">
        <div className="w-full max-w-[380px] pl-12">
          <TypingAnimation className="text-5xl font-bold leading-tight">
            Hey, aditi here.
          </TypingAnimation>
          <TypingAnimation delay={2000} className="text-2xl mt-3 font-semibold">
            I am a Developer
          </TypingAnimation>

          <ul className="flex flex-col gap-6 text-lg mt-12">
            {["About", "Projects", "Skills"].map((item, index) => {
              const id = item.toLowerCase();
              return (
                <li key={id} className="relative" ref={(el) => (navItemsRef.current[index] = el)}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`text-left ${activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    {item}
                    {activeSection === id && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute left-0 bottom-[-4px] h-[2px] bg-white"
                        style={{ width: navItemsRef.current[index]?.scrollWidth }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 w-fit">
            <Dock className="w-auto justify-start">
              <DockIcon>
                <div className="relative group">
                  <a href="https://github.com/aditirawatar" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:text-purple-400 transition-colors" />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Check out my GitHub!
                  </span>
                </div>
              </DockIcon>
              <DockIcon>
                <div className="relative group">
                  <a href="https://www.linkedin.com/in/aditi-rawat-200401810ha/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 hover:text-blue-500 transition-colors" />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Connect on LinkedIn!
                  </span>
                </div>
              </DockIcon>
              <DockIcon>
                <div className="relative group">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aditirawatar2004@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-5 h-5 hover:text-red-400 transition-colors" />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Send me an email!
                  </span>
                </div>
              </DockIcon>
              <DockIcon>
                <div className="relative group">
                <a href="https://leetcode.com/u/aditi_rawat_/" target="_blank" rel="noopener noreferrer">
                <img
                src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                alt="LeetCode"
                className="w-5 h-5 hover:brightness-125 transition-transform"
                />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Check out my LeetCode!
                </span>
                </div>
              </DockIcon>
            </Dock>
          </div>
        </div>
      </div>

      
      <div className="md:hidden">
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md flex justify-center gap-8 py-4 z-20">
          {["About", "Projects", "Skills"].map((item) => {
            const id = item.toLowerCase();
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {item}
              </button>
            );
          })}
        </nav>

        <section className="h-screen flex flex-col items-center justify-center p-12 pt-24 text-center">
          <TypingAnimation className="text-5xl font-bold leading-tight">
            Hey, aditi here.
          </TypingAnimation>
          <TypingAnimation delay={2000} className="text-2xl mt-3 font-semibold">
            I am a Developer
          </TypingAnimation>

          <div className="mt-8 flex justify-center">
            <Dock className="w-auto justify-center">
              <DockIcon>
                <a href="https://github.com/aditirawatar" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-purple-400 transition-colors" />
                </a>
              </DockIcon>
              <DockIcon>
                <a href="https://www.linkedin.com/in/aditi-rawat-200401810ha/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-blue-500 transition-colors" />
                </a>
              </DockIcon>
              <DockIcon>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aditirawatar2004@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 hover:text-red-400 transition-colors" />
                </a>
              </DockIcon>
              <DockIcon>
                <a href="https://leetcode.com/u/aditi_rawat_/" target="_blank" rel="noopener noreferrer">
                <img
                src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                alt="LeetCode"
                className="w-5 h-5 hover:brightness-125 transition-transform"
                />
                </a>
              </DockIcon>
            </Dock>
          </div>
          
        </section>
      </div>

      {/* Main right content */}
      <div className="md:ml-[35%] w-full md:w-[65%]">
        <section id="about" ref={(el) => el && (sections.current[0] = el)} className="min-h-screen flex items-center justify-center p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-md w-full text-center">
            <img className="rounded-full w-48 h-48 object-cover mb-6 mx-auto" src={portf2} alt="profile" />
            <p className="text-lg leading-relaxed">
              I'm a driven full-stack web developer with a strong passion for building scalable, high-quality web applications. From the initial idea to deployment, I take pride in delivering projects that are both visually appealing and technically sound.
            </p>
            <br />
            <p className='text-violet-300'>Check out my resume :  <a
        href="https://drive.google.com/file/d/16Msndj7rpo2M-YTyXzMhUkWjgwyIBiO_/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-blue-400 hover:underline"
      >
        View Resume →
      </a> </p>
          </motion.div>
        </section>

        <section id="projects" ref={(el) => el && (sections.current[1] = el)} className="min-h-screen flex items-center justify-center p-12">
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
            <div className="py-8">
              <Marquee pauseOnHover className="[--duration:20s]">
                {projectsData.map((project) => (
                  <div key={project.id} className="w-[300px] mx-4 bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span key={index} className={`px-2 py-1 rounded ${tag.color} text-xs`}>
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-400 hover:underline text-sm"
                    >
                      View Project →
                    </a>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        <section id="skills" ref={(el) => el && (sections.current[2] = el)} className="min-h-screen flex items-center p-12">
          <div className="max-w-4xl w-full mx-auto">
            <h2 className="text-3xl font-bold text-center">My Skills</h2>
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] px-4 sm:px-12 md:px-60 flex items-center justify-center">
                <IconCloud
                  images={[
                    ...skills.map(skill => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`),
                    ...skills.map(skill => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`)
                  ]}
                />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-lg">${skill.name}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;