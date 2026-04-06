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
  "Tamil Nadu Assembly Election 2026 scheduled for April 23 — all 234 constituencies gear up",
  "Kongu region emerges as key battleground with 29 seats attracting fierce multi-party contest",
  "Coimbatore Smart City project Phase 2 inaugurated with ₹500 crore investment",
  "Tiruppur garment exports cross ₹40,000 crore mark this fiscal year",
  "Election Commission deploys over 1.5 lakh polling personnel across Tamil Nadu",
  "New IT corridor announced for Salem — 5,000 jobs expected",
  "Erode turmeric market registers record trading volume",
];

export const sampleArticles: Article[] = [
  {
    id: "1",
    title: "Tamil Nadu Assembly Election 2026: All 234 Constituencies Gear Up for April 23 Polls",
    summary: "The Election Commission has finalized preparations for the Tamil Nadu Legislative Assembly elections, with voting scheduled for April 23 and results on May 4, 2026.",
    content: "Tamil Nadu is set for a high-stakes electoral battle as all 234 assembly constituencies prepare for polling on April 23, 2026. The Election Commission has completed extensive preparations including deployment of over 1.5 lakh polling personnel, installation of EVMs and VVPATs at 68,000+ polling stations, and robust security arrangements.\n\nThe contest is primarily between the ruling DMK-led Secular Progressive Alliance (SPA) and the opposition AIADMK-led NDA front, with Tamilaga Vetri Kazhagam (TVK) and Naam Tamilar Katchi (NTK) also fielding candidates across all seats.\n\nKey issues dominating the campaign include state autonomy, Hindi imposition concerns, infrastructure development, employment generation, and agricultural welfare. The Kongu region with its 29 assembly segments has emerged as a critical battleground where all major parties are investing significant campaign resources.\n\nVoter registration has crossed 6.2 crore, marking a significant increase from 2021. The Election Commission has set up special facilities for senior citizens, differently-abled voters, and first-time voters across the state.",
    category: "Politics",
    district: "Coimbatore",
    image: imgElectionRally,
    author: "The Kongu Times Editorial",
    date: "2026-04-06T07:00:00",
    views: 28500,
    trending: true,
    tags: ["election 2026", "tamil nadu", "assembly polls", "kongu region"]
  },
  {
    id: "2",
    title: "Kongu Region Emerges as Decisive Battleground in 2026 Tamil Nadu Elections",
    summary: "With 29 assembly seats, the Kongu belt including Coimbatore, Erode, Tiruppur, and Salem has become the most fiercely contested region in the state elections.",
    content: "The Kongu region, comprising 29 assembly constituencies across Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris districts, has emerged as the most critical battleground in the 2026 Tamil Nadu elections.\n\nAll major political fronts have intensified their campaigns in the region. The ruling DMK is aiming to break its historical underperformance in the Kongu belt, with senior leaders declaring the region will become 'DMK's fort' this election. The AIADMK, which traditionally dominates the region, faces stiff competition from both the DMK and newcomer TVK.\n\nTVK's leadership has expressed confidence of sweeping all 29 Kongu seats, while the AIADMK has been consolidating support from regional parties. Key constituencies to watch include Coimbatore South, Erode East, Salem North, and Pollachi.\n\nLocal issues such as water management, textile industry welfare, agricultural prices, and IT sector development are dominating the discourse in the region.",
    category: "Politics",
    district: "Coimbatore",
    image: imgKonguDev,
    author: "The Kongu Times Editorial",
    date: "2026-04-05T16:30:00",
    views: 22100,
    trending: true,
    tags: ["kongu region", "election", "battleground", "coimbatore"]
  },
  {
    id: "3",
    title: "State Autonomy and Anti-Hindi Stance Dominate TN Election Campaign Rhetoric",
    summary: "Leading political figures emphasize Tamil Nadu's stance against Hindi imposition and the importance of protecting state autonomy in the upcoming assembly elections.",
    content: "The 2026 Tamil Nadu election campaign has seen state autonomy and opposition to Hindi imposition emerge as dominant themes across party lines. Senior leaders have been vocal about protecting Tamil Nadu's linguistic and cultural identity.\n\nCampaign speeches across the Kongu region have highlighted the state's opposition to the National Education Policy's three-language formula, centralization of power, and perceived threats to state rights. The issue has resonated strongly with voters, particularly among youth and educated demographics.\n\nPolitical analysts note that the state autonomy narrative has become a unifying theme that transcends traditional party loyalties in Tamil Nadu, making it a decisive factor in voter preference this election cycle.\n\nIn the Kongu belt, this issue intersects with local concerns about central government policies affecting the textile, agriculture, and small-scale manufacturing sectors.",
    category: "Politics",
    district: "Coimbatore",
    image: imgAssembly,
    author: "The Kongu Times Editorial",
    date: "2026-04-06T06:00:00",
    views: 18700,
    trending: true,
    tags: ["state autonomy", "hindi imposition", "election campaign", "tamil nadu"]
  },
  {
    id: "4",
    title: "Women Candidates See Record Representation in 2026 Tamil Nadu Elections",
    summary: "All major parties have increased women's representation in their candidate lists, with the Kongu region seeing a notable rise in women contestants.",
    content: "The 2026 Tamil Nadu Assembly elections mark a significant milestone for women's political participation, with all major parties fielding a record number of women candidates across the state's 234 constituencies.\n\nIn the Kongu region, several key constituencies including Avanashi, Tiruppur South, and Namakkal have women candidates from major parties. The trend reflects growing emphasis on gender diversity in political representation.\n\nWomen voters also constitute a significant portion of the electorate in the Kongu belt, with districts like Coimbatore and Tiruppur showing near-equal gender ratios in voter registration. Political parties have tailored their manifestos to address women-centric issues including safety, economic empowerment, and health services.\n\nThe Election Commission has also ensured women-managed polling booths in every constituency, along with crèche facilities for voters with young children.",
    category: "Politics",
    district: "Tiruppur",
    image: imgWomenPolitics,
    author: "The Kongu Times Staff",
    date: "2026-04-05T12:00:00",
    views: 14200,
    trending: true,
    tags: ["women candidates", "election", "representation", "kongu"]
  },
  {
    id: "5",
    title: "Election Commission Sets Up 68,000 Polling Stations Across Tamil Nadu",
    summary: "Comprehensive polling infrastructure deployed statewide with special focus on accessibility and technology-enabled transparent voting.",
    content: "The Election Commission of India has set up over 68,000 polling stations across Tamil Nadu for the April 23 assembly elections, ensuring every voter has a booth within 2 km of their residence.\n\nIn the Kongu region, approximately 8,500 polling stations have been established across the 29 constituencies. Each station is equipped with Electronic Voting Machines (EVMs) with Voter Verifiable Paper Audit Trail (VVPAT) units.\n\nSpecial measures include webcam-enabled monitoring at sensitive booths, deployment of Central Armed Police Forces, and helicopter surveillance in vulnerable areas. The commission has also set up voter facilitation centers in all taluks.\n\nFor the first time, all polling stations will have basic amenities including drinking water, shade, and seating arrangements for voters waiting in queues. Mobile app-based voter verification will also be available at select stations.",
    category: "Politics",
    district: "Salem",
    image: imgVoting,
    author: "The Kongu Times Staff",
    date: "2026-04-04T18:00:00",
    views: 11800,
    trending: true,
    tags: ["polling stations", "election commission", "voting", "tamil nadu"]
  },
  {
    id: "6",
    title: "Coimbatore Smart City Project Phase 2 Launched with Major Infrastructure Upgrades",
    summary: "The second phase of the Smart City initiative brings advanced traffic management systems, improved water supply networks, and digital governance platforms to Coimbatore.",
    content: "In a significant milestone for urban development in the Kongu region, the Coimbatore Smart City project has entered its ambitious second phase. The initiative, backed by a ₹500 crore investment, focuses on transforming the city's infrastructure through cutting-edge technology and sustainable practices.\n\nKey highlights include an AI-powered traffic management system that will cover 120 major intersections, a revamped water supply network using IoT sensors for leak detection, and a comprehensive digital governance platform enabling citizens to access 150+ government services online.\n\nThe project also includes the development of 15 km of dedicated cycling lanes, 50 acres of new green spaces, and the installation of 10,000 smart LED streetlights across the city. Solar panels on government buildings are expected to generate 5 MW of clean energy.",
    category: "Politics",
    district: "Coimbatore",
    image: imgCoimbatore,
    author: "The Kongu Times Editorial",
    date: "2026-04-05T08:30:00",
    views: 12500,
    trending: true,
    tags: ["smart city", "infrastructure", "coimbatore"]
  },
  {
    id: "7",
    title: "Tiruppur Textile Industry Sets New Export Record at ₹40,000 Crore",
    summary: "The knitwear capital of India achieves unprecedented export figures, driven by sustainable manufacturing practices and new international partnerships.",
    content: "Tiruppur's textile and garment industry has achieved a landmark milestone, with exports crossing the ₹40,000 crore mark for the first time in a fiscal year. The achievement underscores the region's dominance in India's knitwear sector.\n\nIndustry leaders attribute the growth to the adoption of sustainable manufacturing practices, including zero liquid discharge plants and organic cotton sourcing. New partnerships with European and American fashion brands have also contributed significantly.\n\nThe Tiruppur Exporters' Association announced plans to invest ₹2,000 crore in modernizing production facilities and establishing a dedicated fashion design institute to nurture local talent.",
    category: "Business",
    district: "Tiruppur",
    image: imgTiruppur,
    author: "The Kongu Times Staff",
    date: "2026-04-04T14:15:00",
    views: 9800,
    trending: true,
    tags: ["textile", "exports", "tiruppur"]
  },
  {
    id: "8",
    title: "Erode Turmeric Market Witnesses Historic Price Surge Amid Global Demand",
    summary: "Erode's renowned turmeric market sees prices soar to record levels as international demand for curcumin-based health products continues to grow.",
    content: "The Erode turmeric market, one of Asia's largest, has witnessed an extraordinary price surge with premium varieties fetching over ₹18,000 per quintal. The increase is attributed to growing global demand for curcumin, the active compound in turmeric, used extensively in pharmaceutical and nutraceutical industries.",
    category: "Agriculture",
    district: "Erode",
    image: imgErode,
    author: "The Kongu Times Editorial",
    date: "2026-04-04T10:00:00",
    views: 7200,
    trending: true,
    tags: ["turmeric", "agriculture", "erode"]
  },
  {
    id: "9",
    title: "Salem Gets New IT Corridor: 5,000 Jobs on the Horizon",
    summary: "A major IT corridor project in Salem promises to transform the district into a technology hub with 5,000 new employment opportunities.",
    content: "Salem is set to emerge as a major IT destination in Tamil Nadu with the announcement of a new technology corridor spanning 200 acres. The project, approved by the state government, is expected to attract major IT companies and create over 5,000 jobs in the next three years.",
    category: "Jobs",
    district: "Salem",
    image: imgSalem,
    author: "The Kongu Times Staff",
    date: "2026-04-03T16:45:00",
    views: 15300,
    trending: true,
    tags: ["IT", "jobs", "salem"]
  },
  {
    id: "10",
    title: "Nilgiris Tea Estates Embrace Organic Farming with Government Support",
    summary: "Tea plantations across the Nilgiris are transitioning to organic farming methods, backed by state subsidies and growing consumer preference for chemical-free products.",
    content: "The Nilgiris, known worldwide for its premium tea, is undergoing a green revolution as tea estates embrace organic farming practices. Over 40 estates have already received organic certification, with another 100 in the pipeline.",
    category: "Agriculture",
    district: "Nilgiris",
    image: imgNilgiris,
    author: "The Kongu Times Editorial",
    date: "2026-04-03T09:30:00",
    views: 5600,
    trending: false,
    tags: ["tea", "organic", "nilgiris"]
  },
  {
    id: "11",
    title: "Namakkal Poultry Sector Adopts AI-Driven Farm Management Systems",
    summary: "Namakkal's poultry industry, India's largest egg producer, integrates artificial intelligence for improved productivity and animal welfare.",
    content: "Namakkal district, contributing nearly 80% of Tamil Nadu's egg production, is leveraging artificial intelligence to revolutionize poultry farming. Smart farm management systems now monitor bird health, feed optimization, and environmental conditions in real-time.",
    category: "Technology",
    district: "Namakkal",
    image: imgNamakkal,
    author: "The Kongu Times Staff",
    date: "2026-04-02T11:20:00",
    views: 4300,
    trending: false,
    tags: ["poultry", "AI", "namakkal"]
  },
  {
    id: "12",
    title: "Karur Textile Cluster Receives ₹200 Crore Modernization Fund",
    summary: "The central government approves a major modernization fund for Karur's home textile cluster to boost competitiveness in global markets.",
    content: "Karur's home textile industry has received a significant boost with the approval of a ₹200 crore modernization fund from the central government. The fund will be used to upgrade weaving machinery, establish quality testing laboratories, and develop design innovation centers.",
    category: "Business",
    district: "Karur",
    image: imgKarur,
    author: "The Kongu Times Editorial",
    date: "2026-04-02T08:00:00",
    views: 3800,
    trending: false,
    tags: ["textile", "modernization", "karur"]
  },
  {
    id: "13",
    title: "Coimbatore Hosts International Conference on Sustainable Agriculture",
    summary: "Leading agricultural scientists and farmers gather in Coimbatore to discuss innovative sustainable farming practices for the Kongu region.",
    content: "Coimbatore's agricultural university played host to an international conference on sustainable agriculture, drawing over 500 participants from 15 countries. The conference focused on water conservation techniques, precision farming, and climate-resilient crop varieties suited to the Kongu region.",
    category: "Education",
    district: "Coimbatore",
    image: imgConference,
    author: "The Kongu Times Staff",
    date: "2026-04-01T13:00:00",
    views: 6100,
    trending: false,
    tags: ["agriculture", "conference", "coimbatore"]
  },
];
