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
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Skills",
        path: "/skills",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];