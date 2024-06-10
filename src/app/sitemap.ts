import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-blush-six-55.vercel.app',
      lastModified: new Date()
    }
  ]
}
