import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 — Page Not Found',
    description: 'This page does not exist.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative">

            {/* Background blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="max-w-2xl w-full text-center">

                {/* Terminal badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500/10 to-purple-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-8">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium font-mono">Error 404</span>
                </div>

                {/* Giant 404 */}
                <div className="relative mb-4">
                    <span className="text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-transparent select-none absolute inset-0 flex items-center justify-center blur-sm">
                        404
                    </span>
                    <h1 className="text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-r from-green-400 via-sky-400 to-purple-400 bg-clip-text text-transparent select-none">
                        404
                    </h1>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Lost in the void
                </h2>

                {/* Terminal-style message */}
                <div className="rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-1 ring-white/10 p-5 mb-8 text-left font-mono text-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-2 text-white/30 text-xs">gjo.dev — bash</span>
                    </div>
                    <p className="text-white/40">
                        <span className="text-green-400">~/gjo.dev</span>
                        <span className="text-white/30"> $ </span>
                        <span className="text-white/70">find . -name &quot;this-page&quot;</span>
                    </p>
                    <p className="text-red-400/80 mt-1">find: no results — page does not exist</p>
                    <p className="text-white/40 mt-1">
                        <span className="text-green-400">~/gjo.dev</span>
                        <span className="text-white/30"> $ </span>
                        <span className="text-sky-400 animate-pulse">▋</span>
                    </p>
                </div>

                {/* Description */}
                <p className="text-white/50 mb-10 leading-relaxed">
                    This page doesn&apos;t exist — or maybe it used to. Either way, let&apos;s get you back on track.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <svg className="relative z-10 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        <span className="relative z-10">Back Home</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </Link>

                    <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl ring-2 ring-white/20 text-white/90 font-semibold hover:bg-white/10 hover:ring-white/40 hover:scale-105 transition-all duration-300"
                    >
                        View Portfolio
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
}
