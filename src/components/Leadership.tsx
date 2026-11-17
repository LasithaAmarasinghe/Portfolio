import { Card } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import GalleryDialog from "@/components/ui/gallery-dialog";
import { Users, Image as ImageIcon } from "lucide-react";

import leadership1 from "@/assets/leadership/leadership1.png";
import leadership2 from "@/assets/leadership/leadership2.png";
import leadership3 from "@/assets/leadership/leadership3.jpg";
import leadership4 from "@/assets/leadership/leadership4.jpg";
import leadership5 from "@/assets/leadership/leadership5.png";
import leadership6 from "@/assets/leadership/leadership6.png";

import rep1 from "@/assets/leadership/rep1.jpg";
import rep2 from "@/assets/leadership/rep2.jpg";
import rep3 from "@/assets/leadership/rep3.jpg";
import rep4 from "@/assets/leadership/rep4.jpg";
import rep5 from "@/assets/leadership/rep5.jpg";

import spark1 from "@/assets/leadership/spark1.jpg";
import spark2 from "@/assets/leadership/spark2.jpg";
import spark3 from "@/assets/leadership/spark3.jpg";
import spark4 from "@/assets/leadership/spark4.jpg";
import spark5 from "@/assets/leadership/spark5.jpg";
import spark6 from "@/assets/leadership/spark6.jpg";
import spark7 from "@/assets/leadership/spark7.jpg";

import kemess1 from "@/assets/leadership/kemess1.jpg";
import kemess2 from "@/assets/leadership/kemess2.jpg";	
import kemess3 from "@/assets/leadership/kemess3.jpg";
import kemess4 from "@/assets/leadership/kemess4.jpg";
import kemess5 from "@/assets/leadership/kemess5.jpg";	

import bootcamp1 from "@/assets/leadership/bootcamp1.jpg";
import bootcamp2 from "@/assets/leadership/bootcamp2.jpg";
import bootcamp3 from "@/assets/leadership/bootcamp3.jpg";
import bootcamp4 from "@/assets/leadership/bootcamp4.jpg";
import bootcamp5 from "@/assets/leadership/bootcamp5.jpg";

import gavel1 from "@/assets/leadership/gavel1.jpg";
import gavel2 from "@/assets/leadership/gavel2.jpg";
import gavel3 from "@/assets/leadership/gavel3.jpg";
import gavel4 from "@/assets/leadership/gavel4.jpg";
import gavel5 from "@/assets/leadership/gavel5.jpg";

import sasnaka1 from "@/assets/leadership/sasnaka1.jpg";
import sasnaka2 from "@/assets/leadership/sasnaka2.jpg";
import sasnaka3 from "@/assets/leadership/sasnaka3.jpg";
import sasnaka4 from "@/assets/leadership/sasnaka4.jpg";

const leadership = [
	{
		title: "Vice President - Spark Branch",
		organization: "Electronic Club of University of Moratuwa",
		period: "2025 - 2026",
		bullets: [
			"Leading Spark Branch focusing on sustainable development goals.",
			"Organized Spark Challenge featuring Sri Lanka's highest prize pool in university competitions with 120 teams and 600 participants.",
		],
		icon: Users,
		image: spark1,
		tags: [
			"Leadership",
			"Event Management",
			"Teamwork",
		],
		gallery: [spark1, spark2, spark3, spark4, spark5, spark6, spark7]
	},
	{
		title: "Department Representative",
		organization: "Electronic and Telecommunication Engineering",
		period: "2023 - 2024",
		bullets: [
			"Provided leadership in organizing and coordinating flagship department events, including EXMO 23, Abhina, SLRC, Tronic Awurudu, Trip Tronic, Mewisuru, Tronic Dansal.",
			"Acted as a liaison between students and staff.",
		],
		icon: Users,
		image: rep1,
		tags: [
			"Leadership",
			"Organizing",
			"Teamwork",
			
		],
		gallery: [rep1, rep2, rep3, rep4, rep5]
	},
	{
		title: "Event Facilitator",
		organization: "Smart Systems Institute, National University of Singapore",
		period: "2025",
		bullets: [
			"Organized a 6-day physical Bootcamp on smart wearables for 40+ participants.",
			"Facilitated hands-on learning, interactive workshops, and demonstrations.",
		],
		icon: Users,
		image: bootcamp1,
		tags: [
			"Facilitation",
			"Event Management",
			
		],
		gallery: [bootcamp1, bootcamp2, bootcamp3, bootcamp4, bootcamp5]
	},
	{
		title: "Coordinator",
		organization: "Kegalle Medicine Engineering Students Society",
		period: "2021 - 2023",
		bullets: [
			"Conducted educational workshops and motivational sessions for school children.",
			"Organized donation programs and fundraising events to support underprivileged communities.",
		],
		icon: Users,
		image: kemess2,
		tags: ["Teaching", "Motivation", "Donation"],
		gallery: [kemess1, kemess2, kemess3, kemess4, kemess5]
	},
	{
		title: "Volunteer",
		organization: "Sasnaka Sansada Foundation",
		period: "2021 - 2023",
		bullets: [
			"Assisted in school workshops and various community outreach initiatives.",
			"Contributed to developing website containing educational content and resources.",
		],
		icon: Users,
		image: sasnaka3,
		tags: ["Teaching", "Mentoring", "Community"],
		gallery: [sasnaka1, sasnaka2, sasnaka3, sasnaka4]
	},
	{
		title: "Member",
		organization: "Gavel Club of University of Moratuwa",
		period: "2022 - 2023",
		bullets: [
			"Participated in speech contests and workshops to enhance public speaking abilities.",
			"Contributed to the organization of club events and activities.",
		],
		icon: Users,
		image: gavel2,
		tags: [
			"Public Speaking",
			"Communication",
		],
		gallery: [gavel1, gavel2, gavel3, gavel4, gavel5]
	},
];

