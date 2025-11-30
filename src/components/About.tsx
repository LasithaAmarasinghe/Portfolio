import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, GitBranch } from "lucide-react";

const skills = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras","Machine Learning",
  "Deep Learning", "NLP", "Computer Vision", "MLOps","Git", "SQL"
];

const About = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about leveraging AI to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-foreground leading-relaxed">
              I'm an Electronic and Telecommunication Engineering undergraduate with expertise in developing machine learning models.
              My work spans across deep learning, computer vision, and data engineering.
  
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in mathematics and statistics, I focus on creating robust, 
              production-ready AI solutions that drive business value and improve user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">Advanced ML algorithms & model optimization</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <Code className="h-8 w-8 text-secondary mb-4" />
              <h3 className="font-semibold mb-2">Deep Learning</h3>
              <p className="text-sm text-muted-foreground">Neural networks & complex architectures</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <Database className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Data Engineering</h3>
              <p className="text-sm text-muted-foreground">Pipeline design & data processing</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <GitBranch className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">MLOps</h3>
              <p className="text-sm text-muted-foreground">Model deployment & monitoring</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-in-delay">
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
