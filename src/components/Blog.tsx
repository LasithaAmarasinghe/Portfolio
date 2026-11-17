import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GalleryDialog from "@/components/ui/gallery-dialog";
import aiAgentsImage from "@/assets/blog/ai agents.jpeg";
import cnnImage from "@/assets/blog/CNN.jpeg";

const blogPosts = [
  {
    title: "Deep Agents: Why Your AI Agent Gets Lost After 10 Steps",
    description:
      "Why long-running agents lose the plot, and how planning, sub-agents, and file-system memory give them the scaffolding to stay on track.",
    image: "https://cdn-images-1.medium.com/max/1024/1*ngZoL6WMkpJBUeWgALsYiQ.png",
    url: "https://medium.com/@amarasinghelra/deep-agents-why-your-ai-agent-gets-lost-after-10-steps-bdac760cf0ea",
    tags: ["Deep Agents", "AI Agents", "LangChain"],
  },
  {
    title: "RAG Doesn't Need a Vector Database (Sometimes)",
    description:
      "What happens when you stop chunking your PDFs and let an LLM navigate the table of contents instead — a look at vectorless RAG.",
    image: "https://cdn-images-1.medium.com/max/1024/1*y3PJoZgD9_TmP2A7jN4xig.png",
    url: "https://medium.com/@amarasinghelra/rag-doesnt-need-a-vector-database-sometimes-7aed9c513e05",
    tags: ["RAG", "Vectorless RAG", "LLMs"],
  },
  {
    title: "An Intuitive Guide to RAG: Part 1",
    description:
      "Why LLMs hallucinate and go stale, and how to build the RAG foundation: parsing, chunking, embeddings, and vector indexes.",
    image: "https://cdn-images-1.medium.com/max/1024/1*yAl6FfFwbFQxFm6smNZ2Yg.jpeg",
    url: "https://medium.com/@amarasinghelra/an-intuitive-guide-to-rag-part-1-9c5e4b781ca7",
    tags: ["RAG", "Vector Database", "Practical Guide"],
  },
  {
    title: "An Intuitive Guide to RAG: Part 2",
    description:
      "Retrieval strategies, reranking, and generation — how to reliably find the right chunks and turn them into grounded answers.",
    image: "https://cdn-images-1.medium.com/max/1024/1*yAl6FfFwbFQxFm6smNZ2Yg.jpeg",
    url: "https://medium.com/@amarasinghelra/an-intuitive-guide-to-rag-part-2-68afcb8c3268",
    tags: ["RAG", "Retrieval", "Practical Guide"],
  },
  {
    title: "The Agent Integration Nightmare: How MCP Changes Everything",
    description:
      "Every developer building an LLM agent has hit the same wall. Learn how Model Context Protocol makes tools, resources, and prompts easier to integrate.",
    image: "https://cdn-images-1.medium.com/max/1024/1*IuwWHMrnQU42kBVz6wyglg.png",
    url: "https://medium.com/@amarasinghelra/the-agent-integration-nightmare-how-mcp-changes-everything-e5ebef57698d",
    tags: ["MCP", "AI Agents", "Practical Guide"],
  },
  {
    title: "Implementing PII Protection and Human-in-the-Loop Guardrails in Agents",
    description:
      "Explore practical safeguards for agents that work with customer records, send emails, and take actions in production environments.",
    image: "https://cdn-images-1.medium.com/max/1024/1*O1Ng2GyRmeWiEGqx8Ki1zw.png",
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

const INITIAL_VISIBLE_COUNT = 6;

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogPosts = showAll ? blogPosts : blogPosts.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30" id="blog">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading title="Blog" />

        <div className="mx-auto max-w-5xl flex flex-col gap-4 sm:gap-5">
          {visibleBlogPosts.map((article, index) => (
            <Card
              key={article.url}
              className="group bg-gradient-card border-border hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5">
                <GalleryDialog
                  title={article.title}
                  images={[article.image]}
                  trigger={
                    <button
                      type="button"
                      aria-label={`View ${article.title} image`}
                      className="w-full sm:w-56 md:w-64 shrink-0 self-start aspect-video overflow-hidden rounded-lg border border-border bg-muted cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  }
                />
                <div className="flex-1 min-w-0 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href={article.url} target="_blank" rel="noreferrer">
                        Read on Medium
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
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
