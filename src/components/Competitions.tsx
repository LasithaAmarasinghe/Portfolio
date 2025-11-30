import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy } from "lucide-react";
import imagenetImg from "@/assets/competition-imagenet.jpg";
import nlpImg from "@/assets/competition-nlp.jpg";
import timeseriesImg from "@/assets/competition-timeseries.jpg";
import detectionImg from "@/assets/competition-detection.jpg";

const competitions = [
	{
		title: "IEEEXtreme 19.0",
		platform: ["IEEE"],
		rank: "Sri Lanka Rank - 4 | World Rank - 76",
		description:
			"The world’s largest competitive programming competition organized by IEEE, featuring a 24-hour coding challenge with over 8,500 teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/IEEEXtreme19.0.png",
	},
	{
		title: "IEEEXtreme 18.0",
		platform: ["IEEE"],
		rank: "Sri Lanka Rank - 8 | World Rank - 129",
		description:
			"The world’s largest competitive programming competition organized by IEEE, featuring a 24-hour coding challenge with over 8,500 teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/IEEEXtreme18.0.png",
	},
	{
		title: "Techno Xtreme 2023",
		platform: ["IEEE","IESL"],
		rank: "1st Place",
		description:
			"Team HelloWorld was able to be the champion at Techno Hackathon Xtreme organized by Institute of Engineering Sri Lanka (IESL) surpassing 250+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/TechnoXtreme2023.png",
	},
	{
		title: "CYPHER 1.0",
		platform: ["WIE","KDU"],
		rank: "1st Place",
		description:
			"Team HelloWorld was able to be the champion at CYPHER 1.0 organized by IEEE WIE Affinity group of Kothalawala Defence University.",
		tags: ["Competitive Programming", "Teamwork"],
		image: "/src/assets/competitions/Cypher.png",
	},
	{
		title: "AlgoXplore 1.0",
		platform: ["FOC","NSBM"],
		rank: "3rd Place",
		description:
			"Team HelloWorld secured 3rd Place at AlgoXplore 1.0 organized by Faculty of Computing of NSBM Green University surpassing 250+ teams.",
		tags: ["Capture the Flag", "Problem Solving"],
		image: "/src/assets/competitions/AlgoXplore.png",
	},
	{
		title: "FestX 4.0",
		platform: ["WIE", "UOM"],
		rank: "4th Place",
		description:
			"I secured 4th Place at FestX 4.0 organized by IEEE WIE Student Branch of the University of Moratuwa with 100+ participants.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/FestX.png",
	},
  {
		title: "ENIGMA'24",
		platform: ["Maths","UOM"],
		rank: "5th Place",
		description:
			"Team TLP secured 5th Place at ENIGMA'24 organized by Mathematics Society of the University of Moratuwa surpassing 200+ teams.",
		tags: ["Competitive Programming", "Teamwork"],
		image: "/src/assets/competitions/ENIGMA.png",
	},
	
	{
		title: "Data Crunch",
		platform: ["CSE","UOM"],
		rank: "5th Place",
		description:
			"Team Helloworld 2.0 secured 5th Place at Data Crunch organized by Department of Computer Engineering, University of Moratuwa with 100+ teams.",
		tags: ["Data Science", "Machine Learning"],
		image: "/src/assets/competitions/DataCrunch.png",
	},
   {
		title: "Open Hack 2.0",
		platform: "IIT",
		rank: "5th Place",
		description:
			"Team HelloWorld secured 5th Place at Open Hack 2.0 organized by Mozilla & FOSS community of IIT.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/OpenHack.jpg",
	},
	
	{
		title: "Real Hack 4.0",
		platform: ["SESA","UOK"],
		rank: "6th Place",
		description:
			"Team HelloWorld 1.0 secured 6th Place at Real Hack 4.0 organized by Software Engineering Students’ Association of University of Kelaniya with 200+ teams.",
		tags: ["Competitive Programming", "Teamwork"],
		image: "/src/assets/competitions/RealHack4.jpg",
	},
	{
		title: "ICE 2025",
		platform: ["AH Lab","NUS"],
		rank: "Top 6",
		description:
			"Team Big Hero 7 secured a Top 6 Place at Innovation, Creativity & Entrepreneurship with AI bootcamp organized by Augmented Human Lab, NUS.",
		tags: ["Entrepreneurship", "Innovation", "Teamwork"],
		image: "/src/assets/competitions/ICE.png",
	},
	{
		title: "SLIoT Challenge 2025",
		platform: ["CSE","UOM"],
		rank: "Top 8",
		description:
			"Team AURA secured a Top 8 Place at SLIoT Challenge 2025 organized by Department of Computer Science & Engineering, University of Moratuwa.",
		tags: ["Internet of Things", "Problem Solving"],
		image: "/src/assets/competitions/SLIoT2025.png",
	},
	{
		title: "HackDoze 1.0",
		platform: ["FOE", "UOR"],
		rank: "9th Place",
		description:
			"I secured 9th Place at HackDoze 1.0 organized by Faculty of Engineering, University of Ruhuna with 250+ participants.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/HackDoze.png",
	},
	{
		title: "SLIoT Challenge 2023/24",
		platform: ["CSE","UOM"],
		rank: "Top 10",
		description:
			"Team Tronic Pros secured a Top 10 Place at SLIoT Challenge 2023/24 organized by Computer Science & Engineering, University of Moratuwa with 75+ teams.",
		tags: ["Internet of Things", "Problem Solving"],
		image: "/src/assets/competitions/SLIoT2024.png",
	},
	{
		title: "SPARK Challenge 2024",
		platform: ["ENTC","UOM"],
		rank: "Top 10",
		description:
			"Team Masterminds secured a Top 10 Place at SPARK Challenge organized by Department of Electronics & Telecom. Engineering, University of Moratuwa.",
		tags: ["Sustainabile Development", "Problem Solving"],
		image: "/src/assets/competitions/SPARK.png",
	},
	{
		title: "C++ Coding Challenge",
		platform: ["LSEG"],
		rank: "Top 10",
		description:
			"We completed High-Performance and Mission-Critical Software Development using C++ Challenge organized by London Stock Exchange Group.",
		tags: ["Software Development", "Programming"],
		image: "/src/assets/competitions/LSEG.png",
	},
  	{
		title: "Real Hack 5.0",
		platform: ["SESA","UOK"],
		rank: "Top 10",
		description:
			"Team HelloWorld 1.0 secured a Top 10 Place at Real Hack 5.0 organized by Software Engineering Students’ Association of University of Kelaniya with 200+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/RealHack5.png",
	},
	{
		title: "CODESPRINT 8.0",
		platform: ["IEEE","IIT"],
		rank: "Top 10",
		description:
			"Team Tronic Pros secured a Top 10 Place at CODESPRINT 8.0 organized by IEEE Computer Society Student Branch Chapter of IIT with 500+ teams.",
		tags: ["Problem Solving", "StartUp", "Idea Pitching"],
		image: "/src/assets/competitions/CODESPRINT.png",
	},
	{
		title: "Duothan 3.0",
		platform: ["IEEE","NSBM"],
		rank: "Top 15",
		description:
			"Team HelloWorld secured a Top 15 Place at Duothan 3.0 organized by IEEE Student Branch of NSBM Green University with 75+ teams.",
		tags: ["Buildathon", "Teamwork", "Problem Solving"],
		image: "/src/assets/competitions/Duothan.png",
	},
	{
		title: "Data Storm V6.0",
		platform: ["OCTAVE","UOM","UOC"],
		rank: "Top 15",
		description:
			"Team Helloworld 2.0 secured a Top 15 Place at Data Storm V6.0 organized by Rotaract Clubs of University of Moratuwa and University of Colombo.",
		tags: ["Machine Learning", "Data Science", "Teamwork"],
		image: "/src/assets/competitions/DataStormV6.png",
	},
	{
		title: "Coders V10.0",
		platform: ["ACES","UOP"],
		rank: "Top 20",
		description:
			"Team Mora Coders secured a Top 20 Place at Coders V10.0 organized by Department of Computer Engineering, University of Peradeniya with 120+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: "/src/assets/competitions/CodersV10.png",
	}
	
	
];

