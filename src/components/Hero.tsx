import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import React, { useEffect, useState } from "react";

import profilePic1 from "@/assets/about/lasitha1.jpg";
import profilePic2 from "@/assets/about/lasitha2.jpg";
import profilePic3 from "@/assets/about/lasitha3.jpg";
import profilePic4 from "@/assets/about/lasitha4.jpg";
import profilePic5 from "@/assets/about/lasitha5.jpg";

const taglines = [
	{ text: "AI/ML Enthusiast" },
	{ text: "Innovator" },
	{ text: "Problem Solver" },
	{ text: "Tech Enthusiast" },
	{ text: "Developer" }
];

const AnimatedTagline = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % taglines.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<span
			className="text-purple-500 transition-all duration-500 ease-in-out"
		>
			{taglines[index].text}
		</span>
	);
};

// RotatingAvatar component
const avatarImages = [
	profilePic1, 
    profilePic2,
    profilePic3,
    profilePic4,
    profilePic5
];

const RotatingAvatar = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % avatarImages.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full aspect-[4/5] max-w-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-background/60">
			<img
				src={avatarImages[index]}
				alt="Lasitha Amarasinghe"
				className="w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-300"
			/>
		</div>
	);
};

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${heroBg})` }}
			>
				<div className="absolute inset-0 bg-gradient-hero" />
			</div>

			{/* Glassmorphism Hero Layout */}
			<div className="relative z-10 container mx-auto px-6 py-32 animate-fade-in">
				<div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
					{/* Left: Glassmorphism Avatar Card with Big Image */}
					<div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2">
						<div
							className="relative p-2 rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border-2 border-primary/80 transition-all duration-300"
							style={{ maxWidth: "400px" }}
						>
							<div className="absolute inset-0 rounded-3xl border-4 border-gradient-to-r from-blue-500 via-purple-500 to-green-400 animate-pulse opacity-60 pointer-events-none"></div>
							<RotatingAvatar />
						</div>
					</div>
					{/* Right: Hero Text Content */}
					<div className="w-full md:w-1/2 text-center md:text-left">
						<h1
							className="text-5xl md:text-7xl font-bold mb-6 text-blue-500 animate-fade-in leading-loose"
							style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}
						>
							Lasitha Amarasinghe
						</h1>
						<div className="mb-6">
							<span className="text-3xl md:text-5xl font-bold animate-fade-in-delay">
								<AnimatedTagline />
							</span>
						</div>
						<p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl animate-fade-in-delay text-center sm:text-left">
							Specializing in <span className="whitespace-nowrap">machine learning</span>, <span className="whitespace-nowrap">deep learning</span>, <br className="hidden sm:block" />
							and AI-powered solutions. <br className="hidden sm:block" />
							Transforming data into Innovative products.
						</p>
						<div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start animate-fade-in-delay">
							<a href="#projects" className="w-full sm:w-auto">
								<Button
									variant="hero"
									size="lg"
									className="w-full sm:w-auto bg-blue-500 text-white hover:bg-purple-600 transition-colors duration-300"
								>
									View Projects
								</Button>
							</a>
							<a href="#contact" className="w-full sm:w-auto">
								<Button variant="outline" size="lg" className="w-full sm:w-auto">
									<Mail className="mr-2" />
									Get In Touch
								</Button>
							</a>
						</div>
						<div className="flex gap-6 justify-center md:justify-start mt-8 sm:mt-12 animate-fade-in-delay">
							<a
								href="https://github.com/LasithaAmarasinghe"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-125 hover:drop-shadow-glow duration-300"
								aria-label="GitHub"
							>
								<Github className="h-6 w-6" />
							</a>
							<a
								href="https://linkedin.com/in/lasithaamarasinghe"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-125 hover:drop-shadow-glow duration-300"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-6 w-6" />
							</a>
							<a
								href="#contact"
								className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-125 hover:drop-shadow-glow duration-300"
								aria-label="Email"
							>
								<Mail className="h-6 w-6" />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Custom Animated Scroll Indicator with smooth scroll */}
			<button
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 focus:outline-none group"
				aria-label="Scroll Down"
				onClick={() => {
					const nextSection = document.querySelector(
						"#about, #experience, #projects, #education, #competitions, #leadership, #contact"
					);
					if (nextSection) {
						nextSection.scrollIntoView({ behavior: "smooth" });
					}
				}}
			>
				<div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary/60 bg-background/70 shadow-xl group-hover:border-primary group-hover:shadow-glow-primary transition-all duration-300">
					<svg
						className="w-7 h-7 text-primary animate-bounce group-hover:text-secondary transition-colors duration-300"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</button>
		</section>
	);
};

export default Hero;
