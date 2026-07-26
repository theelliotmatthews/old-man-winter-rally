export const site = {
	name: 'Old Man Winter Rally',
	shortName: 'OMW',
	tagline: 'Colorado winter endurance festival for riders and runners',
	date: 'February 7, 2027',
	dateShort: 'Feb 7, 2027',
	year: 2027,
	venue: 'Bohn Park',
	city: 'Lyons, CO',
	address: '199 2nd Ave, Lyons, CO 80540',
	email: 'info@adventurefit.com',
	sponsorEmail: 'josh@adventurefit.com',
	timingEmail: 'mark@racerite.com',
	instagram: 'https://www.instagram.com/oldmanwinterrally/',
	youtube: 'https://www.youtube.com/adventurefit',
	buyUrl:
		'https://events.com/r/en_US/registration/2026-old-man-winter-bike-rally--run-lyons-february-1007383',
	edition: '13th annual'
};

export const nav = [
	{ href: '/courses', label: 'Courses' },
	{ href: '/schedule', label: 'Schedule' },
	{ href: '/party', label: 'Party' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/register', label: 'Get updates' }
];

export const footerExplore = [
	{ href: '/courses', label: 'Courses' },
	{ href: '/schedule', label: 'Schedule' },
	{ href: '/getting-there', label: 'Getting there' },
	{ href: '/packet-pickup', label: 'Packet pickup' },
	{ href: '/party', label: 'After party' },
	{ href: '/weather', label: 'Weather promise' },
	{ href: '/prizes', label: 'Prizes' },
	{ href: '/rules', label: 'Rules' },
	{ href: '/spectators', label: 'Spectators' },
	{ href: '/training', label: 'Training' },
	{ href: '/sponsors', label: 'Sponsors' },
	{ href: '/volunteer', label: 'Volunteer' },
	{ href: '/results', label: 'Results & photos' },
	{ href: '/cancel-plans', label: 'Cancellation plans' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/privacy', label: 'Privacy' }
];

export type Course = {
	slug: string;
	name: string;
	kind: 'bike' | 'run' | 'combo' | 'kids';
	price: number;
	start: string;
	tagline: string;
	description: string;
	highlights: string[];
	aidStations?: string[];
	notes?: string[];
	popular?: boolean;
	image: string;
	ctaLabel: string;
};

export const courses: Course[] = [
	{
		slug: '23-mile-bike',
		name: '23 Mile Bike',
		kind: 'bike',
		price: 129,
		start: '12:30 pm',
		tagline: 'Dip your toe into winter mixed terrain',
		description:
			'A welcoming mixed-terrain ride with rolling gravel, big Front Range views, and a private-property gravel start you can only ride on event day.',
		highlights: [
			'Rolling gravel and paved roads',
			'Private Cemex gravel section (event day only)',
			'Aid station at mile 14.5'
		],
		aidStations: ['Mile 14.5 (6152 Hygiene Rd)'],
		notes: [
			'Pre-riding through Cemex (mile 2–3.6) is strictly prohibited. It is private property.'
		],
		image: '/images/hero-rider.webp',
		ctaLabel: 'Register for 23 Mile'
	},
	{
		slug: '40-mile-bike',
		name: '40 Mile Bike',
		kind: 'bike',
		price: 149,
		start: '12:00 pm',
		tagline: 'Our most popular winter gravel tour',
		description:
			'Rolling gravel, Boulder Reservoir views, and lifelong memories with 1,000+ two-wheeled buddies. Also the bike leg of the Run/Bike Combo.',
		highlights: [
			'Loop around Boulder Reservoir',
			'Views of Colorado 14ers',
			'Two aid stations',
			'Bike portion of the Combo'
		],
		aidStations: ['Mile 18.2 (Boulder Reservoir)', 'Mile 31.0 (3152 Hygiene Rd)'],
		notes: [
			'Pre-riding through Cemex (mile 2–3.6) is strictly prohibited. It is private property.'
		],
		popular: true,
		image: '/images/EClark_220206_1848.webp',
		ctaLabel: 'Register for 40 Mile'
	},
	{
		slug: '75-mile-bike',
		name: '75 Mile Bike',
		kind: 'bike',
		price: 169,
		start: '9:00 am',
		tagline: 'Snow, gravel, hills, and thrills',
		description:
			'The course OMW is known for. 5,000+ ft of climbing, canyon roads, the Rowena trail, and adventure no matter the weather. Not for inexperienced riders.',
		highlights: [
			'5,000+ ft of climbing',
			'Rowena trail and canyon roads',
			'Three aid stations',
			'Hard cutoffs to keep you safe'
		],
		aidStations: [
			'Mile 18.5 (Boulder Reservoir)',
			'Mile 37.6 (Sunshine Saddle)',
			'Mile 67.9 (6152 Hygiene Rd)'
		],
		notes: [
			'11:00 am cutoff at 49th and Oxford (mile 23). Late riders continue on the 40 mi course.',
			'12:15 pm cutoff at Rowena entrance / Lefthand. Late riders descend Lefthand and rejoin course.',
			'Pre-riding through Cemex (mile 2–3.6) is strictly prohibited.'
		],
		image: '/images/Screen_Shot_2024-02-06_at_5.43.39_PM.webp',
		ctaLabel: 'Register for 75 Mile'
	},
	{
		slug: '5k-run',
		name: '5K Run',
		kind: 'run',
		price: 75,
		start: '10:30 am',
		tagline: 'All the fun, half the distance',
		description:
			'Meander through old town Lyons and Bohn Park trails, then finish with a fast paved loop. About 50% trail / 50% paved. Dogs welcome.',
		highlights: ['50/50 trail and pavement', 'Dogs welcome', 'Perfect first OMW run'],
		image: '/images/hero-crowd.webp',
		ctaLabel: 'Register for 5K'
	},
	{
		slug: '10k-run',
		name: '10K Run',
		kind: 'run',
		price: 85,
		start: '10:00 am',
		tagline: '10K of winter wonderland',
		description:
			'Start in Bohn Park, run through Lyons, climb toward the foothills, then hit Picture Rock singletrack. Dogs welcome. Also the run leg of the Combo.',
		highlights: ['Town + trail mix', 'Picture Rock singletrack', 'Dogs welcome'],
		image: '/images/Screen_Shot_2024-02-06_at_5.44.19_PM.webp',
		ctaLabel: 'Register for 10K'
	},
	{
		slug: 'half-marathon',
		name: 'Half Marathon',
		kind: 'run',
		price: 149,
		start: '9:30 am',
		tagline: 'Scenic rivers, gravel paths, doubletrack',
		description:
			'A relatively flat half (544 ft gain) along scenic rivers, gravel paths, and a bit of doubletrack. Through Downtown Lyons, Planet Bluegrass, and Apple Valley Rd. Dogs welcome.',
		highlights: ['Only 544 ft elevation gain', 'Rivers and Apple Valley views', 'Dogs welcome'],
		image: '/images/Screen_Shot_2024-02-06_at_5.44.38_PM.webp',
		ctaLabel: 'Register for Half'
	},
	{
		slug: 'run-bike-combo',
		name: 'Run / Bike Combo',
		kind: 'combo',
		price: 179,
		start: '10:00 am run · 12:00 pm bike',
		tagline: '10K run + 40 mile ride, solo or relay',
		description:
			'Run the 10K at 10:00 am, then take on the 40 Mile Ride at noon. Plenty of time to change at your car. Only on-course times count. Relay option available.',
		highlights: [
			'Solo or relay ($99/person relay)',
			'No transition stress',
			'One Combo bib for both legs'
		],
		image: '/images/Screen_Shot_2024-02-06_at_8.10.52_PM.webp',
		ctaLabel: 'Register for Combo'
	},
	{
		slug: 'kids-bike-race',
		name: 'Kids Bike Race',
		kind: 'kids',
		price: 0,
		start: '3:00 pm',
		tagline: 'Free race for ages 2–5, presented by Cemex',
		description:
			'Flat course with turns and straightaways on grass (or snow). Sign up free at the Cemex tent during the after party. Helmets required. Trophies for top 3; prizes for all.',
		highlights: [
			'Ages 2–3 kick bike only',
			'Ages 4–5 pedal bike only',
			'Free on-site signup',
			'Trophies and Cemex prizes'
		],
		image: '/images/Snow_flake.webp',
		ctaLabel: 'See kids race details'
	}
];

export const dayFlow = [
	{ time: '9:00 am', label: '75 Mile start', detail: 'Canyon climbs and Rowena adventure' },
	{ time: '9:30 am', label: 'Half Marathon', detail: 'Rivers, gravel, and Lyons streets' },
	{ time: '10:00 am', label: '10K + Combo run', detail: 'Picture Rock trail energy' },
	{ time: '10:30 am', label: '5K start', detail: 'Town trails and a fast finish' },
	{ time: '12:00 pm', label: '40 Mile + Combo bike', detail: 'Reservoir gravel with a crowd' },
	{ time: '12:30 pm', label: '23 Mile start', detail: 'The friendly mixed-terrain intro' },
	{ time: '3:00 pm', label: 'Kids race + awards', detail: 'Then bonfires, bands, and s’mores' }
];

export const benefits = [
	{
		title: 'Mixed terrain that feels like Colorado',
		description:
			'Gravel, pavement, canyons, and (on the 75) snowy singletrack. Courses for first-timers and mountain goats.',
		image: '/images/hero-rider.webp'
	},
	{
		title: 'Aid stations, hot meal, cold beer',
		description:
			'Well-stocked aid stations on course. Finish with a hot meal, a cold beer, and winter swag waiting for you.',
		image: '/images/Screen_Shot_2024-02-06_at_5.38.53_PM.webp'
	},
	{
		title: 'A legendary after party',
		description:
			'Live music, bonfires, sauna vibes, s’mores, expo, and a huge community hang that runs until 5 pm.',
		image: '/images/hero-crowd.webp'
	},
	{
		title: 'Snowflake prizes on course',
		description:
			'Pick up a snowflake along the course for a guaranteed prize. Only at Old Man Winter Rally.',
		image: '/images/Snow_flake.webp'
	}
];

export const faqs = [
	{
		category: 'Registration',
		question: 'Can I defer my registration to next year?',
		answer:
			'Yes. If you cannot participate, you can defer to the following year for 50% of the new entry fee when registration opens. Deferral deadlines are announced each season (historically late January).'
	},
	{
		category: 'Registration',
		question: 'Can I change my category or add packet shipping?',
		answer:
			'Yes. Use Manage Order in your Events.com confirmation email. Category changes charge any price difference. Packet shipping (when offered) can be added for a fee before the posted cutoff.'
	},
	{
		category: 'Combo',
		question: 'I’m in the Run/Bike Combo. Where do I put my bike?',
		answer:
			'Lock your bike at the venue or leave it at your car. There is time between the run and ride to change. You are not timed in transition. Use your one Combo bib for both legs.'
	},
	{
		category: 'Day-of',
		question: 'Where does it start and finish?',
		answer: 'All events start and finish at Bohn Park, 199 2nd Ave, Lyons, CO 80540.'
	},
	{
		category: 'Day-of',
		question: 'Is this event timed?',
		answer:
			'Yes. All courses are timed, but it is a Rules of the Road event. All traffic laws must be obeyed. Bibs can be removed for unsafe riding or running.'
	},
	{
		category: 'Weather',
		question: 'What happens if it is snowing on event day?',
		answer:
			'This is a rain, snow, or shine event. Boulder County law enforcement can postpone if roads are unsafe. You will be notified ASAP. If a freak storm hits during the event (like 2020), courses may shorten so the day can continue.'
	},
	{
		category: 'Gear',
		question: 'What kind of bike should I ride?',
		answer:
			'You will see everything from road bikes to fat bikes. Because of gravel, we recommend tires at least 25mm wide. Knobby tread is a plus when it is wet or snowy.'
	},
	{
		category: 'Risk',
		question: 'What if the event is cancelled?',
		answer:
			'We carry cancellation insurance for weather cancellations ahead of race day. FanShield is available at registration for personal coverage. COVID-related gathering limits use a sliding-scale refund. Full details are on the Cancellation plans page.'
	}
];

export const schedule = [
	{
		day: 'Mon–Wed before race week',
		items: [
			{
				time: 'Shipped',
				title: 'Packets arrive',
				detail: 'Bib, meal and beer ticket, OMW swag. Merch bought online is picked up onsite.'
			}
		]
	},
	{
		day: 'Friday before race day',
		items: [
			{
				time: '4–6 pm',
				title: 'Packet pickup',
				detail: 'Rivian Denver, 2763 Blake St'
			}
		]
	},
	{
		day: 'Saturday before race day',
		items: [
			{
				time: '1–5 pm',
				title: 'Packet pickup',
				detail: "Mike's Bikes Boulder"
			}
		]
	},
	{
		day: 'Race day · Sunday Feb 7, 2027',
		items: [
			{ time: '9:00 am', title: '75 Mile Bike start', detail: 'Bohn Park' },
			{ time: '9:30 am', title: 'Half Marathon start', detail: 'Bohn Park' },
			{ time: '10:00 am', title: '10K Run start', detail: 'Also Combo run leg' },
			{ time: '10:30 am', title: '5K Run start', detail: 'Dogs welcome' },
			{ time: '11:00 am', title: 'Live music set 1', detail: 'After party begins warming up' },
			{ time: '12:00 pm', title: '40 Mile Bike start', detail: 'Also Combo bike leg' },
			{ time: '12:30 pm', title: '23 Mile Bike start', detail: 'Bohn Park' },
			{ time: '1:00 pm', title: 'Awards', detail: '75 mile, 10K, 5K, Half Marathon' },
			{ time: '2:00 pm', title: 'Live music set 2', detail: 'Bonfires, food, expo' },
			{ time: '3:30 pm', title: 'Free Kids Bike Race', detail: 'Ages 2–5 at the after party' },
			{ time: '4:00 pm', title: 'Awards', detail: 'Kids, 40 mile, 23 mile, Combo' },
			{ time: '5:00 pm', title: 'Party ends', detail: 'See you next year' }
		]
	}
];

export const prizes = [
	{ event: '75 mi Ride', detail: '$3,000 purse split among top 5 M/F/NB (min. 3 per gender category)' },
	{ event: '10K Run', detail: '$1,000 purse split across top 5 M/F/NB' },
	{ event: '40 mi Ride', detail: 'Product prizes for top 3 M/F/NB' },
	{ event: '23 mi Ride', detail: 'Product prizes for top 3 M/F/NB' },
	{ event: '5K Run', detail: 'Product prizes for top 3 M/F/NB' },
	{ event: 'Half Marathon', detail: 'Product prizes for top 3 M/F/NB' },
	{ event: 'Combo', detail: 'Product prizes for top 3 M/F/NB' },
	{ event: 'Relay', detail: 'Product prizes for top team M/F/Combo' }
];

export const rulesHighlights = [
	'Rules of the Road: obey all traffic laws. Unsafe riding or running can get your bib pulled.',
	'Helmets required for all bike courses and the kids race.',
	'Courses are timed, but this is not a closed-course crit. Share the road.',
	'Pre-riding the Cemex private property section (mile 2–3.6 on bike courses) is prohibited. Trespassers will be arrested.',
	'Dogs welcome on the 5K, 10K, and Half Marathon.',
	'One snowflake prize per person.'
];

export const gettingThere = {
	venue: 'Bohn Park, Lyons, CO',
	address: '199 2nd Ave, Lyons, CO 80540',
	lat: 40.2173,
	lng: -105.271,
	tips: [
		'Arrive early on race morning. Lyons fills up and parking near Bohn Park is limited.',
		'Carpool when you can. Boulder County roads get busy with athletes and spectators.',
		'Packet pickup in Denver or Boulder the days before race day is the easiest way to skip morning stress.',
		'Spectators: Picture Rock trailhead on Red Gulch is a strong run cheer spot with a bathroom.'
	]
};

export const packetPickup = [
	{
		when: 'Shipped packets',
		where: 'Your mailbox',
		detail: 'Typically arrive Mon–Wed of race week. Includes bib, meal/beer ticket, and swag.'
	},
	{
		when: 'Friday before race day · 4–6 pm',
		where: 'Rivian Denver, 2763 Blake St',
		detail: 'Ideal if you are coming from Denver.'
	},
	{
		when: 'Saturday before race day · 1–5 pm',
		where: "Mike's Bikes Boulder",
		detail: 'Ideal if you are staying in Boulder County.'
	}
];

export const spectatorSpots = [
	{
		title: 'Bohn Park finish festival',
		detail: 'Bonfires, food vendors, live music. Friends and family are welcome all day.'
	},
	{
		title: 'Run course · Picture Rock trailhead',
		detail: 'Park on Red Gulch to see runners coming and going. Bathroom access.'
	},
	{
		title: '50 km bike · Crane Hollow Rd',
		detail: 'Between Hygiene Rd and St Vrain for rolling gravel views.'
	},
	{
		title: '100 km bike · Rowena / Old Stage',
		detail:
			'Ride to CO Rd 83 to watch Rowena (no parking). Or cheer the final climb near Red Hill Rd and Old Stage Rd.'
	}
];

export const cancelPlans = [
	{
		title: 'Weather cancellation before race day',
		detail:
			'We carry event cancellation insurance. If the event is cancelled ahead of time for weather, registrants receive refunds.'
	},
	{
		title: 'Storm during the event',
		detail:
			'We modify courses with Boulder County so the show can go on, as we did when a freak storm hit in 2020.'
	},
	{
		title: 'FanShield (optional)',
		detail:
			'Buy FanShield at registration for personal coverage if you cannot attend for covered reasons.'
	},
	{
		title: 'Gathering restrictions',
		detail:
			'If group limits force a cancellation or reduction: 45+ days 75% refund, 30–44 days 50%, 15–29 days 35%, 14 days or less 25% (minus transaction fees). Entries honored in registration order if capacity is cut.'
	}
];

export const contactChannels = [
	{ label: 'Registration questions', value: 'Events.com support via your confirmation email' },
	{ label: 'Timing / results', value: 'mark@racerite.com' },
	{ label: 'General questions', value: 'info@adventurefit.com' },
	{ label: 'Sponsorship / vendor booths', value: 'josh@adventurefit.com' },
	{ label: 'Update your registration', value: 'Manage Order link in your Events.com email' }
];

export const gallery = [
	'/images/hero-rider.webp',
	'/images/hero-crowd.webp',
	'/images/EClark_220206_3259.webp',
	'/images/Screen_Shot_2024-02-06_at_5.43.39_PM.webp',
	'/images/Screen_Shot_2024-02-06_at_5.44.19_PM.webp',
	'/images/Screen_Shot_2024-02-06_at_5.44.38_PM.webp',
	'/images/Screen_Shot_2024-02-06_at_8.10.52_PM.webp',
	'/images/16_9_MariusNilsen_RaphaExplore_DSC08568.webp'
];

export const resultsLinks = [
	{ year: '2026', label: '2026 Results', href: 'https://www.oldmanwinterrally.com/results' },
	{ year: '2025', label: '2025 Results', href: 'https://www.oldmanwinterrally.com/results' },
	{ year: '2024', label: '2024 Results', href: 'https://www.oldmanwinterrally.com/results' },
	{ year: '2023', label: '2023 Results', href: 'https://www.oldmanwinterrally.com/results' }
];

export const trainingBlurb =
	'Free community rides and runs all winter: gravel clinics, night runs, Zwift sessions, and shop hangouts across Boulder County. Follow Adventure Fit channels for the live calendar as 2027 training drops.';

export const dialingCodes = [
	{ code: '+1', label: 'US/CA +1' },
	{ code: '+44', label: 'UK +44' },
	{ code: '+61', label: 'AU +61' },
	{ code: '+64', label: 'NZ +64' },
	{ code: '+49', label: 'DE +49' },
	{ code: '+33', label: 'FR +33' },
	{ code: '+52', label: 'MX +52' },
	{ code: '+31', label: 'NL +31' },
	{ code: '+46', label: 'SE +46' },
	{ code: '+41', label: 'CH +41' }
];

export function getCourse(slug: string) {
	return courses.find((c) => c.slug === slug);
}