const Competitions = () => {
	return (
		<section className="py-24 px-6 bg-background" id="competitions">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-loose" style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}>
						Competitions & Awards
					</h2>
					<p className="text-muted-foreground text-lg">
						Achievements in competitive programming and machine learning challenges
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{competitions.map((competition, index) => (
						<Card
							key={index}
							className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="aspect-video w-full overflow-hidden">
								<img
									src={competition.image}
									alt={competition.title}
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
								/>
							</div>
							<CardHeader>
								<div className="flex items-start justify-between gap-4 mb-2">
									<div className="flex items-center gap-2">
										<Trophy className="h-5 w-5 text-primary" />
										<Badge
											variant="outline"
											className="text-xs font-semibold px-3 py-1 rounded-full border-2 border-primary/60 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
										>
											{competition.rank}
										</Badge>
									</div>
									<div className="flex gap-1">
									  {Array.isArray(competition.platform)
										? competition.platform.map((plat, i) => (
											<Badge key={i} variant="secondary" className="text-xs">
												{plat}
											</Badge>
										  ))
										: <Badge variant="secondary" className="text-xs">{competition.platform}</Badge>}
									</div>
								</div>
								<CardTitle className="text-xl">
									{competition.title}
								</CardTitle>
								<CardDescription className="text-muted-foreground">
									{competition.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2 mb-4">
									{competition.tags.map((tag) => (
										<Badge
											key={tag}
											variant="outline"
											className="text-xs px-3 py-1 rounded-full font-semibold border-2 border-primary/60 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
										>
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Competitions;
