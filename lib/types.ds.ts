import { StaticImageData } from "next/image";

export type PortfolioData = {
    mainData: {
        title: string;
        title2: string;
        description: string;
    };
    filterCategories: string[];
    projects: Project[];
};

export type Project = {
    projectTitle: string;
    slug: string;
    isExternalRedirect: boolean;
    description?: string;
    category?: string[];
    liveLink?: { url: string; name: string };
    client?: string;
    duration?: string;
    mainImage?: StaticImageData;
    images?: Image[];
    imagesLightbox?: Image;
    video?: Video;
    techStack?: TechStack[];
    functionality?: Functionality[];
};

export type Image = {
    image: StaticImageData;
    alt: string;
};

export type Video = {
    thumbnail: StaticImageData;
    url: string;
};

export type TechStack = {
    name: string;
};

export type Functionality = {
    title: string;
    description?: string;
    list: Functionality[] | string[];
};