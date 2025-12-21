import { FaPython, FaJava, FaReact, FaGit, FaDocker, FaHtml5, FaCss3Alt, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiHuggingface, SiSpringboot, SiFastapi, SiPostgresql, SiLinux, SiMlflow } from 'react-icons/si';

import langchainLogo from '@/assets/skills/Langchain.svg';
import langgraphLogo from '@/assets/skills/Langgraph.svg';
import chromadbLogo from '@/assets/skills/Chroma.svg';
import cLogo from '@/assets/skills/c.svg';
import sqlLogo from '@/assets/skills/sql.svg';
import jsLogo from '@/assets/skills/javascript.svg';
import pythonLogo from '@/assets/skills/Python.svg';
import javaLogo from '@/assets/skills/java.svg';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', imgSrc: pythonLogo, fallback: 'Py' },
      { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
      { name: 'Java', imgSrc: javaLogo, fallback: 'Java' },
      { name: 'C', imgSrc: cLogo, fallback: 'C' },
      { name: 'SQL', imgSrc: sqlLogo, fallback: 'SQL' },
      { name: 'JavaScript', imgSrc: jsLogo, fallback: 'JS' },
    ],
  },
  {
    title: 'AI & Deep Learning',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch size={40} color="#EE4C2C" /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={40} color="#FF6F00" /> },
      { name: 'Keras', icon: <SiKeras size={40} color="#D00000" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={40} color="#F7931E" /> },
    ],
  },
  {
    title: 'Generative AI & LLMs',
    skills: [
      { name: 'Hugging Face', icon: <SiHuggingface size={40} color="#FFD21F" /> },
      { name: 'LangChain', imgSrc: langchainLogo, fallback: 'LC', invert: true },
      { name: 'LangGraph', imgSrc: langgraphLogo, fallback: 'LG', invert: true },
      { name: 'ChromaDB', imgSrc: chromadbLogo, fallback: 'Chroma' },
    ],
  },
  {
    title: 'MLOps & Cloud',
    skills: [
      { name: 'MLflow', icon: <SiMlflow size={40} color="#0194E2" /> },
      { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
      { name: 'AWS EC2', icon: <FaAws size={40} color="#FF9900" /> },
      { name: 'Linux', icon: <SiLinux size={40} color="#FCC624" /> },
      { name: 'Git', icon: <FaGit size={40} color="#F05032" /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', icon: <FaReact size={40} color="#61DAFB" /> },
      { name: 'Spring Boot', icon: <SiSpringboot size={40} color="#6DB33F" /> },
      { name: 'FastAPI', icon: <SiFastapi size={40} color="#009688" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#336791" /> },
      { name: 'HTML', icon: <FaHtml5 size={40} color="#E34F26" /> },
      { name: 'CSS', icon: <FaCss3Alt size={40} color="#1572B6" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-background" id="skills">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-500">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-glow-primary transition-all duration-300 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-6 text-purple-500 tracking-wide uppercase">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-8 mb-2">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center min-w-[80px]">
                    {skill.imgSrc ? (
                      <img
                        src={skill.imgSrc}
                        alt={skill.name}
                        className="h-10 w-10 object-contain"
                        style={skill.invert ? { filter: 'invert(1) brightness(1.4)' } : undefined}
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          el.style.display = 'none';
                          const parent = el.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'text-2xl text-foreground font-bold';
                            fallback.textContent = skill.fallback || skill.name;
                            parent.insertBefore(fallback, el);
                          }
                        }}
                      />
                    ) : (
                      skill.icon
                    )}
                    <span className="mt-2 text-base text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
