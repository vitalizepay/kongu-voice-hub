import { useState, useMemo } from "react";
import { Search, Download, Filter, ChevronUp, ChevronDown, Vote, Users, MapPin, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import electionData from "@/data/electionData.json";

type SortKey = "acNo" | "constituency";
type SortDir = "asc" | "desc";
type PartyFilter = "all" | "dmk" | "aiadmk" | "tvk" | "ntk";

const partyConfig = {
  dmk: { label: "DMK (SPA)", gradient: "linear-gradient(135deg, #000000, #8B0000)", text: "text-white", bg: "bg-gradient-to-r from-black to-red-900", badge: "bg-black text-white" },
  aiadmk: { label: "AIADMK (NDA)", gradient: "linear-gradient(135deg, #006400, #00A86B)", text: "text-white", bg: "bg-gradient-to-r from-green-800 to-green-500", badge: "bg-green-700 text-white" },
  tvk: { label: "TVK", gradient: "linear-gradient(135deg, #FFD700, #FFC300)", text: "text-black", bg: "bg-gradient-to-r from-yellow-400 to-yellow-300", badge: "bg-yellow-400 text-black" },
  ntk: { label: "NTK", gradient: "linear-gradient(135deg, #800000, #A52A2A)", text: "text-white", bg: "bg-gradient-to-r from-red-900 to-red-700", badge: "bg-red-900 text-white" },
};

export default function Elections2026() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("acNo");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [partyFilter, setPartyFilter] = useState<PartyFilter>("all");
  const [highlightParty, setHighlightParty] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let data = [...electionData];
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (r) =>
          r.constituency.toLowerCase().includes(q) ||
          r.dmk.toLowerCase().includes(q) ||
          r.aiadmk.toLowerCase().includes(q) ||
          r.tvk.toLowerCase().includes(q) ||
          r.ntk.toLowerCase().includes(q) ||
          String(r.acNo).includes(q)
      );
    }
    data.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === "number" && typeof bVal === "number") return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      return sortDir === "asc" ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal));
    });
    return data;
  }, [search, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ChevronUp className="w-3 h-3 opacity-30" />;
    return sortDir === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />;
  };

  const exportCSV = () => {
    const header = "AC No,Constituency,DMK (SPA),AIADMK (NDA),TVK,NTK\n";
    const rows = filtered.map((r) => `${r.acNo},"${r.constituency}","${r.dmk}","${r.aiadmk}","${r.tvk}","${r.ntk}"`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "tn_election_candidates_2026.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const visibleParties = partyFilter === "all" ? ["dmk", "aiadmk", "tvk", "ntk"] : [partyFilter];

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>Tamil Nadu Election Candidates 2026 — The Kongu Times</title>
        <meta name="description" content="Complete constituency-wise candidate list for Tamil Nadu Assembly Elections 2026 — DMK, AIADMK, TVK, NTK across all 234 seats." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/20">
              <Vote className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Elections 2026</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-black leading-tight mb-3">
            Tamil Nadu Election<br />Candidates 2026
          </h1>
          <p className="text-sm md:text-base opacity-70 max-w-xl mb-8">
            Constituency-wise candidates across major parties — DMK (SPA), AIADMK (NDA), TVK, and NTK — for all 234 Assembly seats.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: "Constituencies", value: "234" },
              { icon: Users, label: "Major Parties", value: "4" },
              { icon: BarChart3, label: "Total Candidates", value: `${234 * 4}+` },
              { icon: Vote, label: "Polling Date", value: "Apr 23" },
            ].map((s) => (
              <div key={s.label} className="bg-background/10 backdrop-blur rounded-xl p-4">
                <s.icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-2xl font-display font-black">{s.value}</p>
                <p className="text-xs opacity-60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Legend */}
      <div className="container mx-auto px-4 -mt-4 mb-6 relative z-10">
        <div className="bg-card rounded-2xl shadow-lg p-4 flex flex-wrap gap-3 items-center">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">Party Colors:</span>
          {(Object.entries(partyConfig) as [string, typeof partyConfig.dmk][]).map(([key, cfg]) => (
            <button
              key={key}
              onClick={() => setHighlightParty(highlightParty === key ? null : key)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${cfg.badge} ${highlightParty === key ? "ring-2 ring-primary ring-offset-2 scale-105" : "opacity-80 hover:opacity-100"}`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: cfg.gradient }} />
              {cfg.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 mb-6">
        <div className="bg-card rounded-2xl shadow-sm p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search constituency or candidate name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          {/* Party filter */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <select
              value={partyFilter}
              onChange={(e) => setPartyFilter(e.target.value as PartyFilter)}
              className="pl-9 pr-8 py-2.5 rounded-xl bg-secondary text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="all">All Parties</option>
              <option value="dmk">DMK (SPA)</option>
              <option value="aiadmk">AIADMK (NDA)</option>
              <option value="tvk">TVK</option>
              <option value="ntk">NTK</option>
            </select>
          </div>

          {/* Export */}
          <button onClick={exportCSV} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            <Download size={14} /> Export CSV
          </button>

          {/* Result count */}
          <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
            {filtered.length} of {electionData.length} constituencies
          </span>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="container mx-auto px-4 mb-12 hidden md:block">
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="sticky top-0 bg-card z-10 px-4 py-3 text-left cursor-pointer select-none hover:bg-secondary/50 transition-colors" onClick={() => toggleSort("acNo")}>
                    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      AC No. <SortIcon col="acNo" />
                    </div>
                  </th>
                  <th className="sticky top-0 bg-card z-10 px-4 py-3 text-left cursor-pointer select-none hover:bg-secondary/50 transition-colors" onClick={() => toggleSort("constituency")}>
                    <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Constituency <SortIcon col="constituency" />
                    </div>
                  </th>
                  {visibleParties.map((p) => (
                    <th key={p} className="sticky top-0 z-10 px-4 py-3 text-left" style={{ background: partyConfig[p as keyof typeof partyConfig].gradient }}>
                      <span className={`text-xs font-bold uppercase tracking-wider ${partyConfig[p as keyof typeof partyConfig].text}`}>
                        {partyConfig[p as keyof typeof partyConfig].label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, i) => (
                  <tr key={row.acNo} className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/10"}`}>
                    <td className="px-4 py-3 font-mono font-bold text-muted-foreground">{row.acNo}</td>
                    <td className="px-4 py-3 font-semibold text-foreground">{row.constituency}</td>
                    {visibleParties.map((p) => {
                      const cfg = partyConfig[p as keyof typeof partyConfig];
                      const val = row[p as keyof typeof row] as string;
                      const isHighlighted = highlightParty === p;
                      return (
                        <td key={p} className="px-4 py-2.5" style={isHighlighted ? { background: `${cfg.gradient}15` } : {}}>
                          <span
                            className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${cfg.badge}`}
                            style={{ opacity: val ? 1 : 0.3 }}
                          >
                            {val || "—"}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="container mx-auto px-4 mb-12 md:hidden space-y-3">
        {filtered.map((row) => (
          <div key={row.acNo} className="bg-card rounded-xl shadow-sm p-4 border border-border/50">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-mono font-bold text-primary text-sm">
                {row.acNo}
              </span>
              <h3 className="font-semibold text-foreground text-sm">{row.constituency}</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {(["dmk", "aiadmk", "tvk", "ntk"] as const).map((p) => {
                const cfg = partyConfig[p];
                const val = row[p];
                if (partyFilter !== "all" && partyFilter !== p) return null;
                return (
                  <div key={p} className="rounded-lg p-2.5" style={{ background: cfg.gradient }}>
                    <p className={`text-[10px] uppercase tracking-wider font-bold ${cfg.text} opacity-70`}>{cfg.label}</p>
                    <p className={`text-xs font-semibold ${cfg.text} mt-0.5`}>{val || "—"}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
