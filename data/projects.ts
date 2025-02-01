export type Project = {
    project: string;
    desc: string;
    github?: string;
    deploy: {
        url?: string;
    };
    alt: string;
    img: string;
    badges?: string[];
    children?: JSX.Element | JSX.Element[];
    type: ProjectType;
};

export enum ProjectType {
    Personal,
    Collaborative,
    OpenSource,
    Packages,
    Professional,
};

export const projects: Project[] = [
    {
        project: "Asteroids",
        desc: "A sophisticated reimagining of the classic Asteroids arcade game built using Next.js and TypeScript. Features fluid, physics-based animations, responsive keyboard controls, and dynamic difficulty scaling that adapts to player skill. Implements custom game loop architecture with efficient collision detection algorithms, persistent high score tracking, and smooth particle effects for explosions. Optimized for both desktop and mobile play with touch controls.",
        deploy: {
            url: "https://octo-asteroids.vercel.app/",
        },
        github: "https://github.com/andrew87e/octo-asteroids",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/octo-asteroids/blob/main/public/screenshot.png?raw=true",
        badges: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Game Development", "Canvas API", "SASS"],
        type: ProjectType.Personal,
    },
    {
        project: "react-style-text",
        desc: "An advanced, performance-optimized NPM package that brings dynamic text animations to React applications. Features include granular control over animation timing, multiple pre-built animation styles, and comprehensive TypeScript support for enhanced developer experience. Built with styled-components for modular styling and framer-motion for butter-smooth animations. Includes extensive documentation, live examples, and automated testing suite. Optimized for bundle size and runtime performance.",
        deploy: {
            url: "https://www.npmjs.com/package/react-style-text",
        },
        github: "https://github.com/Andrew87E/react-style-text",
        alt: "Deployed Link",
        img: "https://i.imgur.com/cHlc6OM.png",
        badges: ["NPM Package", "React", "TypeScript", "Styled Components", "Framer Motion", "Component Library"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Tifco WMS Picking",
        desc: "A cutting-edge warehouse management system developed with SwiftUI for iOS and macOS. Features industrial-grade barcode scanning integration with support for multiple scanner types, real-time inventory synchronization, and AI-powered order picking optimization. Implements custom-designed UI components optimized for warehouse environments, complete offline functionality with automatic sync, and seamless integration with MSSQL databases. Includes advanced error prevention mechanisms and detailed activity logging. Reduced picking errors by 87% and improved order fulfillment speed by 35%.",
        deploy: {},
        github: "",
        alt: "Closed Source",
        img: "/assets/picking-screen-shot.jpg",
        badges: ["SwiftUI", "MSSQL", "Swift", "Enterprise Development", "REST API", "iOS", "macOS"],
        type: ProjectType.Professional,
    },
    {
        project: "Tifco WMS Mobile",
        desc: "An enterprise-grade warehouse management platform built with Flutter, enabling seamless operation across iOS, Android, and web platforms. Features comprehensive inventory management with real-time tracking, advanced shipping/receiving workflows with barcode integration, and detailed analytics dashboards. Implements sophisticated business logic for inventory optimization, including predictive stock management and automated reordering. Seamlessly integrates with existing ERP systems through RESTful APIs, with robust offline capabilities and data synchronization.",
        deploy: {},
        github: "",
        alt: "Closed Source",
        img: "/assets/wms_screenshot.jpg",
        badges: ["Flutter", "MSSQL", "Dart", "Cross-platform", "Enterprise", "Mobile Development", "Web"],
        type: ProjectType.Professional,
    },
    {
        project: "Flutter Weather App",
        desc: "A sophisticated cross-platform weather application built with Flutter, leveraging the OpenWeather API for accurate forecasting. Features an intuitive, animated UI with dynamic weather visualizations, location-based forecasting with background updates, and detailed meteorological metrics. Implements intelligent caching for offline access and bandwidth optimization, along with custom animations for various weather conditions. Includes widgets for home screen updates and push notifications for severe weather alerts.",
        deploy: {
            url: "https://flutter-weather-actual.web.app/",
        },
        github: "https://github.com/Andrew87E/Weather_App",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Weather_App/raw/master/assets/img/top.png",
        badges: ["Dart", "Flutter", "RESTful APIs", "Mobile Development", "Location Services", "State Management"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Dynamic State Explorer",
        desc: "A location-aware web application that automatically displays information about US states and cities based on the user's current location. Features include real-time geolocation through a custom IP detection API, dynamic content loading from Wikipedia, and comprehensive geographical data from GeoNames. Built with vanilla JavaScript and jQuery for optimal performance, the app includes interactive features like dark/light theme switching, population statistics, and a custom contact form. Users can simulate different locations using a VPN to explore various states' information. Implements local storage for enhanced performance and includes responsive design for all device sizes.",
        deploy: {
            url: "https://andrew87e.github.io/urban-octo-broccoli/"
        },
        github: "https://github.com/Andrew87E/urban-octo-broccoli",
        alt: "Deployed Link",
        img: "https://raw.githubusercontent.com/Andrew87E/urban-octo-broccoli/refs/heads/main/screenshot.png?token=GHSAT0AAAAAAC5QIKHQYSCY5MJBQ5P3GCDAZ46NZJA",
        badges: ["HTML", "CSS", "JavaScript", "jQuery", "Wikipedia API", "GeoNames API", "REST API", "Geolocation"],
        type: ProjectType.Personal
    },
    {
        project: "Weather API Server",
        desc: "A high-performance API server powering a modern weather application. Features intelligent caching with Redis and robust user management via PostgreSQL, optimizing third-party API consumption while delivering real-time weather data. Implements multiple weather data providers including OpenWeather, Pirate Weather, and Dark Sky for comprehensive coverage.",
        deploy: {},
        github: "https://github.com/Andrew87E/Weather_App",
        alt: "Deployed Link",
        img: "https://gnome-terminator.org/assets/images/terminator-top-gtk-dark.png",
        badges: [
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Redis",
            "RESTful APIs",
            "Microservices",
            "Docker",
            "Vercel",
            "OpenWeather",
            "Pirate Weather",
            "Dark Sky"
        ],
        type: ProjectType.OpenSource,
    },
    {
        project: "Edwards-Tech Website",
        desc: "A modern, high-performance company website for Edwards-Tech freelance services, built with Next.js and MongoDB. Features a dynamic content management system, responsive design with fluid animations, and comprehensive SEO optimization. Utilizes server-side rendering and static generation for optimal performance, implementing atomic design principles with Tailwind CSS. Includes A/B testing capabilities, integrated analytics dashboard for tracking user engagement, and automated deployment pipeline. Achieves perfect Lighthouse scores and sub-second load times.",
        deploy: {
            url: "https://symmetrical-broccoli.vercel.app/",
        },
        github: "https://github.com/Andrew87E/edwards-tech",
        alt: "Deployed Link",
        img: "/assets/edwards-tech-screenshot.png",
        badges: ["Next.js", "MongoDB", "React", "TypeScript", "Tailwind CSS", "Express", "REST API", "SASS"],
        type: ProjectType.Personal,
    },
    {
        project: "Password Generator",
        desc: "An advanced password generation tool built as both a Progressive Web App and Chrome extension. Features customizable password generation rules, password strength assessment, and secure storage capabilities. Implements cryptographically secure random generation, with options for special characters, numbers, and varying lengths. Works completely offline with PWA capabilities for installation on any device. Chrome extension seamlessly integrates with browser forms for convenient password generation.",
        deploy: {
            url: "https://andrew87e.github.io/Password-Generator/",
        },
        github: "https://github.com/Andrew87E/Password-Generator",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true",
        badges: ["HTML", "CSS", "JavaScript"],
        type: ProjectType.Personal,
    },
    {
        project: "Portfolio Website",
        desc: "A feature-rich portfolio and blog platform built with Next.js and MongoDB. Implements advanced SEO techniques including structured data, dynamic sitemap generation, and optimized meta tags, resulting in top search rankings. Features include an elegant dark mode implementation, lazy-loaded images with blur placeholders, and a custom markdown-based blog engine with code syntax highlighting. Includes integrated analytics for visitor tracking, automated deployment with GitHub Actions, and comprehensive content management system. Achieves 100/100 scores across all Lighthouse metrics.",
        deploy: {
            url: "https://www.andrewedwards.dev/",
        },
        github: "https://github.com/Andrew87E/Edwards.codes",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Edwards.codes/raw/main/public/img/KfIFDWD.png",
        badges: ["Next.js", "MongoDB", "React", "TypeScript", "Tailwind CSS", "SEO Optimization", "Content Management"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Road Trip Planner",
        desc: "A comprehensive road trip planning application that combines route optimization, fuel cost estimation, and entertainment planning. Features include real-time gas price updates, intelligent route optimization with multiple waypoints, and personalized Spotify playlist generation based on trip duration and music preferences. Integrates multiple APIs including Google Maps, GasBuddy, and Spotify. Implements local storage for saved trips and offline access to trip details.",
        deploy: {
            url: "https://andrew87e.github.io/Travel-Planner/",
        },
        github: "https://github.com/Andrew87E/Travel-Planner",
        alt: "Deployed Link",
        img: "https://user-images.githubusercontent.com/107494937/184215536-2ecdfc8d-1968-4eec-b3e7-9c745902b086.gif",
        badges: ["HTML", "Sass", "JavaScript", "jQuery", "Bulma", "Google", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "Javascript Quiz",
        desc: "An interactive JavaScript knowledge assessment tool featuring a child-friendly design created in collaboration with my youngest daughter. Implements dynamic question generation, real-time scoring, and progressive difficulty levels. Features include animated transitions between questions, local storage for high scores, and detailed feedback on incorrect answers. Timer-based gameplay adds excitement while reinforcing learning objectives.",
        deploy: {
            url: "https://andrew87e.github.io/Coding-Quiz/",
        },
        github: "https://github.com/Andrew87E/Coding-Quiz",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Coding-Quiz/raw/main/assets/images/ezgif.com-gif-maker.gif?raw=true",
        badges: ["HTML", "CSS", "JavaScript", "jQuery"],
        type: ProjectType.Personal,
    },
    {
        project: "Day Planner",
        desc: "An intuitive, responsive day planning application built with jQuery and Bootstrap. Features time-block organization, persistent data storage, and visual time tracking. Implements real-time updates using moment.js, color-coded time blocks for past, present, and future events, and local storage for data persistence. Includes drag-and-drop task reordering and recurring event scheduling.",
        deploy: {
            url: "https://andrew87e.github.io/day-planner/",
        },
        github: "https://github.com/Andrew87E/day-planner",
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/085129704b53dbf315e89213bee35e39552944acc18cd0a136eb8c309e60da0b/68747470733a2f2f692e696d6775722e636f6d2f726e42337a48432e706e67",
        badges: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        type: ProjectType.Collaborative,
    },
    {
        project: "Note Taker",
        desc: "A full-stack note-taking application with Express backend and dynamic front-end. Features markdown support, automatic saving, and categorized note organization. Implements RESTful API architecture, real-time search functionality, and secure note encryption. Includes features for note sharing, tagging, and automated backup to prevent data loss.",
        deploy: {
            url: "https://ideal-waffle.herokuapp.com/",
        },
        github: "https://github.com/Andrew87E/ideal-waffle-notes",
        alt: "Deployed Link",
        img: "https://i.imgur.com/IAj1cTF.png",
        badges: ["HTML", "CSS", "JavaScript", "Node", "Express", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "GitHub Readme Generator CLI",
        desc: "A command-line interface tool built with Node.js that streamlines the creation of professional GitHub README files. Features interactive prompts for all essential readme sections, markdown preview generation, and template customization. Supports multiple languages and formats, with options for badges, contribution guidelines, and license selection. Includes automatic TOC generation and GitHub emoji support.",
        deploy: {
            url: "https://andrew87e.github.io/Password-Generator/",
        },
        github: "https://github.com/Andrew87E/Readme-Generator",
        alt: "Deployed Link",
        img: "https://i.imgur.com/e87N5Ct.png",
        badges: ["HTML", "CSS", "JavaScript", "Node", "Markdown"],
        type: ProjectType.Personal,
    },
    {
        project: "Weather App",
        desc: "A modern weather forecasting application utilizing the OpenWeather API for accurate predictions. Features an intuitive interface with animated weather conditions, hourly and 7-day forecasts, and detailed weather metrics. Implements geolocation for automatic local weather updates, unit conversion, and severe weather alerts. Includes widgets for quick weather checks and custom location saving.",
        deploy: {
            url: "https://andrew87e.github.io/Open-Weather-App/",
        },
        github: "https://github.com/Andrew87E/Open-Weather-App",
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/1e95394ccf13ee59e13079b43c8acb446d47cf4342d7c780f8022732a8973203/68747470733a2f2f692e696d6775722e636f6d2f53766e617053482e6a7067",
        badges: ["HTML", "Sass", "JavaScript", "jQuery", "Bootstrap", "Weather", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "Team Generator",
        desc: "A full-stack MERN application for dynamic team organization and management. Features include drag-and-drop team composition, role assignment, and real-time updates. Implements secure authentication, team member profiles with skill tracking, and project assignment capabilities. Built with TypeScript for type safety, Tailwind CSS for responsive design, and MongoDB for scalable data storage. My first full-stack project using the MERN stack, showcasing the integration of modern web technologies.",
        deploy: {
            url: "https://react-team-ae-genie.herokuapp.com/",
        },
        github: "https://github.com/Andrew87E/react-team-gen",
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/235851a900bea3426078d509a63bc7d29953a77e9af1b9d990a23349505c45d1/68747470733a2f2f692e696d6775722e636f6d2f39343245374d462e706e67",
        badges: ["Yarn", "Sass", "React", "Typescript", "jQuery", "Tailwindcss", "Mongodb", "Vite", "Express", "API"],
        type: ProjectType.Personal,
    },
];