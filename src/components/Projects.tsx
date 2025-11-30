import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "NeoCare",
    description: "NeoCare is a non-invasive, real-time health monitoring system for neonates that uses rPPG to estimate heart rate (HR), blood oxygen saturation (SpO2), and detect jaundice through facial video analysis. It integrates deep learning models, edge computing, and a mobile app to ensure secure and reliable monitoring.",
    tags: ["Deep Learning", "Computer Vision", "Mobile App", "Edge Computing",  "Dataset Preparation", "Privacy"],
    image: "/src/assets/projects/neocare.png",
    gallery: ["/src/assets/projects/neocare1.png", "/src/assets/projects/neocare2.png", "/src/assets/projects/neocare3.jpg", "/src/assets/projects/neocare4.jpg", "/src/assets/projects/neocare5.jpg"], 
    github: "https://github.com/NeoCare-ENTC",
  },
  {
    title: "Transformer Management System",
    description: "The project is a web based system for managing electrical transformers and their associated thermal imaging data. It helps maintenance teams track transformer inventory, upload thermal inspections, detect anomalies automatically, and record maintenance history - all in one platform.",
    tags: ["React.js", "Java Spring", "PostgreSQL", "Computer Vision", "Anomaly Detection"],
    image: "/src/assets/projects/transform.png",
    gallery: ["/src/assets/projects/transformer1.png","/src/assets/projects/transformer2.png","/src/assets/projects/transformer3.png","/src/assets/projects/transformer4.png","/src/assets/projects/transformer5.png","/src/assets/projects/transformer6.png"], 
    github: "https://github.com/Web-Wizards-ENTC/Transformer",
  },
  {
    title: "See the Unseen",
    description: "This system detects, tracks, and classifies drones and their payloads in real time by fusing RGB and infrared imagery. This utilizes a Y-shape Dynamic Transformer (YDTR) for image fusion, YOLOv8 for object detection, and BoT-SORT for tracking. This enhances robustness, particularly in challenging environmental conditions",
    tags: ["YOLO", "Computer Vision", "Image Fusion", "Object detection", "Object Tracking"],
    image: "/src/assets/projects/uav.png",
    gif: "/src/assets/projects/uav1.gif",
    gallery: ["/src/assets/projects/uav.png"], 
    github: "https://github.com/LasithaAmarasinghe/IEEE-VIP-Cup-2025-Multimodal-UAV-Detection-Tracking-and-Payload-Identification",
  },
  {
    title: "Actura",
    description: "ACTURA is a Virtual Reality application built with Unity to help users overcome stage‑fright and practice public speaking in realistic, simulated environments. Users can rehearse speeches or presentations on virtual stages in front of a virtual audience.",
    tags: ["Virtual Reality", "Unity", "Machine Learning"],
    image: "/src/assets/projects/actura.png",
    gif: "/src/assets/projects/actura1.gif",
    gallery: ["/src/assets/projects/actura.png"], 
    github: "https://github.com/LasithaAmarasinghe/ACTURA",
  },
  {
    title: "Agent Performance Analysis",
    description: "This system predicts insurance agent performance using machine learning algorithms. It employs K-means clustering and PCA for data analysis and dimensionality reduction. This provides real-time predictions and dynamic performance analysis charts.",
    tags: ["Unsupervised Learning", "Data Visualization"],
    image: "/src/assets/projects/agent.png",
    gallery: ["/src/assets/projects/agent1.png", "/src/assets/projects/agent2.png", "/src/assets/projects/agent3.png", "/src/assets/projects/agent4.png"], 
    github: "https://github.com/LasithaAmarasinghe/Agent-Performance-Analysis-Data-Storm",
  },
  { 
    title: "YouTube Comment Analysis",
    description: "This project analyzes the sentiment of YouTube comments, categorizing them as positive, negative, or neutral. It fetches up to 1000 comments, performs sentiment analysis using VaderSentiment, and visualizes the results through bar and pie charts.",
    tags: ["Sentiment Analysis", "Data Visualization"],
    image: "/src/assets/projects/youtube.png",
    gallery: ["/src/assets/projects/youtube1.png", "/src/assets/projects/youtube2.png"], 
    github: "https://github.com/LasithaAmarasinghe/YouTube-Comment-Analysis",
  },
  {
    title: "Flower Exchange",
    description: "This is a simple trading system that enables traders to submit buy or sell orders for flowers through a trader application. The Exchange Application processes these orders against existing orders in the order book and executes them, providing an execution report.",
    tags: ["Object Oriented Programming", "Trading"],
    image: "/src/assets/projects/flower.png",
    gallery: ["/src/assets/projects/flower1.png","/src/assets/projects/flower2.jpg"], 
    github: "https://github.com/LasithaAmarasinghe/Flower-Exchange",
  },
  {
    title: "Freezer Gambit",
    description: "This time series forecasting system predicts weekly fresh fruits, vegetables prices up to 4 weeks ahead using historical weather and price data. It dynamically incorporates new data through APIs and provides actionable insights to optimize cold storage strategy.",
    tags: ["Time Series Forecasting", "Recommendation System"],
    image: "/src/assets/projects/freezer-gambit.png",
    gallery: ["/src/assets/projects/freezer-gambit1.png", "/src/assets/projects/freezer-gambit2.png"],
    github: "https://github.com/LasithaAmarasinghe/Freezer-Gambit-Data-Crunch",
  },
  { 
    title: "Fertilizer App",
    description: "The Fertilizer App uses a Convolutional Neural Network (CNN) to detect potato leaf diseases like Early Blight and Late Blight from images. This employs data augmentation to improve accuracy. This suggests appropriate fertilizers based on the detected diseases.",
    tags: ["Computer Vision", "Deep Learning"],
    image: "/src/assets/projects/fertilizer.png",
    gallery: ["/src/assets/projects/fertilizer1.png", "/src/assets/projects/fertilizer2.png", "/src/assets/projects/fertilizer3.png", "/src/assets/projects/fertilizer4.png", "/src/assets/projects/fertilizer5.jpg"], 
    github: "https://github.com/LasithaAmarasinghe/Fertilizer-App",
  },
  {
    title: "3D Mapper",
    description: "3D-Mapper is a short-range object detection device powered by an ATmega 2560, using two Time-Of-Flight sensors and stepper motors for precise 3D mapping. It converts distance data into Cartesian coordinates, generates a 3D point cloud, and creates a 3D surface mesh using Delaunay triangulation.",
    tags: ["3D Mapping", "PCB Designing", "Solidworks"],
    image: "/src/assets/projects/3d-mapper.png",
    gallery: ["/src/assets/projects/3d-mapper1.jpg", "/src/assets/projects/3d-mapper2.png", "/src/assets/projects/3d-mapper3.png", "/src/assets/projects/3d-mapper4.png", "/src/assets/projects/3d-mapper5.jpg"], 
    github: "https://github.com/LasithaAmarasinghe/3D-Mapper",
  },
  {
    title: "Analog Wall Following Robot",
    description: "Analog Wall Following Robot uses sharp IR sensors to follow a centerline between two walls, adjusting its path with a PID control circuit. PWM signals, generated by the PID output and comparator circuits, control the left and right wheels for precise movement. Robot's speed is controlled based ondistance from front wall.",
    tags: ["Electronics", "Control Systems", "PCB Designing"],
    image: "/src/assets/projects/wall-follow.jpg",
    gallery: ["/src/assets/projects/wall-follow1.jpg", "/src/assets/projects/wall-follow2.jpg", "/src/assets/projects/wall-follow3.jpg", "/src/assets/projects/wall-follow4.jpg", "/src/assets/projects/wall-follow5.jpg"], 
    github: "https://github.com/LasithaAmarasinghe/Analog-Wall-Follow-Robot",
  },
  { 
    title: "Agni Robot",
    description: "Agni is an Arduino Mega 2560 powered robot capable of line following, wall avoidance, ramp navigation, obstacle detection, and sound detection. IR, ultrasonic, and color sensors are integrated with a PID controller and a robotic arm for precise movement, obstacle avoidance and color-based path navigation.",
    tags: ["Robotics","Programming","Electronics"],
    image: "/src/assets/projects/agni.jpg",
    gallery: ["/src/assets/projects/agni1.jpg", "/src/assets/projects/agni2.jpg", "/src/assets/projects/agni3.jpg"], 
    github: "https://github.com/LasithaAmarasinghe/Agni-Robot",
  },
  {
    title: "AURA",
    description: "AURA is a multi-room audio system designed for seamless audio playback across different rooms. This features high-fidelity audio with FLAC support, low-latency processing, and synchronized playback for a unified listening experience. Perfect for smart homes.",
    tags: ["PCB Designing", "Internet of Things", "Solidworks"],
    image: "/src/assets/projects/aura.jpg",
    gallery: ["/src/assets/projects/aura1.jpg","/src/assets/projects/aura2.jpg","/src/assets/projects/aura3.jpg","/src/assets/projects/aura4.jpg","/src/assets/projects/aura5.jpg"], 
    github: "https://github.com/Multi-Room-Sound-System-AURA",
  },
  {
    title: "Smarty Plug",
    description: "Smarty Plug is an IoT-powered smart extension cord that integrates the ESP8266 and Atmega328 micro controllers to provide remote control and monitoring capabilities. The device allows users to turn appliances on and off from anywhere using the mobile app.",
    tags: ["PCB Designing", "Internet of Things", "Solidworks"],
    image: "/src/assets/projects/smart-plug.jpg",
    gallery: ["/src/assets/projects/smart-plug1.png","/src/assets/projects/smart-plug2.png","/src/assets/projects/smart-plug3.jpg","/src/assets/projects/smart-plug4.jpg","/src/assets/projects/smart-plug5.jpg"], 
    github: "https://github.com/LasithaAmarasinghe/Smarty-Plug",
  },
  { 
    title: "StudyMate",
    description: "StudyMate is a web application designed to help students track and manage their academic progress. It provides a centralized platform where students can monitor their coursework, assignments, deadline. This reduces the stress of managing heavy workloads.",
    tags: ["Next.js", "Material UI", "Web Development"],
    image: "/src/assets/projects/studymate.png",
    gallery: ["/src/assets/projects/studymate1.png","/src/assets/projects/studymate2.png","/src/assets/projects/studymate3.png","/src/assets/projects/studymate4.png","/src/assets/projects/studymate5.png","/src/assets/projects/studymate6.png"], 
    github: "https://github.com/LasithaAmarasinghe/StudyMate",
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-muted/30" id="projects">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-loose" style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}>
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent projects and implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <ImageIcon className="h-4 w-4 mr-2" />
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
