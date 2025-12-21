import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, GitBranch } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about leveraging AI to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-6">
          <div className="space-y-6 animate-fade-in">
            <p className="text-foreground leading-relaxed">
              I'm an Electronic and Telecommunication Engineering undergraduate with expertise in developing machine learning models.
              My work spans across deep learning, computer vision, and data engineering.
  
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in mathematics and statistics, I focus on creating 
              production-ready AI solutions that drive business value and improve user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">Advanced ML Algorithms & Model Optimization</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <Code className="h-8 w-8 text-secondary mb-4" />
              <h3 className="font-semibold mb-2">Deep Learning</h3>
              <p className="text-sm text-muted-foreground">Neural Networks, Transformers & Vision Models</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <Database className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Data Engineering</h3>
              <p className="text-sm text-muted-foreground">Pipeline Design & Data Processing</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-glow-primary transition-all duration-300">
              <GitBranch className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">MLOps</h3>
              <p className="text-sm text-muted-foreground">Model Deployment & Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
