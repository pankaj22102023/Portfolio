interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://localhost:3000';

export const seoData: PageSEO = {
    home: {
        title: 'Pankaj Prajapat | Portfolio',
        description: 'Full Stack Web Developer | Next.js |Node.js | React | Typescript | React Native | Portfolio',
        keywords: ['Pankaj Prajapat', 'Full Stack Web Developer', "Web Developer", 'NextJs', 'Node.js', 'ReactJs', 'Typescript', 'React Native', 'portfolio', 'Personal Portfolio'],
        canonicalUrl: siteUrl,
    },
};

export const getPortfolioProjectSEO = (id: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Portfolio | Web Developer | App Developer`,
    description: excerpt,
    keywords: ['portfolio', 'project', title.toLowerCase()],
    canonicalUrl: `${siteUrl}/portfolio/${id}`,
});

export const getBlogPostSEO = (slug: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Blog`,
    description: excerpt,
    keywords: ['blog', 'article', ...title.toLowerCase().split(' ')],
    canonicalUrl: `${siteUrl}/blog/${slug}`,
});