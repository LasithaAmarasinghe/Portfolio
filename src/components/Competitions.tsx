import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy } from "lucide-react";

import IEEEXtreme19 from "@/assets/competitions/IEEEXtreme19.0.png";
import IEEEXtreme18 from "@/assets/competitions/IEEEXtreme18.0.png";
import TechnoXtreme2023 from "@/assets/competitions/TechnoXtreme2023.png";
import Cypher from "@/assets/competitions/Cypher.png";
import AlgoXplore from "@/assets/competitions/AlgoXplore.png";
import FestX from "@/assets/competitions/FestX.png";
import ENIGMA from "@/assets/competitions/ENIGMA.png";
import DataCrunch from "@/assets/competitions/DataCrunch.png";
import OpenHack from "@/assets/competitions/OpenHack.jpg";
import RealHack4 from "@/assets/competitions/RealHack4.jpg";
import ICE from "@/assets/competitions/ICE.png";
import SLIoT2025 from "@/assets/competitions/SLIoT2025.png";
import HackDoze from "@/assets/competitions/HackDoze.png";
import SLIoT2024 from "@/assets/competitions/SLIoT2024.png";
import SPARK from "@/assets/competitions/SPARK.png";
import LSEG from "@/assets/competitions/LSEG.png";
import RealHack5 from "@/assets/competitions/RealHack5.png";
import CODESPRINT from "@/assets/competitions/CODESPRINT.png";
import Duothan from "@/assets/competitions/Duothan.png";
import DataStormV6 from "@/assets/competitions/DataStormV6.png";
import CodersV10 from "@/assets/competitions/CodersV10.png";

