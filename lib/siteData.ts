import HeroAvatar from '@/public/images/hero-avatar.jpg';
import TestimonialAvatar from '@/public/images/testimonial-avatar.jpg';
import Logo from '@/public/images/client-logo.png';
import PostImage from '@/public/images/blog-img.png'
import Image from '@/public/images/blog-single.png';
import { PortfolioData } from './types.ds';
// Projects 
import cyber from '@/public/images/projects/cyber.png';
import cyber1 from '@/public/images/projects/cyber1.png';
import accha from '@/public/images/projects/accha.png';
import accha1 from '@/public/images/projects/accha1.png';
import accha2 from '@/public/images/projects/acchawalacollege.png';
import tk from "@/public/images/projects/talent-kaksha.png";
import sg from "@/public/images/projects/spritegenix.png";

export const resumeUrl = 'https://drive.google.com/file/d/1RfZTMKeRyHF0Awi1mqBGfl7WXobTQ2FP/view';

export const headerData = {
    mainData: {
        firstName: 'Pankaj',
        secondName: 'Prajapat',
        phone: '+(91) 8076485917',
        email: 'er.pankaj.k4@gmail.com',
        copywriter: 'Pankaj Prajapat',
    },
    links: [
        {
            name: 'Resume',
            url: resumeUrl,
            icon: '',
        },
        {
            name: 'My DumpYard',
            url: '#',
            icon: '',
        }
    ],
    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/erpankajk4/',
            icon: 'bi bi-github',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/pankajk4/',
            icon: 'bi bi-linkedin',
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/+918076485917',
            icon: 'bi bi-whatsapp',
        },
    ]
};


export const aboutData = {
    mainData: {
        title: "Who I Am",
        title2: "About Me",
        heroAvatar: HeroAvatar,
        jobTitle: "Full Stack Web Developer. Product Designer",
        description: "Detail-oriented professional with over 4 years in web development and 2 years in healthcare & consulting. Skilled in customer service, networking, and problem-solving. Proficient in MERN Stack and Next.js as a Full Stack Developer.",
        yearsOfExperience: "4",
        hoursOfWorking: "20",
        projectsDone: "50",
        typewriter: ['Namaskaram Everyone!', 'I\'m Pankaj Prajapat'],
    },
    skills: [
        {
            id: 1,
            name: 'Full Stack',
            percent: '80',
            icon: 'bi bi-camera',
        },
        {
            id: 2,
            name: 'Frontend',
            percent: '98',
            icon: 'bi bi-code-slash',
        },
        {
            id: 3,
            name: 'Backend',
            percent: '85',
            icon: 'bi bi-search',
        },
    ]
};


