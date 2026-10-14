import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GalleryDialog from "@/components/ui/gallery-dialog";
import { Briefcase } from "lucide-react";

import uom from "@/assets/about/uom.png";
import nus from "@/assets/about/nus.png";
import nus1 from "@/assets/experience/nus1.jpg";
import nus2 from "@/assets/experience//nus2.jpg";
import nus3 from "@/assets/experience/nus3.jpg";
import nus4 from "@/assets/experience/nus4.jpg";
import nus5 from "@/assets/experience/nus5.jpg";
import nus6 from "@/assets/experience/nus6.jpg";
import nus7 from "@/assets/experience/nus7.jpeg";
import nus8 from "@/assets/experience/nus8.jpeg";
import kaya from "@/assets/about/Kaya.jpeg";

const experiences = [
  {
    title: "Software Engineer (AI/ML)",
    company: "Kaya",
    location: "USA (Remote)",
    period: "Jun 2026 - Present",
    description: "",
    projects: [
      {
        name: "AI-Agentic Hiring Automation Platform",
        bullets: [
          "Automated candidate sourcing, CV scoring, and shortlisting with Zoho Recruit integration",
          "Engineered multi-agent CV-scoring workflows on the Kaya AI platform with custom scoring logic and threshold-based filtering",
          "Built asynchronous request orchestration to process large candidate pools",
        ],
      },
      {
        name: "AI-Agentic Healthcare Provider Data Management Platform",
        bullets: [
          "Developed backend services automating provider roster ingestion, validation, and transformation for a US client",
          "Built and extended agentic AI workflows for document classification, data validation, rule execution, and status reporting, reducing manual effort.",
          "Integrated external verification services and enterprise systems into agentic workflows",
          "Collaborated with cross-functional teams in an Agile environment",
        ],
      },
    ],
    tags: ["AI Agents", "Python", "FastAPI", "Next.js", "React.js", "TypeScript", "Celery", "PostgreSQL", "Redis", "Docker"],
    logo: kaya,
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "University of Moratuwa",
    location: "Sri Lanka",
    period: "Sep 2025 - Dec 2025",
    description: "",
    projects: [
      {
        name: "Undergraduate Laboratory Teaching and Mentoring",
        bullets: [
          "Conducted laboratory sessions for EN3251 - Internet of Things",
          "Facilitated hands-on learning for EN1094 - Laboratory Practice",
          "Assisted students in understanding IoT concepts and practical implementations",
        ],
      },
    ],
    tags: ["Teaching", "Laboratory Practice", "Student Mentoring"],
    logo: uom
  },
  {
    title: "Research Intern",
    company: "National University of Singapore",
    location: "Singapore",
    period: "Dec 2024 - May 2025",
    description: "",
    projects: [
      {
        name: "TOM Project - AI Assistant for Augmented Reality Glasses",
        bullets: [
          "Developed the AiGet service enabling dynamic knowledge interaction in an augmented reality environment",
          "Optimized a low-latency Unity client-Python server architecture using WebSockets and Protobufs",
          "Utilized MRTK (Mixed Reality Toolkit) to enhance augmented reality interactions and user experience",
          "Implemented a multimodal interaction pipeline fusing users' voice, vision, and gaze inputs",
          "Participated in code reviews and wrote unit tests to minimize deployment bugs",
          "Presented the AiGet system at the Singapore HCI Meetup 2025 at Singapore Management University",
        ],
      },
    ],
    tags: ["Unity", "Python", "MRTK", "Augmented Reality", "LangChain", "HCI"],
    logo: nus,
    gallery: [nus1, nus2, nus3, nus4, nus5, nus6, nus7, nus8],
  }
  
];

const Experience = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="experience">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary leading-tight sm:leading-loose" style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}>
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company + " logo"}
                        loading="lazy"
                        decoding="async"
                        className="h-10 w-10 object-contain mb-2 rounded"
                        style={{ background: '#fff' }}
                      />
                    ) : (
                      <Briefcase className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl mb-1">{exp.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
                          <span className="font-semibold text-foreground">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-sm whitespace-nowrap">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    {exp.description && (
                      <CardDescription className="text-base mb-4">
                        {exp.description}
                      </CardDescription>
                    )}
                    <div className="space-y-5 mb-4">
                      {exp.projects.map((project) => (
                        <div key={project.name}>
                          <h3 className="font-semibold text-foreground mb-2">
                            {project.name}
                          </h3>
                          <div className="space-y-2">
                            {project.bullets.map((bullet) => (
                              <div key={bullet} className="flex gap-2 text-sm text-muted-foreground">
                                <span className="text-primary">•</span>
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="tag"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {exp.gallery && exp.gallery.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                          Photos
                        </p>
                        <div className="flex flex-wrap gap-3">
                        {exp.gallery.map((img, imgIndex) => (
                          <GalleryDialog
                            key={imgIndex}
                            title={exp.title}
                            images={exp.gallery}
                            startIndex={imgIndex}
                            trigger={
                              <img
                                src={img}
                                alt={`${exp.title} photo ${imgIndex + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="h-40 w-48 sm:h-49 sm:w-56 object-cover rounded-md border border-border hover:scale-105 hover:shadow-glow-primary transition-transform duration-200 cursor-pointer"
                              />
                            }
                          />
                        ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