const Leadership = () => {
	// global list of leadership images (used as fallback when item-level galleries aren't provided)
	const leadershipGallery = leadership.filter((i) => i.image).map((i) => i.image);
	return (
		<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background" id="leadership">
			<div className="container mx-auto max-w-7xl">
				<SectionHeading title="Leadership & Volunteering" />

				<div className="mx-auto max-w-5xl flex flex-col gap-4 sm:gap-5">
					{leadership.map((item, index) => {
						const IconComponent = item.icon;

						// If the item provides its own gallery array, use it directly.
						// Otherwise, fall back to the global leadershipGallery and rotate
						// so the card's image appears first.
						const itemGallery = item.gallery?.length ? item.gallery : null;

						let orderedGallery: string[] = [];
						if (itemGallery) {
							orderedGallery = itemGallery;
						} else if (item.image) {
							const idx = leadershipGallery.indexOf(item.image);
							orderedGallery = idx >= 0
								? [leadershipGallery[idx], ...leadershipGallery.slice(idx + 1), ...leadershipGallery.slice(0, idx)]
								: leadershipGallery;
						} else {
							orderedGallery = leadershipGallery;
						}
						return (
							<Card
								key={item.title + item.organization}
								className="group bg-gradient-card border-border hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 animate-fade-in overflow-hidden"
								style={{ animationDelay: `${index * 0.05}s` }}
							>
								<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5">
									{item.image && orderedGallery.length > 0 ? (
										<GalleryDialog
											title={item.title}
											images={orderedGallery}
											trigger={
												<button
													type="button"
													aria-label={`Open ${item.title} gallery`}
													className="group/thumb relative w-full sm:w-56 md:w-64 shrink-0 self-start aspect-video overflow-hidden rounded-lg border border-border bg-muted cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
												>
													<img
														src={item.image}
														alt={item.title}
														loading="lazy"
														decoding="async"
														className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
													/>
													<span className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100 group-focus-visible/thumb:opacity-100">
														<span className="flex items-center gap-2 text-sm font-medium text-white">
															<ImageIcon className="h-4 w-4" />
															View gallery
														</span>
													</span>
												</button>
											}
										/>
									) : item.image ? (
										<div className="w-full sm:w-56 md:w-64 shrink-0 self-start aspect-video overflow-hidden rounded-lg border border-border bg-muted">
											<img
												src={item.image}
												alt={item.title}
												loading="lazy"
												decoding="async"
												className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</div>
									) : (
										<div className="p-3 rounded-lg bg-primary/10 w-16 h-16 shrink-0 self-start flex items-center justify-center">
											<IconComponent className="h-8 w-8 text-primary" />
										</div>
									)}
									<div className="flex-1 min-w-0 flex flex-col">
										<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
											<h3 className="text-lg sm:text-xl font-semibold leading-snug text-foreground">
												{item.title}
											</h3>
											<Badge variant="period" className="self-start shrink-0">
												{item.period}
											</Badge>
										</div>
										<p className="mt-1 font-semibold text-foreground">
											{item.organization}
										</p>
										<div className="mt-3 space-y-2">
											{item.bullets.map((bullet) => (
												<div key={bullet} className="flex gap-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
													<span className="text-primary">•</span>
													<span>{bullet}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Leadership;