export const portfolioData: PortfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Major Works",
        description: "A showcase of my key projects spanning web development."
    },
    filterCategories: ["All", "Major", "Full-Stack", "Frontend"],
    projects: [
        {
            projectTitle: 'CyberSecurity One Stop Solution',
            slug: 'cybersecurity-one-stop-solution',
            isExternalRedirect: false,
            description: 'Cybersecurity One Stop is a premier cybersecurity expert listing platform that connects businesses and individuals with top-tier cybersecurity professionals, fraud investigators, and digital risk consultants.',
            category: ["Major", 'Full-Stack'],
            liveLink: {
                url: 'https://cyber-security-one-stop-ui-git-main-divyansh-barnwals-projects.vercel.app/',
                name: 'cybersecurityonestop.com',
            },
            client: 'Divine Venters (Isha Foundation)',
            duration: '3 Months',
            mainImage: cyber,
            images: [
                {
                    image: cyber,
                    alt: 'web image'
                },
                {
                    image: cyber1,
                    alt: 'mobile image'
                }
            ],
            // imagesLightbox: {
            //     image: Image,
            //     alt: 'Image Alt'
            // },
            // video: {
            //     thumbnail: Image,
            //     url: '#'
            // },
            techStack: [
                { name: 'Next.js' },
                { name: 'TypeScript' },
                { name: 'JWT' },
                { name: 'Zustland' },
                { name: 'Google OAuth' },
                { name: 'Apollo' },
                { name: 'Node.js' },
                { name: 'Express' },
                { name: 'GraphQL' },
                { name: 'PostgreSQL' },
                { name: 'Tailwind CSS' },
                { name: 'Prisma' },
                { name: 'AWS' },
                { name: 'Razorpay' },
                { name: 'OTPLESS' },
                { name: 'Zoho Email' },
            ],
            functionality: [
                {
                    title: "User Functionalities",
                    list: [
                        "Authentication via Email/Phone and Password or Google.",
                        "Create and Edit Profile.",
                        "Change Password via Email OTP.",
                    ],
                },
                {
                    title: "Admin Functionalities",
                    list: [
                        {
                            title: "User:",
                            list: [
                                "Search and Filter Users by Name, Email, Phone, Alphabetically, CreatedAt, UpdatedAt, and Feedback Status.",
                                "Block Users.",
                            ]
                        },
                        {
                            title: "Expert:",
                            list: [
                                "Search and Filter Experts by Name, Email, Phone, Alphabetically, CreatedAt, UpdatedAt, Feedback, Verification, Subscription, Testimonials, Ad Banners, Admin Notices, and Reviews.",
                                "Block and Verify Experts.",
                                "Delete User Reviews on Expert Request.",
                                "Send Personalized Notices to Experts.",
                            ]
                        },
                        {
                            title: "UI:",
                            list: [
                                "Manage Categories (Add, Edit, Delete: Icon, Name, Slug, Description, Group, Order).",
                                "Run Desktop and Mobile Ads on Home and Search Pages.",
                                "Select and Display User/Expert Feedback.",
                                "Change Admin Password.",
                            ]
                        },
                    ],
                },
                {
                    title: "Cyber Expert Functionalities",
                    list: [
                        "Create, Update, and Edit an SEO-Friendly Profile Page.",
                        "Obtain a Trusted Green Badge by Verifying Identity via Documents.",
                        "Run Ads on Home and Search Pages via Subscription.",
                        "Set Separate Ad Banners for Mobile and Web.",
                    ]
                },
                {
                    title: "Platform Functionalities",
                    list: [
                        "Global Search with Filters and Sorting by Category, Location, or Name.",
                        "Support for Users and Experts Without Login.",
                        "JWT-Based Authentication.",
                        "Admin, User, and Expert Can Be Logged in Simultaneously.",
                    ],
                }
            ]
        },
        {
            projectTitle: "Accha Wala College",
            slug: 'accha-wala-college',
            isExternalRedirect: false,
            description: "Developed a comprehensive search engine providing access to detailed information on 25,000+ colleges and 6,000+ courses across India as well as India.",
            category: ["Major", "Full-Stack"],
            liveLink: {
                url: 'https://acchawalacollege.com/',
                name: 'acchawalacollege.com',
            },
            client: "Accha Wala College",
            duration: "3 Months",
            mainImage: accha,
            images: [
                {
                    image: accha,
                    alt: 'web image'
                },
                {
                    image: accha1,
                    alt: 'web image'
                },
            ],
            techStack: [
                { name: 'Next.js' },
                { name: 'TypeScript' },
                { name: 'JWT' },
                { name: 'Redux' },
                { name: 'Apollo' },
                { name: 'Strapi' },
                { name: 'GraphQL' },
                { name: 'PostgreSQL' },
                { name: 'Tailwind CSS' },
                { name: 'DigitalOcean' },
                { name: 'Razorpay' },
            ],
            functionality: [
                {
                    title: "Functionalities",
                    list: [
                        "User authentication with multiple options including Email/Phone & Password, or Google Sign-In.",
                        "Advanced search and filtering to explore over 25,000+ colleges and 6,000+ courses across India.",
                        "Personalized user profile creation and management with the ability to update personal details.",
                        "Password recovery and change option using secure Email OTP verification.",
                        "Admin panel powered by Strapi for adding, updating, and deleting colleges, courses, blogs, news, testimonials, etc.",
                        "Course and college detail pages with in-depth information including fee structure, admission criteria, and placement records.",
                        "Bookmark feature allowing users to save their favorite colleges or courses.",
                        "Integration with Razorpay for smooth and secure payment processing for premium features or subscriptions.",
                        "Real-time data updates and seamless content management through Strapi CMS.",
                        "Mobile-optimized and responsive UI built with Tailwind CSS for enhanced user experience.",
                        "Fast and secure API communication using GraphQL and Apollo Client.",
                        "Efficient backend management with PostgreSQL and hosted on DigitalOcean.",
                    ],
                },
            ]
        },
        {
            projectTitle: "Sprite Genix",
            slug: 'sprite-genix',
            isExternalRedirect: true,
            description: "",
            category: ["Major", "Frontend"],
            liveLink: {
                url: 'https://spritegenix.com/',
                name: 'spritegenix.com',
            },
            client: "Sprite Genix",
            mainImage: sg,
        },
        {
            projectTitle: "TalentKaksha",
            slug: 'talentkaksha',
            isExternalRedirect: true,
            description: "",
            category: ["Frontend"],
            liveLink: {
                url: 'https://talent-kakshsa-ui.vercel.app/',
                name: 'talentkaksha.com',
            },
            client: "TalentKaksha",
            mainImage: tk,
        },
        {
            projectTitle: "Accha Wala College2",
            slug: 'accha-wala-college2',
            isExternalRedirect: true,
            category: ["Major", "Frontend"],
            mainImage: accha2,
        }
    ],
};

