import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GalleryDialog from "@/components/ui/gallery-dialog";
import { ChevronDown, ChevronUp, ExternalLink, Trophy } from "lucide-react";

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
import Brainstorm from "@/assets/competitions/Brainstorm.jpg";

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
		rank: "Champions",
		highlight: true,
		description:
			"Team HelloWorld became champions at Techno Hackathon Xtreme organized by IESL surpassing 250+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: TechnoXtreme2023,
	},
	{
		title: "CYPHER 1.0",
		platform: ["WIE","KDU"],
		rank: "Champions",
		highlight: true,
		description:
			"Team HelloWorld became champions at CYPHER 1.0 organized by IEEE WIE Affinity group of Kothalawala Defence University.",
		tags: ["Competitive Programming", "Teamwork"],
		image: Cypher,
	},
	{
		title: "Brainstorm 2026",
		platform: ["EMBS","UOM"],
		rank: "Champions",
		highlight: true,
		description:
			"Team NeoCare became champions at Brainstorm organized by IEEE EMBS Student Branch Chapter of the University of Moratuwa.",
		tags: ["Healthcare", "Innovation", "Problem Solving"], 
		image: Brainstorm,
	},
	{
		title: "ICE 2025",
		platform: ["AH Lab","NUS"],
		rank: "Best Team Dynamics",
		highlight: true,
		description:
			"Team Big Hero 7 secured Best Team Dynamics Award at Innovation, Creativity & Entrepreneurship with AI bootcamp organized by AH Lab, NUS.",
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
			"Team Helloworld 2.0 secured 5th Place at Data Crunch organized by Department of Computer Science & Engineering, University of Moratuwa.",
		tags: ["Data Science", "Machine Learning"],
		image: DataCrunch,
	},
   {
		title: "Open Hack 2.0",
		platform: "IIT",
		rank: "5th Place",
		description:
			"Team HelloWorld secured 5th Place at Open Hack 2.0 organized by Mozilla & FOSS community of Informatics Institute of Technology (IIT).",
		tags: ["Competitive Programming", "Problem Solving"],
		image: OpenHack,
	},
	
	{
		title: "Real Hack 4.0",
		platform: ["SESA","UOK"],
		rank: "6th Place",
		description:
			"Team HelloWorld 1.0 secured 6th Place at Real Hack 4.0 organized by Software Engineering Students’ Association, University of Kelaniya with 200+ teams.",
		tags: ["Competitive Programming", "Teamwork"],
		image: RealHack4,
	},
	
	{
		title: "SLIoT Challenge 2025",
		platform: ["CSE","UOM"],
		rank: "Top 8",
		description:
			"Team AURA secured a Top 8 Place at SLIoT Challenge 2025 organized by Dept. of Computer Science & Engineering, University of Moratuwa.",
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
		title: "SLIoT Challenge 2024",
		platform: ["CSE","UOM"],
		rank: "Top 10",
		description:
			"Team Tronic Pros secured a Top 10 Place at SLIoT Challenge 2024 organized by Dept. of Computer Science & Engineering, University of Moratuwa.",
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
			"Team HelloWorld 1.0 secured a Top 10 Place at Real Hack 5.0 organized by SESA of University of Kelaniya with 200+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: RealHack5,
	},
	{
		title: "CODESPRINT 8.0",
		platform: ["IEEE","IIT"],
		rank: "Top 10",
		description:
			"Team Tronic Pros secured a Top 10 Place at CODESPRINT 8.0 organized by IEEE Computer Society of IIT with 500+ teams.",
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
		tags: ["Machine Learning", "Data Science"],
		image: DataStormV6,
	},
	{
		title: "Coders V10.0",
		platform: ["ACES","UOP"],
		rank: "Top 20",
		description:
			"Team Mora Coders secured a Top 20 Place at Coders V10.0 organized by Computer Engineering, University of Peradeniya with 120+ teams.",
		tags: ["Competitive Programming", "Problem Solving"],
		image: CodersV10,
	}
	
	
];

const INITIAL_VISIBLE_COUNT = 6;

const Competitions = () => {
	const [showAll, setShowAll] = useState(false);
	const visibleCompetitions = showAll ? competitions : competitions.slice(0, INITIAL_VISIBLE_COUNT);

	return (
		<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30" id="achievements">
			<div className="container mx-auto max-w-7xl">
				<SectionHeading title="Achievements" />

				<div className="mx-auto max-w-5xl flex flex-col gap-4 sm:gap-5">
					{visibleCompetitions.map((competition, index) => (
						<Card
							key={competition.title}
							className="group bg-gradient-card border-border hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 animate-fade-in overflow-hidden"
							style={{ animationDelay: `${index * 0.05}s` }}
						>
							<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5">
								<GalleryDialog
									title={competition.title}
									images={[competition.image]}
									trigger={
										<button
											type="button"
											aria-label={`View ${competition.title} image`}
											className="w-full sm:w-56 md:w-64 shrink-0 self-start aspect-video overflow-hidden rounded-lg border border-border bg-muted cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
										>
											<img
												src={competition.image}
												alt={competition.title}
												loading="lazy"
												decoding="async"
												className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</button>
									}
								/>
								<div className="flex-1 min-w-0 flex flex-col">
									<div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
										<h3 className="text-lg sm:text-xl font-semibold leading-snug text-foreground">
											{competition.title}
										</h3>
										<div className="flex items-center gap-2 shrink-0">
											<Trophy className={`h-4 w-4 flex-shrink-0 ${competition.highlight ? "text-[hsl(var(--highlight))]" : "text-primary"}`} />
											<Badge
												variant="outline"
												className={`text-xs font-semibold px-3 py-1 rounded-full border-2 ${competition.highlight ? "border-[hsl(var(--highlight))] text-[hsl(var(--highlight-strong))] bg-[hsl(var(--highlight-soft))]" : "border-primary/60 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"}`}
											>
												{competition.rank}
											</Badge>
										</div>
									</div>
									<p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
										{competition.description}
									</p>
								</div>
							</div>
						</Card>
					))}
				</div>

				{competitions.length > INITIAL_VISIBLE_COUNT && (
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
									Show More Achievements <ChevronDown className="h-4 w-4" />
								</>
							)}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Competitions;
