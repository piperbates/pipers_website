/* eslint-disable max-len */
export type experienceTypes = {
    company: string,
    jobTitle: string,
    techStack: string[],
    jobDescription: string[],
    duration: {
        started: string,
        ended: string,
    }
    reasonForLeaving: string
}


export const experience: experienceTypes[] = [
    {
        company: "Bond and Coyne",
        jobTitle: "Front End Developer",
        techStack: [
            "React",
            "TypeScript",
            "Tailwind",
            "CraftCMS"
        ],
        jobDescription: [
            "Independently developed a career advice web application using ChatGPT aimed at creative students looking for information on their future aspirations.",
            "Worked extensively with the design team to create an award winning, accessible platform that met our clients needs.",
            "Developed components and pages using React, Tailwind, and Craft CMS from Figma designs.",
            "Managed individual projects and introduced sprints for better organisation.",
            "Implemented Agile methodologies such as retrospectives across the development team which improved productivity and communication.",
            "Championed the inclusion of accessibility best practices on all projects"
        ],
        duration: {
            started: "May 2023",
            ended:"Sept 2023"
        }, 
        reasonForLeaving: "Recommended by my doctor to take a career break for my health"
    },

    {
        company: "SteelBuy",
        jobTitle: "Front End Developer",
        techStack: [
            "React",
            "TypeScript",
            "Redux"
        ],
        jobDescription: [
            "Heavily involved in the platform launch to ensure smooth running for customers and key users.",
            "Led the investigation and development of app responsiveness.",
            "Led the way for the documentation to be a part of our story process and included within our definition of done.",
            "Supported the product team wherever possible by giving estimations and balancing priorities while also ensuring our own tech debt was managed.",
            "Investigated new technologies with the key to refactoring major aspects of the codebase and was involved in critical discussions about this refactoring.",
            "Met with customers and external industry experts to fully understand the industry and get a better idea of what was needed across the platform.",
            "Had regular meetings with colleagues across the company to discuss any pain points with the platform that we could potentially improve.",
            "Developed some of the first rounds of testing for the front end of the project and was instrumental in these tests becoming a part of the Definition of Done",
        ],
        duration: {
            started: "Sept 2022",
            ended:"May 2023"
        }, 
        reasonForLeaving: "Offered better benefits package at new position"
    },

    {
        company: "Bamboo Auctions",
        jobTitle: "Junior Software Engineer",
        techStack: [
            "React",
            "TypeScript",
            "Storybook",
            "Redux"
        ],
        jobDescription: [
            "Was involved in the implementation of a brand new product using a Monorepo pattern and Storybook. I provided important insight into how we should work on this new platform. Learnt Storybook and Redux Toolkit for this project and started to build components with this system.",
            "Implemented Agile methodologies, scrums, and a product roadmap within the company.",
            "Created a tech team manifesto, detailing our way of working to better communicate what the priorities of the tech team are to all departments.",
            "Triaging support cases, bugs, or other issues within our codebase that could then be raised and resolved using Jira.",
            "Took on high level design and investigation tasks"
        ],
        duration: {
            started: "May 2022",
            ended:"Aug 2022"
        }, 
        reasonForLeaving: "Headhunted at SteelBuy"
    },

    {
        company: "ClickTravel",
        jobTitle: "Junior Software Engineer",
        techStack: [
            "React",
            "TypeScript",
            "Redux"
        ],
        jobDescription: [
            "Created an easy to replicate template for apps within our MFE pipeline with plans to create a script that would run it automatically when needed.",
            "Developed multiple React components to align with current Angular developments, ensuring the end result was identical for consistency.",
            "Implemented IaC templates to create new lambda functions, alarms etc.",
            "Contributed to the maintenance of the app during a key takeover",
        ],
        duration: {
            started: "May 2021",
            ended:"May 2022"
        }, 
        reasonForLeaving: "Exploring new opportunities at a start up"
    },
];