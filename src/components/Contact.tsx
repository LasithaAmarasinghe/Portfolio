import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="contact">
      <div className="container mx-auto max-w-4xl">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
						Let's Connect
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg px-4">
						Interested in collaboration or have a project in mind? Let's talk!
					</p>
				</div>				<Card className="bg-gradient-card border-border shadow-glow-primary animate-fade-in-delay">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Email
                  </h3>
                  <a 
                    href="mailto:amarasinghelra@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    amarasinghelra@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-secondary" />
                    Social & Phone
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="https://github.com/LasithaAmarasinghe" 
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-3" />
                      github.com/LasithaAmarasinghe
                    </a>
                    <a 
                      href="https://linkedin.com/in/lasithaamarasinghe" 
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 mr-3" />
                      linkedin.com/in/lasithaamarasinghe
                    </a>
                    <a
                      href="tel:+94717577914"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      +94 71 757 7914
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <p className="text-foreground mb-4">
                  Open to freelance opportunities, full-time positions, and AI/ML projects.
                </p>
                <a
                  href="https://wa.me/94717577914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="hero" size="lg" className="w-full">
                    <Mail className="mr-2" />
                    Send Message
                  </Button>
                </a>
                <a
                  href="/Lasitha%20Amarasinghe%20CV.pdf"
                  download
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
