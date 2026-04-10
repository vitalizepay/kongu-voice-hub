import imgCoimbatore from "@/assets/hero-coimbatore.jpg";
import imgTiruppur from "@/assets/news-tiruppur-textile.jpg";
import imgErode from "@/assets/news-erode-turmeric.jpg";
import imgSalem from "@/assets/news-salem-it.jpg";
import imgNilgiris from "@/assets/news-nilgiris-tea.jpg";
import imgNamakkal from "@/assets/news-namakkal-poultry.jpg";
import imgKarur from "@/assets/news-karur-textile.jpg";
import imgConference from "@/assets/news-coimbatore-conference.jpg";
import imgElectionRally from "@/assets/news-tn-election-rally.jpg";
import imgAssembly from "@/assets/news-tn-assembly.jpg";
import imgVoting from "@/assets/news-tn-voting.jpg";
import imgKonguDev from "@/assets/news-kongu-development.jpg";
import imgWomenPolitics from "@/assets/news-women-politics.jpg";
import imgGlobalMarkets from "@/assets/news-global-markets.jpg";
import imgArtemis from "@/assets/news-artemis-launch.jpg";
import imgAgriHarvest from "@/assets/news-agriculture-harvest.jpg";
import imgStartupTech from "@/assets/news-startup-tech.jpg";
import imgEducation from "@/assets/news-education-students.jpg";
import imgInfraRoad from "@/assets/news-infrastructure-road.jpg";
import imgHealthcare from "@/assets/news-healthcare-camp.jpg";

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  district: string;
  image: string;
  author: string;
  date: string;
  views: number;
  trending: boolean;
  tags: string[];
}

export const categories = [
  "Politics", "Business", "Agriculture", "Education", "Jobs", "Local Issues", "Sports", "Technology"
];

export const districts = [
  "Coimbatore", "Erode", "Tiruppur", "Salem", "Namakkal", "Karur", "Nilgiris"
];

export const breakingNews = [
  "Tamil Nadu Assembly Election 2026: Voting on April 23 across all 234 constituencies",
  "Election Commission deploys 1.5 lakh polling staff across Tamil Nadu's 68,000+ booths",
  "Kongu belt emerges as key battleground — 29 seats drawing intense multi-party campaigns",
  "DMK releases full manifesto promising ₹8,000 household coupons and free laptops",
  "Tiruppur garment exports cross ₹40,000 crore — industry sets new record",
  "Coimbatore Smart City Phase 2 launches with ₹500 crore infrastructure plan",
  "Erode turmeric prices surge past ₹18,000/quintal on global curcumin demand",
  "Salem IT Corridor approved — 5,000 jobs expected in three years",
  "Nilgiris tea estates transition to organic farming with state subsidies",
  "Karur home textile cluster receives ₹200 crore central modernisation fund",
];

