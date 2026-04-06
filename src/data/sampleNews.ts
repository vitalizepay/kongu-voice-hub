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
  "Tamil Nadu Assembly Election 2026 scheduled for April 23 — all 234 constituencies to vote",
  "Kongu belt emerges as key battleground: 29 seats drawing intense multi-party campaigns",
  "DMK releases full manifesto promising ₹8,000 household coupons and free laptops for college students",
  "Tiruppur garment exports cross ₹40,000 crore — industry sets new record this fiscal year",
  "AIADMK launches statewide campaign under 'Makkalai Kaappom, Thamizhagathai Meetpom' slogan",
  "New IT corridor announced for Salem district — over 5,000 jobs expected in three years",
  "Election Commission deploys 1.5 lakh polling staff across Tamil Nadu's 68,000+ booths",
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
    date: "2026-04-06T07:00:00",
    views: 28500,
    trending: true,
    tags: ["election 2026", "tamil nadu", "assembly polls", "kongu region"]
  },
  {
    id: "2",
    title: "DMK Manifesto 2026: Key Promises Across Welfare, Infrastructure and Agriculture",
    summary: "The ruling DMK has released its election manifesto pledging ₹8,000 household coupons, free laptops for college students, enhanced women's monthly entitlement, and major agricultural support.",
    content: "The Secular Progressive Alliance, led by the DMK, released its election manifesto on March 29, 2026, laying out a comprehensive set of commitments for voters across Tamil Nadu.\n\nAmong the headline promises: ₹8,000 coupons for homemakers not covered under income tax to purchase household appliances; extension of the Chief Minister's Breakfast Scheme in government schools through Class 8; free laptops for all government college students; and raising the monthly entitlement for women to ₹2,000.\n\nThe manifesto also commits to increasing old-age pension from ₹1,200 to ₹2,000 per month, and providing ₹2,500 monthly assistance for people with disabilities. Under infrastructure, the party proposes procuring 10,000 new buses, expanding Coimbatore International Airport, and establishing a cargo terminal at Thoothukudi Airport.\n\nFor the farming sector, the manifesto includes distributing free pump sets to 20 lakh farmers, desilting 15,500 km of irrigation canals, and raising milk procurement prices. The party has also committed to interest-free loans of up to ₹5 lakh for self-help groups.\n\nIn the Kongu region, candidates have highlighted the agriculture and textile-related commitments as particularly relevant to local constituents.",
    category: "Politics",
    district: "Coimbatore",
    image: imgAssembly,
    author: "The Kongu Times Editorial",
    date: "2026-04-05T10:00:00",
    views: 22100,
    trending: true,
    tags: ["DMK manifesto", "election 2026", "welfare", "agriculture"]
  },
  {
    id: "3",
    title: "AIADMK Campaign Focuses on Governance Failures and People's Rights",
    summary: "AIADMK General Secretary Edappadi K. Palaniswami leads the opposition campaign under the slogan 'Makkalai Kaappom, Thamizhagathai Meetpom', targeting the ruling party's record on law and order and economic management.",
    content: "The AIADMK-led alliance has intensified its statewide campaign ahead of the April 23 polls, with General Secretary Edappadi K. Palaniswami fronting rallies across Tamil Nadu under the campaign theme 'Makkalai Kaappom, Thamizhagathai Meetpom' (Protect the People, Reclaim Tamil Nadu).\n\nThe campaign, launched in July 2025, focuses on what the opposition describes as failures in law and order, rising prices, and governance shortfalls under the current administration. Palaniswami is himself contesting from the Edappadi constituency in Salem district.\n\nIn the Kongu region, the AIADMK is leaning on its traditional stronghold status and has fielded experienced candidates across Coimbatore, Salem, and Erode constituencies. The party is also banking on allied parties — including the BJP and PMK — to consolidate votes in specific segments.\n\nKey battlegrounds where the AIADMK is mounting strong challenges include Coimbatore North, Salem West, and Erode East, where the opposition is positioning itself as a credible alternative on issues of inflation and small business welfare.",
    category: "Politics",
    district: "Salem",
    image: imgKonguDev,
    author: "The Kongu Times Staff",
    date: "2026-04-05T16:30:00",
    views: 18700,
    trending: true,
    tags: ["AIADMK", "election campaign", "Palaniswami", "opposition"]
  },
  {
    id: "4",
    title: "Kongu Belt: 29 Seats, Three Major Fronts — Here's What's at Stake",
    summary: "Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur and Nilgiris districts form the Kongu belt — a 29-seat region that no major party can afford to lose in 2026.",
    content: "The Kongu region, spanning 29 assembly constituencies across seven districts — Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris — has historically played a decisive role in Tamil Nadu's electoral outcomes, and 2026 is no different.\n\nThe DMK is pursuing an aggressive campaign to improve on its 2021 performance in the region, with senior ministers holding multiple rallies and promising targeted development for the Kongu belt. The AIADMK, which traditionally holds the region, is defending key seats while contending with a resurgent DMK and a competitive TVK.\n\nTamilaga Vetri Kazhagam (TVK), contesting its first assembly election, has projected ambitions of making inroads across the Kongu constituencies, particularly among younger voters and first-time electors.\n\nLocal concerns driving voter sentiment include water resource management, equitable distribution of industrial benefits from the textile sector, agriculture pricing policies, and infrastructure connectivity. Political analysts note that while no single party has a guaranteed edge, the region's diverse voter base — spanning farmers, factory workers, traders, and IT professionals — makes it genuinely competitive.\n\nKey watch seats include Coimbatore South, Erode East, Namakkal, Tiruchengodu, and Pollachi.",
    category: "Politics",
    district: "Coimbatore",
    image: imgWomenPolitics,
    author: "The Kongu Times Editorial",
    date: "2026-04-06T06:00:00",
    views: 14200,
    trending: true,
    tags: ["kongu region", "election battleground", "29 seats", "coimbatore"]
  },
  {
    id: "5",
    title: "Record Women Candidates in 2026 TN Polls — Kongu Districts Lead",
    summary: "Political parties have fielded significantly more women candidates this election cycle, with constituencies in Tiruppur, Coimbatore, and Salem seeing notable increases in women contestants.",
    content: "The 2026 Tamil Nadu Assembly elections mark a meaningful step forward in women's political representation, with all major parties having fielded a higher proportion of women candidates compared to previous cycles.\n\nIn the Kongu region, constituencies such as Avanashi, Tiruppur North, Dharapuram, and Namakkal have women candidates from at least two major fronts each. Nationally prominent faces like Vanathi Srinivasan (Coimbatore North, BJP) and Gokilamani (Avanashi, DMK) are among the prominent women in the region's contest.\n\nWomen voters also form a near-equal share of the registered electorate in districts like Coimbatore and Tiruppur, and parties have customised their outreach accordingly — focusing on safety, economic empowerment, health access, and welfare scheme delivery.\n\nThe Election Commission has mandated women-managed polling booths in at least one location per constituency, and crèche facilities are being provided at select stations for voters with young children.",
    category: "Politics",
    district: "Tiruppur",
    image: imgVoting,
    author: "The Kongu Times Staff",
    date: "2026-04-04T18:00:00",
    views: 11800,
    trending: true,
    tags: ["women candidates", "election 2026", "representation", "kongu"]
  },
  {
    id: "6",
    title: "Tiruppur Garment Exports Surpass ₹40,000 Crore — A New Milestone",
    summary: "Tiruppur's knitwear industry has crossed the ₹40,000 crore export mark for the first time in a single fiscal year, driven by sustainability practices and new global partnerships.",
    content: "Tiruppur's textile and garment sector has reached a landmark, with exports crossing the ₹40,000 crore mark for the first fiscal year on record. The achievement cements the city's position as the country's premier knitwear hub.\n\nIndustry leaders credit the growth to adoption of sustainable manufacturing practices including zero liquid discharge compliance, organic cotton sourcing, and improved supply chain transparency — all increasingly demanded by European and American fashion brands.\n\nThe Tiruppur Exporters' Association has announced a ₹2,000 crore investment plan to modernise production infrastructure and establish a dedicated fashion design institute to build local talent pipelines.\n\nThe milestone has also drawn political attention, with candidates across parties invoking the industry's success — and the welfare of its lakhs of workers — in their campaign messaging ahead of the assembly polls.",
    category: "Business",
    district: "Tiruppur",
    image: imgTiruppur,
    author: "The Kongu Times Staff",
    date: "2026-04-04T14:15:00",
    views: 9800,
    trending: true,
    tags: ["textile", "exports", "tiruppur", "knitwear"]
  },
  {
    id: "7",
    title: "Coimbatore Smart City Phase 2 Rolls Out with ₹500 Crore in New Infrastructure",
    summary: "The second phase of Coimbatore's Smart City project targets AI-powered traffic management, IoT-enabled water networks, and expanded digital access to government services.",
    content: "Coimbatore's Smart City initiative has entered its second phase, backed by a ₹500 crore outlay aimed at upgrading the city's core infrastructure through technology-led solutions.\n\nThe phase includes an AI-based traffic management system covering 120 major intersections, an IoT-enabled water supply network capable of detecting pipe leaks in real time, and a digital governance portal giving citizens access to over 150 government services from a single platform.\n\nThe project also earmarks 15 km of dedicated cycling lanes, 50 acres of new public green space, and 10,000 smart LED streetlights. Solar installations on government-owned rooftops are projected to generate 5 MW of renewable energy.\n\nUrban planners and civic groups have broadly welcomed the initiatives, though some residents have flagged the need for stronger community consultation on road-level changes.",
    category: "Local Issues",
    district: "Coimbatore",
    image: imgCoimbatore,
    author: "The Kongu Times Editorial",
    date: "2026-04-05T08:30:00",
    views: 12500,
    trending: true,
    tags: ["smart city", "infrastructure", "coimbatore", "urban development"]
  },
  {
    id: "8",
    title: "Erode Turmeric Market Sees Price Surge on Back of Global Curcumin Demand",
    summary: "Premium turmeric varieties at Erode's markets are fetching over ₹18,000 per quintal, driven by sustained international demand from the pharmaceutical and health products sectors.",
    content: "Erode's turmeric market, one of Asia's largest, is experiencing a significant price upswing with premium grades crossing ₹18,000 per quintal. Traders and farmers attribute the rise to growing global demand for curcumin — the bioactive compound in turmeric widely used in pharmaceutical, nutraceutical, and functional food segments.\n\nFarmer groups in the region have expressed cautious optimism, noting that while better prices are welcome, volatility remains a concern. Agricultural bodies are urging the state government to set up price stabilisation funds ahead of the next harvest cycle.\n\nThe surge comes at an important moment ahead of the assembly elections, with farming community welfare featuring prominently in manifestos across all major fronts.",
    category: "Agriculture",
    district: "Erode",
    image: imgErode,
    author: "The Kongu Times Editorial",
    date: "2026-04-04T10:00:00",
    views: 7200,
    trending: true,
    tags: ["turmeric", "agriculture", "erode", "curcumin"]
  },
  {
    id: "9",
    title: "Salem IT Corridor Approved — 5,000 Jobs Expected in Three Years",
    summary: "A 200-acre technology corridor in Salem has received state government approval, positioning the district as Tamil Nadu's next major IT destination.",
    content: "Salem is on course to become a significant technology hub in Tamil Nadu following state government approval of a 200-acre IT corridor project. The development is projected to attract established IT companies and create over 5,000 direct jobs within three years of completion.\n\nThe corridor will be developed in phases, with the first phase focusing on basic infrastructure — roads, power, data connectivity — followed by the leasing of plots to technology and business process outsourcing firms.\n\nLocal educational institutions are expected to benefit from proximity to the corridor, with industry-academic partnerships being explored to align curriculum with employer requirements. The announcement has been welcomed by youth groups in Salem who have long sought private sector employment alternatives within the district.",
    category: "Jobs",
    district: "Salem",
    image: imgSalem,
    author: "The Kongu Times Staff",
    date: "2026-04-03T16:45:00",
    views: 15300,
    trending: true,
    tags: ["IT corridor", "jobs", "salem", "technology"]
  },
  {
    id: "10",
    title: "Nilgiris Tea Estates Transition to Organic Farming with State Support",
    summary: "Over 40 Nilgiris tea estates now hold organic certification, with another 100 in the pipeline, as growers respond to rising global demand for chemical-free produce.",
    content: "Tea plantations across the Nilgiris are undergoing a significant shift toward organic cultivation practices, supported by state subsidies and driven by growing consumer preference for sustainably produced beverages.\n\nMore than 40 estates have received full organic certification, and growers report price premiums of 20–30% on certified produce in export markets. A further 100 estates are in various stages of the three-year conversion process required for certification.\n\nThe Nilgiris district administration has set up a support cell to assist small and medium growers navigate certification procedures and access state subsidy schemes. Challenges remain, including higher input costs during the transition period and the need to manage pest control without synthetic chemicals.\n\nThe trend is also drawing attention from tourism stakeholders, who see organic tea estates as an additional attraction for the district's growing agri-tourism segment.",
    category: "Agriculture",
    district: "Nilgiris",
    image: imgNilgiris,
    author: "The Kongu Times Editorial",
    date: "2026-04-03T09:30:00",
    views: 5600,
    trending: false,
    tags: ["tea", "organic farming", "nilgiris", "agri-tourism"]
  },
  {
    id: "11",
    title: "Namakkal Poultry Farms Deploy AI Monitoring — Productivity Gains Reported",
    summary: "AI-driven farm management tools are being adopted across Namakkal's poultry sector, India's largest egg-producing district, with early results showing measurable gains in yield and bird health.",
    content: "Namakkal district, responsible for approximately 80% of Tamil Nadu's egg production, is embracing artificial intelligence to improve farm efficiency and animal welfare standards.\n\nSmart monitoring platforms are being installed across farms of various scales, providing real-time data on bird health indicators, feed conversion rates, temperature regulation, and mortality patterns. Early adopters report reductions in feed wastage and faster identification of health issues.\n\nThe shift is being supported by the state animal husbandry department through a pilot subsidy scheme, with 120 farms enrolled in the first phase. Equipment suppliers from Coimbatore and Chennai have partnered with district-level farmer associations to provide training and technical support.\n\nPoultry farmers note that while upfront costs are a barrier for smaller operations, the medium-term savings on veterinary expenses and feed losses make adoption worthwhile.",
    category: "Technology",
    district: "Namakkal",
    image: imgNamakkal,
    author: "The Kongu Times Staff",
    date: "2026-04-02T11:20:00",
    views: 4300,
    trending: false,
    tags: ["poultry", "AI", "namakkal", "farm technology"]
  },
  {
    id: "12",
    title: "Karur Home Textile Cluster Receives ₹200 Crore Central Modernisation Fund",
    summary: "The central government has approved a ₹200 crore package to modernise Karur's home textile manufacturing cluster, with investments targeting machinery upgrades and design innovation.",
    content: "Karur's home textile industry — one of the country's largest producers of bed linen, towels, and kitchen textiles — is set to receive a significant boost through a ₹200 crore modernisation package approved by the central government.\n\nThe funds are earmarked for upgrading weaving and finishing machinery, establishing quality testing laboratories that meet international standards, and setting up design innovation centres to enable producers to move up the value chain beyond commodity products.\n\nIndustry associations in Karur have welcomed the announcement, noting that global buyers increasingly expect suppliers to demonstrate both product quality and sustainable production practices. The investment is also expected to help smaller units consolidate and compete more effectively against cheaper imports.\n\nA portion of the funds will go toward skill development programmes for workers transitioning to newer machinery formats.",
    category: "Business",
    district: "Karur",
    image: imgKarur,
    author: "The Kongu Times Editorial",
    date: "2026-04-02T08:00:00",
    views: 3800,
    trending: false,
    tags: ["textile", "Karur", "modernisation", "home textile"]
  },
  {
    id: "13",
    title: "Coimbatore Hosts International Sustainable Agriculture Forum",
    summary: "Researchers and farmers from 15 countries gathered in Coimbatore to examine water conservation, precision farming, and climate-adaptive crop varieties suited to the Kongu region.",
    content: "Coimbatore's agricultural university played host to a three-day international forum on sustainable agriculture, drawing over 500 delegates from 15 countries. The event focused on innovations directly applicable to the Kongu region's farming conditions — notably water-scarce, red-soil landscapes.\n\nSessions covered precision irrigation technology, drip-and-mulch combinations that reduce water use by up to 40%, soil carbon enhancement techniques, and new variety development for crops like groundnut, maize, and millets that are regionally significant.\n\nFarmer panels featuring participants from Erode, Namakkal, and Coimbatore districts were particularly well-attended, with producers sharing ground-level experiences of adopting new practices and the institutional support they need. The forum concluded with a joint declaration calling for stronger links between research institutions and agricultural extension services at the taluk level.",
    category: "Education",
    district: "Coimbatore",
    image: imgConference,
    author: "The Kongu Times Staff",
    date: "2026-04-01T13:00:00",
    views: 6100,
    trending: false,
    tags: ["agriculture", "sustainable farming", "coimbatore", "international forum"]
  },
];
