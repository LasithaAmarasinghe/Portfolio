import { FaDocker, FaAws, FaGit, FaReact } from 'react-icons/fa';
import {
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOnnx,
  SiNvidia,
  SiHuggingface,
  SiMlflow,
  SiLinux,
  SiNodedotjs,
  SiSpringboot,
  SiFastapi,
  SiPostgresql,
} from 'react-icons/si';
import { ChartNoAxesCombined } from 'lucide-react';

import langchainLogo from '@/assets/skills/Langchain.svg';
import langgraphLogo from '@/assets/skills/Langgraph.svg';
import chromadbLogo from '@/assets/skills/Chroma.svg';
import cLogo from '@/assets/skills/c.svg';
import sqlLogo from '@/assets/skills/sql.svg';
import jsLogo from '@/assets/skills/javascript.svg';
import pythonLogo from '@/assets/skills/Python.svg';
import javaLogo from '@/assets/skills/java.svg';
import opencvLogo from '@/assets/skills/OpenCV.svg';
import redisLogo from '@/assets/skills/redis.svg';
import llamaindexLogo from '@/assets/skills/llamaindex.svg';
import qdrantLogo from '@/assets/skills/qdrant.svg';
import pandasLogo from '@/assets/skills/pandas.svg';
import seabornLogo from '@/assets/skills/seaborn.svg';
import matplotlibLogo from '@/assets/skills/Matplotlib.svg';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', imgSrc: pythonLogo, fallback: 'Py' },
      { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
      { name: 'Java', imgSrc: javaLogo, fallback: 'Java', monochrome: true },
      { name: 'C', imgSrc: cLogo, fallback: 'C' },
      { name: 'JavaScript', imgSrc: jsLogo, fallback: 'JS' },
      { name: 'SQL', imgSrc: sqlLogo, fallback: 'SQL' },
    ],
  },
  {
    title: 'Deep Learning',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch size={40} color="#EE4C2C" /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={40} color="#FF6F00" /> },
      { name: 'Keras', icon: <SiKeras size={40} color="#D00000" /> },
      { name: 'ONNX', icon: <SiOnnx size={40} color="#005CED" /> },
      { name: 'TensorRT', icon: <SiNvidia size={40} color="#76B900" /> },
    ],
  },
  {
    title: 'Generative AI',
    skills: [
      { name: 'Hugging Face', icon: <SiHuggingface size={40} color="#FFD21F" /> },
      { name: 'LangChain', imgSrc: langchainLogo, fallback: 'LC', monochrome: true },
      { name: 'LangGraph', imgSrc: langgraphLogo, fallback: 'LG', monochrome: true },
      { name: 'LlamaIndex', imgSrc: llamaindexLogo, fallback: 'LI', monochrome: true },
      { name: 'Qdrant', imgSrc: qdrantLogo, fallback: 'Qdrant', monochrome: true },
      { name: 'ChromaDB', imgSrc: chromadbLogo, fallback: 'Chroma' },
    ],
  },
  {
    title: 'AI & Data Processing',
    skills: [
      { name: 'NumPy', icon: <SiNumpy size={40} color="#4D77CF" /> },
      { name: 'Pandas', imgSrc: pandasLogo, fallback: 'Pandas', monochrome: true },
      { name: 'OpenCV', imgSrc: opencvLogo, fallback: 'OpenCV', monochrome: true },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={40} color="#F7931E" /> },
      { name: 'Matplotlib', imgSrc: matplotlibLogo, fallback: 'Matplotlib', monochrome: true },
      { name: 'Seaborn', imgSrc: seabornLogo, fallback: 'Seaborn', monochrome: true },
    ],
  },
  {
    title: 'MLOps & Cloud',
    skills: [
      { name: 'MLflow', icon: <SiMlflow size={40} color="#0194E2" /> },
      { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
      { name: 'AWS', icon: <FaAws size={40} color="#FF9900" /> },
      { name: 'Linux', icon: <SiLinux size={40} color="#FCC624" /> },
      { name: 'Git', icon: <FaGit size={40} color="#F05032" /> },
    ],
  },
  {
    title: 'Web & Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs size={40} color="#339933" /> },
      { name: 'React.js', icon: <FaReact size={40} color="#61DAFB" /> },
      { name: 'Spring Boot', icon: <SiSpringboot size={40} color="#6DB33F" /> },
      { name: 'FastAPI', icon: <SiFastapi size={40} color="#009688" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#336791" /> },
      { name: 'Redis', imgSrc: redisLogo, fallback: 'Redis', monochrome: true },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-background" id="skills">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-glow-primary transition-all duration-300 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-6 text-secondary tracking-wide uppercase">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-8 mb-2">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center min-w-[80px]">
                    {skill.imgSrc ? (
                      <img
                        src={skill.imgSrc}
                        alt={skill.name}
                        loading="lazy"
                        decoding="async"
                        className={`h-10 w-10 object-contain ${
                          // Black-on-transparent logos: flip to white for the dark
                          // theme only, so they stay visible on the light card.
                          skill.monochrome ? 'dark:invert' : ''
                        }`}
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
