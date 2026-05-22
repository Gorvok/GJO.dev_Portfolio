import type { NextConfig } from "next";

const securityHeaders = [
    // Prevent clickjacking
    { key: 'X-Frame-Options', value: 'DENY' },
    // Prevent MIME type sniffing
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    // Control referrer information
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    // Force HTTPS for 1 year, include subdomains
    { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
    // Disable unused browser features
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
    // Content Security Policy
    {
        key: 'Content-Security-Policy',
        value: [
            "default-src 'self'",
            // Next.js requires unsafe-inline for hydration; JSON-LD uses dangerouslySetInnerHTML
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: blob:",
            // Vercel Analytics + Speed Insights + Formspree
            "connect-src 'self' https://formspree.io https://vitals.vercel-insights.com https://va.vercel-scripts.com",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self' https://formspree.io",
        ].join('; '),
    },
];

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    reactStrictMode: true,
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
