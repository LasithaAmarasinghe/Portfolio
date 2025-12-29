import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, Image as ImageIcon, Video } from "lucide-react";

import neocare from "@/assets/projects/neocare.png";
import neocare1 from "@/assets/projects/neocare1.png";
import neocare2 from "@/assets/projects/neocare2.png";
import neocare3 from "@/assets/projects/neocare3.jpg";
import neocare4 from "@/assets/projects/neocare4.jpg";
import neocare5 from "@/assets/projects/neocare5.jpg";  
import transform from "@/assets/projects/transform.png";
import transformer1 from "@/assets/projects/transformer1.png";
import transformer2 from "@/assets/projects/transformer2.png";
import transformer3 from "@/assets/projects/transformer3.png";
import transformer4 from "@/assets/projects/transformer4.png";
import transformer5 from "@/assets/projects/transformer5.png";
import transformer6 from "@/assets/projects/transformer6.png";
import uav from "@/assets/projects/uav.png";
import uav1 from "@/assets/projects/uav1.gif";
import actura from "@/assets/projects/actura.png";
import actura1 from "@/assets/projects/actura1.gif";
import agent from "@/assets/projects/agent.png";
import agent1 from "@/assets/projects/agent1.png";
import agent2 from "@/assets/projects/agent2.png";
import agent3 from "@/assets/projects/agent3.png";
import agent4 from "@/assets/projects/agent4.png";
import youtube from "@/assets/projects/youtube.png";
import youtube1 from "@/assets/projects/youtube1.png";
import youtube2 from "@/assets/projects/youtube2.png";
import flower from "@/assets/projects/flower.png";
import flower1 from "@/assets/projects/flower1.png";
import flower2 from "@/assets/projects/flower2.jpg";
import freezer from "@/assets/projects/freezer-gambit.png";
import freezer1 from "@/assets/projects/freezer-gambit1.png";
import freezer2 from "@/assets/projects/freezer-gambit2.png";
import fertilizer from "/src/assets/projects/fertilizer.png";
import fertilizer1 from "/src/assets/projects/fertilizer1.png";
import fertilizer2 from "/src/assets/projects/fertilizer2.png";
import fertilizer3 from "/src/assets/projects/fertilizer3.png";
import fertilizer4 from "/src/assets/projects/fertilizer4.png";
import fertilizer5 from "/src/assets/projects/fertilizer5.jpg";
import mapper from "/src/assets/projects/3d-mapper.png";
import mapper1 from "/src/assets/projects/3d-mapper1.jpg";
import mapper2 from "/src/assets/projects/3d-mapper2.png";
import mapper3 from "/src/assets/projects/3d-mapper3.png";
import mapper4 from "/src/assets/projects/3d-mapper4.png";
import mapper5 from "/src/assets/projects/3d-mapper5.jpg";
import wallFollow from "/src/assets/projects/wall-follow.jpg";  
import wallFollow1 from "/src/assets/projects/wall-follow1.jpg";
import wallFollow2 from "/src/assets/projects/wall-follow2.jpg";
import wallFollow3 from "/src/assets/projects/wall-follow3.jpg";
import wallFollow4 from "/src/assets/projects/wall-follow4.jpg";
import wallFollow5 from "/src/assets/projects/wall-follow5.jpg";
import agni from "/src/assets/projects/agni.jpg";
import agni1 from "/src/assets/projects/agni1.jpg";
import agni2 from "/src/assets/projects/agni2.jpg";
import agni3 from "/src/assets/projects/agni3.jpg";
import aura from "/src/assets/projects/aura.jpg";
import aura1 from "/src/assets/projects/aura1.jpg";
import aura2 from "/src/assets/projects/aura2.jpg";
import aura3 from "/src/assets/projects/aura3.jpg";
import aura4 from "/src/assets/projects/aura4.jpg";
import aura5 from "/src/assets/projects/aura5.jpg";
import smartPlug from "/src/assets/projects/smart-plug.jpg";
import smartPlug1 from "/src/assets/projects/smart-plug1.png";
import smartPlug2 from "/src/assets/projects/smart-plug2.png";
import smartPlug3 from "/src/assets/projects/smart-plug3.jpg";
import smartPlug4 from "/src/assets/projects/smart-plug4.jpg";
import smartPlug5 from "/src/assets/projects/smart-plug5.jpg";
import studymate from "/src/assets/projects/studymate.png";
import studymate1 from "/src/assets/projects/studymate1.png";
import studymate2 from "/src/assets/projects/studymate2.png";
import studymate3 from "/src/assets/projects/studymate3.png";
import studymate4 from "/src/assets/projects/studymate4.png";
import studymate5 from "/src/assets/projects/studymate5.png";
import studymate6 from "/src/assets/projects/studymate6.png";
import convnext from "/src/assets/projects/convnext.png";
import convnext1 from "/src/assets/projects/convnext1.png";
import convnext2 from "/src/assets/projects/convnext2.png";
import convnext3 from "/src/assets/projects/convnext3.png";
import convnext4 from "/src/assets/projects/convnext4.jpg";
import whatsappbot from "/src/assets/projects/disaster-bot.png";
import whatsappbot1 from "/src/assets/projects/disaster-bot1.png";
import whatsappbot2 from "/src/assets/projects/disaster-bot2.png";
import whatsappbot3 from "/src/assets/projects/disaster-bot3.png";
import whatsappbot4 from "/src/assets/projects/disaster-bot4.png";
import finance from "/src/assets/projects/finance-agent.png";
import finance1 from "/src/assets/projects/finance-agent1.png";
import finance2 from "/src/assets/projects/finance-agent2.png";