export const TechStackData = {
    mainData: {
        title: "Tech Stack & Skills",
        title2: "Technologies I Work With",
        description: "A collection of tools, frameworks, and technologies I have experience / familiar with."
    },
    services: [
        // Core Skills
        {
            number: '01',
            icon: 'bi bi-code-slash',
            title: "Programming Languages",
            description: 'JavaScript, TypeScript, HTML, CSS',
        },
        // Frontend
        {
            number: '02',
            icon: 'bi bi-credit-card-2-front',
            title: 'Frontend Development',
            description: 'Next.js, React.js, React Native',
        },
        {
            number: '03',
            icon: 'bi bi-laptop',
            title: "UI & Styling Libraries",
            description: 'Tailwind CSS, SCSS, ShadCN, Material UI, Bootstrap, Flowbite, Aceternity',
        },
        {
            number: '04',
            icon: 'bi bi-layers',
            title: "Animations & Motion",
            description: 'Framer Motion, GSAP, AOS, WOW.js',
        },
        // Backend
        {
            number: '05',
            icon: 'bi bi-hdd-network',
            title: 'Backend Development',
            description: 'Node.js, Express.js, Nest.js',
        },
        {
            number: '06',
            icon: 'bi bi-graph-up-arrow',
            title: 'GraphQL & API Handling',
            description: 'Apollo Client, GraphQL, REST APIs, TanStack Query, Axios',
        },
        // Databases
        {
            number: '07',
            icon: 'bi bi-database-add',
            title: "Databases & ORM",
            description: 'PostgreSQL, MongoDB, Mongoose, Prisma',
        },
        // Authentication & Security
        {
            number: '08',
            icon: 'bi bi-shield-lock',
            title: 'Authentication & Security',
            description: 'NextAuth.js, Firebase Auth, Passport.js, AppWrite, JWT',
        },
        // State Management
        {
            number: '09',
            icon: 'bi bi-diagram-3',
            title: 'State Management',
            description: 'Redux Toolkit, Zustand',
        },
        // Essential Libraries
        {
            number: '10',
            icon: 'bi bi-gear',
            title: 'Essential Libraries',
            description: 'Zod, Eslint, React Hook Form, Swiper, Socket.io & many more...',
        },
        // CMS & Headless CMS
        {
            number: '11',
            icon: 'bi bi-file-earmark-code',
            title: 'CMS & Headless CMS',
            description: 'Strapi, Firebase, AppWrite',
        },
        // Testing
        {
            number: '12',
            icon: 'bi bi-code',
            title: 'Testing Frameworks',
            description: 'Jest',
        },
        // DevOps & Deployment
        {
            number: '13',
            icon: 'bi bi-box-seam',
            title: 'DevOps & Deployment',
            description: 'Docker, Vercel, Digital Ocean, AWS Amplify, hostinger VPS, Netlify, GitHub Actions, CI/CD Pipelines',
        },
        // AI Tools
        {
            number: '14',
            icon: 'bi bi-cpu',
            title: 'AI Tools Used',
            description: 'ChatGPT, Perplexity, DeepSeek',
        }
    ]
};

