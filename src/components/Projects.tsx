import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";

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


const projects = [
  {
    title: "NeoCare",
    description: "NeoCare is a non-invasive, real-time health monitoring system for neonates that uses rPPG to estimate heart rate (HR), blood oxygen saturation (SpO2), and detect jaundice through facial video analysis. It integrates deep learning models, edge computing, and a mobile app to ensure secure and reliable monitoring.",
    tags: ["Deep Learning", "Computer Vision", "Mobile App", "Edge Computing",  "Dataset Preparation", "Privacy"],
    image: neocare,
    gallery: [neocare1, neocare2, neocare3, neocare4, neocare5], 
    github: "https://github.com/NeoCare-ENTC",
  },
  {
    title: "Transformer Management System",
    description: "The project is a web based system for managing electrical transformers and their associated thermal imaging data. It helps maintenance teams track transformer inventory, upload thermal inspections, detect anomalies automatically, and record maintenance history - all in one platform.",
    tags: ["React.js", "Java Spring", "PostgreSQL", "Computer Vision", "Anomaly Detection"],
    image: transform,
    gallery: [transformer1, transformer2, transformer3, transformer4, transformer5, transformer6], 
    github: "https://github.com/Web-Wizards-ENTC/Transformer",
  },
  {
    title: "See the Unseen",
    description: "This system detects, tracks, and classifies drones and their payloads in real time by fusing RGB and infrared imagery. This utilizes a Y-shape Dynamic Transformer (YDTR) for image fusion, YOLOv8 for object detection, and BoT-SORT for tracking. This enhances robustness, particularly in challenging environmental conditions",
    tags: ["YOLO", "Computer Vision", "Image Fusion", "Object detection", "Object Tracking"],
    image: uav,
    gif: uav1,
    gallery: [uav], 
    github: "https://github.com/LasithaAmarasinghe/IEEE-VIP-Cup-2025-Multimodal-UAV-Detection-Tracking-and-Payload-Identification",
  },
  {
    title: "Actura",
    description: "ACTURA is a Virtual Reality application built with Unity to help users overcome stage‑fright and practice public speaking in realistic, simulated environments. Users can rehearse speeches or presentations on virtual stages in front of a virtual audience.",
    tags: ["Virtual Reality", "Unity", "Machine Learning"],
    image: actura,
    gif: actura1,
    gallery: [actura], 
    github: "https://github.com/LasithaAmarasinghe/ACTURA",
  },
  {
    title: "Agent Performance Analysis",
    description: "This system predicts insurance agent performance using machine learning algorithms. It employs K-means clustering and PCA for data analysis and dimensionality reduction. This provides real-time predictions and dynamic performance analysis charts.",
    tags: ["Unsupervised Learning", "Data Visualization"],
    image: agent,
    gallery: [agent1, agent2, agent3, agent4], 
    github: "https://github.com/LasithaAmarasinghe/Agent-Performance-Analysis-Data-Storm",
  },
  { 
    title: "YouTube Comment Analysis",
    description: "This project analyzes the sentiment of YouTube comments, categorizing them as positive, negative, or neutral. It fetches up to 1000 comments, performs sentiment analysis using VaderSentiment, and visualizes the results through bar and pie charts.",
    tags: ["Sentiment Analysis", "Data Visualization"],
    image: youtube,
    gallery: [youtube1, youtube2], 
    github: "https://github.com/LasithaAmarasinghe/YouTube-Comment-Analysis",
  },
  {
    title: "Flower Exchange",
    description: "This is a simple trading system that enables traders to submit buy or sell orders for flowers through a trader application. The Exchange Application processes these orders against existing orders in the order book and executes them, providing an execution report.",
    tags: ["Object Oriented Programming", "Trading"],
    image: flower,
    gallery: [flower1, flower2], 
    github: "https://github.com/LasithaAmarasinghe/Flower-Exchange",
  },
  {
    title: "Freezer Gambit",
    description: "This time series forecasting system predicts weekly fresh fruits, vegetables prices up to 4 weeks ahead using historical weather and price data. It dynamically incorporates new data through APIs and provides actionable insights to optimize cold storage strategy.",
    tags: ["Time Series Forecasting", "Recommendation System"],
    image: freezer,
    gallery: [freezer1, freezer2],
    github: "https://github.com/LasithaAmarasinghe/Freezer-Gambit-Data-Crunch",
  },
  { 
    title: "Fertilizer App",
    description: "The Fertilizer App uses a Convolutional Neural Network (CNN) to detect potato leaf diseases like Early Blight and Late Blight from images. This employs data augmentation to improve accuracy. This suggests appropriate fertilizers based on the detected diseases.",
    tags: ["Computer Vision", "Deep Learning"],
    image: fertilizer,
    gallery: [fertilizer1, fertilizer2, fertilizer3, fertilizer4, fertilizer5], 
    github: "https://github.com/LasithaAmarasinghe/Fertilizer-App",
  },
  {
    title: "3D Mapper",
    description: "3D-Mapper is a short-range object detection device powered by an ATmega 2560, using two Time-Of-Flight sensors and stepper motors for precise 3D mapping. It converts distance data into Cartesian coordinates, generates a 3D point cloud, and creates a 3D surface mesh using Delaunay triangulation.",
    tags: ["3D Mapping", "PCB Designing", "Solidworks"],
    image: mapper,
    gallery: [mapper1, mapper2, mapper3, mapper4, mapper5], 
    github: "https://github.com/LasithaAmarasinghe/3D-Mapper",
  },
  {
    title: "Analog Wall Following Robot",
    description: "Analog Wall Following Robot uses sharp IR sensors to follow a centerline between two walls, adjusting its path with a PID control circuit. PWM signals, generated by the PID output and comparator circuits, control the left and right wheels for precise movement. Robot's speed is controlled based ondistance from front wall.",
    tags: ["Electronics", "Control Systems", "PCB Designing"],
    image: wallFollow,
    gallery: [wallFollow1, wallFollow2, wallFollow3, wallFollow4, wallFollow5], 
    github: "https://github.com/LasithaAmarasinghe/Analog-Wall-Follow-Robot",
  },
  { 
    title: "Agni Robot",
    description: "Agni is an Arduino Mega 2560 powered robot capable of line following, wall avoidance, ramp navigation, obstacle detection, and sound detection. IR, ultrasonic, and color sensors are integrated with a PID controller and a robotic arm for precise movement, obstacle avoidance and color-based path navigation.",
    tags: ["Robotics","Programming","Electronics"],
    image: agni,
    gallery: [agni1, agni2, agni3], 
    github: "https://github.com/LasithaAmarasinghe/Agni-Robot",
  },
  {
    title: "AURA",
    description: "AURA is a multi-room audio system designed for seamless audio playback across different rooms. This features high-fidelity audio with FLAC support, low-latency processing, and synchronized playback for a unified listening experience. Perfect for smart homes.",
    tags: ["PCB Designing", "Internet of Things", "Solidworks"],
    image: aura,
    gallery: [aura1, aura2, aura3, aura4, aura5], 
    github: "https://github.com/Multi-Room-Sound-System-AURA",
  },
  {
    title: "Smarty Plug",
    description: "Smarty Plug is an IoT-powered smart extension cord that integrates the ESP8266 and Atmega328 micro controllers to provide remote control and monitoring capabilities. The device allows users to turn appliances on and off from anywhere using the mobile app.",
    tags: ["PCB Designing", "Internet of Things", "Solidworks"],
    image: smartPlug,
    gallery: [smartPlug1, smartPlug2, smartPlug3, smartPlug4, smartPlug5], 
    github: "https://github.com/LasithaAmarasinghe/Smarty-Plug",
  },
  { 
    title: "StudyMate",
    description: "StudyMate is a web application designed to help students track and manage their academic progress. It provides a centralized platform where students can monitor their coursework, assignments, deadline. This reduces the stress of managing heavy workloads.",
    tags: ["Next.js", "Material UI", "Web Development"],
    image: studymate,
    gallery: [studymate1, studymate2, studymate3, studymate4, studymate5, studymate6], 
    github: "https://github.com/LasithaAmarasinghe/StudyMate",
  },
];

const Projects = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30" id="projects">
      <div className="container mx-auto max-w-7xl">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight sm:leading-loose" style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}>
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