const competitions = [
	{
		title: "IEEEXtreme 19.0",
		platform: ["IEEE"],
		rank: "Sri Lanka Rank - 4 | World Rank - 76",
		highlight: true,
		description:
			"The world’s largest competitive programming competition organized by IEEE, featuring a 24-hour coding challenge with over 8,500 teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: IEEEXtreme19,
	},
	{
		title: "IEEEXtreme 18.0",
		platform: ["IEEE"],
		rank: "Sri Lanka Rank - 8 | World Rank - 129",
		highlight: true,
		description:
			"The world’s largest competitive programming competition organized by IEEE, featuring a 24-hour coding challenge with over 8,500 teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: IEEEXtreme18,
	},
	{
		title: "Techno Xtreme 2023",
		platform: ["IEEE","IESL"],
		rank: "1st Place",
		description:
			"Team HelloWorld was able to be the champion at Techno Hackathon Xtreme organized by Institute of Engineering Sri Lanka (IESL) surpassing 250+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: TechnoXtreme2023,
	},
	{
		title: "CYPHER 1.0",
		platform: ["WIE","KDU"],
		rank: "1st Place",
		description:
			"Team HelloWorld was able to be the champion at CYPHER 1.0 organized by IEEE WIE Affinity group of Kothalawala Defence University.",
		tags: ["Competitive Programming", "Teamwork"],
		image: Cypher,
	},
	{
		title: "ICE 2025",
		platform: ["AH Lab","NUS"],
		rank: "Best Team Dynamics Award",
		description:
			"Team Big Hero 7 secured Best Team Dynamics Award at Innovation, Creativity & Entrepreneurship with AI bootcamp organized by Augmented Human Lab, NUS.",
		tags: ["Entrepreneurship", "Innovation", "Teamwork"],
		image: ICE,
	},
	{
		title: "AlgoXplore 1.0",
		platform: ["FOC","NSBM"],
		rank: "3rd Place",
		description:
			"Team HelloWorld secured 3rd Place at AlgoXplore 1.0 organized by Faculty of Computing of NSBM Green University surpassing 250+ teams.",
		tags: ["Capture the Flag", "Problem Solving"],
		image: AlgoXplore,
	},
	{
		title: "FestX 4.0",
		platform: ["WIE", "UOM"],
		rank: "4th Place",
		description:
			"I secured 4th Place at FestX 4.0 organized by IEEE WIE Student Branch of the University of Moratuwa with 100+ participants.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: FestX,
	},
  {
		title: "ENIGMA'24",
		platform: ["Maths","UOM"],
		rank: "5th Place",
		description:
			"Team TLP secured 5th Place at ENIGMA'24 organized by Mathematics Society of the University of Moratuwa surpassing 200+ teams.",
		tags: ["Competitive Programming", "Teamwork"],
		image: ENIGMA,
	},
	
	{
		title: "Data Crunch",
		platform: ["CSE","UOM"],
		rank: "5th Place",
		description:
			"Team Helloworld 2.0 secured 5th Place at Data Crunch organized by Department of Computer Engineering, University of Moratuwa with 100+ teams.",
		tags: ["Data Science", "Machine Learning"],
		image: DataCrunch,
	},
   {
		title: "Open Hack 2.0",
		platform: "IIT",
		rank: "5th Place",
		description:
			"Team HelloWorld secured 5th Place at Open Hack 2.0 organized by Mozilla & FOSS community of IIT.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: OpenHack,
	},
	
	{
		title: "Real Hack 4.0",
		platform: ["SESA","UOK"],
		rank: "6th Place",
		description:
			"Team HelloWorld 1.0 secured 6th Place at Real Hack 4.0 organized by Software Engineering Students’ Association of University of Kelaniya with 200+ teams.",
		tags: ["Competitive Programming", "Teamwork"],
		image: RealHack4,
	},
	
	{
		title: "SLIoT Challenge 2025",
		platform: ["CSE","UOM"],
		rank: "Top 8",
		description:
			"Team AURA secured a Top 8 Place at SLIoT Challenge 2025 organized by Department of Computer Science & Engineering, University of Moratuwa.",
		tags: ["Internet of Things", "Problem Solving"],
		image: SLIoT2025,
	},
	{
		title: "HackDoze 1.0",
		platform: ["FOE", "UOR"],
		rank: "9th Place",
		description:
			"I secured 9th Place at HackDoze 1.0 organized by Faculty of Engineering, University of Ruhuna with 250+ participants.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: HackDoze,
	},
	{
		title: "SLIoT Challenge 2023/24",
		platform: ["CSE","UOM"],
		rank: "Top 10",
		description:
			"Team Tronic Pros secured a Top 10 Place at SLIoT Challenge 2023/24 organized by Computer Science & Engineering, University of Moratuwa with 75+ teams.",
		tags: ["Internet of Things", "Problem Solving"],
		image: SLIoT2024,
	},
	{
		title: "SPARK Challenge 2024",
		platform: ["ENTC","UOM"],
		rank: "Top 10",
		description:
			"Team Masterminds secured a Top 10 Place at SPARK Challenge organized by Department of Electronics & Telecom. Engineering, University of Moratuwa.",
		tags: ["Sustainable Development", "Problem Solving"],
		image: SPARK,
	},
	{
		title: "C++ Coding Challenge",
		platform: ["LSEG"],
		rank: "Top 10",
		description:
			"We completed High-Performance and Mission-Critical Software Development using C++ Challenge organized by London Stock Exchange Group.",
		tags: ["Software Development", "Programming"],
		image: LSEG,
	},
  	{
		title: "Real Hack 5.0",
		platform: ["SESA","UOK"],
		rank: "Top 10",
		description:
			"Team HelloWorld 1.0 secured a Top 10 Place at Real Hack 5.0 organized by Software Engineering Students’ Association of University of Kelaniya with 200+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: RealHack5,
	},
	{
		title: "CODESPRINT 8.0",
		platform: ["IEEE","IIT"],
		rank: "Top 10",
		description:
			"Team Tronic Pros secured a Top 10 Place at CODESPRINT 8.0 organized by IEEE Computer Society Student Branch Chapter of IIT with 500+ teams.",
		tags: ["Problem Solving", "StartUp", "Idea Pitching"],
		image: CODESPRINT,
	},
	{
		title: "Duothan 3.0",
		platform: ["IEEE","NSBM"],
		rank: "Top 15",
		description:
			"Team HelloWorld secured a Top 15 Place at Duothan 3.0 organized by IEEE Student Branch of NSBM Green University with 75+ teams.",
		tags: ["Buildathon", "Teamwork", "Problem Solving"],
		image: Duothan,
	},
	{
		title: "Data Storm V6.0",
		platform: ["OCTAVE","UOM","UOC"],
		rank: "Top 15",
		description:
			"Team Helloworld 2.0 secured a Top 15 Place at Data Storm V6.0 organized by Rotaract Clubs of University of Moratuwa and University of Colombo.",
		tags: ["Machine Learning", "Data Science", "Teamwork"],
		image: DataStormV6,
	},
	{
		title: "Coders V10.0",
		platform: ["ACES","UOP"],
		rank: "Top 20",
		description:
			"Team Mora Coders secured a Top 20 Place at Coders V10.0 organized by Department of Computer Engineering, University of Peradeniya with 120+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: CodersV10,
	}
	
	
];

const Competitions = () => {
	return (
		<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="competitions">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-500 leading-tight sm:leading-loose" style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}>
						Achievements
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg px-4">
						Achievements in competitive programming and machine learning challenges
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
								<div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-2">
									<div className="flex items-center gap-2">
										<Trophy className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${competition.highlight ? "text-amber-400" : "text-primary"}`} />
										<Badge
											variant="outline"
											className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border-2 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 ${competition.highlight ? "border-amber-400 text-amber-300 bg-amber-500/10" : "border-primary/60 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"}`}
										>
											{competition.rank}
										</Badge>
									</div>
									<div className="flex flex-wrap gap-1">
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