export const testimonialData = {
    mainData: {
        title: "Testimonial",
        title2: "What People Say",
    },
    testimonial: [
        {
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis',
            name: 'Sandra Radford',
            jobTitle: 'Project Manager',
            avatar: TestimonialAvatar,
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis',
            name: 'Sandra Radford',
            jobTitle: 'Project Manager',
            avatar: TestimonialAvatar,
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis',
            name: 'Sandra Radford',
            jobTitle: 'Project Manager',
            avatar: TestimonialAvatar,
        },
    ]
};

export const resumeData = {
    mainData: {
        title: "Resume",
        title2: "Education & Experience",
        description: "A brief overview of my academic background and professional journey in web development and product management.",
    },
    resumeDoc: {
        url: resumeUrl,
        icon: "bi-file-earmark-arrow-down",
        title: "Download Resume"
    },
    education: [
        {
            date: '2015 - 2018',
            degree: 'Bachelor Degree',
            university: 'YMCA University of Science & Technology, Faridabad',
        },
        {
            date: '2012 - 2015',
            degree: 'Secondary Education',
            university: 'C.D.L. Govt. Polytechnic Institute, Nathusari Chopta',
        },
        {
            date: '2011 - 2012',
            degree: 'Matriculation',
            university: 'M.V.M. sr. sec. School, Faridabad',
        },
    ],
    experience: [
        {
            date: 'Jan 2021 - Present',
            degree: 'Sprite Genix',
            university: '@Product Designer @Full Stack Developer',
        },
        {
            date: 'Sep 2018 - Dec 2020',
            degree: 'Veda Ayurveda',
            university: '@Business',
        },
    ]
};


export const clientsData = {
    mainData: {
        title2: "Clients & Collaborations",
        title: "Brands & Businesses I've Worked With",
        description: "I've had the privilege of collaborating with startups, businesses, and organizations across various industries. Here are some of the amazing clients I've worked with.",
    },
    clients: [
        {
            name: "Client One",
            lightLogo: Logo,
            darkLogo: Logo,
            url: "#",
        },
        {
            name: "Client Two",
            lightLogo: Logo,
            darkLogo: Logo,
            url: "#",
        },
        {
            name: "Client Three",
            lightLogo: Logo,
            darkLogo: Logo,
            url: "#",
        },
        {
            name: "Client Four",
            lightLogo: Logo,
            darkLogo: Logo,
            url: "#",
        },
        {
            name: "Client Five",
            lightLogo: Logo,
            darkLogo: Logo,
            url: "#",
        },
        {
            name: "Client Six",
            lightLogo: Logo,
            darkLogo: Logo,
            url: "#",
        },
    ],
};



export const blogData = {
    mainData: {
        title: "Blog",
        title2: "Latest Blog Posts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    posts: [
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Nov 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                {
                    image: Image,
                    alt: 'Image Alt'
                }
            ],
            imagesLightbox: {
                image: Image,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: Image,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: '#Tag1' },
                { name: '#Tag2' },
                { name: '#Tag3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Nov 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                {
                    image: Image,
                    alt: 'Image Alt'
                }
            ],
            imagesLightbox: {
                image: Image,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: Image,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: '#Tag1' },
                { name: '#Tag2' },
                { name: '#Tag3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Nov 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                {
                    image: Image,
                    alt: 'Image Alt'
                }
            ],
            imagesLightbox: {
                image: Image,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: Image,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: '#Tag1' },
                { name: '#Tag2' },
                { name: '#Tag3' }
            ]
        },
    ],

};

export const contactData = {
    mainData: {
        title: "Get in Touch",
        title2: "Contact Me",
        title3: "Let's Connect",
        description: "Have a project in mind, want to hire me, a question, or just want to say hi? Feel free to reach out. I’d love to connect and discuss how we can work together!",
        phone: "+91 8076485917",
        email: "er.pankaj.k4@gmail.com",
        address: "Sector 18, Faridabad, Haryana, India - 121002",
    }
};


export const mapData = {
    mainData: {
        lat: -3.745,
        lng: -38.523,
    },
};