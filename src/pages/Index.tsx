import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Competitions from "@/components/Competitions";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Competitions />
      <Leadership />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-card">
        <div className="container mx-auto text-center text-muted-foreground text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Lasitha Amarasinghe</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
