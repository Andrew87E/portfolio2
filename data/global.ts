type Route = {
    title: string;
    path: string;
};

type Projects = {
    project: string;
    desc: string;
    github?: string;
    deploy: {
        url?: string;
    };
    alt: string;
    img: string;
    children?: JSX.Element | JSX.Element[];
};

export const routes: Route[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    // {
    //     title: "Blog",
    //     path: "/blog",
    // },
    // {
    //   title: "Games",
    //   path: "/games",
    // },
    {
        title: "Skills",
        path: "/skills",
    },
    {
        title: "About Me",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];