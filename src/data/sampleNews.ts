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
  "Pakistan circulates 'Islamabad Accord' ceasefire proposal amid U.S.-Iran five-week war",
  "NASA Artemis II launches four astronauts on first crewed lunar mission since 1972",
  "Global oil prices spike as Trump threatens strikes if Iran keeps Hormuz closed",
  "Kongu belt emerges as key battleground: 29 seats drawing intense multi-party campaigns",
  "DMK releases full manifesto promising ₹8,000 household coupons and free laptops for college students",
  "Italy referendum rejects PM Meloni's justice reforms — 54% vote 'No'",
  "Tiruppur garment exports cross ₹40,000 crore — industry sets new record this fiscal year",
  "Hungary opposition widens lead over Orbán's Fidesz ahead of April 12 elections",
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
    date: "2026-04-07T07:00:00",
    views: 32500,
    trending: true,
    tags: ["election 2026", "tamil nadu", "assembly polls", "kongu region"]
  },
  {
    id: "2",
    title: "Pakistan Circulates 'Islamabad Accord' Ceasefire Proposal to U.S. and Iran",
    summary: "Pakistan has sent a tentative ceasefire framework to both the United States and Iran, proposing a five-week halt in fighting, prisoner releases, and eventual withdrawal of foreign troops.",
    content: "In a significant diplomatic development, Pakistan has circulated what officials are calling the 'Islamabad Accord' — a ceasefire framework designed to halt the five-week war between the United States and Iran.\n\nThe draft proposal includes provisions for a complete halt in hostilities within 72 hours of acceptance, phased prisoner exchanges, and a roadmap for the eventual withdrawal of foreign military personnel from the region. Pakistan, leveraging its unique position as a neighbour to Iran and a traditional security partner of the U.S., has positioned itself as a credible mediator.\n\nThe proposal comes as tensions escalated dramatically following the U.S. rescue of a downed F-15 crewman from Iranian territory and President Trump's public threat to strike Iran's energy infrastructure if the Strait of Hormuz remains closed.\n\nAnalysts note that while both sides have expressed interest in exploring diplomatic channels, significant obstacles remain — including the question of Iran's nuclear programme and the future of U.S. military bases in the Gulf region.",
    category: "Politics",
    district: "Coimbatore",
    image: imgGlobalMarkets,
    author: "The Kongu Times World Desk",
    date: "2026-04-06T18:00:00",
    views: 24800,
    trending: true,
    tags: ["ceasefire", "pakistan", "iran", "global politics", "diplomacy"]
  },
  {
    id: "3",
    title: "NASA Artemis II Launches — First Crewed Moon Mission Since 1972",
    summary: "Four astronauts have been successfully launched aboard the Orion spacecraft on a 10-day lunar loop, marking humanity's return to deep space after more than five decades.",
    content: "NASA successfully launched the Artemis II mission on April 1, 2026, sending four astronauts on a trajectory around the Moon — the first crewed lunar mission since Apollo 17 in December 1972.\n\nThe Space Launch System (SLS) rocket lifted off from Kennedy Space Center at Cape Canaveral, propelling the Orion spacecraft on a planned 10-day journey that will see the crew loop around the Moon without landing, testing critical systems for the eventual Artemis III crewed landing mission planned for 2028.\n\nThe crew — comprising two American astronauts, one Canadian, and one from the European Space Agency — represents the most internationally diverse deep-space crew in history. The mission is testing life support systems, navigation, and communication capabilities at lunar distances.\n\nThe launch comes amid intensifying competition with China's space programme, which has announced plans for a crewed lunar landing by 2030. NASA Administrator noted that Artemis II represents 'a new chapter in human exploration that will pave the way for a sustained presence on the Moon.'",
    category: "Technology",
    district: "Coimbatore",
    image: imgArtemis,
    author: "The Kongu Times World Desk",
    date: "2026-04-01T20:00:00",
    views: 19200,
    trending: true,
    tags: ["NASA", "Artemis", "space", "moon mission", "science"]
  },
  {
    id: "4",
    title: "DMK Manifesto 2026: Key Promises Across Welfare, Infrastructure and Agriculture",
    summary: "The ruling DMK has released its election manifesto pledging ₹8,000 household coupons, free laptops for college students, enhanced women's monthly entitlement, and major agricultural support.",
    content: "The Secular Progressive Alliance, led by the DMK, released its election manifesto on March 29, 2026, laying out a comprehensive set of commitments for voters across Tamil Nadu.\n\nAmong the headline promises: ₹8,000 coupons for homemakers not covered under income tax to purchase household appliances; extension of the Chief Minister's Breakfast Scheme in government schools through Class 8; free laptops for all government college students; and raising the monthly entitlement for women to ₹2,000.\n\nThe manifesto also commits to increasing old-age pension from ₹1,200 to ₹2,000 per month, and providing ₹2,500 monthly assistance for people with disabilities. Under infrastructure, the party proposes procuring 10,000 new buses, expanding Coimbatore International Airport, and establishing a cargo terminal at Thoothukudi Airport.\n\nFor the farming sector, the manifesto includes distributing free pump sets to 20 lakh farmers, desilting 15,500 km of irrigation canals, and raising milk procurement prices.",
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
    id: "5",
    title: "AIADMK Campaign Focuses on Governance Failures and People's Rights",
    summary: "AIADMK General Secretary Edappadi K. Palaniswami leads the opposition campaign under the slogan 'Makkalai Kaappom, Thamizhagathai Meetpom', targeting the ruling party's record.",
    content: "The AIADMK-led alliance has intensified its statewide campaign ahead of the April 23 polls, with General Secretary Edappadi K. Palaniswami fronting rallies across Tamil Nadu under the campaign theme 'Makkalai Kaappom, Thamizhagathai Meetpom' (Protect the People, Reclaim Tamil Nadu).\n\nThe campaign focuses on what the opposition describes as failures in law and order, rising prices, and governance shortfalls under the current administration. Palaniswami is himself contesting from the Edappadi constituency in Salem district.\n\nIn the Kongu region, the AIADMK is leaning on its traditional stronghold status and has fielded experienced candidates across Coimbatore, Salem, and Erode constituencies.",
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
    id: "6",
    title: "Kongu Belt: 29 Seats, Three Major Fronts — Here's What's at Stake",
    summary: "Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur and Nilgiris districts form the Kongu belt — a 29-seat region that no major party can afford to lose in 2026.",
    content: "The Kongu region, spanning 29 assembly constituencies across seven districts — Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris — has historically played a decisive role in Tamil Nadu's electoral outcomes, and 2026 is no different.\n\nThe DMK is pursuing an aggressive campaign to improve on its 2021 performance in the region, with senior ministers holding multiple rallies. The AIADMK, which traditionally holds the region, is defending key seats while contending with a resurgent DMK and a competitive TVK.\n\nTamilaga Vetri Kazhagam (TVK), contesting its first assembly election, has projected ambitions of making inroads across the Kongu constituencies, particularly among younger voters.\n\nKey watch seats include Coimbatore South, Erode East, Namakkal, Tiruchengodu, and Pollachi.",
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
    id: "7",
    title: "Record Women Candidates in 2026 TN Polls — Kongu Districts Lead",
    summary: "Political parties have fielded significantly more women candidates this election cycle, with constituencies in Tiruppur, Coimbatore, and Salem seeing notable increases.",
    content: "The 2026 Tamil Nadu Assembly elections mark a meaningful step forward in women's political representation, with all major parties having fielded a higher proportion of women candidates compared to previous cycles.\n\nIn the Kongu region, constituencies such as Avanashi, Tiruppur North, Dharapuram, and Namakkal have women candidates from at least two major fronts each.\n\nWomen voters also form a near-equal share of the registered electorate in districts like Coimbatore and Tiruppur, and parties have customised their outreach accordingly.\n\nThe Election Commission has mandated women-managed polling booths in at least one location per constituency.",
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
    id: "8",
    title: "Global Markets Jitter as Trump Threatens Strikes on Iran Infrastructure",
    summary: "Oil prices and stock indices spiked globally as President Trump vowed severe strikes if Iran does not reopen the Strait of Hormuz, escalating the five-week U.S.-Iran conflict.",
    content: "Global financial markets experienced sharp volatility on April 6, 2026, as President Trump publicly declared he would rain 'hell' on Iran's energy infrastructure if Tehran did not reopen the Strait of Hormuz by the following day.\n\nBrent crude surged past $120 per barrel in early Asian trading, while the S&P 500 futures dropped over 2%. Gold hit a new all-time high as investors sought safe-haven assets.\n\nThe threat came hours after U.S. special forces conducted a dramatic rescue operation inside Iran to extract a downed F-15 airman. Iran responded by launching missiles and drones at Gulf oil facilities.\n\nJPMorgan CEO Jamie Dimon warned in his annual letter that the Iran conflict could cause oil and commodity supply shocks, making inflation 'stickier' and potentially forcing central banks to keep interest rates higher for longer.\n\nAnalysts noted that the episode highlights how rapidly geopolitical risks from war can translate into commodity price shocks and investor uncertainty, with implications for global economic stability.",
    category: "Business",
    district: "Coimbatore",
    image: imgGlobalMarkets,
    author: "The Kongu Times World Desk",
    date: "2026-04-06T14:00:00",
    views: 16500,
    trending: true,
    tags: ["markets", "oil prices", "iran", "trump", "economy"]
  },
  {
    id: "9",
    title: "Tiruppur Garment Exports Surpass ₹40,000 Crore — A New Milestone",
    summary: "Tiruppur's knitwear industry has crossed the ₹40,000 crore export mark for the first time in a single fiscal year, driven by sustainability practices and new global partnerships.",
    content: "Tiruppur's textile and garment sector has reached a landmark, with exports crossing the ₹40,000 crore mark for the first fiscal year on record. The achievement cements the city's position as the country's premier knitwear hub.\n\nIndustry leaders credit the growth to adoption of sustainable manufacturing practices including zero liquid discharge compliance, organic cotton sourcing, and improved supply chain transparency.\n\nThe Tiruppur Exporters' Association has announced a ₹2,000 crore investment plan to modernise production infrastructure and establish a dedicated fashion design institute.",
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
    id: "10",
    title: "Coimbatore Smart City Phase 2 Rolls Out with ₹500 Crore in New Infrastructure",
    summary: "The second phase of Coimbatore's Smart City project targets AI-powered traffic management, IoT-enabled water networks, and expanded digital access to government services.",
    content: "Coimbatore's Smart City initiative has entered its second phase, backed by a ₹500 crore outlay aimed at upgrading the city's core infrastructure through technology-led solutions.\n\nThe phase includes an AI-based traffic management system covering 120 major intersections, an IoT-enabled water supply network, and a digital governance portal.\n\nThe project also earmarks 15 km of dedicated cycling lanes, 50 acres of new public green space, and 10,000 smart LED streetlights.",
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
    id: "11",
    title: "Erode Turmeric Market Sees Price Surge on Global Curcumin Demand",
    summary: "Premium turmeric varieties at Erode's markets are fetching over ₹18,000 per quintal, driven by sustained international demand from pharmaceutical and health products sectors.",
    content: "Erode's turmeric market, one of Asia's largest, is experiencing a significant price upswing with premium grades crossing ₹18,000 per quintal. Traders and farmers attribute the rise to growing global demand for curcumin.\n\nFarmer groups in the region have expressed cautious optimism, noting that while better prices are welcome, volatility remains a concern.\n\nThe surge comes at an important moment ahead of the assembly elections, with farming community welfare featuring prominently in manifestos.",
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
    id: "12",
    title: "Italy Referendum Rejects PM Meloni's Justice Reforms — Opposition Energised",
    summary: "Italian voters overwhelmingly rejected proposed judicial reforms backed by PM Giorgia Meloni's coalition, with roughly 54% voting 'No' on high turnout.",
    content: "In a significant setback for Prime Minister Giorgia Meloni, Italian voters overwhelmingly rejected her proposed judicial reforms in a referendum held on March 23, 2026. Preliminary results showed roughly 54% voting 'No' versus 46% 'Yes' on high turnout.\n\nThe reforms aimed to restructure Italy's judiciary and had been a key plank of Meloni's coalition government programme. The defeat energises opposition parties ahead of the 2027 general elections.\n\nEven some centre-left leaders who had been divided on strategy celebrated the result as a clear signal of public discontent with the government's approach. Meloni's Brothers of Italy party is now reassessing its legislative priorities.",
    category: "Politics",
    district: "Coimbatore",
    image: imgAssembly,
    author: "The Kongu Times World Desk",
    date: "2026-03-23T20:00:00",
    views: 8400,
    trending: false,
    tags: ["italy", "referendum", "meloni", "europe", "politics"]
  },
  {
    id: "13",
    title: "Salem IT Corridor Approved — 5,000 Jobs Expected in Three Years",
    summary: "A 200-acre technology corridor in Salem has received state government approval, positioning the district as Tamil Nadu's next major IT destination.",
    content: "Salem is on course to become a significant technology hub in Tamil Nadu following state government approval of a 200-acre IT corridor project.\n\nThe corridor will be developed in phases, with the first phase focusing on roads, power, and data connectivity. Local educational institutions are expected to benefit from proximity to the corridor.",
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
    id: "14",
    title: "Nilgiris Tea Estates Transition to Organic Farming with State Support",
    summary: "Over 40 Nilgiris tea estates now hold organic certification, with another 100 in the pipeline, as growers respond to rising global demand for chemical-free produce.",
    content: "Tea plantations across the Nilgiris are undergoing a significant shift toward organic cultivation practices, supported by state subsidies and driven by growing consumer preference for sustainably produced beverages.\n\nMore than 40 estates have received full organic certification, and growers report price premiums of 20–30% on certified produce in export markets.",
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
    id: "15",
    title: "Namakkal Poultry Farms Deploy AI Monitoring — Productivity Gains Reported",
    summary: "AI-driven farm management tools are being adopted across Namakkal's poultry sector, India's largest egg-producing district, with early results showing measurable gains.",
    content: "Namakkal district, responsible for approximately 80% of Tamil Nadu's egg production, is embracing artificial intelligence to improve farm efficiency and animal welfare standards.\n\nSmart monitoring platforms are being installed across farms, providing real-time data on bird health indicators, feed conversion rates, and temperature regulation.",
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
    id: "16",
    title: "Karur Home Textile Cluster Receives ₹200 Crore Central Modernisation Fund",
    summary: "The central government has approved a ₹200 crore package to modernise Karur's home textile manufacturing cluster, with investments targeting machinery upgrades and design innovation.",
    content: "Karur's home textile industry — one of the country's largest producers of bed linen, towels, and kitchen textiles — is set to receive a significant boost through a ₹200 crore modernisation package.\n\nThe funds are earmarked for upgrading weaving and finishing machinery, establishing quality testing laboratories, and setting up design innovation centres.",
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
    id: "17",
    title: "Coimbatore Hosts International Sustainable Agriculture Forum",
    summary: "Researchers and farmers from 15 countries gathered in Coimbatore to examine water conservation, precision farming, and climate-adaptive crop varieties suited to the Kongu region.",
    content: "Coimbatore's agricultural university played host to a three-day international forum on sustainable agriculture, drawing over 500 delegates from 15 countries.\n\nSessions covered precision irrigation technology, drip-and-mulch combinations, soil carbon enhancement, and new variety development for crops like groundnut, maize, and millets.",
    category: "Education",
    district: "Coimbatore",
    image: imgConference,
    author: "The Kongu Times Staff",
    date: "2026-04-01T13:00:00",
    views: 6100,
    trending: false,
    tags: ["agriculture", "sustainable farming", "coimbatore", "international forum"]
  },
  {
    id: "18",
    title: "Hungary Opposition Widens Lead Over Orbán Ahead of April 12 Elections",
    summary: "Recent opinion polls show the opposition alliance led by Péter Tisza widening its lead over PM Viktor Orbán's Fidesz party, potentially ending his 16-year rule.",
    content: "A consortium of recent opinion polls shows the opposition alliance led by conservative Péter Tisza widening its lead over Prime Minister Viktor Orbán's Fidesz party ahead of April 12 elections.\n\nIf this trend holds, it could break Orbán's 16-year rule and unlock long-blocked EU funding. Analysts warn the race is still close and the outcome remains uncertain.\n\nThe election has drawn international attention as a potential inflection point for European politics, with observers noting that a change in Budapest could shift dynamics within the EU on issues ranging from Ukraine policy to rule-of-law standards.",
    category: "Politics",
    district: "Coimbatore",
    image: imgKonguDev,
    author: "The Kongu Times World Desk",
    date: "2026-04-01T15:00:00",
    views: 7600,
    trending: false,
    tags: ["hungary", "orban", "elections", "europe", "politics"]
  },
  {
    id: "19",
    title: "Denmark Election Yields Hung Parliament — Frederiksen Seeks Third Term",
    summary: "PM Mette Frederiksen's Social Democrats fell to their worst result since 1903, but centrist Moderates emerge as kingmakers in new coalition talks.",
    content: "In the March 24 vote, PM Mette Frederiksen's Social Democrats fell to their worst result since 1903, with a projected 38 seats down from 50, though they remained the single largest party.\n\nThe left- and right-wing blocs both fell short of a majority (84 vs 77 seats), making the centrist Moderates (14 seats) potential kingmakers. Frederiksen has been asked by the monarch to seek a coalition despite losses.\n\nThe election reflects voter fatigue with long-time incumbents amid cost-of-living and social issues.",
    category: "Politics",
    district: "Coimbatore",
    image: imgAssembly,
    author: "The Kongu Times World Desk",
    date: "2026-03-25T12:00:00",
    views: 5200,
    trending: false,
    tags: ["denmark", "elections", "europe", "coalition", "politics"]
  },
  {
    id: "20",
    title: "China Proposes Strict Rules for AI 'Digital Humans' — Minors Protected",
    summary: "China's cybersecurity regulator has issued draft regulations for AI-driven virtual avatars, requiring clear labelling of AI content and banning intimate interactions with minors.",
    content: "China's cybersecurity regulator issued draft regulations for AI-driven 'digital humans' (virtual avatars), requiring clear labelling of AI-generated content and banning 'intimate' interactions with minors.\n\nThe proposals also forbid digital personas from spreading politically sensitive or illegal content. This move signals Beijing's push to regulate the booming AI media sector.\n\nIndustry observers note that the regulations balance innovation with strict content controls and youth protection, in line with China's broader tech governance strategies.",
    category: "Technology",
    district: "Coimbatore",
    image: imgArtemis,
    author: "The Kongu Times World Desk",
    date: "2026-04-03T09:00:00",
    views: 6800,
    trending: false,
    tags: ["china", "AI", "regulation", "digital humans", "technology"]
  },
];
