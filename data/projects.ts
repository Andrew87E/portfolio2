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

enum ProjectType {
    Personal,
    Collaborative,
    OpenSource,
    Packages,
    Professional,
    // Libraries,
};



export const projects: Project[] = [
    {
        project: "Asteroids",
        desc: "A modern reimagining of the classic Asteroids game built with Next.js and TypeScript. Features smooth animations, responsive controls, and progressive difficulty scaling. Implemented using game loop architecture and collision detection algorithms, with state management for high scores and game progression.",
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
        desc: "A highly customizable NPM package for text animations in React applications. Features include configurable animation timing, multiple animation styles, and TypeScript support. Built with styled-components and framer-motion for smooth, performant animations. Includes comprehensive documentation and examples for easy integration.",
        deploy: {
            url: "https://www.npmjs.com/package/react-style-text",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://i.imgur.com/cHlc6OM.png",
        badges: ["NPM Package", "React", "TypeScript", "Styled Components", "Framer Motion", "Component Library"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Tifco WMS Picking",
        desc: "Enterprise-grade warehouse management system built with SwiftUI. Features barcode scanning integration, real-time inventory updates, and advanced order picking algorithms. Implemented custom UI components for efficient warehouse operations, with offline capabilities and seamless MSSQL database synchronization. Achieved significant improvement in order fulfillment accuracy and speed.",
        deploy: {},
        github: "https://github.com/andrew87e",
        alt: "Closed Source",
        img: "/assets/picking-screen-shot.jpg",
        badges: ["SwiftUI", "MSSQL", "Swift", "Enterprise Development", "REST API", "iOS", "macOS"],
        type: ProjectType.Professional,
    },
    {
        project: "Tifco WMS Mobile",
        desc: "Comprehensive warehouse management solution developed with Flutter for cross-platform deployment. Features include real-time inventory tracking, advanced shipping/receiving workflows, and detailed reporting capabilities. Implements complex business logic for inventory control and warehouse optimization. Integrated with existing enterprise systems through custom API endpoints.",
        deploy: {},
        github: "https://github.com/andrew87e",
        alt: "Closed Source",
        img: "/assets/wms_screenshot.jpg",
        badges: ["Flutter", "MSSQL", "Dart", "Cross-platform", "Enterprise", "Mobile Development", "Web"],
        type: ProjectType.Professional,
    },
    {
        project: "Flutter Weather App",
        desc: "Cross-platform weather application leveraging the OpenWeather API. Features dynamic UI updates, location-based forecasting, and detailed weather metrics. Implements caching for offline access and efficient API usage. Includes custom animations for weather conditions and smooth transitions between views.",
        deploy: {},
        github: "https://github.com/Andrew87E/Weather_App",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Weather_App/raw/master/assets/img/top.png",
        badges: ["Dart", "Flutter", "RESTful APIs", "Mobile Development", "Location Services", "State Management"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Edwards-Tech Website",
        desc: "Company website for Edwards-Tech freelance services, built with Next.js and MongoDB. Features include dynamic content management, responsive design, and optimized SEO implementation. Utilizes server-side rendering for improved performance and implements modern design principles with Tailwind CSS. Analytics integration provides insights into user engagement and conversion metrics.",
        deploy: {
            url: "https://symmetrical-broccoli.vercel.app/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "/assets/edwards-tech-screenshot.png",
        badges: ["Next.js", "MongoDB", "React", "TypeScript", "Tailwind CSS", "Express", "REST API", "SASS"],
        type: ProjectType.Personal,
    },
    {
        project: "Password Generator",
        desc: "A simple JavaScript Password Generator",
        deploy: {
            url: "https://andrew87e.github.io/Password-Generator/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true",
        badges: ["HTML", "CSS", "JavaScript"],
        type: ProjectType.Personal,
    },
    {
        project: "Portfolio Website",
        desc: "Personal portfolio and blog platform built with Next.js and MongoDB. Features include dynamic content management, dark mode support, and optimized image loading. Implements advanced SEO techniques resulting in improved search rankings. Includes a custom blog engine with markdown support and integrated analytics for tracking engagement metrics.",
        deploy: {
            url: "https://www.edwards.codes/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Edwards.codes/raw/main/public/img/KfIFDWD.png",
        badges: ["Next.js", "MongoDB", "React", "TypeScript", "Tailwind CSS", "SEO Optimization", "Content Management"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Road Trip planner!",
        desc: "Get the gas cost of your trip, directions, and a new playlist!",
        deploy: {
            url: "https://andrew87e.github.io/Travel-Planner/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://user-images.githubusercontent.com/107494937/184215536-2ecdfc8d-1968-4eec-b3e7-9c745902b086.gif",
        badges: ["HTML", "Sass", "JavaScript", "jQuery", "Bulma", "Google", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "Javascript Quiz",
        desc: "A simple JavaScript Quiz using jQuery. Design by my youngest daughter! ",
        deploy: {
            url: "https://andrew87e.github.io/Coding-Quiz/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Coding-Quiz/raw/main/assets/images/ezgif.com-gif-maker.gif?raw=true",
        badges: ["HTML", "CSS", "JavaScript", "jQuery"],
        type: ProjectType.Personal,
    },

    {
        project: "Day Planner",
        desc: "A simple JavaScript Day Planner using jQuery and Bootstrap",
        deploy: {
            url: "https://andrew87e.github.io/day-planner/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/085129704b53dbf315e89213bee35e39552944acc18cd0a136eb8c309e60da0b/68747470733a2f2f692e696d6775722e636f6d2f726e42337a48432e706e67",
        badges: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        type: ProjectType.Collaborative,
    },
    {
        project: "Note Taker",
        desc: "A simple JavaScript Note Taking App",
        deploy: {
            url: "https://ideal-waffle.herokuapp.com/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://i.imgur.com/IAj1cTF.png",
        badges: ["HTML", "CSS", "JavaScript", "Node", "Express", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "GitHub Readme Generator CLI",
        desc: "A simple JavaScript Readme Generator CLI using Nodejs and Inquirer",
        deploy: {
            url: "https://andrew87e.github.io/Password-Generator/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://i.imgur.com/e87N5Ct.png",
        badges: ["HTML", "CSS", "JavaScript", "Node", "Markdown"],
        type: ProjectType.Personal,
    },
    {
        project: "Weather App",
        desc: "A weather forecast app using the Open Weather API",
        deploy: {
            url: "https://andrew87e.github.io/Open-Weather-App/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/1e95394ccf13ee59e13079b43c8acb446d47cf4342d7c780f8022732a8973203/68747470733a2f2f692e696d6775722e636f6d2f53766e617053482e6a7067",
        badges: ["HTML", "Sass", "JavaScript", "jQuery", "Bootstrap", "Weather", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "Team generator",
        desc: "A simple team generator using React and Mongodb. This was my first full stack project in the mern stack!",
        deploy: {
            url: "https://react-team-ae-genie.herokuapp.com/",
        },
        github: "https://github.com/andrew87e",
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/235851a900bea3426078d509a63bc7d29953a77e9af1b9d990a23349505c45d1/68747470733a2f2f692e696d6775722e636f6d2f39343245374d462e706e67",
        badges: ["Yarn", "Sass", "React", "Typescript", "jQuery", "Tailwindcss", "Mongodb", "Vite", "Express", "API"],
        type: ProjectType.Personal,
    },
];
