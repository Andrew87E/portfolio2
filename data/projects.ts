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
        project: "Password Generator",
        desc: "A simple JavaScript Password Generator",
        deploy: {
            url: "https://andrew87e.github.io/Password-Generator/",
        },
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Password-Generator/blob/main/assets/images/Password_Generator_.gif?raw=true",
        badges: ["HTML", "CSS", "JavaScript"],
        type: ProjectType.Personal,
    },
    {
        project: "Javascript Quiz",
        desc: "A simple JavaScript Quiz using jQuery",
        deploy: {
            url: "https://andrew87e.github.io/Coding-Quiz/",
        },
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
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/b068387b34d0c782d5b6bb89492fae3d802b520b90c3cdc7d4d6d4921913c261/68747470733a2f2f692e696d6775722e636f6d2f726e42337a48432e706e67",
        badges: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        type: ProjectType.Collaborative,
    },
    {
        project: "Note Taker",
        desc: "A simple JavaScript Note Taking App",
        deploy: {
            url: "https://ideal-waffle.herokuapp.com/",
        },
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
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/0310448659a6ba6e808635fb89cb81aa71a5a7041018ec99e050ffdc2d671f52/68747470733a2f2f692e696d6775722e636f6d2f53766e617053482e6a7067",
        badges: ["HTML", "Sass", "JavaScript", "jQuery", "Bootstrap", "Weather", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "Flutter Weather App",
        desc: "A weather forecast app using the Open Weather API for Android and iOS",
        deploy: {
            url: "https://andrew87e.github.io/Open-Weather-App/",
        },
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/0310448659a6ba6e808635fb89cb81aa71a5a7041018ec99e050ffdc2d671f52/68747470733a2f2f692e696d6775722e636f6d2f53766e617053482e6a7067",
        badges: ["Dart", "Flutter", "Weather", "API", "Android", "iOS"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Road Trip planner!",
        desc: "Get the gas cost of your trip, directions, and a new playlist!",
        deploy: {
            url: "https://andrew87e.github.io/Travel-Planner/",
        },
        alt: "Deployed Link",
        img: "https://user-images.githubusercontent.com/107494937/184215536-2ecdfc8d-1968-4eec-b3e7-9c745902b086.gif",
        badges: ["HTML", "Sass", "JavaScript", "jQuery", "Bulma", "Google", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "Team generator",
        desc: "A simple team generator using React and Mongodb",
        deploy: {
            url: "https://react-team-ae-genie.herokuapp.com/",
        },
        alt: "Deployed Link",
        img: "https://camo.githubusercontent.com/f3ed6e92cbdb07833f5dbd5d48a2d8f77702701611207f35b622ec670fdae9b5/68747470733a2f2f692e696d6775722e636f6d2f39343245374d462e706e67",
        badges: ["Yarn", "Sass", "React", "Typescript", "jQuery", "Tailwindcss", "Mongodb", "Vite", "Express", "API"],
        type: ProjectType.Personal,
    },
    {
        project: "My portfolio",
        desc: "This is my personal website/Portfolio It uses Nextjs and Mongodb",
        deploy: {
            url: "https://www.edwards.codes/",
        },
        alt: "Deployed Link",
        img: "https://github.com/Andrew87E/Edwards.codes/raw/main/public/img/KfIFDWD.png",
        badges: ["Nextjs", "Mongodb", "React", "Typescript", "Tailwindcss", "Express", "API", "Sass"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Tifco WMS Picking",
        desc: "This is a warehouse management system for picking orders using SwiftUI and MSSql",
        deploy: {
            url: "https://www.edwards.codes/",
        },
        alt: "Closed Source",
        img: "",
        badges: ["SwiftUI", "MSSql", "Swift", "Xcode", "API", "iOS", "macOS"],
        type: ProjectType.Professional,
    },
    {
        project: "Tifco WMS Mobile",
        desc: "This is a large warehouse management system for receiving, shipping, stocking, inventory control, and more using Flutter and MSSql",
        deploy: {
            url: "https://www.edwards.codes/",
        },
        alt: "Closed Source",
        img: "",
        badges: ["Flutter", "MSSql", "Dart", "API", "iOS", "Android", "Web"],
        type: ProjectType.Professional,
    },
    {
        project: "react-style-text",
        desc: "An NPM Package made by me.",
        deploy: {
            url: "https://www.npmjs.com/package/react-style-text",
        },
        alt: "Deployed Link",
        img: "https://i.imgur.com/cHlc6OM.png",
        badges: ["npm", "React", "Typescript", "styled-components", "framer-motion", "API"],
        type: ProjectType.OpenSource,
    },
    {
        project: "Edwards-Tech",
        desc: "This was the Webpage for Edwards-Tech, my personal freelance company. It used Nextjs and Mongodb. Redesign coming soon!™",
        deploy: {
            url: "https://symmetrical-broccoli.vercel.app/",
        },
        alt: "Deployed Link",
        img: "",
        badges: ["Nextjs", "Mongodb", "React", "Typescript", "Tailwindcss", "Express", "API", "Sass"],
        type: ProjectType.Personal,
    },
    {
        project: "Asteroids",
        desc: "A simple JavaScript game using nextjs and tailwindcss",
        deploy: {
            url: "https://octo-asteroids.vercel.app/",
        },
        alt: "Deployed Link",
        img: "",
        badges: ["Nextjs", "Tailwindcss", "React", "Typescript", "API", "Sass"],
        type: ProjectType.Personal,
    },
];