export const sampleArticles: Article[] = [
  {
    id: "1",
    title: "Tamil Nadu Gears Up for April 23 Assembly Polls — All 234 Seats in Play",
    summary: "Voting for the Tamil Nadu Legislative Assembly is set for April 23, 2026, with results expected on May 4. The Election Commission has completed preparations across 68,000 polling stations statewide.",
    content: "Tamil Nadu enters the final phase of election preparedness as polling day — April 23, 2026 — draws near. The Election Commission has finalised deployment of over 1.5 lakh polling personnel, installed EVMs with VVPAT units at more than 68,000 stations, and put in place extensive security arrangements.\n\nThe primary contest is between the ruling DMK-led Secular Progressive Alliance (SPA) and the AIADMK-led opposition front, with Tamilaga Vetri Kazhagam (TVK) and Naam Tamilar Katchi (NTK) also fielding candidates across all 234 seats.\n\nAmong the key issues driving voter sentiment are state autonomy, concerns over the National Education Policy's language provisions, infrastructure development, employment, and welfare for farming communities. The Kongu region — covering 29 assembly segments — has emerged as one of the most fiercely contested battlegrounds, with all major parties committing significant campaign resources.\n\nVoter enrolment has reached 6.2 crore, a notable rise from the previous election. The Commission has also ensured dedicated facilities for senior citizens, differently-abled voters, and first-time voters at all booths.",
    category: "Politics",
    district: "Coimbatore",
    image: imgElectionRally,
    author: "The Kongu Times Editorial",
    date: "2026-04-10T07:00:00",
    views: 34500,
    trending: true,
    tags: ["election 2026", "tamil nadu", "assembly polls", "kongu region"]
  },
  {
    id: "2",
    title: "Kongu Belt: 29 Seats, Three Major Fronts — The Most Decisive Battleground",
    summary: "The Kongu region spanning Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur and Nilgiris holds 29 seats that no major party can afford to lose in the 2026 elections.",
    content: "The Kongu region, spanning 29 assembly constituencies across seven districts — Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris — has historically played a decisive role in Tamil Nadu's electoral outcomes, and 2026 is no different.\n\nThe DMK is pursuing an aggressive campaign to improve on its 2021 performance in the region, with senior ministers holding multiple rallies. The AIADMK, which traditionally holds the region, is defending key seats while contending with a resurgent DMK and a competitive TVK.\n\nTamilaga Vetri Kazhagam (TVK), contesting its first assembly election, has projected ambitions of making inroads across the Kongu constituencies, particularly among younger voters.\n\nKey watch seats include Coimbatore South, Erode East, Namakkal, Tiruchengodu, and Pollachi. Political analysts note that the party that sweeps the Kongu belt historically goes on to form the government.",
    category: "Politics",
    district: "Coimbatore",
    image: imgWomenPolitics,
    author: "The Kongu Times Editorial",
    date: "2026-04-09T06:00:00",
    views: 28200,
    trending: true,
    tags: ["kongu region", "election battleground", "29 seats", "coimbatore"]
  },
  {
    id: "3",
    title: "DMK Manifesto 2026: Key Promises for Welfare, Infrastructure and Agriculture",
    summary: "The DMK has released its election manifesto pledging ₹8,000 household coupons, free laptops for college students, enhanced women's monthly entitlement, and major agricultural support.",
    content: "The Secular Progressive Alliance, led by the DMK, released its election manifesto laying out a comprehensive set of commitments for voters across Tamil Nadu.\n\nAmong the headline promises: ₹8,000 coupons for homemakers not covered under income tax to purchase household appliances; extension of the Chief Minister's Breakfast Scheme in government schools through Class 8; free laptops for all government college students; and raising the monthly entitlement for women to ₹2,000.\n\nThe manifesto also commits to increasing old-age pension from ₹1,200 to ₹2,000 per month, and providing ₹2,500 monthly assistance for people with disabilities. Under infrastructure, the party proposes procuring 10,000 new buses, expanding Coimbatore International Airport, and establishing a cargo terminal at Thoothukudi Airport.\n\nFor the farming sector, the manifesto includes distributing free pump sets to 20 lakh farmers, desilting 15,500 km of irrigation canals, and raising milk procurement prices.",
    category: "Politics",
    district: "Coimbatore",
    image: imgAssembly,
    author: "The Kongu Times Editorial",
    date: "2026-04-08T10:00:00",
    views: 22100,
    trending: true,
    tags: ["DMK manifesto", "election 2026", "welfare", "agriculture"]
  },
  {
    id: "4",
    title: "AIADMK Campaign Focuses on Governance Record and People's Rights",
    summary: "AIADMK General Secretary Edappadi K. Palaniswami leads the opposition campaign under 'Makkalai Kaappom, Thamizhagathai Meetpom', targeting the ruling party's record.",
    content: "The AIADMK-led alliance has intensified its statewide campaign ahead of the April 23 polls, with General Secretary Edappadi K. Palaniswami fronting rallies across Tamil Nadu.\n\nThe campaign focuses on what the opposition describes as failures in law and order, rising prices, and governance shortfalls. Palaniswami is himself contesting from the Edappadi constituency in Salem district.\n\nIn the Kongu region, the AIADMK is leaning on its traditional stronghold status and has fielded experienced candidates across Coimbatore, Salem, and Erode constituencies. The party's manifesto promises include crop insurance, MSP guarantees, and industrial zone development.",
    category: "Politics",
    district: "Salem",
    image: imgKonguDev,
    author: "The Kongu Times Staff",
    date: "2026-04-08T16:30:00",
    views: 18700,
    trending: true,
    tags: ["AIADMK", "election campaign", "Palaniswami", "opposition"]
  },
  {
    id: "5",
    title: "Tiruppur Garment Exports Surpass ₹40,000 Crore — A New Milestone",
    summary: "Tiruppur's knitwear industry has crossed the ₹40,000 crore export mark for the first time, driven by sustainability practices and new global partnerships.",
    content: "Tiruppur's textile and garment sector has reached a landmark, with exports crossing the ₹40,000 crore mark for the first fiscal year on record. The achievement cements the city's position as the country's premier knitwear hub.\n\nIndustry leaders credit the growth to adoption of sustainable manufacturing practices including zero liquid discharge compliance, organic cotton sourcing, and improved supply chain transparency.\n\nThe Tiruppur Exporters' Association has announced a ₹2,000 crore investment plan to modernise production infrastructure and establish a dedicated fashion design institute. The export milestone positions Tiruppur ahead of Ludhiana and Kolkata in India's garment export rankings.",
    category: "Business",
    district: "Tiruppur",
    image: imgTiruppur,
    author: "The Kongu Times Staff",
    date: "2026-04-09T14:15:00",
    views: 15800,
    trending: true,
    tags: ["textile", "exports", "tiruppur", "knitwear"]
  },
  {
    id: "6",
    title: "Coimbatore Smart City Phase 2 Rolls Out with ₹500 Crore Infrastructure Push",
    summary: "The second phase targets AI-powered traffic management, IoT-enabled water networks, and expanded digital governance across the city.",
    content: "Coimbatore's Smart City initiative has entered its second phase, backed by a ₹500 crore outlay aimed at upgrading the city's core infrastructure through technology-led solutions.\n\nThe phase includes an AI-based traffic management system covering 120 major intersections, an IoT-enabled water supply network, and a digital governance portal. The project also earmarks 15 km of dedicated cycling lanes, 50 acres of new public green space, and 10,000 smart LED streetlights.\n\nCity officials said the first phase delivered 85% of planned improvements including stormwater drains, pedestrian zones, and public WiFi hotspots across 40 locations.",
    category: "Local Issues",
    district: "Coimbatore",
    image: imgCoimbatore,
    author: "The Kongu Times Editorial",
    date: "2026-04-09T08:30:00",
    views: 12500,
    trending: true,
    tags: ["smart city", "infrastructure", "coimbatore", "urban development"]
  },
  {
    id: "7",
    title: "Erode Turmeric Market Sees Price Surge on Global Curcumin Demand",
    summary: "Premium turmeric varieties at Erode's markets are fetching over ₹18,000 per quintal, driven by sustained international demand from pharmaceutical sectors.",
    content: "Erode's turmeric market, one of Asia's largest, is experiencing a significant price upswing with premium grades crossing ₹18,000 per quintal. Traders and farmers attribute the rise to growing global demand for curcumin in pharmaceutical and nutraceutical products.\n\nFarmer groups in the region have expressed cautious optimism, noting that while better prices are welcome, volatility remains a concern. The district's farmers have also diversified into value-added products like turmeric powder and oleoresin extraction.\n\nThe surge comes at an important moment ahead of the assembly elections, with farming community welfare featuring prominently in all party manifestos.",
    category: "Agriculture",
    district: "Erode",
    image: imgErode,
    author: "The Kongu Times Editorial",
    date: "2026-04-08T10:00:00",
    views: 9200,
    trending: true,
    tags: ["turmeric", "agriculture", "erode", "curcumin"]
  },
  {
    id: "8",
    title: "Salem IT Corridor Approved — 5,000 Jobs Expected in Three Years",
    summary: "A 200-acre technology corridor in Salem has received state government approval, positioning the district as Tamil Nadu's next major IT destination.",
    content: "Salem is on course to become a significant technology hub in Tamil Nadu following state government approval of a 200-acre IT corridor project. The corridor will be developed in phases, with the first phase focusing on roads, power, and data connectivity.\n\nLocal educational institutions are expected to benefit from proximity to the corridor. The government has partnered with NASSCOM to develop a skill training pipeline targeting 10,000 graduates over three years.\n\nIndustry observers note Salem's strategic location — equidistant from Chennai, Coimbatore, and Bengaluru — makes it an attractive proposition for IT services companies looking to establish satellite offices.",
    category: "Jobs",
    district: "Salem",
    image: imgSalem,
    author: "The Kongu Times Staff",
    date: "2026-04-07T16:45:00",
    views: 15300,
    trending: true,
    tags: ["IT corridor", "jobs", "salem", "technology"]
  },
  {
    id: "9",
    title: "Nilgiris Tea Estates Embrace Organic Farming — 40 Certified, 100 More in Pipeline",
    summary: "Over 40 Nilgiris tea estates now hold organic certification, with growers reporting 20–30% price premiums on certified produce.",
    content: "Tea plantations across the Nilgiris are undergoing a significant shift toward organic cultivation practices, supported by state subsidies and driven by growing consumer preference for sustainably produced beverages.\n\nMore than 40 estates have received full organic certification, and growers report price premiums of 20–30% on certified produce in export markets. The transition involves eliminating synthetic fertilizers and pesticides over a three-year conversion period.\n\nThe Nilgiris Planters' Association has partnered with international certification bodies to streamline the process and reduce costs for smaller estates.",
    category: "Agriculture",
    district: "Nilgiris",
    image: imgNilgiris,
    author: "The Kongu Times Editorial",
    date: "2026-04-07T09:30:00",
    views: 5600,
    trending: false,
    tags: ["tea", "organic farming", "nilgiris", "agri-tourism"]
  },
  {
    id: "10",
    title: "Namakkal Poultry Farms Deploy AI Monitoring — Productivity Gains Reported",
    summary: "AI-driven farm management tools are being adopted across Namakkal's poultry sector, India's largest egg-producing district.",
    content: "Namakkal district, responsible for approximately 80% of Tamil Nadu's egg production, is embracing artificial intelligence to improve farm efficiency and animal welfare standards.\n\nSmart monitoring platforms are being installed across farms, providing real-time data on bird health indicators, feed conversion rates, and temperature regulation. Early adopters report 12–15% improvement in feed efficiency and significant reduction in mortality rates.\n\nThe district produces over 4 crore eggs daily and the AI integration is expected to further strengthen Namakkal's position in the national poultry market.",
    category: "Technology",
    district: "Namakkal",
    image: imgNamakkal,
    author: "The Kongu Times Staff",
    date: "2026-04-06T11:20:00",
    views: 6300,
    trending: false,
    tags: ["poultry", "AI", "namakkal", "farm technology"]
  },
  {
    id: "11",
    title: "Karur Home Textile Cluster Receives ₹200 Crore Central Modernisation Fund",
    summary: "The central government has approved a ₹200 crore package to modernise Karur's home textile manufacturing cluster.",
    content: "Karur's home textile industry — one of the country's largest producers of bed linen, towels, and kitchen textiles — is set to receive a significant boost through a ₹200 crore modernisation package.\n\nThe funds are earmarked for upgrading weaving and finishing machinery, establishing quality testing laboratories, and setting up design innovation centres. The modernisation is expected to help Karur compete more effectively with Chinese and Turkish manufacturers in global markets.\n\nKarur currently exports home textiles to over 60 countries, with the US and EU accounting for nearly 70% of orders.",
    category: "Business",
    district: "Karur",
    image: imgKarur,
    author: "The Kongu Times Editorial",
    date: "2026-04-06T08:00:00",
    views: 4800,
    trending: false,
    tags: ["textile", "Karur", "modernisation", "home textile"]
  },
  {
    id: "12",
    title: "Record Women Candidates in 2026 TN Polls — Kongu Districts Lead",
    summary: "Political parties have fielded significantly more women candidates this cycle, with Tiruppur, Coimbatore, and Salem seeing notable increases.",
    content: "The 2026 Tamil Nadu Assembly elections mark a meaningful step forward in women's political representation, with all major parties having fielded a higher proportion of women candidates compared to previous cycles.\n\nIn the Kongu region, constituencies such as Avanashi, Tiruppur North, Dharapuram, and Namakkal have women candidates from at least two major fronts each. Women voters also form a near-equal share of the registered electorate in districts like Coimbatore and Tiruppur.\n\nThe Election Commission has mandated women-managed polling booths in at least one location per constituency.",
    category: "Politics",
    district: "Tiruppur",
    image: imgVoting,
    author: "The Kongu Times Staff",
    date: "2026-04-07T18:00:00",
    views: 11800,
    trending: true,
    tags: ["women candidates", "election 2026", "representation", "kongu"]
  },
  {
    id: "13",
    title: "Coimbatore Hosts International Sustainable Agriculture Forum",
    summary: "Researchers and farmers from 15 countries gathered to examine water conservation, precision farming, and climate-adaptive crop varieties.",
    content: "Coimbatore's agricultural university played host to a three-day international forum on sustainable agriculture, drawing over 500 delegates from 15 countries.\n\nSessions covered precision irrigation technology, drip-and-mulch combinations, soil carbon enhancement, and new variety development for crops like groundnut, maize, and millets. The forum concluded with a declaration calling for increased public investment in climate-resilient farming research.\n\nFarmers from the Kongu region participated in hands-on workshops demonstrating low-cost drip irrigation systems that can reduce water usage by 40%.",
    category: "Education",
    district: "Coimbatore",
    image: imgConference,
    author: "The Kongu Times Staff",
    date: "2026-04-05T13:00:00",
    views: 6100,
    trending: false,
    tags: ["agriculture", "sustainable farming", "coimbatore", "international forum"]
  },
  {
    id: "14",
    title: "Kongu Region Farmers Demand Better MSP for Millets Ahead of Elections",
    summary: "Farmer associations across Erode, Salem and Namakkal are demanding enhanced minimum support prices for millets, citing rising input costs and international demand.",
    content: "With the 2026 International Year of Millets momentum continuing, farmer associations across the Kongu region are pressing political parties to commit to enhanced minimum support prices for millet crops.\n\nFarmers in Erode, Salem, and Namakkal districts report that while demand for millets has increased globally, local procurement prices have not kept pace with rising input costs. The Tamil Nadu Farmers' Association has submitted a memorandum to the Election Commission demanding that all parties include millet MSP guarantees in their manifestos.\n\nIndia is the world's largest producer of millets, and Tamil Nadu accounts for a significant share of ragi, varagu, and thinai production.",
    category: "Agriculture",
    district: "Erode",
    image: imgAgriHarvest,
    author: "The Kongu Times Editorial",
    date: "2026-04-09T09:00:00",
    views: 7400,
    trending: false,
    tags: ["millets", "MSP", "farmers", "kongu region"]
  },
  {
    id: "15",
    title: "Coimbatore Startup Ecosystem Grows — 200 New Ventures Registered in Q1 2026",
    summary: "Coimbatore's startup ecosystem sees rapid growth with 200 new ventures registered in the first quarter, spanning healthtech, agritech, and SaaS.",
    content: "Coimbatore continues to establish itself as a significant startup hub in South India, with over 200 new ventures registered in the first quarter of 2026 alone. The city's ecosystem now comprises over 1,500 active startups.\n\nHealthtech, agritech, and SaaS platforms dominate the new registrations, with several ventures securing seed funding from national and international investors. TIDCO's startup incubation centre in Coimbatore has expanded to accommodate 80 new companies.\n\nIndustry leaders credit the city's strong engineering talent pool, lower operating costs compared to Bengaluru, and proximity to manufacturing clusters as key advantages.",
    category: "Business",
    district: "Coimbatore",
    image: imgStartupTech,
    author: "The Kongu Times Staff",
    date: "2026-04-08T11:00:00",
    views: 8900,
    trending: false,
    tags: ["startups", "coimbatore", "technology", "ecosystem"]
  },
  {
    id: "16",
    title: "Government Schools in Kongu Region Report 15% Jump in Board Exam Results",
    summary: "Government school students across the Kongu belt have shown marked improvement in Class 10 and 12 board exams, with several districts recording all-time highs.",
    content: "Government schools across the Kongu region have recorded a significant 15% improvement in Class 10 and Class 12 board examination results compared to the previous year.\n\nErode and Namakkal districts led the improvement, with pass rates exceeding 95% in several schools. Educators attribute the gains to the introduction of digital classrooms, after-school tutoring programmes, and improved teacher training.\n\nThe state government's free laptop and breakfast schemes have also contributed to higher attendance and engagement, particularly among first-generation learners in rural areas.",
    category: "Education",
    district: "Erode",
    image: imgEducation,
    author: "The Kongu Times Staff",
    date: "2026-04-07T14:00:00",
    views: 5200,
    trending: false,
    tags: ["education", "board exams", "government schools", "kongu"]
  },
  {
    id: "17",
    title: "New Four-Lane Highway Connecting Salem and Namakkal Nears Completion",
    summary: "The ₹1,200 crore four-lane highway project between Salem and Namakkal is 85% complete, expected to reduce travel time by 40 minutes.",
    content: "The ambitious four-lane highway connecting Salem and Namakkal is nearing completion, with project officials reporting 85% progress. The ₹1,200 crore project is being executed by the National Highways Authority of India.\n\nOnce completed, the highway is expected to reduce travel time between the two districts from 90 minutes to approximately 50 minutes. The road includes six major bridges, two interchanges, and service roads for local traffic.\n\nLocal business chambers have welcomed the project, noting it will improve connectivity for agricultural produce transport and boost commercial activity in both districts.",
    category: "Local Issues",
    district: "Salem",
    image: imgInfraRoad,
    author: "The Kongu Times Editorial",
    date: "2026-04-08T08:00:00",
    views: 6700,
    trending: false,
    tags: ["highway", "infrastructure", "salem", "namakkal"]
  },
  {
    id: "18",
    title: "Free Health Camps Benefit 5,000 Residents Across Kongu Districts",
    summary: "District administrations across Coimbatore, Erode, and Tiruppur conducted large-scale free health camps, providing medical screenings and medicines to over 5,000 residents.",
    content: "In a coordinated effort ahead of the election season, district administrations across the Kongu region conducted free health camps in rural and semi-urban areas, benefiting over 5,000 residents.\n\nThe camps provided general health checkups, eye screenings, dental consultations, and distribution of essential medicines. Specialist doctors from government medical colleges participated in the drives.\n\nCoimbatore district alone saw 12 camps across taluks, with a special focus on elderly residents and pregnant women. The initiative was supported by local NGOs and pharmaceutical companies.",
    category: "Local Issues",
    district: "Coimbatore",
    image: imgHealthcare,
    author: "The Kongu Times Staff",
    date: "2026-04-06T15:00:00",
    views: 4100,
    trending: false,
    tags: ["healthcare", "free camps", "kongu", "medical"]
  },
  {
    id: "19",
    title: "Global Markets Volatile as Geopolitical Tensions Impact Oil Prices",
    summary: "Oil prices and stock indices see significant volatility as ongoing geopolitical tensions in the Middle East affect global energy supply chains.",
    content: "Global financial markets experienced sharp volatility as geopolitical tensions continue to impact energy markets. Brent crude surged past $110 per barrel in trading, while major indices saw corrections.\n\nThe volatility has direct implications for India's economy, with fuel price increases potentially impacting inflation. Tamil Nadu's transport and manufacturing sectors, particularly the textile industry in Tiruppur and Karur, face margin pressure from rising logistics costs.\n\nAnalysts note that prolonged high oil prices could affect consumer spending and industrial output in export-dependent regions like the Kongu belt.",
    category: "Business",
    district: "Coimbatore",
    image: imgGlobalMarkets,
    author: "The Kongu Times World Desk",
    date: "2026-04-09T14:00:00",
    views: 16500,
    trending: true,
    tags: ["markets", "oil prices", "economy", "global"]
  },
  {
    id: "20",
    title: "NASA Artemis II Successfully Completes Lunar Flyby — Crew Returns Safely",
    summary: "The four-member Artemis II crew completed their 10-day lunar mission, testing systems for the eventual crewed Moon landing planned under Artemis III.",
    content: "NASA successfully concluded the Artemis II mission, with the four-member crew safely returning after completing a 10-day journey around the Moon. The mission tested critical life support, navigation, and communication systems at lunar distances.\n\nThe crew — comprising two American astronauts, one Canadian, and one from the European Space Agency — represents the most internationally diverse deep-space crew in history.\n\nThe successful mission paves the way for Artemis III, which aims to land astronauts on the lunar surface by 2028. NASA Administrator noted this marks 'a new chapter in human exploration.'",
    category: "Technology",
    district: "Coimbatore",
    image: imgArtemis,
    author: "The Kongu Times World Desk",
    date: "2026-04-10T09:00:00",
    views: 19200,
    trending: true,
    tags: ["NASA", "Artemis", "space", "moon mission", "science"]
  },
];
