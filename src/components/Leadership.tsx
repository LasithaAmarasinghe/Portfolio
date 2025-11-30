import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, GraduationCap, Sparkles } from "lucide-react";

import leadership1 from "@/assets/leadership/leadership1.png";
import leadership2 from "@/assets/leadership/leadership2.png";
import leadership3 from "@/assets/leadership/leadership3.jpg";
import leadership4 from "@/assets/leadership/leadership4.jpg";
import leadership5 from "@/assets/leadership/leadership5.png";
import leadership6 from "@/assets/leadership/leadership6.png";


const leadership = [
	{
		title: "Vice President - Spark Branch",
		organization: "Electronic Club of University of Moratuwa",
		period: "2024 - Present",
		description: (
			<>
				<ul className="list-disc pl-5 mb-2">
					<li>
						Leading Spark Branch focusing on innovations with sustainable
						development of undergraduates.
					</li>
					<li>
						Organized Spark Challenge featuring Sri Lanka’s highest prize pool in
						university competitions.
					</li>
				</ul>
			</>
		),
		icon: Users,
		image: leadership1,
		tags: [
			"Leadership",
			"Innovation",
			"Teamwork",
			"Sustainability",
			"Event Management",
		],
	},
	{
		title: "Department Representative",
		organization: "Electronic and Telecommunication Engineering",
		period: "2023 - 2024",
		description: (
			<>
				<ul className="list-disc pl-5 mb-2">
					<li>
						Provided leadership in organizing and coordinating flagship department
						events, including EXMO 23, Abhina, SLRC, Tronic Awurudu, Trip Tronic,
						Mewisuru, Tronic Dansal, and Career Fair.
					</li>
					<li>Acted as a liaison between students and staff, addressing student concerns.</li>
				</ul>
			</>
		),
		icon: GraduationCap,
		image: leadership2,
		tags: [
			"Leadership",
			"Organizing",
			"Teamwork",
			"Coordination",
			"Communication",
		],
	},
	{
		title: "Event Facilitator",
		organization: "Smart Systems Institute - National University of Singapore",
		period: "2025",
		description: (
			<>
				<ul className="list-disc pl-5 mb-2">
					<li>
						Organized a 6-day physical Bootcamp on smart glasses technology for
						40+ participants from Singapore, China, and Vietnam.
					</li>
					<li>
						Facilitated hands-on learning, interactive workshops, and demonstrations.
					</li>
				</ul>
			</>
		),
		icon: Heart,
		image: leadership3,
		tags: [
			"Facilitation",
			"Bootcamp",
			"Technology",
			"Event Management",
			"Multicultural",
		],
	},
	{
		title: "Core Team Member",
		organization: "Kegalle Medicine Engineering Students Society",
		period: "2021-2023",
		description: (
			<>
				<ul className="list-disc pl-5 mb-2">
					<li>
						Conducted educational workshops and motivational sessions for school
						children.
					</li>
					<li>
						Organized donation programs and fundraising events to support
						underprivileged communities.
					</li>
				</ul>
			</>
		),
		icon: Heart,
		image: leadership5,
		tags: ["Teaching", "Motivation", "Mentoring", "Donation", "Community"],
	},
	{
		title: "Volunteer",
		organization: "Sasnaka Sandara Foundation",
		period: "2021-2023",
		description: (
			<>
				<ul className="list-disc pl-5 mb-2">
					<li>
						Assisted in educational workshops for school children and various
						community outreach initiatives.
					</li>
					<li>
						Contributed to developing website containing educational content and
						resources.
					</li>
				</ul>
			</>
		),
		icon: Heart,
		image: leadership4,
		tags: ["Teaching", "Motivation", "Mentoring", "Community", "Outreach"],
	},
	{
		title: "Member",
		organization: "Gavel Club of University of Moratuwa",
		period: "2022-2023",
		description: (
			<>
				<ul className="list-disc pl-5 mb-2">
					<li>
						Participated in speech contests and workshops to enhance public
						speaking abilities.
					</li>
					<li>
						Contributed to the organization of club events and activities.
					</li>
					<li>
						Assisted in mentoring new members, providing guidance and feedback.
					</li>
				</ul>
			</>
		),
		icon: Heart,
		image: leadership6,
		tags: [
			"Motivation",
			"Teamwork",
			"Organizing",
			"Public Speaking",
			"Communication",
		],
	},
];

const Leadership = () => {
	return (
		<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30" id="leadership">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
					<h2
						className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight sm:leading-loose"
						style={{ lineHeight: 1.3, paddingBottom: "0.2em" }}
					>
						Leadership & Volunteering
					</h2>
					<p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-4">
						Contributing to the community through leadership and volunteer efforts
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					{leadership.map((item, index) => {
						const IconComponent = item.icon;
						return (
							<Card
								key={index}
								className="bg-gradient-card border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<CardHeader>
									{item.image ? (
										<div className="aspect-video w-full overflow-hidden mb-4">
											<img
												src={item.image}
												alt={item.title}
												className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
											/>
										</div>
									) : (
										<div className="p-3 rounded-lg bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
											<IconComponent className="h-8 w-8 text-primary" />
										</div>
									)}
									<CardTitle className="text-lg sm:text-xl mb-1">
										{item.title}
									</CardTitle>
									<div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mb-2">
										<span className="font-medium">{item.organization}</span>
										<span>•</span>
										<span>{item.period}</span>
									</div>
									<CardDescription className="text-muted-foreground">
										{item.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{item.tags.map((tag) => (
											<Badge
												key={tag}
												variant="outline"
												className="text-xs px-3 py-1 rounded-full font-semibold border-2 border-primary/60 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
											>
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Leadership;
