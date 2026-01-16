import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.jsonrendercn.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.jsonrendercn.com/docs',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ]
}