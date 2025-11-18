import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { projects as PROJECTS } from "../data/projects";

function Chip({ label, selected, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={selected}
            className={`rounded-full px-3 py-1.5 text-sm ring-1 transition
        ${
                selected
                    ? "bg-gradient-to-r from-green-500 to-sky-500 text-black ring-transparent"
                    : "bg-white/5 text-white/80 ring-white/10 hover:bg-white/10 hover:text-white"
            }`}
        >
            {label}
        </button>
    );
}

Chip.propTypes = {
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

const KIND_FILTERS = [
    { label: "All", value: "all" },
    { label: "Client", value: "client" },
    { label: "Experiments", value: "experiment" },
    { label: "Internal tools", value: "internal" },
];

export default function Portfolio() {
    const [query, setQuery] = useState("");
    const [selectedTech, setSelectedTech] = useState(new Set());
    const [sort, setSort] = useState("newest");
    const [kind, setKind] = useState("all");

    const allTech = useMemo(
        () => Array.from(new Set(PROJECTS.flatMap((p) => p.tech))).sort(),
        []
    );

    const toggleTech = (t) => {
        const next = new Set(selectedTech);
        next.has(t) ? next.delete(t) : next.add(t);
        setSelectedTech(next);
    };

    const clearFilters = () => {
        setSelectedTech(new Set());
        setKind("all");
    };

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        let items = PROJECTS.filter((p) => {
            const matchesQuery =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tech.some((t) => t.toLowerCase().includes(q));

            const matchesTech =
                selectedTech.size === 0 ||
                Array.from(selectedTech).every((t) => p.tech.includes(t));

            const matchesKind = kind === "all" || p.kind === kind;

            return matchesQuery && matchesTech && matchesKind;
        });

        items.sort((a, b) => {
            if (sort === "az") return a.title.localeCompare(b.title);
            const da = new Date(a.date).getTime() || 0;
            const db = new Date(b.date).getTime() || 0;
            return sort === "newest" ? db - da : da - db;
        });

        return items;
    }, [query, selectedTech, sort, kind]);

    return (
        <section
            id="portfolio"
            aria-labelledby="portfolio-title"
            className="min-h-screen px-4 pt-24 pb-12"
        >
            <div className="mx-auto max-w-7xl">
                <header className="text-center mb-8">
                    <h1
                        id="portfolio-title"
                        className="text-3xl md:text-4xl font-bold text-white"
                    >
                        Selected Work & Experiments
                    </h1>
                    <p className="mt-2 text-white/70 max-w-2xl mx-auto text-sm md:text-base">
                        A mix of client projects, internal tools, and experiments. For full
                        products under the GJO umbrella, see{" "}
                        <Link to="/ventures" className="text-sky-400 hover:underline">
                            Ventures
                        </Link>
                        .
                    </p>
                </header>

                {/* Controls row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Search */}
                    <div className="flex-1">
                        <label htmlFor="proj-search" className="sr-only">
                            Search projects
                        </label>
                        <input
                            id="proj-search"
                            type="search"
                            placeholder="Search by title, tech, or description…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full rounded-md border border-white/10 bg-gray-950 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {/* Sort */}
                    <div className="flex gap-3 md:w-auto">
                        <div className="md:w-40">
                            <label htmlFor="proj-kind" className="sr-only">
                                Filter by type
                            </label>
                            <select
                                id="proj-kind"
                                value={kind}
                                onChange={(e) => setKind(e.target.value)}
                                className="w-full rounded-md border border-white/10 bg-gray-950 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                                {KIND_FILTERS.map((k) => (
                                    <option key={k.value} value={k.value}>
                                        {k.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="md:w-44">
                            <label htmlFor="proj-sort" className="sr-only">
                                Sort projects
                            </label>
                            <select
                                id="proj-sort"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="w-full rounded-md border border-white/10 bg-gray-950 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                                <option value="newest">Newest first</option>
                                <option value="oldest">Oldest first</option>
                                <option value="az">A → Z</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tech filter chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {allTech.map((t) => (
                        <Chip
                            key={String(t)}
                            label={t}
                            selected={selectedTech.has(t)}
                            onClick={() => toggleTech(t)}
                        />
                    ))}
                    {(selectedTech.size > 0 || kind !== "all") && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="ml-2 rounded-full px-3 py-1.5 text-sm bg-white/0 text-white/70 hover:text-white underline"
                        >
                            Clear
                        </button>
                    )}
                </div>

                {/* Result count */}
                <div className="mt-4 text-sm text-white/60">
                    Showing {results.length} of {PROJECTS.length}
                </div>

                {/* Grid */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {results.map((p) => (
                        <article
                            key={p.title}
                            className="group rounded-xl bg-gradient-to-r from-green-500 to-sky-500 p-[1px] transition-shadow duration-200 hover:shadow-lg"
                        >
                            <div className="rounded-xl bg-gray-950 p-5 h-full flex flex-col">
                                <header>
                                    <h3 className="text-lg font-semibold text-white">
                                        {p.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-white/50">
                                        {p.kind === "client"
                                            ? "Client project"
                                            : p.kind === "internal"
                                                ? "Internal tool"
                                                : "Experiment"}
                                        {" • "}
                                        {new Date(p.date).toLocaleDateString(undefined, {
                                            year: "numeric",
                                            month: "short",
                                        })}
                                    </p>
                                </header>

                                <p className="mt-3 text-sm text-gray-200/80 flex-1">
                                    {p.description}
                                </p>

                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <li
                                            key={String(t)}
                                            className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/10"
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 flex gap-3">
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm
                          bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
                                        >
                                            Live
                                        </a>
                                    )}
                                    {p.repo && (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm
                          bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
                                        >
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty state */}
                {results.length === 0 && (
                    <div className="mt-12 rounded-xl bg-white/5 p-8 text-center ring-1 ring-white/10">
                        <p className="text-white/80">No projects match your filters.</p>
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-3 rounded-md px-3 py-1.5 text-sm
                  bg-gradient-to-r from-green-500 to-sky-500 text-black"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
