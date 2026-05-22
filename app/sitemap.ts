import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { ventures } from '@/data/ventures';
import { services } from '@/data/services';

const BASE_URL = 'https://gjo.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/ventures`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
        url: `${BASE_URL}/portfolio/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: 'monthly',
        priority: p.featured ? 0.8 : 0.6,
    }));

    const ventureRoutes: MetadataRoute.Sitemap = ventures.map((v) => ({
        url: `${BASE_URL}/ventures/${v.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: v.highlight ? 0.8 : 0.6,
    }));

    const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
        url: `${BASE_URL}/services/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...ventureRoutes, ...projectRoutes, ...serviceRoutes];
}
