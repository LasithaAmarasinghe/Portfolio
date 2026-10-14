import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aiAgentsImage from "@/assets/blog/ai agents.jpeg";
import cnnImage from "@/assets/blog/CNN.jpeg";

const blogPosts = [
  {
    title: "The Agent Integration Nightmare: How MCP Changes Everything",
    description:
      "Every developer building an LLM agent has hit the same wall. Learn how Model Context Protocol makes tools, resources, and prompts easier to integrate.",
    image: "https://cdn-images-1.medium.com/max/1024/1*6_xXD_u9oufM4uw8awcTRA.png",
    url: "https://medium.com/@amarasinghelra/the-agent-integration-nightmare-how-mcp-changes-everything-e5ebef57698d",
    tags: ["MCP", "AI Agents", "Practical Guide"],
  },
  {
    title: "Implementing PII Protection and Human-in-the-Loop Guardrails in Agents",
    description:
      "Explore practical safeguards for agents that work with customer records, send emails, and take actions in production environments.",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*Me1QyRBqIk1iefZPYBonyg.png",
    url: "https://medium.com/@amarasinghelra/production-ready-agents-implementing-pii-protection-and-human-in-the-loop-guardrails-fb55379186f1",
    tags: ["PII", "HITL", "Guardrails", "Practical Guide"],
  },
  {
    title: "Understanding CNN Parameters & FLOPs: An Example Illustrating the Concept",
    description:
      "A simple explanation of CNN parameters and FLOPs, with an example that makes model complexity easier to understand.",
    image: cnnImage,
    url: "https://medium.com/@amarasinghelra/understanding-cnn-parameters-and-flops-a-simple-example-to-illustrate-the-concept-e438d3040ab6",
    tags: ["CNNs", "Deep Learning", "Practical Guide"],
  },
  {
    title: "My ML Interview Experience (Part 1): Design a Gold Price Forecasting System",
    description:
      "A deceptively simple machine learning interview problem that leads to a thoughtful gold price forecasting system design.",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*hF6Q4ioaRbbzFXDvrpmByA.png",
    url: "https://medium.com/@amarasinghelra/my-ml-interview-experience-part-1-designing-a-gold-price-forecasting-system-e8e7e234f477",
    tags: ["Machine Learning", "Forecasting", "Interviews"],
  },
  {
    title: "My ML Interview Experience (Part 2): Design a Multi-Agent RAG System",
    description:
      "A machine learning interview walkthrough focused on designing a multi-agent retrieval-augmented generation system.",
    image: aiAgentsImage,
    url: "https://medium.com/@amarasinghelra/my-ml-interview-experience-part-2-designing-a-multi-agent-rag-system-dada6aff7aa9",
    tags: ["RAG", "AI Agents", "Interviews", "Experience"],
  },
  {
    title: "The Hidden Math of Social Media: How Graph Theory Shapes Your Feed",
    description:
      "Discover how graph theory helps social platforms model relationships, recommendations, and the content that appears in your feed.",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*c9yMv6RPGuoc7peg3K_45w.png",
    url: "https://medium.com/@amarasinghelra/the-hidden-math-of-social-media-how-graph-theory-shapes-your-feed-a79c309b48ae",
    tags: ["Graph Theory", "Algorithms", "Social Media"],
  },
  {
    title: "Stop Confusing Authentication, Authorization, and JWTs",
    description:
      "A practical guide to understanding the difference between authentication and authorization, and knowing where JWTs fit into a secure API.",
    image: "https://cdn-images-1.medium.com/max/1024/1*4m_LijCTy7_c5L9SHrLvlA.jpeg",
    url: "https://medium.com/@amarasinghelra/stop-confusing-authentication-authorization-and-jwts-29fc5d7cbf11",
    tags: ["Authentication", "Authorization", "JWT"],
  },
  {
    title: "The Empire Strikes Back: How ConvNeXt Brought CNNs Back from the Dead?",
    description:
      "See how ConvNeXt modernized convolutional neural networks and challenged the assumption that Vision Transformers had won.",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*CzfBKK0OYEg_hIDJYL3g7g.png",
    url: "https://medium.com/@amarasinghelra/the-empire-strikes-back-how-convnext-brought-cnns-back-from-the-dead-d6f48f14bb92",
    tags: ["Deep Learning", "Computer Vision", "ConvNeXt"],
  },
  {
    title: "Understanding Redis & Celery using a Pizza Restaurant",
    description:
      "A beginner-friendly guide to understanding Redis, Celery, and background tasks through an easy-to-follow restaurant analogy.",
    image: "https://miro.medium.com/v2/resize:fill:320:214/g:fp:0.5:0.44/1*7c8trfsQPIYbZQ3xU39JsA.png",
    url: "https://medium.com/@amarasinghelra/understanding-redis-celery-using-a-pizza-restaurant-25d4bf045f1b",
    tags: ["Redis", "Celery", "Python", "Practical Guide"],
  },
  {
    title: "The Invisible Symphony: What Really Travels to Your TV Screen",
    description:
      "Follow the journey from pressing play to seeing pixels on screen, and learn what happens behind modern video streaming.",
    image: "https://miro.medium.com/v2/resize:fill:320:214/0*8-SHtpMGAujMP8BL.jpg",
    url: "https://medium.com/@amarasinghelra/the-invisible-symphony-what-really-travels-to-your-tv-screen-c3b326ba40e2",
    tags: ["Systems", "Networking", "Streaming"],
  },
  
];

const INITIAL_VISIBLE_COUNT = 9;

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogPosts = showAll ? blogPosts : blogPosts.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="blog">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Blog
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Thoughts and practical guides on modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogPosts.map((article, index) => (
            <Card
              key={article.url}
              className="overflow-hidden bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={article.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-5">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="tag"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    Read on Medium
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogPosts.length > INITIAL_VISIBLE_COUNT && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll((prev) => !prev)}
              className="gap-2"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More Blogs<ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;