const projects = [
  {
    title: "NeoCare",
    description: "Non-invasive neonatal monitoring system using rPPG and facial video to estimate HR, SpO2, and jaundice, optimizing models for low latency mobile inference.",
    tags: ["Python", "PyTorch", "OpenCV", "TFLite"],
    image: neocare,
    gallery: [neocare1, neocare2, neocare3, neocare4, neocare5], 
    github: "https://github.com/NeoCare-ENTC",
  },
  {
    title: "Transformer Management System",
    description: "Scalable inspection platform utilizing a Java-Python microservice architecture to automate thermal anomaly detection via Computer Vision.",
    tags: ["React.js", "Java Spring", "PostgreSQL", "Python"],
    image: transform,
    gallery: [transformer1, transformer2, transformer3, transformer4, transformer5, transformer6], 
    github: "https://github.com/Web-Wizards-ENTC/Transformer",
  },
  {
    title: "UAV Surveillance System",
    description: "Multimodal UAV surveillance system that fuses RGB and IR imagery to detect, track, and classify drones and payloads in real time using YOLOv8, BoT-SORT.",
    tags: ["YOLO", "Computer Vision", "Image Fusion"],
    image: uav,
    gif: uav1,
    gallery: [uav], 
    github: "https://github.com/LasithaAmarasinghe/IEEE-VIP-Cup-2025-Multimodal-UAV-Detection-Tracking-and-Payload-Identification",
  },
   {
    title: "CSE Smart Scout",
    description: "A hierarchical multi-agent system that orchestrates specialized AI workers to perform real-time analysis & market research for Colombo Stock Exchange.",
    tags: ["Agents", "LangGraph", "Python","REST APIs"],
    image: finance,
    gallery: [finance1, finance2], 
    github: "https://github.com/LasithaAmarasinghe/CSE-Smart-Scout",
  },
  {
    title: "Enhanced ConvNeXt",
    description: "Improved ConvNeXt architecture by replacing 7×7 depthwise convolution with a multi-scale module to capture features at multiple receptive field scales.",
    tags: ["CNN", "Deep Learning", "Image Classification"],
    image: convnext,
    gallery: [convnext1, convnext2, convnext3, convnext4], 
    github: "https://github.com/LasithaAmarasinghe/ConvNeXt-Improved",
  },
 {
    title: "Flower Exchange",
    description: "Object-oriented trading simulator where traders submit flower buy and sell orders that are matched in an order book and executed by an exchange engine.",
    tags: ["Object Oriented Programming", "Trading", "C++"],
    image: flower,
    gallery: [flower1, flower2], 
    github: "https://github.com/LasithaAmarasinghe/Flower-Exchange",
  },
  { 
    title: "YouTube Comment Analysis",
    description: "Analyzes up to 1000 YouTube comments with VaderSentiment and visualizes positive, negative, and neutral trends using bar and pie charts.",
    tags: ["Sentiment Analysis", "Data Visualization"],
    image: youtube,
    gallery: [youtube1, youtube2], 
    github: "https://github.com/LasithaAmarasinghe/YouTube-Comment-Analysis",
  },
   {
    title: "Actura",
    description: "Virtual Reality app built with Unity that helps users overcome stage fright by practicing public speaking on realistic virtual stages with a simulated audience.",
    tags: ["Virtual Reality", "Unity", "Machine Learning"],
    image: actura,
    gif: actura1,
    gallery: [actura], 
    github: "https://github.com/LasithaAmarasinghe/ACTURA",
  },
  
  { 
    title: "Fertilizer App",
    description: "CNN-based tool that detects potato leaf diseases such as Early and Late Blight from images, using data augmentation and recommending suitable fertilizers.",
    tags: ["Computer Vision", "Deep Learning"],
    image: fertilizer,
    gallery: [fertilizer1, fertilizer2, fertilizer3, fertilizer4, fertilizer5], 
    github: "https://github.com/LasithaAmarasinghe/Fertilizer-App",
  },
  {
    title: "3D Mapper",
    description: "Short-range 3D mapping device using ATmega2560, dual Time-of-Flight sensors, & stepper motors to build point clouds and surface meshes from distance data.",
    tags: ["3D Mapping", "PCB Designing", "Solidworks"],
    image: mapper,
    gallery: [mapper1, mapper2, mapper3, mapper4, mapper5], 
    github: "https://github.com/LasithaAmarasinghe/3D-Mapper",
  },
  {
    title: "Analog Wall Following Robot",
    description: "Analog robot that follows a centerline between two walls using Sharp IR sensors, PID control, and PWM motor drive for precise movement and speed control.",
    tags: ["Electronics", "Control Systems", "PCB Designing"],
    image: wallFollow,
    gallery: [wallFollow1, wallFollow2, wallFollow3, wallFollow4, wallFollow5], 
    github: "https://github.com/LasithaAmarasinghe/Analog-Wall-Follow-Robot",
  },
  { 
    title: "Agni Robot",
    description: "Arduino Mega 2560 powered robot that combines line following, wall avoidance, ramp navigation, obstacle and sound detection with PID control & a robotic arm.",
    tags: ["Robotics","Programming","Electronics"],
    image: agni,
    gallery: [agni1, agni2, agni3], 
    github: "https://github.com/LasithaAmarasinghe/Agni-Robot",
  },
  {
    title: "AURA",
    description: "Multi-room audio system for seamless playback across rooms, with FLAC support, low-latency processing, & synchronized, high-fidelity sound for smart homes.",
    tags: ["PCB Designing", "Internet of Things", "Solidworks"],
    image: aura,
    gallery: [aura1, aura2, aura3, aura4, aura5], 
    github: "https://github.com/Multi-Room-Sound-System-AURA",
  },
  {
    title: "Smarty Plug",
    description: "IoT-powered smart extension cord with ESP8266 and ATmega328 that lets users remotely monitor and switch appliances on or off via a mobile app.",
    tags: ["PCB Designing", "Internet of Things", "Solidworks"],
    image: smartPlug,
    gallery: [smartPlug1, smartPlug2, smartPlug3, smartPlug4, smartPlug5], 
    github: "https://github.com/LasithaAmarasinghe/Smarty-Plug",
  },
  { 
    title: "StudyMate",
    description: "Web app that helps students track coursework, assignments, and deadlines in one place, reducing the stress of managing heavy academic workloads.",
    tags: ["React.js", "Tailwind CSS", "Web Development"],
    image: studymate,
    gallery: [studymate1, studymate2, studymate3, studymate4, studymate5, studymate6], 
    github: "https://github.com/LasithaAmarasinghe/StudyMate",
  },
   {
    title: "Agent Performance Analysis",
    description: "Machine learning system that predicts insurance agent performance using K-means clustering, PCA, and interactive charts for real-time performance insights.",
    tags: ["Unsupervised Learning", "Data Visualization"],
    image: agent,
    gallery: [agent1, agent2, agent3, agent4], 
    github: "https://github.com/LasithaAmarasinghe/Agent-Performance-Analysis-Data-Storm",
  },
  {
    title: "Disaster Response Bot",
    description: "WhatsApp-integrated bot that monitors public groups real time during floods & landslides in Sri Lanka, turning messages into a structured dashboard.",
    tags: ["Node.js", "Disaster Management", "WhatsApp"],
    image: whatsappbot,
    gallery: [whatsappbot1, whatsappbot2, whatsappbot3, whatsappbot4], 
    github: "https://github.com/LasithaAmarasinghe/Disaster-Response-WhatsApp-Bot",
  },
  {
    title: "Freezer Gambit",
    description: "Time-series forecasting tool that predicts weekly fruit & vegetable prices up to 4 weeks ahead from weather & price data to optimize cold-storage strategy.",
    tags: ["Time Series Forecasting", "Recommendation System"],
    image: freezer,
    gallery: [freezer1, freezer2],
    github: "https://github.com/LasithaAmarasinghe/Freezer-Gambit-Data-Crunch",
  },
  
  
];

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30" id="projects">
      <div className="container mx-auto max-w-7xl">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-500 leading-tight sm:leading-loose" style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}>
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            A selection of my recent projects and implementations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs px-3 py-1 rounded-full font-semibold border-2 border-primary/60 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1"
                      >
                        {project.gif ? (
                          <Video className="h-4 w-4 mr-2" />
                        ) : (
                          <ImageIcon className="h-4 w-4 mr-2" />
                        )}
                        {project.gif ? "Preview" : "Gallery"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{project.title} - {project.gif ? "Preview" : "Gallery"}</DialogTitle>
                      </DialogHeader>
                      {project.gif ? (
                        <div className="w-full flex items-center justify-center">
                          <img
                            src={project.gif}
                            alt={`${project.title} preview`}
                            className="w-full h-auto rounded-lg object-contain max-h-[70vh]"
                          />
                        </div>
                      ) : (
                        <Carousel className="w-full">
                          <CarouselContent>
                            {project.gallery.map((img, imgIndex) => (
                              <CarouselItem key={imgIndex}>
                                <div className="p-1">
                                  <img 
                                    src={img} 
                                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                                    className="w-full h-auto rounded-lg object-contain max-h-[70vh]"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          {project.gallery.length > 1 && (
                            <>
                              <CarouselPrevious className="left-2 h-12 w-12 bg-primary/90 hover:bg-primary border-2 border-primary-foreground/20 shadow-lg" />
                              <CarouselNext className="right-2 h-12 w-12 bg-primary/90 hover:bg-primary border-2 border-primary-foreground/20 shadow-lg" />
                            </>
                          )}
                        </Carousel>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
