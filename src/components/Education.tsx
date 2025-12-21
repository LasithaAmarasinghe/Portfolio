import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import uom from "@/assets/about/uom.png";
import dharmaraja from "@/assets/about/dharmaraja.jpg";

const educationData = [
  {
    title: "B.Sc. Eng.(Hons.) in Electronic & Telecommunication Engineering",
    institution: "University of Moratuwa, Sri Lanka",
    location: "Sri Lanka",
    period: "Mar 2022 - Present",
    description: "CGPA: 3.86/4.00",
    achievements: ["Dean's List Award - Semesters 1, 2, 4, 5, 6", "Minor in Mathematics"],
    tags: [
      "Linear Algebra",
      "Calculus",
      "Statistics",
      "Signals & Systems",
      "Neural Networks",
      "Pattern Recognition",
      "Image Processing",
      "Computer Vision",
      "Deep Learning",
      "Robotics",
      "Data Structures",
      "Software Design",
      
    ],
    logo: uom
  },
  {
    title: "G.C.E. Advanced Level Examination",
    institution: "Dharmaraja College, Kandy",
    location: "Kandy, Sri Lanka",
    period: "Jan 2012 - Dec 2020",
    description: "Grade: AAA, Z-Score: 2.5972",
    achievements: ["Island Rank: 100/35000 ( Top 0.3% )"],
    tags: ["Physics", "Chemistry","Combined Mathematics"],
    logo: dharmaraja
  }
];

const Education = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="education">
      <div className="container mx-auto max-w-7xl">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-500">
            Education
          </h2>
        </div>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.institution + " logo"}
                        className="h-10 w-10 object-contain mb-2 rounded"
                        style={{ background: '#fff' }}
                      />
                    ) : (
                      <span className="h-6 w-6 text-primary font-bold">🎓</span>
                    )}
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl mb-1">{edu.institution}</CardTitle>
                        <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
                          <span className="font-semibold text-foreground">{edu.title}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-sm whitespace-nowrap">
                        {edu.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-base mb-4">
                      {edu.description}
                    </CardDescription>
                    <div className="space-y-2 mb-4">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs px-3 py-1 rounded-full font-semibold border-2 border-primary/60 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
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

export default Education;
