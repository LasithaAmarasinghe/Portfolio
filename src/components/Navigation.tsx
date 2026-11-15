import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Briefcase,
  FileText,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  PenLine,
  User,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { SiMedium } from "react-icons/si";
import ThemeToggle from "@/components/ThemeToggle";
import profilePic from "@/assets/about/lasitha1.jpg";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Blog", href: "#blog", icon: PenLine },
  { label: "Achievements", href: "#competitions", icon: Award },
  { label: "Leadership", href: "#leadership", icon: Users },
  { label: "Contact", href: "#contact", icon: Mail },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/LasithaAmarasinghe", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/lasithaamarasinghe", icon: Linkedin },
  { label: "Medium", href: "https://medium.com/@amarasinghelra", icon: SiMedium },
  { label: "CV", href: "/Lasitha Amarasinghe CV.pdf", icon: FileText },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar (lg and up) */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-64 flex-col border-r border-border bg-card/95 backdrop-blur-md">
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center gap-3 px-6 pt-8 pb-6 border-b border-border text-center group"
          aria-label="Back to top"
        >
          <img
            src={profilePic}
            alt="Lasitha Amarasinghe"
            className="h-20 w-20 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-300"
          />
          <span className="font-bold text-lg text-primary leading-tight">Lasitha Amarasinghe</span>
        </button>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Sections">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-between gap-2 px-5 py-4 border-t border-border">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </aside>

      {/* Top bar (below lg) */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button
              onClick={scrollToTop}
              className="font-bold text-lg sm:text-xl text-primary truncate max-w-[60%] sm:max-w-none"
            >
              Lasitha Amarasinghe
            </button>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-2xl font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-6 mt-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
