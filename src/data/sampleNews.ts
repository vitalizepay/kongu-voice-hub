import imgCoimbatore from "@/assets/hero-coimbatore.jpg";
import imgTiruppur from "@/assets/news-tiruppur-textile.jpg";
import imgErode from "@/assets/news-erode-turmeric.jpg";
import imgSalem from "@/assets/news-salem-it.jpg";
import imgNilgiris from "@/assets/news-nilgiris-tea.jpg";
import imgNamakkal from "@/assets/news-namakkal-poultry.jpg";
import imgKarur from "@/assets/news-karur-textile.jpg";
import imgConference from "@/assets/news-coimbatore-conference.jpg";

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
  "Coimbatore Smart City project Phase 2 inaugurated with ₹500 crore investment",
  "Tiruppur garment exports cross ₹40,000 crore mark this fiscal year",
  "New IT corridor announced for Salem — 5,000 jobs expected",
  "Erode turmeric market registers record trading volume",
  "Nilgiris tea estate workers receive 20% wage hike after negotiations",
];

export const sampleArticles: Article[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
